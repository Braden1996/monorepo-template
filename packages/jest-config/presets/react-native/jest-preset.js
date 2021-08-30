const defaultPreset = require('../default/jest-preset');

// Note: due to how the 'react-native' preset is resolved by Jest, this file
// cannot be set directly as a preset - but instead must be required.
module.exports = {
  ...defaultPreset,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(' +
      [
        'expo(nent)?',
        '@expo(nent)?/.*',
        'jest-expo',
        'react-native',
        'unimodules',
        '@unimodules/.*',
      ].join('|') +
      ')/)',
  ],
  modulePaths: ['<rootDir>'],
  setupFiles: ['@monorepo-template/jest-config/src/setup/native.ts'],
  setupFilesAfterEnv: [
    '@monorepo-template/jest-config/src/setupFilesAfterEnv/native.ts',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^react$': '<rootDir>/node_modules/react',
    '^react-native$': '<rootDir>/node_modules/react-native',
  },
  globals: {
    self: {},
  },
};
