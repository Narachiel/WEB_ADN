'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationStyles, setAnimationStyles] = useState<any[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('animated-footer');
    if (footer) observer.observe(footer);

    // Generate animation styles on client side only
    const generateRandomStyles = () => {
      const styles = [];
      
      // Wave particles (8 items)
      for (let i = 0; i < 8; i++) {
        styles.push({
          type: 'wave',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${12 + Math.random() * 8}s`,
        });
      }
      
      // Flowing diamonds (5 items)
      for (let i = 0; i < 5; i++) {
        styles.push({
          type: 'diamond',
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 60}%`,
          animationDelay: `${i * 8}s`,
        });
      }
      
      // Morphing circles (4 items)
      for (let i = 0; i < 4; i++) {
        styles.push({
          type: 'morph',
          left: `${25 + Math.random() * 50}%`,
          top: `${25 + Math.random() * 50}%`,
          animationDelay: `${i * 10}s`,
        });
      }
      
      // Breathing nodes (6 items)
      for (let i = 0; i < 6; i++) {
        styles.push({
          type: 'node',
          left: `${15 + Math.random() * 70}%`,
          top: `${15 + Math.random() * 70}%`,
          animationDelay: `${i * 4}s`,
        });
      }
      
      // Sparkle effects (8 items)
      for (let i = 0; i < 8; i++) {
        styles.push({
          type: 'sparkle',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.2}s`,
        });
      }
      
      return styles;
    };
    
    setAnimationStyles(generateRandomStyles());

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sections = [
    {
      title: "Services",
      links: [
        { name: "Security Assessment", href: "/services#assessment" },
        { name: "Incident Response", href: "/services#incident-response" },
        { name: "Managed Security", href: "/services#managed-security" },
        { name: "Security Training", href: "/services#training" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise Security", href: "/solutions#enterprise" },
        { name: "SMB Security", href: "/solutions#smb" },
        { name: "Government", href: "/solutions#government" },
        { name: "Financial Services", href: "/solutions#financial" },
      ]
    },
    {
      title: "Products",
      links: [
        { name: "SecureGuard Pro", href: "/products#secureguard" },
        { name: "CloudArmor", href: "/products#cloudarmor" },
        { name: "NetworkDefender", href: "/products#networkdefender" },
        { name: "DataVault", href: "/products#datavault" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Knowledge Base", href: "/resources#knowledge" },
        { name: "Security Tools", href: "/resources#tools" },
        { name: "Training Materials", href: "/resources#training" },
        { name: "Security Updates", href: "/resources#updates" },
      ]
    },
  ];
  return (
    <footer id="animated-footer" className="relative mt-20" onMouseMove={handleMouseMove}>      {/* Enhanced animated cyber background with multiple layers */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900" />
        <div className="absolute inset-0 cyber-grid-bg opacity-20 animate-pulse" />
          {/* Animated circuit board patterns */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(77, 137, 255, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(77, 137, 255, 0.1) 1px, transparent 1px),
            linear-gradient(45deg, rgba(248, 123, 88, 0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 40px 40px',
          animation: 'circuit-drift 45s linear infinite',
        }} />        {/* New wave-based floating particles */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Gentle wave particles */}
          {animationStyles.filter(style => style.type === 'wave').map((style, i) => (
            <div
              key={`wave-${i}`}
              className="absolute w-3 h-3 bg-brand-blue rounded-full animate-wave-float opacity-30"
              style={{
                left: style.left,
                top: style.top,
                animationDelay: style.animationDelay,
                animationDuration: style.animationDuration,
              }}
            />
          ))}        </div>        {/* Flowing geometric patterns */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Flowing diamonds */}
          {animationStyles.filter(style => style.type === 'diamond').map((style, i) => (
            <div
              key={`diamond-${i}`}
              className="absolute w-6 h-6 border border-brand-blue/20 animate-flow-diagonal opacity-25"
              style={{
                left: style.left,
                top: style.top,
                animationDelay: style.animationDelay,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            />
          ))}
          
          {/* Morphing circles */}
          {animationStyles.filter(style => style.type === 'morph').map((style, i) => (
            <div
              key={`morph-${i}`}
              className="absolute w-8 h-8 border border-brand-orange/15 rounded-full animate-morph opacity-20"
              style={{
                left: style.left,
                top: style.top,
                animationDelay: style.animationDelay,
              }}
            />
          ))}
        </div>{/* Ripple mouse follower glow */}
        <div
          className="absolute w-80 h-80 bg-gradient-radial from-brand-blue/12 via-brand-blue/4 to-transparent rounded-full pointer-events-none transition-all duration-2000 ease-out animate-ripple"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        
        {/* Flowing gradient waves */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse at 25% 25%, rgba(77, 137, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 75%, rgba(248, 123, 88, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 10%, rgba(255, 255, 255, 0.04) 0%, transparent 40%)
          `,
          animation: 'gradient-flow 45s ease-in-out infinite',
        }} />
          {/* Animated top border with enhanced wave effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent animate-wave-glow" />        {/* Flowing line patterns */}
        <div className="absolute inset-0">
          {/* Curved flowing lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent animate-flow-curve" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent animate-flow-curve-reverse" />
          
          {/* Vertical flowing accent */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-brand-white/15 to-transparent animate-flow-vertical" />        </div>        {/* Breathing light nodes */}
        <div className="absolute inset-0" aria-hidden="true">
          {animationStyles.filter(style => style.type === 'node').map((style, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-3 h-3 rounded-full bg-brand-blue/25 animate-breathe"
              style={{
                left: style.left,
                top: style.top,
                animationDelay: style.animationDelay,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-brand-blue/40 animate-pulse-soft" />
            </div>
          ))}        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Enhanced elegant header section with animations */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>          <div className="relative inline-flex items-center justify-center w-28 h-28 mb-8 hover:scale-110 transition-all duration-700 cursor-pointer">
            {/* Layered shield design with rotating elements */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-brand-blue/10 via-brand-orange/5 to-brand-blue/10 border border-brand-blue/20 animate-spin-slow"></div>
            
            {/* Diamond shape overlay */}
            <div className="absolute inset-2 cyber-shield-premium" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 animate-pulse-slow"></div>
            </div>
            
            {/* Inner shield container */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-conic from-brand-blue/20 via-brand-orange/10 to-brand-blue/20 flex items-center justify-center">
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 rounded-full circuit-shield opacity-50"></div>
              
              {/* Central quantum shield */}
              <div className="relative w-16 h-16 quantum-shield fortress-shield flex items-center justify-center">
                {/* Shield icon with glow effect */}
                <svg className="w-10 h-10 text-white animate-float shield-glow-multi filter drop-shadow-lg" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24"
                     style={{ filter: 'drop-shadow(0 0 8px rgba(77, 137, 255, 0.6))' }}>
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                
                {/* Core energy element */}
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-brand-blue/10 to-transparent holo-shield opacity-70"></div>
                <div className="shield-core absolute inset-4 rounded-full"></div>
              </div>
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute w-2 h-2 rounded-full bg-brand-blue/80 animate-orbit" 
                 style={{ top: '5%', left: '50%', animationDuration: '4s' }}></div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-orange/80 animate-orbit-reverse" 
                 style={{ bottom: '5%', left: '50%', animationDuration: '5s' }}></div>
          </div>
          <h2 className="text-4xl font-bold text-brand-gradient mb-4 animate-text-shimmer bg-gradient-to-r from-brand-blue via-brand-white to-brand-orange bg-clip-text text-transparent bg-size-200 hover:animate-text-wave">
            Ambara Digital Nusantara
          </h2>
          <p className={`text-secondary text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Your trusted partner in cybersecurity, protecting digital assets with cutting-edge technology and expert knowledge.
          </p>
          
          {/* Enhanced animated status indicators */}
          <div className={`mt-8 flex flex-wrap justify-center items-center gap-8 text-sm transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center space-x-3 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50 hover:border-brand-blue/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/60 group">
              <div className="w-3 h-3 bg-brand-blue rounded-full animate-ping group-hover:animate-pulse"></div>
              <span className="text-secondary group-hover:text-brand-blue transition-colors duration-300">24/7 Monitoring</span>
            </div>
            <div className="flex items-center space-x-3 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/60 group">
              <div className="w-3 h-3 bg-brand-orange rounded-full animate-ping group-hover:animate-pulse"></div>
              <span className="text-secondary group-hover:text-brand-orange transition-colors duration-300">AI-Powered Security</span>
            </div>
            <div className="flex items-center space-x-3 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50 hover:border-brand-white/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/60 group">
              <div className="w-3 h-3 bg-brand-white rounded-full animate-ping group-hover:animate-pulse"></div>
              <span className="text-secondary group-hover:text-brand-white transition-colors duration-300">Global Protection</span>
            </div>
          </div>
        </div>        {/* Enhanced animated navigation grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-brand-blue/50 hover:bg-slate-800/80 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-brand-blue/20 relative overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Sliding border effect */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-brand-blue to-brand-orange group-hover:w-full transition-all duration-700" />
                  <div className="absolute bottom-0 right-0 w-0 h-px bg-gradient-to-l from-brand-orange to-brand-blue group-hover:w-full transition-all duration-700 delay-100" />
                </div>
                
                <div className="relative z-10">                  <h3 className="text-xl font-semibold text-brand-gradient mb-6 flex items-center group-hover:animate-bounce neon-text-accent neon-header-outline">
                    <div className="w-1 h-6 bg-gradient-to-b from-brand-blue to-brand-orange rounded-full mr-4 group-hover:animate-pulse group-hover:w-2 transition-all duration-300"></div>
                    <span className="group-hover:text-brand-blue transition-colors duration-300">{section.title}</span>
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li 
                        key={link.href}
                        className="transform transition-all duration-300"
                        style={{ transitionDelay: `${linkIndex * 50}ms` }}
                      >
                        <Link
                          href={link.href}
                          className="text-secondary hover:text-brand-blue transition-all duration-300 text-sm flex items-center group/link py-1 hover:translate-x-2"
                        >
                          <svg className="w-4 h-4 mr-3 opacity-50 group-hover/link:opacity-100 group-hover/link:text-brand-blue transition-all duration-300 group-hover/link:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="group-hover/link:translate-x-1 transition-transform duration-300 relative">
                            {link.name}
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-brand-blue group-hover/link:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>        {/* Enhanced animated contact and action section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Information with pulse animation */}
          <div className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-brand-blue/50 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1 relative overflow-hidden group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}>
            {/* Animated background pulse */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 animate-pulse-slow" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 flex items-center justify-center animate-spin-slow hover:animate-bounce transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-brand-blue animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-gradient group-hover:animate-pulse neon-text-accent neon-header-outline">Contact Us</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center text-secondary hover:text-brand-blue transition-all duration-300 hover:translate-x-2 group/contact">
                  <svg className="w-6 h-6 mr-4 text-brand-blue group-hover/contact:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover/contact:font-semibold transition-all duration-300">+62 21 1234 5678</span>
                </div>
                <div className="flex items-center text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-2 group/contact">
                  <svg className="w-6 h-6 mr-4 text-brand-orange group-hover/contact:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover/contact:font-semibold transition-all duration-300">security@ambara.co.id</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions with wave animation */}
          <div className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}>
            {/* Animated wave background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 animate-wave" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 flex items-center justify-center animate-pulse hover:animate-spin transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-brand-orange animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-gradient group-hover:animate-pulse neon-text-accent neon-header-outline">Quick Access</h3>
              </div>
              <div className="space-y-6">
                <Link href="/contact" className="gradient-outline-button block text-center py-4 px-6 rounded-xl hover:transform hover:scale-110 hover:rotate-2 transition-all duration-300 hover:animate-bounce group/btn">
                  <span className="group-hover/btn:animate-pulse">Emergency Response</span>
                </Link>
                <Link href="/resources" className="gradient-secondary-button block text-center py-4 px-6 rounded-xl hover:transform hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:animate-bounce group/btn">
                  <span className="group-hover/btn:animate-pulse">Security Portal</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Social & Updates with sparkle animation */}
          <div className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-brand-white/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 relative overflow-hidden group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}>
            {/* Sparkle animation background */}            <div className="absolute inset-0">
              {animationStyles.filter(style => style.type === 'sparkle').map((style, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-brand-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"
                  style={{
                    left: style.left,
                    top: style.top,
                    animationDelay: style.animationDelay,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-white/20 to-brand-blue/20 flex items-center justify-center animate-bounce hover:animate-spin transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-brand-white animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9v18" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-gradient group-hover:animate-pulse neon-text-accent neon-header-outline">Connect</h3>
              </div>
              <div className="space-y-6">
                <div className="flex space-x-4 justify-center">
                  <a href="#" className="gradient-outline-button p-4 rounded-xl hover:transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:animate-bounce group/social" aria-label="LinkedIn">
                    <svg className="h-6 w-6 group-hover/social:animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="gradient-outline-button p-4 rounded-xl hover:transform hover:scale-125 hover:-rotate-12 transition-all duration-300 hover:animate-bounce group/social" aria-label="Twitter">
                    <svg className="h-6 w-6 group-hover/social:animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="gradient-outline-button p-4 rounded-xl hover:transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:animate-bounce group/social" aria-label="GitHub">
                    <svg className="h-6 w-6 group-hover/social:animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <div className="text-sm text-muted space-y-3">
                  <div className="flex items-center space-x-3 hover:text-green-400 transition-colors duration-300 group/status">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping group-hover/status:animate-bounce"></div>
                    <span className="group-hover/status:animate-pulse">Security updates active</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:text-brand-blue transition-colors duration-300 group/status">
                    <div className="w-3 h-3 bg-brand-blue rounded-full animate-ping group-hover/status:animate-bounce"></div>
                    <span className="group-hover/status:animate-pulse">Threat intelligence live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Enhanced animated bottom section */}
        <div className={`bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:border-brand-blue/40 transition-all duration-500 hover:transform hover:scale-[1.01] relative overflow-hidden group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1100ms' }}>
          {/* Animated border lines */}
          <div className="absolute inset-0 rounded-2xl">
            <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-brand-blue via-brand-white to-brand-orange group-hover:w-full transition-all duration-1000" />
            <div className="absolute bottom-0 right-0 w-0 h-px bg-gradient-to-l from-brand-orange via-brand-white to-brand-blue group-hover:w-full transition-all duration-1000 delay-200" />
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 relative z-10">
            <div className="text-center lg:text-left group-hover:animate-pulse">              <p className="small-text-enhanced mb-2 transition-colors duration-300 group-hover:text-brand-blue">
                © {currentYear} Ambara Digital Nusantara. All rights reserved.
              </p>              <p className="compliance-badge-text transition-colors duration-300 group-hover:text-secondary">
                Secured by enterprise-grade encryption • ISO 27001 Certified • SOC 2 Compliant • PCI-DSS Compliant
              </p>
            </div>            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 hover:transform hover:scale-110 transition-all duration-300 group/status">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping group-hover/status:animate-bounce"></div>
                <span className="badge-text-high-contrast text-green-400 group-hover/status:animate-pulse">System Operational</span>
              </div>
              <div className="flex items-center space-x-2 hover:transform hover:scale-110 transition-all duration-300 group/status">
                <div className="w-3 h-3 bg-brand-blue rounded-full animate-ping group-hover/status:animate-bounce"></div>
                <span className="badge-text-high-contrast text-brand-blue group-hover/status:animate-pulse">Security Maximum</span>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Enhanced custom CSS for extensive background animations */}
      <style jsx>{`        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-large {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-15px) translateX(5px) scale(1.1); }
          50% { transform: translateY(-8px) translateX(-8px) scale(0.9); }
          75% { transform: translateY(-20px) translateX(3px) scale(1.05); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(120deg); }
          66% { transform: translateY(-6px) rotate(240deg); }
        }
        
        @keyframes float-small {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(4px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(90deg); }
          50% { transform: translate(-5px, -20px) rotate(180deg); }
          75% { transform: translate(-10px, -5px) rotate(270deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
          @keyframes circuit-drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-2px, -2px); }
          50% { transform: translate(2px, -1px); }
          75% { transform: translate(-1px, 2px); }
          100% { transform: translate(0, 0); }
        }
        
        /* New animation keyframes */
        @keyframes wave-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-12px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-6px) translateX(-6px) rotate(180deg); }
          75% { transform: translateY(-18px) translateX(4px) rotate(270deg); }        }
        
        @keyframes flow-diagonal {
          0%, 100% { transform: translateX(-20px) translateY(-20px) rotate(0deg); }
          50% { transform: translateX(20px) translateY(20px) rotate(180deg); }
        }
        
        @keyframes morph {
          0%, 100% { transform: scale(1) rotate(0deg); border-radius: 50%; }
          25% { transform: scale(1.2) rotate(90deg); border-radius: 0%; }
          50% { transform: scale(0.8) rotate(180deg); border-radius: 25%; }
          75% { transform: scale(1.1) rotate(270deg); border-radius: 75%; }
        }
        
        @keyframes ripple {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        
        @keyframes gradient-flow {
          0%, 100% { 
            background-position: 0% 0%, 100% 100%, 50% 0%;
            transform: rotate(0deg);
          }
          33% { 
            background-position: 100% 50%, 0% 50%, 75% 25%;
            transform: rotate(1deg);
          }
          66% { 
            background-position: 50% 100%, 50% 0%, 25% 75%;
            transform: rotate(-1deg);
          }
        }
        
        @keyframes flow-curve {
          0% { transform: translateX(-100%) skewX(0deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateX(0%) skewX(15deg); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%) skewX(0deg); opacity: 0; }
        }
        
        @keyframes flow-curve-reverse {
          0% { transform: translateX(100%) skewX(0deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateX(0%) skewX(-15deg); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-100%) skewX(0deg); opacity: 0; }
        }
        
        @keyframes flow-vertical {
          0%, 100% { transform: translateY(-50%) scaleY(0); opacity: 0; }
          50% { transform: translateY(-50%) scaleY(1); opacity: 1; }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 0.9; }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }        }
        
        @keyframes digital-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes energy-wave {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes node-pulse {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 0 0 rgba(77, 137, 255, 0.4);
          }
          50% { 
            transform: scale(1.2); 
            box-shadow: 0 0 0 10px rgba(77, 137, 255, 0);
          }
        }
        
        @keyframes connection-pulse {
          0%, 100% { opacity: 0; transform: scaleX(0); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        
        @keyframes wave-glow {
          0%, 100% { 
            transform: translateX(0); 
            box-shadow: 0 0 10px rgba(77, 137, 255, 0.3);
          }
          50% { 
            transform: translateX(5px); 
            box-shadow: 0 0 20px rgba(77, 137, 255, 0.6);
          }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes scan-horizontal-slow {
          0% { transform: translateX(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes scan-horizontal-fast {
          0% { transform: translateX(-100%); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes scan-horizontal-reverse {
          0% { transform: translateX(100vw); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes scan-vertical-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes scan-vertical-fast {
          0% { transform: translateY(-100%); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes scan-vertical-reverse {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        
        @keyframes scan-diagonal {
          0% { transform: translate(-50%, -100%) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50%, 100vh) rotate(45deg); opacity: 0; }
        }
        
        @keyframes scan-diagonal-reverse {
          0% { transform: translate(-50%, 100vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50%, -100%) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { 
            background-position: 0% 50%;
            transform: scale(1);
          }
          50% { 
            background-position: 100% 50%;
            transform: scale(1.05);
          }
        }
        
        @keyframes gradient-shift-complex {
          0%, 100% { 
            background-position: 0% 0%, 100% 100%, 50% 0%, 0% 100%;
            transform: scale(1) rotate(0deg);
          }
          25% { 
            background-position: 100% 0%, 0% 100%, 100% 50%, 50% 0%;
            transform: scale(1.02) rotate(1deg);
          }
          50% { 
            background-position: 100% 100%, 0% 0%, 0% 100%, 100% 50%;
            transform: scale(1.05) rotate(0deg);
          }
          75% { 
            background-position: 0% 100%, 100% 0%, 50% 100%, 100% 0%;
            transform: scale(1.02) rotate(-1deg);
          }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes text-wave {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-2px); }
          75% { transform: translateY(2px); }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg);
          }
        }
          /* Animation classes with much slower durations for elegance */
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-large {
          animation: float-large 25s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 18s ease-in-out infinite;
        }
        
        .animate-float-small {
          animation: float-small 12s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 50s ease-in-out infinite;
        }
        
        .animate-drift {
          animation: drift 35s ease-in-out infinite;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 8s ease-in-out infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 15s ease-in-out infinite;
        }
        
        .animate-digital-rain {
          animation: digital-rain 30s linear infinite;
        }
        
        .animate-matrix-fall {
          animation: matrix-fall 40s linear infinite;
        }
        
        .animate-energy-wave {
          animation: energy-wave 16s ease-out infinite;
        }
        
        .animate-node-pulse {
          animation: node-pulse 12s ease-in-out infinite;
        }
        
        .animate-connection-pulse {
          animation: connection-pulse 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }
        
        .animate-wave-glow {
          animation: wave-glow 12s ease-in-out infinite;
        }
        
        .animate-scan-horizontal {
          animation: scan-horizontal 25s linear infinite;
        }
        
        .animate-scan-horizontal-slow {
          animation: scan-horizontal-slow 35s linear infinite;
        }
        
        .animate-scan-horizontal-fast {
          animation: scan-horizontal-fast 18s linear infinite;
        }
        
        .animate-scan-horizontal-reverse {
          animation: scan-horizontal-reverse 28s linear infinite;
        }
        
        .animate-scan-vertical {
          animation: scan-vertical 30s linear infinite;
        }
        
        .animate-scan-vertical-slow {
          animation: scan-vertical-slow 40s linear infinite;
        }
        
        .animate-scan-vertical-fast {
          animation: scan-vertical-fast 22s linear infinite;
        }
        
        .animate-scan-vertical-reverse {
          animation: scan-vertical-reverse 32s linear infinite;
        }
        
        .animate-scan-diagonal {
          animation: scan-diagonal 50s linear infinite;
        }
        
        .animate-scan-diagonal-reverse {
          animation: scan-diagonal-reverse 60s linear infinite;
        }
        
        .animate-text-shimmer {
          animation: text-shimmer 12s ease-in-out infinite;
        }
        
        .animate-text-wave {
          animation: text-wave 8s ease-in-out infinite;
        }
          .animate-sparkle {
          animation: sparkle 8s ease-in-out infinite;
        }
        
        /* New animation classes */
        .animate-wave-float {
          animation: wave-float 16s ease-in-out infinite;        }
        
        .animate-flow-diagonal {
          animation: flow-diagonal 25s ease-in-out infinite;
        }
        
        .animate-morph {
          animation: morph 18s ease-in-out infinite;
        }
        
        .animate-ripple {
          animation: ripple 12s ease-in-out infinite;
        }
        
        .animate-flow-curve {
          animation: flow-curve 30s ease-in-out infinite;
        }
        
        .animate-flow-curve-reverse {
          animation: flow-curve-reverse 35s ease-in-out infinite;
        }
        
        .animate-flow-vertical {
          animation: flow-vertical 40s ease-in-out infinite;
        }
        
        .animate-breathe {
          animation: breathe 8s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 6s ease-in-out infinite;        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </footer>
  );
}
