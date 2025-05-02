import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect if on Digital Product Engineering page
  const isDPEPage = typeof window !== 'undefined' && window.location.pathname === '/digital-product-engineering';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDPEPage
          ? 'bg-[#6610f2] py-4' // Always theme color on DPE page
          : isScrolled
            ? 'bg-[#6610f2] backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://qualminds.com/images/QM_logo.png" 
              alt="QualMinds Logo" 
              className="h-4 w-auto drop-shadow-lg"
              style={{ imageRendering: 'auto', filter: 'none', background: 'none' }}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="py-2 text-white hover:text-purple-200">Home</a>
            <a href="#services" className="py-2 text-white hover:text-purple-200">Services</a>
            <a href="#about" className="py-2 text-white hover:text-purple-200">About</a>
            <a href="#testimonials" className="py-2 text-white hover:text-purple-200">Testimonials</a>
            <a href="#team" className="py-2 text-white hover:text-purple-200">Team</a>
            <a href="#blog" className="py-2 text-white hover:text-purple-200">Insights</a>
            <a href="#contact" className="py-2 bg-white text-[#6610f2] px-5 rounded-full hover:bg-purple-100 transition-colors text-center md:ml-4">Contact Us</a>
          </nav>

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#6610f2]/95 flex flex-col items-center justify-center md:hidden animate-fade-in">
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 rotate-45 translate-y-2"></span>
            <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-2"></span>
          </button>
          <nav className="flex flex-col space-y-8 text-center">
            <a href="#home" className="text-white text-2xl font-semibold hover:text-purple-200" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-white text-2xl font-semibold hover:text-purple-200" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-white text-2xl font-semibold hover:text-purple-200" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#testimonials" className="text-white text-2xl font-semibold hover:text-purple-200" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#team" className="text-white text-2xl font-semibold hover:text-purple-200" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <a href="#blog" className="text-white text-2xl font-semibold hover:text-purple-200" onClick={() => setMobileMenuOpen(false)}>Insights</a>
            <a href="#contact" className="inline-block bg-white text-[#6610f2] px-8 py-3 rounded-full font-semibold text-xl shadow-md hover:bg-purple-100 transition-colors mt-4" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;