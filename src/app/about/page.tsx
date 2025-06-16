import PlaceholderImage from '../components/PlaceholderImage';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      title: "CEO",
      description: "With over 20 years of cybersecurity leadership experience, Sarah has led multiple Fortune 500 companies through digital transformations. Her expertise in threat intelligence and strategic security planning has made her a respected voice in the industry.",
      education: "Ph.D. in Computer Science, MIT",
      certifications: ["CISSP", "CISM"]
    },
    {
      name: "David Miller",
      role: "Chief Technology Officer",
      title: "CTO",
      description: "Former security architect at leading tech companies, David brings deep technical expertise in cloud security, AI-driven threat detection, and zero-trust architecture. He has been instrumental in developing our cutting-edge security solutions.",
      education: "MS in Cybersecurity, Stanford",
      certifications: ["CCSP", "CEH"]
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Security Operations",
      title: "Security Head",
      description: "A recognized expert in threat detection and incident response, Maria leads our 24/7 Security Operations Center. Her team has successfully prevented thousands of cyber attacks and maintained a 99.9% security uptime for our clients.",
      education: "BS in Information Security, Georgia Tech",
      certifications: ["SANS GIAC", "CompTIA Security+"]
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our solutions to our customer service. Our commitment to quality drives continuous improvement and innovation in our security solutions.",      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "Continuously evolving our solutions to stay ahead of emerging threats. We invest heavily in R&D to develop cutting-edge security technologies and methodologies.",      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "Operating with transparency and honesty in all our business dealings. We build trust through clear communication and ethical practices in everything we do.",      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Partnership",
      description: "Building long-term relationships with our clients based on trust and mutual success. We consider ourselves an extension of our clients' security teams.",      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Ambara Digital was established with a vision to provide world-class cybersecurity solutions."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Opened offices in major tech hubs across Asia Pacific and achieved ISO 27001 certification."
    },
    {
      year: "2020",
      title: "Innovation Leadership",
      description: "Launched AI-powered threat detection platform and achieved record client satisfaction rates."
    },
    {
      year: "2025",
      title: "Industry Recognition",
      description: "Named as a leader in cybersecurity services by major industry analysts and reached 500+ enterprise clients."
    }
  ];
  return (
    <div className="min-h-screen particle-background">
      {/* Hero Section */}
      <div className="py-20 bg-stable-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 text-brand-gradient">
            About Us
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Leading the way in cybersecurity innovation and excellence
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-stable-subtle-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="cyber-card rounded-2xl p-8">              <h2 className="text-3xl font-bold mb-6 text-brand-gradient">
                Our Mission
              </h2>
              <div className="space-y-6 text-secondary">
                <p className="text-lg">
                  To provide world-class cybersecurity solutions that protect organizations from evolving digital threats while enabling their growth and innovation. We believe in a proactive approach to security, where prevention is as crucial as response.
                </p>
                <p className="text-lg">
                  We combine cutting-edge technology with expert knowledge to deliver comprehensive security solutions that meet the unique needs of each client. Our team of security experts works around the clock to ensure our clients' digital assets are protected.
                </p>                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] p-2 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>24/7 Security Operations Center</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] p-2 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span>AI-Powered Threat Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] p-2 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <span>Global Security Intelligence Network</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">              <PlaceholderImage
                width={640}
                height={480}
                text="Security Operations"
                className="rounded-2xl shadow-lg overflow-hidden"
                bgClassName="bg-brand-gradient"
              />
            </div>
          </div>
        </div>
      </section>      {/* Values Section */}
      <section className="py-16 particle-background-minimal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-secondary">
              The principles that guide everything we do
            </p>
          </div>          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] p-3 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-gradient">
                  {value.title}
                </h3>
                <p className="text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Team Section */}
      <section className="py-16 bg-stable-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-xl text-secondary">
              Meet the experts behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <PlaceholderImage
                  width={400}
                  height={400}
                  text={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-6 overflow-hidden"                  bgClassName="bg-brand-gradient"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 text-brand-gradient">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium mb-3">{member.role}</p>
                  <p className="text-secondary mb-4">{member.description}</p>
                  <div className="text-sm text-gray-400">
                    <p>{member.education}</p>
                    <p className="mt-1">{member.certifications.join(" • ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Milestones Section */}
      <section className="py-16 particle-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">            <h2 className="text-3xl font-bold sm:text-4xl text-brand-gradient">
              Our Journey
            </h2>
            <p className="mt-4 text-xl text-secondary">
              Key milestones in our path to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">                <div className="text-3xl font-bold mb-3 text-brand-gradient">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-brand-blue">{milestone.title}</h3>
                <p className="text-secondary">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
