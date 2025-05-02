import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://qualminds.com/images/QM_logo.png" 
              alt="QualMinds Logo" 
              className="h-5 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">IT Infrastructure</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Custom Software</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Data Analytics</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start mb-4">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  <span className="block font-semibold text-white">Hyderabad, India</span>
                  17th Floor,<br />
                  Sky One, Prestige SkyTech,<br />
                  Financial District, Nanakramguda,<br />
                  Hyderabad - 500032.<br />
                  <span className="font-medium text-blue-300">+91 40-48546499</span>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  <span className="block font-semibold text-white">Washington, D.C.</span>
                  13825 Sunrise Valley Drive, Suite 150<br />
                  Herndon, VA 20171.<br />
                  <span className="font-medium text-blue-300">+1 757 986 6918</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+14155550123" className="text-gray-400 hover:text-white transition-colors">
                  +1 (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@qualminds.com" className="text-gray-400 hover:text-white transition-colors">
                  info@qualminds.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} QualMinds. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;