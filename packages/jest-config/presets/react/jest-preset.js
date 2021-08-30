const defaultPreset = require('../default/jest-preset');

module.exports = {
  ...defaultPreset,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules', '/node_modules/*'],
  setupFiles: ['@monorepo-template/jest-config/src/setup/dom.ts'],
  setupFilesAfterEnv: [
    '@monorepo-template/jest-config/src/setupFilesAfterEnv/dom.ts',
  ],
};
