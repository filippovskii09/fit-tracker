import type { Config } from 'jest';

const config: Config = {
  displayName: 'frontend',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/testSetup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/../../$1',
    '^@frontend/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
