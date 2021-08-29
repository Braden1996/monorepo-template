/* eslint-disable @typescript-eslint/no-var-requires */
const babelPresetExpo = require('babel-preset-expo');

const isWebPlatformBabel = require('./isWebPlatformBabel');
const workspaceAliasFix = require('./workspaceAliasFix');

module.exports = function (api) {
  // Disabled as this seems to cause:
  // "The project's Babel config is invalid: Caching has already been configured with .never or .forever()"
  // api.cache(true);

  const config = babelPresetExpo(api);

  const moduleResolver = config.plugins.find(([path]) =>
    path.includes('babel-plugin-module-resolver'),
  );

  if (!isWebPlatformBabel(api))
    moduleResolver[1].alias = workspaceAliasFix(moduleResolver[1].alias);

  return config;
};
