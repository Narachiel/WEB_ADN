import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import FeatureCard from './components/FeatureCard';
import PlaceholderImage from './components/PlaceholderImage';
import ResponsiveCarousel from './components/ResponsiveCarousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {  const features = [
    {
      title: "Advanced Threat Protection",
      description: "Stay ahead of cyber threats with our state-of-the-art security solutions and real-time monitoring.",
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center group">
          {/* Animated shield container */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/15 to-red-600/20 rounded-xl rotate-45 animate-pulse-glow"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-xl rotate-45 animate-spin-slow"></div>
          
          {/* Central shield */}
          <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-red-400/20">
            <svg className="w-6 h-6 text-red-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01" />
            </svg>
          </div>
          
          {/* Scanning lines */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-scan-line"></div>
          </div>
          
          {/* Corner indicators */}
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-red-400/40 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-red-400/40 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-red-400/40 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-red-400/40 rounded-br-lg"></div>
        </div>
      ),
    },
    {
      title: "24/7 Security Operations",
      description: "Round-the-clock monitoring and incident response to protect your business at all times.",
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center group">
          {/* Orbiting elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-2 border-2 border-blue-400/30 rounded-full animate-orbit-clockwise">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping-slow"></div>
            </div>
            <div className="absolute inset-3 border border-blue-300/20 rounded-full animate-orbit-counterclockwise">
              <div className="absolute -top-0.5 right-1 w-1 h-1 bg-blue-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Central clock */}
          <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20">
            <svg className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
          </div>
          
          {/* Time indicators */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-blue-400/60"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-blue-400/60"></div>
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-blue-400/60"></div>
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-blue-400/60"></div>
          
          {/* Digital display */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-mono text-blue-300 bg-gray-900/80 px-1 rounded">24/7</div>
        </div>
      ),
    },
    {
      title: "Compliance & Governance",
      description: "Meet industry regulations and standards with our comprehensive compliance solutions.",
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center group">
          {/* Document background */}
          <div className="absolute inset-1 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/20">
            {/* Document lines */}
            <div className="absolute h-0.5 w-6 bg-green-400/30 top-2 left-2 rounded"></div>
            <div className="absolute h-0.5 w-4 bg-green-400/30 top-3.5 left-2 rounded"></div>
            <div className="absolute h-0.5 w-5 bg-green-400/30 top-5 left-2 rounded"></div>
            <div className="absolute h-0.5 w-3 bg-green-400/30 top-6.5 left-2 rounded"></div>
          </div>
          
          {/* Certificate seal */}
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-emerald-500/40 to-green-600/40 rounded-full flex items-center justify-center border-2 border-green-400/30 animate-pulse-glow-fast">
            <svg className="w-4 h-4 text-emerald-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
            </svg>
          </div>
          
          {/* Compliance badges */}
          <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500/40 to-indigo-500/40 flex items-center justify-center text-white text-[8px] font-bold border border-blue-400/30">
            ISO
          </div>
          <div className="absolute top-0 right-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 flex items-center justify-center text-white text-[8px] font-bold border border-purple-400/30">
            SOC
          </div>
          
          {/* Verification lines */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-dash-offset"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with our specialized cloud security solutions and best practices.",
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center group">
          {/* Cloud layers */}
          <div className="absolute inset-2 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl"></div>
          <div className="absolute inset-3 bg-gradient-to-br from-sky-400/15 to-blue-400/15 rounded-xl animate-float-mini"></div>
          
          {/* Main cloud */}
          <div className="relative z-10 w-10 h-6 bg-gradient-to-br from-sky-500/30 to-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-sky-400/20">
            <svg className="w-8 h-5 text-sky-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          
          {/* Security shield overlay */}
          <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-lg flex items-center justify-center border border-green-400/30 animate-pulse-glow">
            <svg className="w-3 h-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          {/* Data flow particles */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute bottom-4 left-2 w-1 h-1 bg-sky-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute bottom-6 left-4 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-5 right-3 w-1 h-1 bg-sky-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      ),
    },
    {
      title: "Security Training",
      description: "Empower your team with comprehensive security awareness training and phishing simulations.",
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center group">
          {/* Book base */}
          <div className="absolute inset-2 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg border-l-4 border-amber-400/40">
            {/* Book pages */}
            <div className="absolute right-1 top-1 w-6 h-8 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-r border-r border-amber-300/20"></div>
            <div className="absolute right-0.5 top-0.5 w-5 h-7 bg-gradient-to-br from-yellow-300/10 to-amber-300/10 rounded-r"></div>
          </div>
          
          {/* Central education icon */}
          <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-amber-400/20">
            <svg className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          {/* Graduation cap */}
          <div className="absolute -top-1 right-1 w-5 h-3 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-t-lg border border-indigo-400/30 flex items-center justify-center">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400/60 rotate-45 animate-pulse"></div>
          </div>
          
          {/* Knowledge particles */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-2 left-2 w-1 h-1 bg-amber-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-4 right-2 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-900/30 rounded-b-lg overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-400 to-orange-400 w-3/4 animate-pulse"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Incident Response",
      description: "Swift and effective incident response with our expert team and battle-tested procedures.",
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center group">
          {/* Alert background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-yellow-500/15 to-orange-500/20 rounded-xl animate-pulse-glow-fast"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-red-400/10 to-yellow-400/10 rounded-lg border border-red-400/20"></div>
          
          {/* Lightning bolt */}
          <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-yellow-500/40 to-red-500/40 rounded-lg flex items-center justify-center backdrop-blur-sm border border-yellow-400/30">
            <svg className="w-5 h-5 text-yellow-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          {/* Alert indicators */}
          <div className="absolute top-1 right-1 w-3 h-3 bg-red-500/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 bg-orange-500/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          
          {/* Response time indicator */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-mono text-yellow-300 bg-red-900/80 px-1 rounded animate-pulse">
            &lt;5min
          </div>
          
          {/* Emergency signals */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-scan-line"></div>
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-scan-line" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Corner warning markers */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-red-400 rounded-tl-lg animate-pulse"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      ),
    },
  ];

  const statistics = [
    { number: "500+", label: "Clients Protected", prefix: "" },
    { number: "99.9", label: "Uptime Guaranteed", prefix: "", suffix: "%" },
    { number: "24/7", label: "Security Monitoring", prefix: "" },
    { number: "15", label: "Years of Excellence", prefix: "" },
  ];
  const testimonials = [
    {
      quote: "Ambara Digital's cybersecurity solutions have transformed how we protect our customer data. Their expertise is unmatched.",
      author: "Sarah Chen",
      position: "CTO, Global Bank Corp",
      company: "Financial Services",
      rating: 5
    },
    {
      quote: "The level of security and compliance we've achieved with Ambara has given us complete peace of mind.",
      author: "Dr. James Wilson",
      position: "CISO, HealthTech Solutions",
      company: "Healthcare Technology",
      rating: 5
    },
    {
      quote: "Their 24/7 monitoring and rapid incident response have proven invaluable for our operations.",
      author: "Michael Rahman",
      position: "Head of IT, GovSecure",
      company: "Government Sector",
      rating: 5
    },
    {
      quote: "Outstanding threat detection capabilities. Ambara identified and neutralized potential attacks before they could impact our business.",
      author: "Lisa Martinez",
      position: "Security Director, RetailMax",
      company: "E-commerce",
      rating: 5
    },
    {
      quote: "The team's proactive approach to security has saved us millions in potential breach costs. Their expertise is world-class.",
      author: "David Kim",
      position: "VP Technology, InnovateTech",
      company: "Technology",
      rating: 5
    },
    {
      quote: "Seamless integration with our existing systems. Ambara's solutions enhanced our security without disrupting operations.",
      author: "Rachel Thompson",
      position: "IT Manager, EduGlobal",
      company: "Education",
      rating: 5
    },
    {
      quote: "Their incident response time is incredible. When we had a security alert, they resolved it within minutes.",
      author: "Ahmed Al-Rashid",
      position: "CISO, PetroSecure",
      company: "Energy Sector",
      rating: 5
    },
    {
      quote: "Ambara's comprehensive security audit revealed vulnerabilities we didn't know existed. Their solutions are thorough and effective.",
      author: "Emma Rodriguez",
      position: "Security Lead, MedCore",
      company: "Healthcare",
      rating: 5
    },
    {
      quote: "The best investment we've made in cybersecurity. ROI was evident within the first quarter of implementation.",
      author: "James O'Connor",
      position: "CEO, StartupVenture",
      company: "Fintech",
      rating: 5
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Service Organization Control" },
    { name: "NIST", description: "Cybersecurity Framework" },
    { name: "PCI DSS", description: "Payment Card Industry" }
  ];

  const partners = [
    { name: "Microsoft", type: "Cloud Security" },
    { name: "AWS", type: "Cloud Infrastructure" },
    { name: "Cisco", type: "Network Security" },
    { name: "Splunk", type: "SIEM Solutions" }
  ];

  const insights = [
    {
      title: "The Rise of Zero Trust Security",
      description: "Learn why Zero Trust is becoming the new standard for enterprise security.",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "AI in Cybersecurity: Friend or Foe?",
      description: "Exploring the dual role of AI in modern cybersecurity landscape.",
      date: "2024-01-10",
      readTime: "4 min read"
    },
    {
      title: "Top Cyber Threats of 2024",
      description: "Stay informed about the latest cybersecurity threats and how to protect against them.",
      date: "2024-01-05",
      readTime: "6 min read"
    }  ];  return (
    <div className="min-h-screen particle-background">
      <Hero />      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-orange-900/10"></div>
        <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-float-mini"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400/60 rounded-full animate-bounce-mini" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-yellow-400/60 rounded-full animate-float-mini" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-elegant-fade-in">
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x neon-text-heading">
                Comprehensive Cybersecurity
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 animate-gradient-x" style={{animationDelay: '0.5s'}}>
                Solutions
              </span>
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed neon-text-subtle">
              Protecting your digital assets with cutting-edge technology and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">advanced threat intelligence</span>
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse-glow"></div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className={`animate-elegant-fade-in cyber-icon-hover animate-delay-${index + 1}`}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
          
          {/* Bottom accent */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-500/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
              <div className="w-2 h-2 bg-cyan-500/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-orange-500/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>{/* Statistics Section */}
      <section className="py-20 particle-background-minimal animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card rounded-2xl p-8 animate-float-hover hover-lift">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center animate-slide-in-right hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl sm:text-4xl font-bold text-brand-gradient animate-text-glow animate-pulse-glow">
                    {stat.prefix}{stat.number}{stat.suffix}
                  </div>
                  <div className="mt-2 text-elegant-white-soft animate-fade-in">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>      {/* Testimonials Section */}
      <section className="py-20 bg-stable-subtle-particles scroll-section animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient neon-text-heading animate-text-glow hover-gradient-shift">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-elegant-white neon-text-subtle animate-fade-in">
              Trusted by leading organizations worldwide
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-16 animate-float-hover">
            <div className="max-w-4xl mx-auto text-center cyber-card rounded-3xl p-12 hover-lift hover-glow">
              <div className="mb-6">
                {/* 5-star rating */}
                <div className="flex justify-center items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[var(--brand-orange)] animate-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-2xl sm:text-3xl font-light text-elegant-white leading-relaxed animate-text-glow">
                  "{testimonials[0].quote}"
                </blockquote>
              </div>
              <div className="flex items-center justify-center space-x-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] flex items-center justify-center text-white font-bold text-lg animate-pulse-glow">
                  {testimonials[0].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-brand-gradient text-lg animate-text-glow">{testimonials[0].author}</div>
                  <div className="text-sm text-elegant-white-soft">{testimonials[0].position}</div>
                  <div className="text-sm text-[var(--brand-blue)]">{testimonials[0].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <ResponsiveCarousel
            items={testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="h-full">
                <div className="cyber-card rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 animate-float-hover hover-lift hover-glow flex flex-col">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[var(--brand-orange)] animate-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-elegant-white mb-6 flex-grow italic animate-fade-in">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] flex items-center justify-center text-white font-bold text-sm animate-bounce-gentle">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-gradient animate-text-glow">{testimonial.author}</div>
                      <div className="text-xs text-elegant-white-soft">{testimonial.position}</div>
                      <div className="text-xs text-[var(--brand-blue)] font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            infinite={true}
            pauseOnHover={true}
            className="w-full"
            responsive={{
              0: { slidesToShow: 1, slidesToScroll: 1 },    // mobile
              640: { slidesToShow: 1, slidesToScroll: 1 },  // sm
              768: { slidesToShow: 2, slidesToScroll: 1 },  // md
              1024: { slidesToShow: 3, slidesToScroll: 1 }, // lg
            }}
          />

          {/* Trust Indicators */}
          <div className="mt-16 text-center animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-brand-gradient animate-text-glow">500+</div>
                <div className="text-sm text-elegant-white-soft">Happy Clients</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-brand-gradient animate-text-glow">99.9%</div>
                <div className="text-sm text-elegant-white-soft">Satisfaction Rate</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-brand-gradient animate-text-glow">24/7</div>
                <div className="text-sm text-elegant-white-soft">Support</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-brand-gradient animate-text-glow">5.0</div>
                <div className="text-sm text-elegant-white-soft">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* Certifications Section */}
      <section className="py-20 particle-background-subtle animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient animate-text-glow hover-gradient-shift">
              Industry Recognition
            </h2>            <p className="mt-4 text-xl text-elegant-white animate-fade-in">
              Certified excellence in cybersecurity
            </p>
          </div>          <ResponsiveCarousel
            items={certifications.map((cert, index) => (
              <div key={index} className="cyber-card rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 h-full animate-float-hover hover-lift hover-glow">
                <div className="flex flex-col items-center space-y-3 h-full justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] flex items-center justify-center text-white font-bold text-lg neon-text-white hover-scale animate-pulse-glow">
                    {cert.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="text-lg font-bold text-brand-gradient neon-text-accent animate-text-glow">{cert.name}</div>
                  <div className="text-sm text-secondary neon-text-subtle animate-fade-in">{cert.description}</div>
                </div>
              </div>
            ))}            autoPlay={true}
            autoPlayInterval={4000}
            showDots={true}
            showArrows={true}
            infinite={true}
            pauseOnHover={true}
            className="w-full"
            responsive={{
              0: { slidesToShow: 1, slidesToScroll: 1 },    // mobile
              640: { slidesToShow: 2, slidesToScroll: 1 },  // sm
              768: { slidesToShow: 3, slidesToScroll: 1 },  // md
              1024: { slidesToShow: 4, slidesToScroll: 1 }, // lg
            }}
          />
        </div>
      </section>      {/* Technology Partners Section */}
      <section className="py-20 bg-stable-subtle-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient">
              Technology Partners
            </h2>
            <p className="mt-4 text-xl text-secondary">
              Working with industry leaders to deliver excellence
            </p>
          </div>          <ResponsiveCarousel
            items={partners.map((partner, index) => (
              <div key={index} className="cyber-card rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center space-y-4 h-full justify-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] flex items-center justify-center text-white font-bold text-xl neon-text-white">
                    {partner.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="text-lg font-bold text-brand-gradient neon-text-accent">{partner.name}</div>
                  <div className="text-sm text-secondary neon-text-subtle">{partner.type}</div>
                </div>
              </div>
            ))}            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            showArrows={true}
            infinite={true}
            pauseOnHover={true}
            className="w-full"
            responsive={{
              0: { slidesToShow: 1, slidesToScroll: 1 },    // mobile
              640: { slidesToShow: 2, slidesToScroll: 1 },  // sm
              768: { slidesToShow: 3, slidesToScroll: 1 },  // md
              1024: { slidesToShow: 4, slidesToScroll: 1 }, // lg
            }}
          />
        </div>
      </section>      {/* Latest Insights Section */}
      <section className="py-20 particle-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient animate-text-glow hover-gradient-shift">
              Latest Insights
            </h2>
            <p className="mt-4 text-xl text-secondary animate-fade-in">
              Stay informed with our cybersecurity expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slide-in-up">
            {insights.map((insight, index) => (
              <div key={index} className="cyber-card rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 animate-float-hover hover-lift hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-3 text-brand-gradient animate-text-glow">
                  {insight.title}
                </h3>
                <p className="text-secondary mb-4 animate-fade-in">{insight.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">{new Date(insight.date).toLocaleDateString()}</span>
                  <span className="text-brand-blue animate-pulse-subtle">{insight.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Secure Your Digital Future?"
        description="Get in touch with our security experts and discover how we can help protect your business."
        primaryButton={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Explore Solutions",
          href: "/solutions"        }}
      />
    </div>
  );
}
