/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require('./configs/default');
const react = require('./configs/react');
const reactNative = require('./configs/react-native');

module.exports = {
  configs: {
    default: defaultConfig,
    react,
    'react-native': reactNative,
  },
};
