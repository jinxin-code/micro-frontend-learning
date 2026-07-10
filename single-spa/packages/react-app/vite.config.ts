import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import singleSpa from 'vite-plugin-single-spa'

export default defineConfig({
  plugins: [react(), singleSpa()],
  server: {
    port: 8300,
    cors: true
  },
  build: {
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})