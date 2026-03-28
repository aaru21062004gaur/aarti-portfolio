import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/aarti-portfolio/',
  plugins: [react()],
  worker: {
    format: 'es', // Use ES modules
    plugins: [] // No plugins needed for the worker
  }
})
