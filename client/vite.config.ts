import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true // Enable source maps
  },
  server: {
    open: true // Automatically open the browser when the server starts
  }
})
