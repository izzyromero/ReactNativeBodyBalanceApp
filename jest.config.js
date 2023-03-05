/* eslint-disable import/no-commonjs */
module.exports = {
    preset: "react-native",
    // Stop running tests after `n` failures
    bail: 1,
    testTimeout: 30000,
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ["text", "lcov", "json"],

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            branches: 84,
            functions: 92,
            lines: 94,
            statements: 94,
        },
    },
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
    verbose: true,
    // testRunner: "jest-circus/runner",
    setupFilesAfterEnv: [
        "./node_modules/react-native-gesture-handler/jestSetup.js",
        "<rootDir>/__testsShared__/setupTestMocks.js",
    ],
    globalSetup: "<rootDir>/__testsShared__/globalTestsSetup.js",
    transformIgnorePatterns: ["node_modules/?!(@sentry/react-native)"],
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
