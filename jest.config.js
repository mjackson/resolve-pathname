let mappedModule;
switch (process.env.TEST_ENV) {
  case 'cjs':
    mappedModule = '<rootDir>/cjs/resolve-pathname.js';
    break;
  case 'umd':
    mappedModule = '<rootDir>/umd/resolve-pathname.js';
    break;
  default:
    mappedModule = '<rootDir>/modules/index.js';
}

module.exports = {
  moduleNameMapper: {
    '^resolve-pathname$': mappedModule
  },
  testMatch: ['**/__tests__/**/*-test.js'],
  testURL: 'http://localhost/'
};
