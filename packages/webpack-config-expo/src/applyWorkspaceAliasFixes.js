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

module.exports = function applyWorkspaceAliasFixes(
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
};
