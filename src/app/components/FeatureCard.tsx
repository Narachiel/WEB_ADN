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
    <div      ref={cardRef}
      className={`group gradient-card rounded-2xl transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8">        {/* Title row with icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] p-2 flex items-center justify-center text-white shadow-lg">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)]">
            {title}
          </h3>
        </div>
        
        <p className="text-secondary/90">
          {description}
        </p>
      </div>
    </div>
  );
}
