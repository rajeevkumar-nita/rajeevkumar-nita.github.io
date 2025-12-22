import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

// --- ROUTING IMPORTS ---
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import SinglePost from './pages/SinglePost.jsx'

// --- SEO IMPORT (NEW) ---
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HelmetProvider sabse bahar ya ThemeProvider ke upar laga do */}
    <HelmetProvider>
      <ThemeProvider>
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
    </HelmetProvider>
  </StrictMode>,
)