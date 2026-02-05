// sections/Home.tsx
'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

interface HomeProps {
  scrollToSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-8 animate-fade-in-delay">
          {personalInfo.tagline}
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          {personalInfo.description}
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/10 transition-all duration-300"
          >
            About Me
          </button>
        </div>
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Home;
