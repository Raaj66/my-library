const path = require('path');

module.exports = {
  rootDir: '.',
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)', '**/*.spec.(ts|tsx)', '**/*.spec.(js|jsx)', '**/*.test.(js|jsx)'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^helper(.*)$': '<rootDir>/src/helper$1',
    '^scss(.*)$': '<rootDir>/src/scss$1',
    '^stories(.*)$': '<rootDir>/src/stories$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@helper(.*)$': '<rootDir>/src/helper$1',
    '^@scss(.*)$': '<rootDir>/src/scss$1',
    '^@stories(.*)$': '<rootDir>/src/stories$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
