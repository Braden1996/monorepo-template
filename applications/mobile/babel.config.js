module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        '@monorepo-template/babel-preset-expo',
        {
          workspacePath: __dirname,
          extraWorkspaceAliasesForPackages: [
            'react-native-safe-area-context',
            'react-native-gesture-handler',
          ],
        },
      ],
    ],
  };
};
