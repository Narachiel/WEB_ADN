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
    <div className="relative min-h-[90vh] overflow-hidden bg-background">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              background: `linear-gradient(135deg, rgba(77, 137, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(248, 123, 88, 0.2))`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>      {/* Cybersecurity visual elements with brand gradient */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="cyber-lines opacity-20" style={{
          background: `linear-gradient(135deg, rgba(77, 137, 255, 0.1), rgba(255, 255, 255, 0.1), rgba(248, 123, 88, 0.1))`
        }} />
        <div className="cyber-glow" style={{
          background: `radial-gradient(circle at center, rgba(77, 137, 255, 0.15), rgba(255, 255, 255, 0.1), transparent)`
        }} />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content with brand gradient */}
          <div className="space-y-8 relative">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent pointer-events-none" />            <h1
              className={`text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] animate-slide-up opacity-0 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-xl text-gray-300 leading-relaxed animate-slide-up opacity-0 animate-delay-200 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >
              {description}
            </p>
            <div
              className={`flex flex-wrap gap-4 animate-slide-up opacity-0 animate-delay-300 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >
              <Link
                href="/contact"
                className="gradient-button inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
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
                className="gradient-border inline-flex items-center px-8 py-3 text-base font-medium rounded-md text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] hover:bg-gray-900/50 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className={`pt-8 border-t border-gray-700 animate-slide-up opacity-0 animate-delay-400 ${
                isLoaded ? "opacity-100" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center text-gray-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm3.707-9.293a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    />
                  </svg>
                  <span>24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual section */}
          <div
            className={`relative h-[600px] animate-scale-in opacity-0 animate-delay-400 ${
              isLoaded ? "opacity-100" : ""
            }`}
          >
            <div className="absolute inset-0 bg-[var(--sky-blue)]/5 rounded-2xl border border-[var(--sky-blue)]/20 overflow-hidden backdrop-blur-sm">
              {/* Animated security elements */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 cyber-grid opacity-20" />
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 rounded-full bg-[var(--sky-blue)]/20 animate-float"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${20 + i * 20}%`,
                      animationDelay: `${i * 2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Central security icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-4 border-[var(--sky-blue)]/30 animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full border-4 border-[var(--sky-orange)]/20 animate-reverse-spin" />
                  <div className="absolute inset-8 rounded-full border-4 border-[var(--sky-blue)]/10 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-[var(--sky-blue)]"
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
                </div>
              </div>

              {/* Floating security elements */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`icon-${i}`}
                  className="absolute w-12 h-12 flex items-center justify-center"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animation: `float ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`,
                  }}
                >
                  <div className="w-full h-full rounded-lg border border-[var(--sky-blue)]/20 bg-[var(--sky-blue)]/5 backdrop-blur-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
