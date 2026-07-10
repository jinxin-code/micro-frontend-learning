import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [react(), qiankun('react-app', { useDevMode: true })],
  server: {
    port: 3000,
    cors: true,
    origin: '//localhost:3000'
  }
})