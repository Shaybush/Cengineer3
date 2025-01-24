import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // This makes the server listen on all network interfaces
		port: 5173,
		open: true,
	},
	base: process.env.NODE_ENV === 'production' ? '/Cengineer3/' : '/',
	build: {
		sourcemap: true, // Enable source maps
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
