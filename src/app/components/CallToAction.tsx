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

  return (    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 section-gradient"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 hex-grid opacity-[0.02]" />
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">            <h2 className="text-4xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="mt-4 text-xl text-gray-300/90 max-w-3xl mx-auto">
              Get in touch with our security experts and discover how we can help protect your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="gradient-button px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </a>              <a
                href="/solutions"
                className="gradient-border px-8 py-4 rounded-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-white)] to-[var(--brand-orange)] hover:opacity-80 transition-opacity"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
