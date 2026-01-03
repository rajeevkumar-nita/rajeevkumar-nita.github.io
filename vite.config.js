import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  
  // this block is added to configure the development server on mobile devices
  server: {
    host: true, // Isse 'Network' link enable ho jayega
    port: 5173,
    strictPort: true, // Agar 5173 busy ho toh error dega, port badlega nahi
  },

  build: {
    // 1. Disable source maps for production (Fixes Lighthouse "Missing Source Maps" warning)
    sourcemap: false,

    // 2. Code Splitting Settings (Performance Optimization)
    rollupOptions: {
      output: {
        manualChunks: {
          // React core libraries ko alag file mein rakhna
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Animation library ko alag rakhna
          animations: ['framer-motion'], 
        },
      },
    },
  },
})