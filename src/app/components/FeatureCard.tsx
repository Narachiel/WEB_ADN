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
      className={`group bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8">
        {/* Title row with icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 p-2 flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}
