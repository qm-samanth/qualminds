import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`font-medium transition-colors ${
        isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
      } ${className}`}
    >
      {children}
    </a>
  );
};