// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anas Atiq - Portfolio',
  description: 'Full Stack Developer Portfolio - Anas Atiq',
  
icons: {
    icon: "/AA-Logo.png"
  },
  keywords: ['portfolio', 'web developer', 'full stack', 'react', 'next.js'],
  authors: [{ name: 'Anas Atiq' }],
  openGraph: {
    title: 'Anas Atiq - Portfolio',
    description: 'Full Stack Developer Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
