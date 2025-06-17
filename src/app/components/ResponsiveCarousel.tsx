'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface ResponsiveCarouselProps {
  items: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  responsive?: {
    [key: number]: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  };
}

export default function ResponsiveCarousel({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  showDots = true,
  showArrows = true,
  infinite = true,
  pauseOnHover = true,
  className = '',
  responsive = {
    0: { slidesToShow: 1, slidesToScroll: 1 },    // mobile
    640: { slidesToShow: 2, slidesToScroll: 1 },  // sm
    768: { slidesToShow: 3, slidesToScroll: 1 },  // md
    1024: { slidesToShow: 4, slidesToScroll: 1 }, // lg
  }
}: ResponsiveCarouselProps) {  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Update auto-play state when mobile state changes
  useEffect(() => {
    if (isMobile) {
      setIsPlaying(false); // Disable auto-play on mobile
    } else {
      setIsPlaying(autoPlay); // Use initial autoPlay setting on desktop
    }
  }, [isMobile, autoPlay]);
  // Update slides based on screen size
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      const breakpoints = Object.keys(responsive)
        .map(Number)
        .sort((a, b) => b - a);
      
      // Check if mobile
      setIsMobile(width < 768);
      
      for (const breakpoint of breakpoints) {
        if (width >= breakpoint) {
          setSlidesToShow(responsive[breakpoint].slidesToShow);
          setSlidesToScroll(responsive[breakpoint].slidesToScroll);
          break;
        }
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, [responsive]);
  const totalSlides = Math.ceil(items.length / slidesToShow);
  const maxStartIndex = Math.max(0, items.length - slidesToShow);

  // Reset index if it's out of bounds after responsive change
  useEffect(() => {
    if (currentIndex > maxStartIndex) {
      setCurrentIndex(Math.max(0, maxStartIndex));
    }
  }, [slidesToShow, currentIndex, maxStartIndex]);// Auto-play functionality with mobile-specific timing (disabled on mobile)
  useEffect(() => {
    // Disable auto-play on mobile devices
    if (isPlaying && !isPaused && autoPlay && !isMobile) {
      const currentInterval = autoPlayInterval;      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const maxIndex = Math.max(0, items.length - slidesToShow);
          const nextIndex = prev + 1;
          
          if (nextIndex > maxIndex) {
            return infinite ? 0 : maxIndex;
          }
          return nextIndex;
        });
      }, currentInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }    };
  }, [isPlaying, isPaused, autoPlay, autoPlayInterval, isMobile, infinite, slidesToScroll, slidesToShow, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };  const goToNext = () => {
    setCurrentIndex(prev => {
      // Calculate the maximum valid starting index
      const maxIndex = Math.max(0, items.length - slidesToShow);
      const nextIndex = prev + 1;
      
      if (nextIndex > maxIndex) {
        return infinite ? 0 : maxIndex; // Go to start if infinite, otherwise stay at max
      }
      return nextIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        const maxIndex = Math.max(0, items.length - slidesToShow);
        return infinite ? maxIndex : 0; // Go to end if infinite, otherwise stay at 0
      }
      return prev - 1;
    });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && items.length > slidesToShow) {
      goToNext();
    }
    if (isRightSwipe && items.length > slidesToShow) {
      goToPrev();
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

  return (
    <div 
      className={`relative group carousel-container animate-fade-in-up ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl animate-float-hover">        <div 
          className={`flex transition-transform ease-in-out ${
            isMobile ? 'duration-700' : 'duration-500'
          }`}          style={{ 
            transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
            width: `${(items.length * 100) / slidesToShow}%`
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex-shrink-0 carousel-item animate-slide-in-right hover-lift"
              style={{ width: `${100 / items.length}%` }}
            >              <div className={`h-full ${isMobile ? 'px-3 py-2' : 'p-2'}`}>
                {item}
              </div>
            </div>
          ))}
        </div>        {/* Navigation Arrows */}
        {showArrows && items.length > slidesToShow && (
          <>
            <button
              onClick={goToPrev}
              className={`carousel-arrow absolute top-1/2 -translate-y-1/2 z-10 hover-glow animate-bounce-gentle transition-all duration-300 flex items-center justify-center ${
                isMobile 
                  ? 'left-1 w-8 h-8 bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-500 opacity-90 hover:opacity-100 active:scale-95' 
                  : 'left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-600 hover:border-gray-400 opacity-0 group-hover:opacity-100 hover:scale-110'
              } neon-text-nav`}
              aria-label="Previous slide"
            >
              <svg className={`text-gray-300 ${isMobile ? 'w-4 h-4' : 'w-4 h-4 sm:w-6 sm:h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className={`carousel-arrow absolute top-1/2 -translate-y-1/2 z-10 hover-glow animate-bounce-gentle transition-all duration-300 flex items-center justify-center ${
                isMobile 
                  ? 'right-1 w-8 h-8 bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-500 opacity-90 hover:opacity-100 active:scale-95' 
                  : 'right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-600 hover:border-gray-400 opacity-0 group-hover:opacity-100 hover:scale-110'
              } neon-text-nav`}
              aria-label="Next slide"
            >
              <svg className={`text-gray-300 ${isMobile ? 'w-4 h-4' : 'w-4 h-4 sm:w-6 sm:h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}{/* Play/Pause Button - Hidden on mobile */}
        {autoPlay && !isMobile && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="carousel-controls absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-600 hover:border-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110 z-10"
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying && !isPaused ? (
              <svg className="w-3 h-3 sm:w-5 sm:h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-3 h-3 sm:w-5 sm:h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-4-8V5a1 1 0 011-1h1a1 1 0 011 1v1" />
              </svg>
            )}
          </button>
        )}

        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 bg-yellow-500/90 backdrop-blur-lg rounded-full text-xs text-gray-900 font-medium z-10">
            Paused
          </div>
        )}
      </div>      {/* Dots Navigation */}
      {showDots && items.length > slidesToShow && (
        <div className={`flex justify-center space-x-2 ${isMobile ? 'mt-6 mb-2' : 'mt-8 mb-4'}`}>
          {Array.from({ length: Math.ceil(items.length / slidesToShow) }, (_, index) => {
            const slideStartIndex = index * slidesToShow;
            const isActive = currentIndex >= slideStartIndex && currentIndex < slideStartIndex + slidesToShow;
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(slideStartIndex)}
                className={`rounded-full transition-all duration-300 flex-shrink-0 border-0 ${
                  isMobile 
                    ? 'w-3 h-3 min-w-[12px] min-h-[12px]' 
                    : 'w-2 h-2 sm:w-3 sm:h-3 min-w-[8px] min-h-[8px] sm:min-w-[12px] sm:min-h-[12px]'
                } ${
                  isActive
                    ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] shadow-lg scale-125 animate-pulse-glow'
                    : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                }`}
                style={{
                  touchAction: 'manipulation'
                }}
                aria-label={`Go to slide group ${index + 1}`}
              />
            );
          })}
        </div>
      )}

      {/* Progress Bar - Only shown on desktop when auto-play is active */}
      {autoPlay && isPlaying && !isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-700/50 z-0">
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
