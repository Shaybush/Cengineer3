import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		// process `*.tsx` files with `ts-jest`
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
		'\\.(css|less|scss|sass)$': 'jest-transform-stub',
		'\\.tsx?$': '<rootDir>/test/__mocks__/ReactComponentMock.js',
	},
};

export default config;
