const {getWorkspaceAliasFixes} = require('@monorepo-template/monorepo-helpers')

module.exports = function (api, { workspacePath, extraWorkspaceAliasesForPackages = [] }) {
  const workspaceAliasesForPackages = ['react', 'react-native'].concat(extraWorkspaceAliasesForPackages)

  return {
    presets: ['babel-preset-expo'],
    plugins: [ [ "module-resolver", { alias: getWorkspaceAliasFixes(workspacePath, workspaceAliasesForPackages) } ] ],
  };
};
