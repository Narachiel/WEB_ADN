type CallToActionProps = {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  background?: 'blue' | 'dark' | 'light';
};

export default function CallToAction({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  background = 'blue' 
}: CallToActionProps) {
  const bgClasses = {
    blue: 'bg-[var(--sky-blue)] text-white',
    dark: 'bg-gray-900 text-white',
    light: 'bg-gray-50 text-gray-900'
  };
  return (
    <section className="relative overflow-hidden particle-background">
      {/* Enhanced background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Grid pattern overlay with brand colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(77, 137, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 137, 255, 0.1) 1px, transparent 1px)`
        }} />
        <div className="absolute inset-0 hex-grid opacity-[0.05]" />
      </div>      {/* Floating particles animation */}
      <div className="absolute inset-0 hidden sm:block" aria-hidden="true">
        {[...Array(25)].map((_, i) => (
          <div
            key={`cta-particle-${i}`}
            className="absolute rounded-full animate-particle-drift opacity-60"
            style={{
              background: `${i % 2 === 0 ? 'rgba(77, 137, 255, 0.6)' : 'rgba(248, 123, 88, 0.6)'}`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Larger floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`cta-float-${i}`}
            className="absolute animate-hero-float opacity-30"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <div 
              className="bg-gradient-to-br from-[var(--brand-blue)]/20 to-[var(--brand-orange)]/20 animate-morph-shape"
              style={{ 
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
                animationDelay: `${i * 1.2}s` 
              }} 
            />
          </div>
        ))}
        
        {/* Data streams */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`cta-stream-${i}`}
            className="absolute opacity-15"
            style={{
              top: `${25 + i * 25}%`,
              left: '0%',
              width: '100%',
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(77, 137, 255, 0.5), transparent)`,
              animation: `data-flow ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Improved border with brand colors */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--brand-blue)] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-transparent opacity-60" />

      <div className="relative py-20 z-10">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Content with improved styling */}
            <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 hover:border-[var(--brand-blue)]/50 transition-all duration-500">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/5 via-transparent to-[var(--brand-orange)]/5 rounded-3xl" />
              
              <h2 className="text-4xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] mb-6 relative">
                Ready to Secure Your Digital Future?
              </h2>
              <p className="mt-4 text-xl text-secondary/90 max-w-3xl mx-auto relative">
                Get in touch with our security experts and discover how we can help protect your business.
              </p>              <div className="mt-10 flex flex-wrap justify-center gap-6 relative">
                <a
                  href="/contact"
                  className="gradient-primary-button px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Contact Us
                </a>
                <a
                  href="/solutions"
                  className="gradient-outline-button px-8 py-4 rounded-lg font-semibold text-white hover:opacity-80 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
