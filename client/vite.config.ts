import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: process.env.NODE_ENV === 'production' ? '/Cengineer3/' : '/',
	server: {
		host: true, // This makes the server listen on all network interfaces
		port: 5173,
		open: true,
	},
	build: {
		sourcemap: true, // Enable source maps
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
