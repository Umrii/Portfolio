// components/StarryBackground.tsx
'use client';

import React from 'react';

const StarryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-blue-950/30"></div>
      
      {/* Small twinkling stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: Math.random() * 3 + 2 + 's',
            opacity: Math.random() * 0.7 + 0.3
          }}
        />
      ))}
      
      {/* Larger glowing stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute rounded-full animate-pulse"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 ? '#8b5cf6' : '#3b82f6'
            } 0%, transparent 70%)`,
            animationDuration: Math.random() * 4 + 2 + 's',
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
