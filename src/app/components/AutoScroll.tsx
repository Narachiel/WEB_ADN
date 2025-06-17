'use client';

import { useState, useEffect, useRef } from 'react';

interface AutoScrollProps {
  speed?: number; // pixels per second
  pauseOnHover?: boolean;
}

export default function AutoScroll({ speed = 50, pauseOnHover = true }: AutoScrollProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollRef = useRef(0);

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        const currentScroll = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        if (currentScroll >= maxScroll) {
          // Reached bottom, scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          lastScrollRef.current = 0;
        } else {
          // Continue scrolling down
          const newScroll = currentScroll + (speed / 10);
          window.scrollTo({ top: newScroll, behavior: 'auto' });
          lastScrollRef.current = newScroll;
        }
      }
    }, 100);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleAutoScroll = () => {
    if (isActive) {
      stopAutoScroll();
      setIsActive(false);
    } else {
      startAutoScroll();
      setIsActive(true);
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  useEffect(() => {
    // Add global mouse event listeners for pause on hover
    if (pauseOnHover && isActive) {
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      stopAutoScroll();
    };
  }, [isActive, pauseOnHover]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      {/* Speed Control */}
      {isActive && (
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-lg p-3 border border-gray-700 shadow-lg animate-slide-up">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Speed:</span>
            <input
              type="range"
              min="10"
              max="100"
              value={speed}
              onChange={(e) => {
                // You can add speed control logic here
                console.log('Speed:', e.target.value);
              }}
              className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          {isPaused && (
            <div className="text-xs text-yellow-400 mt-1 text-center">
              Paused
            </div>
          )}
        </div>
      )}      {/* Auto Scroll Toggle Button */}
      <button
        onClick={toggleAutoScroll}
        className={`group relative w-14 h-14 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover-glow animate-float-hover ${
          isActive
            ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] shadow-blue-500/25 animate-pulse-glow'
            : 'bg-gray-800/90 backdrop-blur-lg border border-gray-600 hover:border-gray-500 animate-bounce-gentle'
        }`}
        title={isActive ? 'Stop Auto Scroll' : 'Start Auto Scroll'}
      >
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isActive ? (
            // Pause Icon
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            // Play/Scroll Icon
            <svg
              className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          )}
        </div>

        {/* Animated Border */}
        {isActive && (
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full animate-spin">
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2" />
            </div>
          </div>
        )}

        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isActive
            ? 'opacity-30 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] blur-lg scale-150'
            : 'opacity-0'
        }`} />
      </button>

      {/* Status Indicator */}
      <div className={`text-xs text-center transition-all duration-300 ${
        isActive ? 'text-gray-300 opacity-100' : 'opacity-0'
      }`}>
        Auto Scroll
      </div>
    </div>
  );
}
