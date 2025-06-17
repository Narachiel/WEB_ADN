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
  ];
  return (
    <nav className="hidden md:block bg-slate-900/95 border-b border-slate-700/50 relative z-40">
      {/* Enhanced gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-gradient-x" />
      </div>      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
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
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300
                  ${hoveredItem === item.label 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)]'
                    : 'text-gray-200 hover:text-white neon-text-nav'
                  }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] ${
                  hoveredItem === item.label ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>
            ))}

            <Link
              href="/contact"
              className="gradient-primary-button px-6 py-2 rounded-lg text-white font-medium shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
