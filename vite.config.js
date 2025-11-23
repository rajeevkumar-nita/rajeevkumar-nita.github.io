// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // separating core framework libraries into their own file
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // separating animation libraries if you use them (common in portfolios)
          animations: ['framer-motion'], 
        },
      },
    },
  },
})