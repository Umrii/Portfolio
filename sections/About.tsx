// sections/About.tsx
import React from 'react';
import { aboutMe } from '@/data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl shadow-purple-500/10">
          {aboutMe.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-300 leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
