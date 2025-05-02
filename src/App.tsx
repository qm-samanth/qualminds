import React, { useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalProductEngineering from './components/DigitalProductEngineering';
import './styles/animations.css';

import { useLocation } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'QualMinds | IT Services & Solutions';
    const revealElements = document.querySelectorAll('.reveal');
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  // Simple routing logic
  const location = window.location.pathname;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {location === '/digital-product-engineering' ? (
          <DigitalProductEngineering />
        ) : (
          <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Team />
            <Blog />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;