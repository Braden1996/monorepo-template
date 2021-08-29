/* eslint-disable @typescript-eslint/no-var-requires */
const babelPreset = require('./babelPreset');
const getMetroConfig = require('./getMetroConfig');
const getWebpackConfig = require('./getWebpackConfig');

module.exports = {
  getMetroConfig,
  babelPreset,
  getWebpackConfig,
};
