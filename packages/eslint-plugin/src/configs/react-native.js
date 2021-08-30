const path = require('path');

module.exports = {
  extends: [path.join(__dirname, './react')],
  plugins: ['react-native'],
  env: {
    browser: false,
    'react-native/react-native': true,
  },
  settings: {
    // Ignore non-transpiled code, often found within RN packages.
    'import/ignore': ['^react-native$'],
  },
};
