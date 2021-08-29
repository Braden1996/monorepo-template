const jestOverride = require('../overrides/jest');
const prettierOverride = require('../overrides/prettier');
const typescriptOverride = require('../overrides/typescript');
const typescriptParser = require('../overrides/typescriptParser');
const getMonorepoPackagePrefix = require('../utils/getMonorepoPackagePrefix');

const monorepoPrefix = getMonorepoPackagePrefix(__dirname);

const defaultConfig = {
   // Parser doesn't seem to apply correctly via overrides
  ...typescriptParser,
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import', 'mysticatea', 'prefer-object-spread'],
  env: { es6: true },
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'mysticatea/no-useless-rest-spread': 'error',
    'prefer-object-spread/prefer-object-spread': 2,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: `${monorepoPrefix}/**`,
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-named-as-default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
  },
  settings: {
    'import/internal-regex': `^(${monorepoPrefix}/)`,
  },
  overrides: [typescriptOverride, jestOverride, prettierOverride],
};

module.exports = defaultConfig;
