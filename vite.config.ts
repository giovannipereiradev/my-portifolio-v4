import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: 'client',
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
