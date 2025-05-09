import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/static/',
  resolve: {
    alias: {
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'), 
    },
  },
  optimizeDeps: {
    include: ['crypto-browserify'],
  },
  server: {
    proxy: {
      '/images': 'http://127.0.0.1:8000',
    },
  }
  
})
