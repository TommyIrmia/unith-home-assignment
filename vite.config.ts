import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
    include: "**/*.svg",
  })],

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
