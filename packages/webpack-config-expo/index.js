const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack');

const {
  getWorkspaceAliasFixes,
} = require('@monorepo-template/monorepo-helpers');

const skipImports = [
  // https://github.com/necolas/react-native-web/issues/1537
  'react-native/Libraries/Components/View/ViewStylePropTypes',

  // Seem to only have `/node_modules/react-native-web/dist/vendor/react-native/emitter/_EventSubscriptionVendor.js`
  'react-native/Libraries/vendor/emitter/EventSubscriptionVendor',

  // Alias target doesn't exist
  'react-native/Libraries/Image/assetPathUtils',
];

function applyWorkspaceAliasFixes(
  config,
  workspacePath,
  extraWorkspaceAliasesForPackages,
) {
  const aliases = getWorkspaceAliasFixes(workspacePath, [
    'react',
    'react-native-web',
    ...extraWorkspaceAliasesForPackages,
  ]);

  const expoAliasEntries = Object.entries(config.resolve.alias).filter(
    ([key]) => !skipImports.includes(key.split('$')[0]),
  );
  const expoAliasPackages = expoAliasEntries.map(([_, package]) => package);
  const expoAliasPackagesResolved = getWorkspaceAliasFixes(
    workspacePath,
    expoAliasPackages,
  );
  const expoAliases = Object.entries(expoAliasPackagesResolved).reduce(
    (acc, [package, resolution]) => ({
      ...acc,
      [expoAliasEntries.find(([_, p]) => p === package)[0]]: resolution,
    }),
    {},
  );

  config.resolve.alias = {
    ...aliases,
    ...expoAliases,
    'react-native': expoAliases['react-native$'],
  };
}

function disableBabelConfigFile(config, workspacePath) {
  const babelRule = config.module.rules[1].oneOf.find(rule =>
    rule.use?.loader?.includes('babel-loader'),
  );
  if (!babelRule) throw new Error('Cannot find Babel module rule.');

  const babelPresetExpo = 'babel-preset-expo';
  babelRule.use.options.presets = [
    getWorkspaceAliasFixes(workspacePath, [babelPresetExpo])[babelPresetExpo],
  ];
  babelRule.use.options.configFile = false;
}

module.exports = (workspacePath, extraWorkspaceAliasesForPackages) => {
  return async (env, argv) => {
    const config = await createWebpackConfigAsync(env, argv);

    applyWorkspaceAliasFixes(
      config,
      workspacePath,
      extraWorkspaceAliasesForPackages,
    );
    disableBabelConfigFile(config, workspacePath);

    return config;
  };
};
