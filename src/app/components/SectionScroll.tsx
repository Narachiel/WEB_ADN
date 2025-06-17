'use client';

import { useState, useEffect, useRef } from 'react';

interface SectionScrollProps {
  sectionSelectors?: string[];
  scrollDuration?: number; // duration to stay on each section (ms)
  mobileScrollDuration?: number; // longer duration for mobile
  pauseOnHover?: boolean;
}

export default function SectionScroll({ 
  sectionSelectors = ['section', '.scroll-section', 'main > div'],
  scrollDuration = 8000, // 8 seconds per section
  mobileScrollDuration = 12000, // 12 seconds per section on mobile
  pauseOnHover = true 
}: SectionScrollProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState<Element[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Find all scrollable sections
  useEffect(() => {
    const findSections = () => {
      const allSections: Element[] = [];
      
      sectionSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (!allSections.includes(el)) {
            allSections.push(el);
          }
        });
      });

      // Sort by position on page
      allSections.sort((a, b) => {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        return aRect.top - bRect.top;
      });

      setSections(allSections);
    };

    // Find sections after a short delay to ensure DOM is ready
    const timer = setTimeout(findSections, 1000);
    return () => clearTimeout(timer);
  }, [sectionSelectors]);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (index: number) => {
    if (sections[index]) {
      sections[index].scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const startSectionScroll = () => {
    if (intervalRef.current || sections.length === 0) return;
    
    const currentDuration = isMobile ? mobileScrollDuration : scrollDuration;

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentSection(prev => {
          const nextSection = (prev + 1) % sections.length;
          scrollToSection(nextSection);
          return nextSection;
        });
      }
    }, currentDuration);
  };

  const stopSectionScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleSectionScroll = () => {
    if (isActive) {
      stopSectionScroll();
      setIsActive(false);
    } else {
      startSectionScroll();
      setIsActive(true);
    }
  };

  const goToNextSection = () => {
    setCurrentSection(prev => {
      const nextSection = (prev + 1) % sections.length;
      scrollToSection(nextSection);
      return nextSection;
    });
  };

  const goToPrevSection = () => {
    setCurrentSection(prev => {
      const prevSection = prev === 0 ? sections.length - 1 : prev - 1;
      scrollToSection(prevSection);
      return prevSection;
    });
  };

  // Handle global hover events
  useEffect(() => {
    const handleMouseEnter = () => {
      if (pauseOnHover) setIsPaused(true);
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) setIsPaused(false);
    };

    if (pauseOnHover && isActive) {
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isActive, pauseOnHover]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSectionScroll();
    };
  }, []);

  if (sections.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-center gap-3">
      {/* Section Navigation Controls */}
      {isActive && (
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-xl p-4 border border-gray-700 shadow-lg animate-slide-up">
          <div className="flex flex-col items-center gap-3">
            {/* Section Counter */}
            <div className="text-xs text-gray-300 text-center">
              <div className="font-semibold">Section {currentSection + 1} of {sections.length}</div>
              {isPaused && <div className="text-yellow-400 mt-1">Paused</div>}
            </div>

            {/* Manual Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevSection}
                className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                title="Previous Section"
              >
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNextSection}
                className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                title="Next Section"
              >
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleSectionScroll}
        className={`group relative w-16 h-16 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
          isActive
            ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] shadow-blue-500/25'
            : 'bg-gray-800/90 backdrop-blur-lg border border-gray-600 hover:border-gray-500'
        }`}
        title={isActive ? 'Stop Section Scroll' : 'Start Section Scroll'}
      >
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isActive ? (
            // Stop Icon
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h6v4H9V10z" />
            </svg>
          ) : (
            // Sections Icon
            <svg className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          )}
        </div>

        {/* Animated Border */}
        {isActive && (
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full animate-pulse">
              <div className="absolute inset-0 rounded-full border-2 border-white/30" />
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
        Section Scroll
      </div>
    </div>
  );
}
