/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require('./configs/default');
const react = require('./configs/react');
const reactNative = require('./configs/reactNative');

module.exports = {
  configs: {
    default: defaultConfig,
    react,
    'react-native': reactNative,
  },
};
