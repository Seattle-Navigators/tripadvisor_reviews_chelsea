const {defaults} = require('jest-config');

console.log('run me too');

module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "../../__mocks__/fileMock.js",
    "\\.(css|less)$": "../../__mocks__/styleMock.js"
  },
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  setupFilesAfterEnv: [
    "./setup.js",
    "jest-enzyme"
  ],
  testEnvironment: "node",
  testEnvironmentOptions: {
    "enzymeAdapter": "react16"
  },
  clearMocks: true,
  coverageDirectory: "coverage"
};