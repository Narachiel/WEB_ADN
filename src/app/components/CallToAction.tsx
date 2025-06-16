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
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M0 0h40v1H0zM0 39h40v1H0z'/%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our security experts and discover how we can help protect your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 rounded-lg font-semibold bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
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
