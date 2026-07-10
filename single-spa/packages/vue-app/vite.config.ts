import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import singleSpa from 'vite-plugin-single-spa'

export default defineConfig({
  plugins: [vue(), singleSpa()],
  server: {
    port: 8301,
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