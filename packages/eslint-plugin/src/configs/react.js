const path = require('path')

const {getMonorepoPackagePrefix} = require('@monorepo-template/monorepo-helpers')

const monorepoPrefix = getMonorepoPackagePrefix(__dirname);

module.exports = {
  extends: [path.join(__dirname, './default')],
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
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
  settings: {
    'import/internal-regex': `^(${monorepoPrefix}/|@react-test-renderer)`,
  },
};
