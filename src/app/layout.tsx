import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ambara Digital Nusantara - Cybersecurity Solutions",
  description: "Leading provider of cybersecurity solutions and services in Indonesia",
  keywords: "cybersecurity, security solutions, IT security, Indonesia, enterprise security",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen cyber-bg-primary`}>        {/* Enhanced gradient overlay */}
        <div className="hidden sm:block fixed inset-0 bg-gradient-to-br from-sky-blue/5 via-white/3 to-sky-orange/5 pointer-events-none" />
          {/* Cyber Animation Container */}
        <div className="cyber-container hidden sm:block">
          {/* Floating cyber particles */}
          <div className="cyber-particle gradient-primary" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <div className="cyber-particle gradient-primary-reverse" style={{ top: '60%', left: '80%', animationDelay: '-2s' }} />
          <div className="cyber-particle gradient-primary" style={{ top: '80%', left: '30%', animationDelay: '-4s' }} />
          <div className="cyber-particle gradient-primary-reverse" style={{ top: '40%', left: '60%', animationDelay: '-6s' }} />
          <div className="cyber-particle gradient-primary" style={{ top: '10%', left: '90%', animationDelay: '-3s' }} />
          <div className="cyber-particle gradient-primary-reverse" style={{ top: '70%', left: '20%', animationDelay: '-5s' }} />

          {/* Enhanced cyber grid with gradient */}
          <div className="cyber-grid absolute inset-0 opacity-[0.03] bg-gradient-to-br from-sky-blue/10 via-white/5 to-sky-orange/10" />
          
          {/* Enhanced hexagonal pattern overlay */}
          <div className="hex-grid absolute inset-0 opacity-[0.05] bg-gradient-to-tr from-sky-blue/5 via-white/3 to-sky-orange/5" />
          
          {/* Enhanced scanning effect */}
          <div className="cyber-scan gradient-primary" />
          
          {/* Enhanced shield pulse effects */}
          <div className="cyber-shield gradient-primary animate-gradient-scale" style={{ top: '30%', left: '20%', animationDelay: '0s' }} />
          <div className="cyber-shield gradient-primary-reverse animate-gradient-scale" style={{ top: '70%', left: '70%', animationDelay: '-2s' }} />
          <div className="cyber-shield gradient-primary animate-gradient-scale" style={{ top: '20%', left: '80%', animationDelay: '-4s' }} />
        </div>        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
