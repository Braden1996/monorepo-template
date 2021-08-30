module.exports = {
  files: ['**/*.ts', '**/*.tsx', '**/*.js'],
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
