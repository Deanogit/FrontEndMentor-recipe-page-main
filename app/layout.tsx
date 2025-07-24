import type { Metadata } from 'next';
import { Young_Serif, Outfit } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

const youngSerif = Young_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-young-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit-sans',
});

export const metadata: Metadata = {
  title: 'FEM Recipe Page Challenge',
  description: 'Build by Dean',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${youngSerif.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
