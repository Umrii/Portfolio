// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/sections/Home';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Resume from '@/sections/Resume';
import Blog from '@/sections/Blog';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'blog'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <StarryBackground />
      
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div className="relative z-10">
        <Home scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Resume />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
