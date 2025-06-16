import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="relative mt-20">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/95 to-gray-900/95" />
        <div className="absolute inset-0 gradient-primary opacity-[0.03] animate-gradient-y" />
        <div className="absolute inset-0 cyber-grid opacity-[0.02]" />
        <div className="absolute inset-0 hex-grid opacity-[0.01]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="gradient-text text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:gradient-text transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact and social section */}
        <div className="mt-12 pt-8 glass-gradient rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <h3 className="gradient-text text-lg font-semibold">Contact Us</h3>
              <p className="text-gray-300">Ready to secure your digital future?</p>
              <Link
                href="/contact"
                className="gradient-button inline-block px-6 py-2 rounded-lg text-white font-medium"
              >
                Get in Touch
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="gradient-text text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social media links with gradient hover effects */}
                <a
                  href="#"
                  className="gradient-button p-2 rounded-full"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="gradient-button p-2 rounded-full"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="border-t border-white/10 mt-8">
            <div className="py-6 text-center text-sm text-gray-400">
              <p>© {currentYear} Ambara Digital Nusantara. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
