import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import FeatureCard from './components/FeatureCard';
import PlaceholderImage from './components/PlaceholderImage';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: "Advanced Threat Protection",
      description: "Stay ahead of cyber threats with our state-of-the-art security solutions and real-time monitoring.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
    },
    {
      title: "24/7 Security Operations",
      description: "Round-the-clock monitoring and incident response to protect your business at all times.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Compliance & Governance",
      description: "Meet industry regulations and standards with our comprehensive compliance solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with our specialized cloud security solutions and best practices.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "Security Training",
      description: "Empower your team with comprehensive security awareness training and phishing simulations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Incident Response",
      description: "Swift and effective incident response with our expert team and battle-tested procedures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
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
      company: "Financial Services"
    },
    {
      quote: "The level of security and compliance we've achieved with Ambara has given us complete peace of mind.",
      author: "Dr. James Wilson",
      position: "CISO, HealthTech Solutions",
      company: "Healthcare Technology"
    },
    {
      quote: "Their 24/7 monitoring and rapid incident response have proven invaluable for our operations.",
      author: "Michael Rahman",
      position: "Head of IT, GovSecure",
      company: "Government Sector"
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
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
              Comprehensive Cybersecurity Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Protecting your digital assets with cutting-edge technology and expertise
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                    {stat.prefix}{stat.number}{stat.suffix}
                  </div>
                  <div className="mt-2 text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Trusted by leading organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <blockquote className="text-gray-300 mb-6">{testimonial.quote}</blockquote>
                <div>
                  <div className="font-semibold text-cyan-400">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
              Industry Recognition
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Certified excellence in cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 text-center">
                <div className="text-xl font-bold text-cyan-400 mb-2">{cert.name}</div>
                <div className="text-sm text-gray-300">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
              Technology Partners
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Working with industry leaders to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 text-center">
                <div className="text-xl font-bold text-cyan-400 mb-2">{partner.name}</div>
                <div className="text-sm text-gray-300">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
              Latest Insights
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Stay informed with our cybersecurity expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                  {insight.title}
                </h3>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{new Date(insight.date).toLocaleDateString()}</span>
                  <span className="text-cyan-400">{insight.readTime}</span>
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
          href: "/solutions"
        }}
      />
    </main>
  );
}
