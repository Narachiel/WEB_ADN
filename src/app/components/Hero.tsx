"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type HeroProps = {
  title?: string;
  description?: string;
};

export default function Hero({
  title = "Secure Your Digital Future",
  description = "Protecting your business with innovative cybersecurity solutions and expert guidance. Stay ahead of threats with our advanced security measures.",
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden cyber-bg-primary scroll-section">
      {/* Enhanced cyber background layers */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />
      <div className="absolute inset-0 cyber-matrix-bg opacity-30" />
      <div className="cyber-scanner" />
      
      {/* Cybersecurity visual elements with brand gradient */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="cyber-lines opacity-20" style={{
          background: `linear-gradient(135deg, rgba(77, 137, 255, 0.1), rgba(255, 255, 255, 0.1), rgba(248, 123, 88, 0.1))`
        }} />
        <div className="cyber-glow" style={{
          background: `radial-gradient(circle at center, rgba(77, 137, 255, 0.15), rgba(255, 255, 255, 0.1), transparent)`
        }} />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text content with brand gradient */}
          <div className="space-y-8 sm:space-y-10 relative order-2 lg:order-1">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-elegant-text-reveal neon-text-heading neon-header-brand leading-tight ${
              isLoaded ? "opacity-100" : ""
            }`}>
              {title}
            </h1>
            
            <p className={`text-base sm:text-lg lg:text-xl text-elegant-white leading-relaxed animate-elegant-slide-in-left animate-stagger-2 neon-text-subtle ${
              isLoaded ? "opacity-100" : ""
            }`}>
              {description}
            </p>
            
            <div className={`flex flex-col gap-4 sm:flex-row sm:gap-4 animate-elegant-scale-in animate-stagger-3 ${
              isLoaded ? "opacity-100" : ""
            }`}>
              <Link
                href="/contact"
                className="gradient-primary-button inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white transform hover-elegant-lift transition-all duration-200 w-full sm:w-auto hover-fun-wiggle"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-md border-2 text-white hover:text-gray-200 transform hover-elegant-lift transition-all duration-200 gradient-outline-button w-full sm:w-auto hover-fun-tilt-shake"
              >
                Explore Solutions
              </Link>
            </div>
              {/* Trust indicators */}
            <div className={`pt-6 sm:pt-8 border-t border-gray-700 animate-slide-up opacity-0 animate-delay-400 ${
              isLoaded ? "opacity-100" : ""
            }`}>              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="badge-container-enhanced flex items-center text-brand-blue-light p-4 flex-1">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <linearGradient id="iso-circular-gradient" x1="2" y1="2" x2="18" y2="18" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#5E9AFF" />
                        <stop offset="1" stopColor="#3B71D5" />
                      </linearGradient>
                      <filter id="iso-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Circular base */}
                    <circle cx="10" cy="10" r="7" fill="url(#iso-circular-gradient)" />
                    
                    {/* Inner border */}
                    <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="0.5" fill="none" />
                    
                    {/* Outer border */}
                    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="0.3" strokeDasharray="1 1" fill="none" />
                    
                    {/* ISO letter background */}
                    <rect x="6" y="8" width="8" height="4" rx="1" fill="white" filter="url(#iso-glow)" />
                    
                    {/* ISO text */}
                    <text
                      x="10"
                      y="11"
                      fontSize="3"
                      fontWeight="bold"
                      fill="#3B71D5"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      ISO
                    </text>
                    
                    {/* 27001 small text */}
                    <text
                      x="10"
                      y="15"
                      fontSize="1.8"
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      27001
                    </text>
                    
                    {/* Connecting points */}
                    <circle cx="5" cy="5" r="0.8" fill="#F87B58" />
                    <circle cx="15" cy="5" r="0.8" fill="#F87B58" />
                    <circle cx="5" cy="15" r="0.8" fill="#F87B58" />
                    <circle cx="15" cy="15" r="0.8" fill="#F87B58" />
                    
                    {/* Connecting lines */}
                    <line x1="5" y1="5" x2="15" y2="5" stroke="#F87B58" strokeWidth="0.3" strokeDasharray="1 0.5" />
                    <line x1="5" y1="5" x2="5" y2="15" stroke="#F87B58" strokeWidth="0.3" strokeDasharray="1 0.5" />
                    <line x1="15" y1="5" x2="15" y2="15" stroke="#F87B58" strokeWidth="0.3" strokeDasharray="1 0.5" />
                    <line x1="5" y1="15" x2="15" y2="15" stroke="#F87B58" strokeWidth="0.3" strokeDasharray="1 0.5" />                  </svg>                  <span className="compliance-badge-text text-sm font-medium">ISO 27001 Certified</span>
                </div>                
                <div className="badge-container-enhanced flex items-center text-brand-orange-light p-4 flex-1">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <linearGradient id="soc-triangle-gradient" x1="0" y1="4" x2="20" y2="16" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#F87B58" />
                        <stop offset="1" stopColor="#E06A4C" />
                      </linearGradient>
                      <filter id="triangle-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Triangle base */}
                    <path d="M10 3L18 17H2L10 3Z" fill="url(#soc-triangle-gradient)" />
                    
                    {/* Triangle border */}
                    <path d="M10 3L18 17H2L10 3Z" stroke="white" strokeWidth="0.5" fill="none" />
                    
                    {/* Inner triangle */}
                    <path d="M10 7L14 15H6L10 7Z" fill="#4D89FF" />
                    
                    {/* Inner triangle border */}
                    <path d="M10 7L14 15H6L10 7Z" stroke="white" strokeWidth="0.3" fill="none" />
                    
                    {/* SOC label */}
                    <rect x="7" y="9" width="6" height="2.5" rx="0.8" fill="white" filter="url(#triangle-glow)" />
                    
                    {/* SOC text */}
                    <text
                      x="10"
                      y="10.8"
                      fontSize="2"
                      fontWeight="bold"
                      fill="#3B71D5"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      SOC
                    </text>
                    
                    {/* "2" text below */}
                    <text
                      x="10"
                      y="14"
                      fontSize="2.5"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      2
                    </text>
                    
                    {/* Accent dot */}
                    <circle cx="10" cy="5" r="0.8" fill="white" />
                    
                    {/* Corner accents */}
                    <circle cx="2" cy="17" r="0.5" fill="white" />
                    <circle cx="18" cy="17" r="0.5" fill="white" />                  </svg>                  <span className="compliance-badge-text text-sm font-medium">SOC 2 Type II Compliant</span>                </div>
                
                <div className="badge-container-enhanced flex items-center text-brand-blue-light p-4 flex-1">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <linearGradient id="support-radial-gradient" cx="10" cy="10" r="10" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#5E9AFF" />
                        <stop offset="1" stopColor="#3B71D5" />
                      </linearGradient>
                      <linearGradient id="headset-gradient" x1="6" y1="6" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#F1F1F1" />
                      </linearGradient>
                    </defs>
                    
                    {/* Circle background */}
                    <circle cx="10" cy="10" r="8" fill="url(#support-radial-gradient)" />
                    
                    {/* Border */}
                    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="0.5" fill="none" />
                    
                    {/* Decorative rays */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * Math.PI) / 4;
                      const x1 = 10 + Math.cos(angle) * 8;
                      const y1 = 10 + Math.sin(angle) * 8;
                      const x2 = 10 + Math.cos(angle) * 10;
                      const y2 = 10 + Math.sin(angle) * 10;
                      return (
                        <line
                          key={`ray-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#F87B58"
                          strokeWidth="0.5"
                        />
                      );
                    })}
                    
                    {/* Outer ring */}
                    <circle cx="10" cy="10" r="9.5" stroke="#F87B58" strokeWidth="0.5" strokeDasharray="1 1" fill="none" />
                    
                    {/* Modern headset icon */}
                    <path
                      d="M6.5 9v2c0 .6.4 1 1 1h.5v-3c0-.6-.4-1-1-1-.3 0-.5.4-.5 1zm7 0c0-.6-.2-1-.5-1-.6 0-1 .4-1 1v3h.5c.6 0 1-.4 1-1V9zm-5.5 4h4v-1c0-.6.4-1 1-1h1V9c0-1.7-1.3-3-3-3S8 7.3 8 9v2h1c.6 0 1 .4 1 1v1z"
                      fill="url(#headset-gradient)"
                      stroke="#3B71D5"
                      strokeWidth="0.3"
                    />
                    
                    {/* 24/7 text */}
                    <text
                      x="10"
                      y="16.2"
                      fontSize="2.5"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      24/7
                    </text>                  </svg>                  <span className="compliance-badge-text text-sm font-medium">24/7 Expert Support</span>                </div>
                
                <div className="badge-container-enhanced flex items-center text-brand-orange-light p-4 flex-1">
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    viewBox="0 0 20 20"
                  >
                    {/* Brand new PCI-DSS badge */}
                    <defs>
                      <linearGradient id="badge-blue" x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#5E9AFF" />
                        <stop offset="1" stopColor="#3B71D5" />
                      </linearGradient>
                      <linearGradient id="badge-orange" x1="20" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#FF8F6A" />
                        <stop offset="1" stopColor="#E06A4C" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Card base - hexagon shape */}
                    <path
                      d="M10 2L18 7V13L10 18L2 13V7L10 2Z"
                      fill="url(#badge-blue)"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    
                    {/* Diagonal split line */}
                    <path
                      d="M4 6L16 14"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeDasharray="0.5 0.5"
                    />
                    
                    {/* Orange overlay on bottom-right */}
                    <path
                      d="M4 6L10 10L16 14L10 18L2 13V7L4 6Z"
                      fill="url(#badge-orange)"
                      fillOpacity="0.9"
                    />
                    
                    {/* White shield in center */}
                    <path
                      d="M10 15C10 15 12.5 13 12.5 10V8L10 7L7.5 8V10C7.5 13 10 15 10 15Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                      filter="url(#glow)"
                    />
                    
                    {/* PCI text */}
                    <rect x="7.5" y="5" width="5" height="2" rx="0.5" fill="white" />
                    <path
                      d="M8 6.5c0-0.4 0.2-0.7 0.5-0.7s0.5 0.3 0.5 0.7-0.2 0.7-0.5 0.7-0.5-0.3-0.5-0.7zm1.3 0c0-0.4 0.2-0.7 0.5-0.7s0.5 0.3 0.5 0.7-0.2 0.7-0.5 0.7-0.5-0.3-0.5-0.7zm1.3 0c0-0.4 0.2-0.7 0.5-0.7s0.5 0.3 0.5 0.7-0.2 0.7-0.5 0.7-0.5-0.3-0.5-0.7z"
                      fill="#3B71D5"
                      fontWeight="bold"
                    />
                    
                    {/* Checkmark */}
                    <path
                      d="M8.5 10.5L10 12L11.5 9.5"
                      stroke="#3B71D5"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="compliance-badge-text text-sm font-medium">PCI-DSS Compliant</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual section with only shield logo */}
          <div className={`relative h-[400px] sm:h-[500px] lg:h-[600px] animate-scale-in opacity-0 animate-delay-400 order-1 lg:order-2 ${
            isLoaded ? "opacity-100" : ""
          }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Shield Logo - Single Element with Enhanced Animation */}
              <div className="relative">
                {/* Pulsing background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-[var(--shield-primary)]/30 via-[var(--shield-primary)]/10 to-transparent animate-pulse-glow" style={{ transform: 'scale(1.4)' }}></div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 border border-[var(--shield-primary)]/20 rounded-full animate-spin-slow" style={{ transform: 'scale(1.2)' }}></div>
                <div className="absolute inset-0 border-2 border-dashed border-[var(--shield-secondary)]/10 rounded-full animate-reverse-spin-slow" style={{ transform: 'scale(1.3)' }}></div>
                
                {/* Main shield SVG */}
                <svg 
                  className="w-64 h-64 sm:w-80 sm:h-80 drop-shadow-[0_0_20px_rgba(77,137,255,0.6)] animate-float-mini"
                  viewBox="0 0 100 120" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="shield-gradient" x1="10" y1="10" x2="90" y2="110" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#5E9AFF" />
                      <stop offset="100%" stopColor="#3B71D5" />
                    </linearGradient>
                    <filter id="shield-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    
                    {/* Scan line animation */}
                    <linearGradient id="scan-line" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Shield Body - Simple Classic Shape */}
                  <path 
                    d="M50 10L90 30V60C90 82 73 98 50 110C27 98 10 82 10 60V30L50 10Z" 
                    fill="url(#shield-gradient)"
                    filter="url(#shield-glow)"
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.7"
                  />
                  
                  {/* Shield Inner Highlight */}
                  <path 
                    d="M50 20L80 35V60C80 77 67 89 50 98C33 89 20 77 20 60V35L50 20Z" 
                    fill="none"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />
                  
                  {/* Scan line animation */}
                  <rect x="10" y="0" width="80" height="110" fill="url(#scan-line)" opacity="0.3">
                    <animate attributeName="y" from="-20" to="120" dur="3s" repeatCount="indefinite" />
                  </rect>
                  
                  {/* Checkmark with animation */}
                  <path 
                    d="M35 60L46 71L65 52" 
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="50"
                    strokeDashoffset="50"
                  >
                    <animate attributeName="stroke-dashoffset" from="50" to="0" dur="1s" begin="0.5s" fill="freeze" />
                  </path>
                </svg>
                
                {/* Floating particle effects */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[var(--shield-primary)] rounded-full animate-ping-slow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[var(--shield-secondary)] rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
