/* eslint-env node */
module.exports = {
  collectCoverageFrom: ["src/*.ts", "src/lib/*.ts"],
  coverageDirectory: "<rootDir>/coverage",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
