module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        '@monorepo-template/babel-preset-expo',
        {
          workspacePath: __dirname,
          extraWorkspaceAliasesForPackages: ['@storybook/react-native'],
        },
      ],
    ],
  };
};
