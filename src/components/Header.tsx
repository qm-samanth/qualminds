import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

          {/* Desktop Navigation (always visible) */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="py-2 text-white hover:text-purple-200">Home</a>
            <a href="#services" className="py-2 text-white hover:text-purple-200">Services</a>
            <a href="#about" className="py-2 text-white hover:text-purple-200">About</a>
            <a href="#testimonials" className="py-2 text-white hover:text-purple-200">Testimonials</a>
            <a href="#team" className="py-2 text-white hover:text-purple-200">Team</a>
            <a href="#blog" className="py-2 text-white hover:text-purple-200">Insights</a>
            <a href="#contact" className="py-2 bg-white text-[#6610f2] px-5 rounded-full hover:bg-purple-100 transition-colors text-center md:ml-4">Contact Us</a>
          </nav>
        </div>
      </div>

      {/* Hamburger Navigation (always for all screens) */}
      {/* No hamburger or mobile menu on desktop */}
    </header>
  );
};

export default Header;