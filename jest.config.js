const path = require('path');

module.exports = {
  roots: ['src'],
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
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
