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
  }, []);  return (
    <div className="relative min-h-screen overflow-hidden cyber-bg-primary flex flex-col">
      {/* Enhanced cyber background with improved animations */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />
      <div className="absolute inset-0 cyber-matrix-bg opacity-30" />
      
      {/* Cyber scanner effect */}
      <div className="cyber-scanner" />
        {/* Enhanced animated background elements */}
      <div className="absolute inset-0 hidden sm:block" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={`bg-particle-${i}`}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              background: `linear-gradient(135deg, rgba(77, 137, 255, ${0.1 + Math.random() * 0.2}), rgba(255, 255, 255, ${0.1 + Math.random() * 0.2}), rgba(248, 123, 88, ${0.1 + Math.random() * 0.2}))`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}        
        {/* Floating data streams */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute opacity-20"
            style={{
              top: `${i * 20}%`,
              left: '0%',
              width: '100%',
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(77, 137, 255, 0.6), transparent)`,
              animation: `data-flow ${6 + i}s linear infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>{/* Cybersecurity visual elements with brand gradient */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="cyber-lines opacity-20" style={{
          background: `linear-gradient(135deg, rgba(77, 137, 255, 0.1), rgba(255, 255, 255, 0.1), rgba(248, 123, 88, 0.1))`
        }} />
        <div className="cyber-glow" style={{
          background: `radial-gradient(circle at center, rgba(77, 137, 255, 0.15), rgba(255, 255, 255, 0.1), transparent)`
        }} />
      </div>      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">          {/* Text content with brand gradient */}
          <div className="space-y-6 sm:space-y-8 relative">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-slide-up opacity-0 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >
              {title}
            </h1>            <p
              className={`text-lg sm:text-xl text-secondary leading-relaxed animate-slide-up opacity-0 animate-delay-200 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >
              {description}
            </p>
            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slide-up opacity-0 animate-delay-300 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >              <Link
                href="/contact"
                className="gradient-primary-button inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white transform hover:-translate-y-0.5 transition-all duration-200"
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
              </Link>              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-md border-2 text-white hover:text-gray-200 transform hover:-translate-y-0.5 transition-all duration-200 gradient-outline-button"
              >
                Explore Solutions
              </Link>
            </div>            {/* Trust indicators */}
            <div
              className={`pt-6 sm:pt-8 border-t border-gray-700 animate-slide-up opacity-0 animate-delay-400 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="flex items-center text-brand-blue-light">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm3.707-9.293a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center text-brand-orange-light">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">SOC 2 Type II Compliant</span>                </div>                <div className="flex items-center text-brand-blue-light">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">24/7 Expert Support</span>
                </div>
                <div className="flex items-center text-brand-orange-light">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    />
                  </svg>                  <span className="text-sm sm:text-base">PCI-DSS Compliant</span>
                </div>
              </div>
            </div>
          </div>          {/* Visual section with advanced animations */}
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[600px] animate-scale-in opacity-0 animate-delay-400 ${
              isLoaded ? "opacity-100" : ""
            }`}
          >
            <div className="absolute inset-0 bg-[var(--sky-blue)]/5 rounded-2xl border border-[var(--sky-blue)]/20 overflow-hidden">
              
              {/* Scanning beam effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--sky-blue)] to-transparent animate-scan-beam opacity-60" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--sky-orange)] to-transparent animate-scan-beam animate-delay-2000 opacity-60" />
              </div>

              {/* Animated grid background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 cyber-grid opacity-20" />
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(77, 137, 255, 0.2)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#heroGrid)" />
                </svg>
              </div>              {/* Floating geometric elements */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`geo-${i}`}
                  className="absolute animate-hero-float"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <div 
                    className="bg-gradient-to-br from-[var(--sky-blue)]/30 to-[var(--sky-orange)]/20 animate-morph-shape"
                    style={{ 
                      width: `${16 + (i % 3) * 8}px`,
                      height: `${16 + (i % 3) * 8}px`,
                      animationDelay: `${i * 0.8}s` 
                    }} 
                  />
                </div>
              ))}              {/* Particle drift system */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="hidden sm:block absolute w-1 h-1 bg-[var(--sky-blue)] rounded-full animate-particle-drift"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${12 + Math.random() * 6}s`,
                  }}
                />
              ))}

              {/* Data pulse nodes */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`node-${i}`}
                  className="hidden sm:block absolute w-3 h-3 rounded-full animate-data-pulse"
                  style={{
                    top: `${20 + (i % 3) * 30}%`,
                    left: `${15 + (i % 4) * 25}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}

              {/* Central security shield with advanced animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Outer rotating rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--sky-blue)]/40 animate-shield-orbit" />
                  <div className="absolute inset-3 rounded-full border-2 border-[var(--sky-orange)]/30 animate-shield-orbit animate-delay-500" 
                       style={{ animationDirection: 'reverse' }} />
                  <div className="absolute inset-6 rounded-full border-2 border-[var(--sky-blue)]/20 animate-shield-orbit animate-delay-1000" />
                  
                  {/* Pulsing core */}
                  <div className="hidden sm:block absolute inset-12 rounded-full bg-gradient-to-br from-[var(--sky-blue)]/20 to-[var(--sky-orange)]/20 animate-data-pulse" />
                  
                  {/* Central shield icon with holographic effect */}
                  <div className="absolute inset-0 flex items-center justify-center animate-hologram-glitch">                    <svg
                      className="w-20 h-20 text-white filter drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>

                  {/* Connection lines to floating elements */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                    {[...Array(4)].map((_, i) => (
                      <line
                        key={`line-${i}`}
                        x1="80"
                        y1="80"
                        x2={80 + Math.cos(i * Math.PI / 2) * 60}
                        y2={80 + Math.sin(i * Math.PI / 2) * 60}
                        stroke="rgba(77, 137, 255, 0.4)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        className="animate-connect-lines"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </svg>
                </div>
              </div>              {/* Corner security badges */}
              <div className="hidden sm:block absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[var(--sky-blue)]/30 to-transparent rounded-lg animate-data-pulse animate-delay-300" />
              <div className="hidden sm:block absolute top-4 right-4 w-12 h-12 bg-gradient-to-bl from-[var(--sky-orange)]/30 to-transparent rounded-lg animate-data-pulse animate-delay-700" />
              <div className="hidden sm:block absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[var(--sky-orange)]/30 to-transparent rounded-lg animate-data-pulse animate-delay-1000" />
              <div className="hidden sm:block absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-tl from-[var(--sky-blue)]/30 to-transparent rounded-lg animate-data-pulse animate-delay-1500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
