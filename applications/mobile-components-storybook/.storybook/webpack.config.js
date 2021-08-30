const { resolve } = require("path");
const applyWorkspaceAliasFixes = require('@monorepo-template/webpack-config-expo/src/applyWorkspaceAliasFixes')
const disableBabelConfigFile = require('@monorepo-template/webpack-config-expo/src/disableBabelConfigFile')
const getBabelRule = require('@monorepo-template/webpack-config-expo/src/getBabelRule')
const { withUnimodules } = require("@expo/webpack-config/addons");

module.exports = ({ config }) => {
  const workspacePath = resolve(__dirname, "../")
  const expoConfig = withUnimodules(config, { projectRoot: workspacePath });

  applyWorkspaceAliasFixes(
    expoConfig,
    workspacePath,
    ['@storybook/react', '@storybook/react-native'],
  );
  disableBabelConfigFile(expoConfig, workspacePath)

  const babelRule = getBabelRule(expoConfig)

  console.log(babelRule)
  const oldBabelInclude = babelRule.include
  babelRule.include = (path) => {
    const result = oldBabelInclude(path)

    const isMobileComponent = path.includes('monorepo-template/packages/mobile-components')
    const isNodeModule = path.includes('node_modules')
    if (isMobileComponent && !isNodeModule) {
      console.log("babelRule", {result, path})
      return true
    }

    return result
  }

  return expoConfig
};
