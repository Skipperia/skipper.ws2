import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/skipper.ws2/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
