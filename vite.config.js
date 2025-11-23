// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           // separating core framework libraries into their own file
//           vendor: ['react', 'react-dom', 'react-router-dom'],
//           // separating animation libraries if you use them (common in portfolios)
//           animations: ['framer-motion'], 
//         },
//       },
//     },
//   },
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Disable source maps for production (Fixes Lighthouse "Missing Source Maps" warning)
    // Note: Ye sirf debugging files hatata hai. SEO par koi galat asar nahi padega.
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