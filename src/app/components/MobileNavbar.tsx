'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Products', href: '/products' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' }
  ];

  return (
    <div className="md:hidden bg-slate-900/95 border-b border-slate-700/50 relative z-40">
      {/* Mobile Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`text-lg font-bold transition-all duration-300 ${
              hoveredItem === 'logo'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)]'
                : 'text-white neon-text-white'
            }`}>
              Ambara Digital Nusantara
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="gradient-text p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Toggle mobile menu"
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
        </div>

        {/* Mobile menu dropdown - contained within the navbar */}
        {isOpen && (
          <div className="mt-4 pb-4 border-t border-slate-700/50">
            <div className="pt-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-elegant-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--brand-blue)] hover:via-[var(--brand-white)] hover:to-[var(--brand-orange)] hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="block mt-4 gradient-primary-button px-4 py-3 rounded-lg text-white font-medium text-center transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
