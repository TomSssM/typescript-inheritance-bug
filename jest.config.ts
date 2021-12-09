import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['<rootDir>/**/?(*.)test.ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    testEnvironment: 'jsdom'
};

export default config;
