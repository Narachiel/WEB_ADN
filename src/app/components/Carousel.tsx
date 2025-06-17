'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface CarouselProps {
  items: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  showDots = true,
  showArrows = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  infinite = true,
  pauseOnHover = true,
  className = ''
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.ceil(items.length / slidesToShow);
  const maxIndex = infinite ? items.length : totalSlides - 1;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused && autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (infinite) {
            return (prev + slidesToScroll) % items.length;
          } else {
            return prev + slidesToScroll >= totalSlides ? 0 : prev + slidesToScroll;
          }
        });
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, autoPlay, autoPlayInterval, infinite, totalSlides, slidesToScroll, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      if (infinite) {
        return (prev + slidesToScroll) % items.length;
      } else {
        return prev + slidesToScroll >= totalSlides ? 0 : prev + slidesToScroll;
      }
    });
  };

  const goToPrev = () => {
    setCurrentIndex(prev => {
      if (infinite) {
        return prev - slidesToScroll < 0 ? items.length - slidesToScroll : prev - slidesToScroll;
      } else {
        return prev - slidesToScroll < 0 ? totalSlides - 1 : prev - slidesToScroll;
      }
    });
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

  // Get visible items based on current index and slides to show
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            width: `${(items.length * 100) / slidesToShow}%`
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              <div className="p-2">
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-600 hover:border-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110 neon-text-nav"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-600 hover:border-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110 neon-text-nav"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {autoPlay && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-600 hover:border-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying && !isPaused ? (
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-4-8V5a1 1 0 011-1h1a1 1 0 011 1v1" />
              </svg>
            )}
          </button>
        )}

        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 backdrop-blur-lg rounded-full text-xs text-gray-900 font-medium">
            Paused
          </div>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * slidesToScroll)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesToScroll) === index
                  ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] shadow-lg scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50">
          <div 
            className="h-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] transition-all duration-100 ease-linear"
            style={{ 
              width: isPaused ? '100%' : '0%',
              animation: isPaused ? 'none' : `carousel-progress ${autoPlayInterval}ms linear infinite`
            }}
          />
        </div>
      )}
    </div>
  );
}
