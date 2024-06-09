import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Is needed?
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  // Easier imports 
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // Docker dev server - hot refresh
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    }
  }
})
