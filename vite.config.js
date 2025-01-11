import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      esmExternals: true
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        // You can define additional Sass options here if needed
      }
    }
  }
})
