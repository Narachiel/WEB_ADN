'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DesktopNavbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Products', href: '/products' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' }
  ];  return (
    <nav className="hidden md:block bg-gradient-to-r from-slate-900/60 via-slate-800/70 to-slate-900/60 backdrop-blur-lg border-b border-slate-600/40 relative z-40 transition-all duration-300 hover:from-slate-800/80 hover:via-slate-700/90 hover:to-slate-800/80 shadow-lg">
      {/* Primary animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/10 via-[var(--brand-white)]/5 to-[var(--brand-orange)]/10 opacity-60 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Secondary shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-blue)]/10 to-transparent backdrop-shimmer opacity-30" />
      
      {/* Enhanced animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-white)]/80 to-transparent animate-pulse-subtle" />
      </div>{/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 transition-all duration-300">
        <div className="flex justify-between items-center">          {/* Logo */}
          <Link 
            href="/" 
            className="relative group transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`inline-block text-xl font-bold transition-all duration-500 transform ${
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
          </Link>{/* Desktop menu */}
          <div className="flex items-center space-x-8">
            {menuItems.map((item, index) => (              <Link
                key={item.href}
                href={item.href}                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  hoveredItem === item.label 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)]'
                    : 'text-white nav-neon-white'
                }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                {/* Simple animated underline */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] ${
                  hoveredItem === item.label ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} />
              </Link>
            ))}

            <Link
              href="/contact"
              className="relative group overflow-hidden px-8 py-3 rounded-xl text-white font-semibold transition-all duration-500 ease-out transform hover:scale-105 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-transparent hover:border-white/20"
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
    </nav>
  );
}
