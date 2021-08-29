/* eslint-disable @typescript-eslint/no-var-requires */
const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack');

const workspaceAliasFix = require('./workspaceAliasFix');

module.exports = async function getWebpackConfig(env, argv) {
  const config = await createWebpackConfigAsync(env, argv);

  config.resolve.alias = workspaceAliasFix(config.resolve.alias, true);

  return config;
};
