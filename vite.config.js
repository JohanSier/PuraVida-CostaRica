import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.apk'],
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
