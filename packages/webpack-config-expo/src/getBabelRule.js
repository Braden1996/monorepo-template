module.exports = function getBabelRule(config) {
  const babelRule = config.module.rules
    .map(rule => rule.oneOf)
    .filter(Boolean)
    .concat(config.module.rules)
    .find(rule => rule.use?.loader?.includes('babel-loader'));

  return babelRule;
};
