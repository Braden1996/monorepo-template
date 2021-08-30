/* eslint-disable @typescript-eslint/no-var-requires */
const getWebpackConfig = require('@monorepo-template/webpack-config-expo');

module.exports = getWebpackConfig(__dirname, [
  'react-native-safe-area-context',
  'react-native-gesture-handler',
]);
