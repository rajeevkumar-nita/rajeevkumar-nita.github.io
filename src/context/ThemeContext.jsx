// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Context banayein
const ThemeContext = createContext();

// 2. Provider component banayein
// Yeh component poore app ko wrap karega
export const ThemeProvider = ({ children }) => {
  
  // 'theme' state ko localStorage se ya user ke system preference se set karein
  const [theme, setTheme] = useState(() => {
    // 1. Pehle localStorage check karein (agar user ne pehle set kiya hai)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // 2. Agar saved nahi hai, toh system preference check karein
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Jab bhi 'theme' state badle, yeh useEffect chalega
  useEffect(() => {
    const root = document.documentElement; // Yeh <html> tag hai
    
    if (theme === 'dark') {
      root.classList.add('dark'); // <html> tag mein 'dark' class add karein
    } else {
      root.classList.remove('dark'); // <html> tag se 'dark' class remove karein
    }
    
    // User ki choice ko localStorage mein save karein taaki refresh karne par yaad rahe
    localStorage.setItem('theme', theme);
  }, [theme]); // Yeh effect tabhi chalega jab 'theme' badlega

  // Theme badalne waala function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Context Provider se 'theme' (current state) aur 'toggleTheme' (function) ko pass karein
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Ek custom hook banayein (useTheme)
// Isse kisi bhi component mein theme ko access karna aasaan ho jaata hai
export const useTheme = () => {
  return useContext(ThemeContext);
};