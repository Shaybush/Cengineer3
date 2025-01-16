import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './', // Set the root directory
	testMatch: '**/*.spec.{ts,tsx}', // Match test files across the project
	webServer: {
		command: 'pnpm storybook', // Command to start Storybook
		url: 'http://localhost:6006', // Storybook URL
		timeout: 120 * 1000, // Timeout for the server to start
		reuseExistingServer: !process.env.CI, // Reuse server if running
	},
	use: {
		baseURL: 'http://localhost:6006', // Base URL for tests
		headless: true, // Run tests in headless mode
		viewport: { width: 1280, height: 720 }, // Default viewport size
	},
});
