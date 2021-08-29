const {getMonorepoRoot, getMonorepoTsConfigs} = require('@monorepo-template/monorepo-helpers')

// TODO: this seems to be quite slow. With DEBUG=*, the following is observed to be slow:
// typescript-eslint:typescript-estree:createProjectProgram

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    createDefaultProgram: true,
    ecmaFeatures: {
      modules: true,
    },
    project: getMonorepoTsConfigs(__dirname),
    tsconfigRootDir: getMonorepoRoot(__dirname),
  }
}
