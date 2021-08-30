const {
  getWorkspaceAliasFixes,
} = require('@monorepo-template/monorepo-helpers');

const getBabelRule = require('./getBabelRule');

module.exports = function disableBabelConfigFile(config, workspacePath) {
  const babelRule = getBabelRule(config);

  if (!babelRule) throw new Error('Cannot find Babel module rule.');

  const babelPresetExpo = 'babel-preset-expo';
  babelRule.use.options.presets = [
    getWorkspaceAliasFixes(workspacePath, [babelPresetExpo])[babelPresetExpo],
  ];
  babelRule.use.options.configFile = false;
};
