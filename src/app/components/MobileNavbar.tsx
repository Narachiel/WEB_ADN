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
  ];  return (
    <div className="md:hidden bg-gradient-to-r from-slate-900/60 via-slate-800/70 to-slate-900/60 backdrop-blur-lg border-b border-slate-600/40 relative z-40 transition-all duration-300 hover:from-slate-800/80 hover:via-slate-700/90 hover:to-slate-800/80 shadow-lg">
      {/* Primary animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/10 via-[var(--brand-white)]/5 to-[var(--brand-orange)]/10 opacity-60 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Secondary shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-blue)]/10 to-transparent backdrop-shimmer opacity-30" />
      
      {/* Enhanced animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-white)]/80 to-transparent animate-pulse-subtle" />
      </div>
      
      {/* Mobile Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-3 relative z-10">        <div className="flex justify-between items-center">          {/* Logo */}
          <Link 
            href="/" 
            className="relative group transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`inline-block text-lg font-bold transition-all duration-500 ${
              hoveredItem === 'logo'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-gradient-x'
                : 'text-white neon-text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'
            }`}>
              Ambara Digital Nusantara
              {/* Animated underline for logo - inside the span to match text width */}
              <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] transition-all duration-300 ${
                hoveredItem === 'logo' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} />
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="gradient-text p-2 rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
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
        </div>        {/* Mobile menu dropdown - contained within the navbar */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-4 border-t border-slate-600/40 bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-md rounded-b-lg">            <div className="pt-4 space-y-2 px-2">
              {menuItems.map((item, index) => (                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--brand-blue)] hover:via-[var(--brand-white)] hover:to-[var(--brand-orange)] hover:bg-slate-700/30 rounded-lg transition-all duration-300 border border-transparent hover:border-slate-600/30 nav-neon-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}              <Link
                href="/contact"
                className="relative group overflow-hidden block mt-4 mx-2 px-6 py-4 rounded-xl text-white font-semibold text-center transition-all duration-500 ease-out transform hover:scale-105 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-transparent hover:border-white/20"
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'linear-gradient(135deg, rgba(77, 137, 255, 0.9) 0%, rgba(248, 123, 88, 0.9) 100%)',
                  boxShadow: '0 8px 32px rgba(77, 137, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10 tracking-wide font-medium group-hover:font-semibold transition-all duration-300">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
