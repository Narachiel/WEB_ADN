'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const menuItems = [
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Products', href: '/products' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' }
  ];

  return (
    <nav      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 glass-gradient shadow-lg backdrop-blur-lg'
          : 'py-4 bg-transparent'
      }`}
    >
      {/* Enhanced gradient border */}        <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-gradient-x" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`text-xl font-bold transition-all duration-300 ${
              hoveredItem === 'logo'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)]'
                : 'text-white neon-text-white'
            }`}>
              Ambara Digital Nusantara
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300
                  ${hoveredItem === item.label 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)]'
                    : 'text-gray-200 hover:text-white'
                  }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] ${
                  hoveredItem === item.label ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>
            ))}            <Link
              href="/contact"
              className="gradient-primary-button px-6 py-2 rounded-lg text-white font-medium shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden gradient-text p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>          {/* Mobile menu */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="glass-gradient mt-4 p-4 rounded-lg shadow-xl space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}              <Link
                href="/contact"
                className="block gradient-primary-button px-4 py-2 rounded-lg text-white font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
}
