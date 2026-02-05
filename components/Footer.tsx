// components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-purple-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2">Built with Next.js & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
