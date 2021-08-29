module.exports = {
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
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
  transform: {
    '^.+\\.(js|tsx?)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^react$': '<rootDir>/node_modules/react',
    '^react-native$': '<rootDir>/node_modules/react-native',
  },
  globals: {
    self: {},
  },
};
