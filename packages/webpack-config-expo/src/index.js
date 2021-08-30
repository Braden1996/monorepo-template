const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack');

const applyWorkspaceAliasFixes = require('./applyWorkspaceAliasFixes');
const disableBabelConfigFile = require('./disableBabelConfigFile');

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
