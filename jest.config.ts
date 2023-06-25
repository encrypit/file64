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
      preset: 'ts-jest',
      testEnvironment: 'node',
      testPathIgnorePatterns: [
        '/node_modules/',
        'base64-to-file',
        'file-to-base64',
      ],
    },
  ],
};

export default config;
