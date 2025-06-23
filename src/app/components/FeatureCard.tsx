'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-slate-700/50 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 ${
        isVisible
          ? 'animate-elegant-fade-in opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-slate-800/60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-orange-900/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
      </div>
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Icon container - prominently displayed */}
        <div className="flex justify-center mb-6">
          <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-center mb-4 transition-all duration-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 neon-text-heading">
            {title}
          </span>
        </h3>
        
        {/* Description */}
        <p className="text-slate-300 text-center leading-relaxed group-hover:text-slate-200 transition-colors duration-300 neon-text-subtle">
          {description}
        </p>
        
        {/* Bottom accent line */}
        <div className="mt-6 flex justify-center">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-50 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-orange-400/20 blur-xl"></div>
      
      {/* Corner indicators */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-orange-400/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-red-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
