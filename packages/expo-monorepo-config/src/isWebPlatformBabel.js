module.exports = function isWebPlatformBabel(api) {
  function getPlatform(caller) {
    return caller && caller.platform;
  }

  function getBundler(caller) {
    if (!caller) return null;

    const { bundler, name } = caller;

    if (!bundler) {
      if (name === 'metro') {
        return 'metro';
      } else if (
        name === ['next-babel-turbo-loader', 'babel-loader'].includes(name)
      ) {
        return 'webpack';
      }
    }
    return bundler || null;
  }

  const bundler = api.caller(getBundler);
  const isWebpack = bundler === 'webpack';
  const platform = api.caller(getPlatform);
  return platform === 'web' || (!platform && isWebpack);
};
