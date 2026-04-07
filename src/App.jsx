import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="loader-inner"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="loader-logo">RA</div>
            <div className="loader-bar">
              <motion.div
                className="loader-progress"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="app"
          className="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Navigation theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

          <footer className="footer">
            <div className="footer-inner">
              <p className="footer-copy">
                &copy; 2026 Ronand D. Almazar. All rights reserved.
              </p>
              <div className="footer-links">
                <a href="https://github.com/ronandalmazar" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/ronandalmazar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </footer>

          <BackToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
