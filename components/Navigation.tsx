// components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: string[] = ['home', 'about', 'projects', 'resume', 'blog'];

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-purple-500/20 pt-4">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left capitalize py-2 ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
            <div className="flex space-x-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
