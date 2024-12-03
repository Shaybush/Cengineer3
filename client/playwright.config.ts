import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './src', // Run tests in the `src` directory
	fullyParallel: true,
	retries: 0,
	workers: 1,
	use: {
		baseURL: 'http://localhost:6006', // Storybook dev server
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'Desktop Chrome',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
