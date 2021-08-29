/* eslint-disable @typescript-eslint/no-var-requires  */
const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: path.resolve(__dirname, '.'),
  },
  extends: [
    '../../.eslintrc.js',
    'plugin:jest/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['jest', 'react', 'react-hooks', 'react-native'],
  env: {
    'react-native/react-native': true,
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  rules: {
    'react-native/no-raw-text': 'off',
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/no-array-index-key': 2,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
