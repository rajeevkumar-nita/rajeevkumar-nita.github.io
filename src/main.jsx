// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// import { ThemeProvider } from './context/ThemeContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

// --- NEW IMPORTS ---
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import SinglePost from './pages/SinglePost.jsx'
// --- END NEW IMPORTS ---

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/* Humne poore app ko BrowserRouter mein wrap kar diya */}
      <BrowserRouter>
        <Routes>
          {/* Route 1: Aapka existing portfolio (Home Page) */}
          <Route path="/" element={<App />} />

          {/* Route 2: Naya Blog List Page */}
          <Route path="/blog" element={<Blog />} />

          {/* Route 3: Naya Single Blog Post Page */}
          <Route path="/blog/:slug" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)