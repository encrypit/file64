import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  projects: [
    {
      displayName: 'jsdom',
      moduleFileExtensions: ['js', 'ts'],
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testPathIgnorePatterns: [
        '/node_modules/',
        'base64-to-blob',
        'base64-to-file',
      ],
    },
    {
      displayName: 'node',
      moduleFileExtensions: ['js', 'ts'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      testPathIgnorePatterns: [
        '/node_modules/',
        'base64-to-file',
        'file-to-base64',
      ],
    },
  ],
  reporters:
    process.env.CI === 'true'
      ? [['github-actions', { silent: false }], 'summary']
      : undefined,
};

export default config;
