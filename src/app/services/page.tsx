'use client';

import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';
import Link from 'next/link';

interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
  benefits?: string[];
  price?: string;
  timeline?: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  services: ServiceFeature[];
}

interface ServiceCategories {
  [key: string]: ServiceCategory;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('advisory');
  const [activeIndustry, setActiveIndustry] = useState<string>('finance');

  const categories: ServiceCategories = {
    advisory: {
      title: "Advisory Services",
      description: "Strategic guidance and expert consultation for your security needs",
      services: [
        {
          title: "Security Assessment & Audit",
          description: "Comprehensive evaluation of your security posture with actionable recommendations",
          features: [
            "Vulnerability assessment and penetration testing",
            "Risk analysis and threat modeling",
            "Compliance gap analysis (GDPR, HIPAA, PCI DSS)",
            "Security architecture review",
            "Third-party vendor risk assessment"
          ],
          benefits: [
            "Identify security gaps before attackers do",
            "Meet compliance requirements",
            "Reduce security risks",
            "Optimize security investments"
          ],
          price: "Starting at $15,000",
          timeline: "2-4 weeks"
        },
        {
          title: "Strategic Planning & Roadmap",
          description: "Long-term security strategy development aligned with business objectives",
          features: [
            "Security program development",
            "Budget planning and optimization",
            "Technology selection and evaluation",
            "Policy and procedure development",
            "Security awareness program design"
          ],
          benefits: [
            "Clear security direction",
            "Optimized resource allocation",
            "Improved security maturity",
            "Better stakeholder alignment"
          ],
          price: "Starting at $25,000",
          timeline: "4-8 weeks"
        }
      ]
    },
    managed: {
      title: "Managed Security Services",
      description: "24/7 security operations and continuous monitoring",
      services: [
        {
          title: "SOC as a Service",
          description: "Full-service security operations center with expert analysts",
          features: [
            "24/7/365 security monitoring",
            "Incident detection and response",
            "Proactive threat hunting",
            "Security log management and analysis",
            "Security metrics and reporting"
          ],
          benefits: [
            "Continuous protection",
            "Reduced response time",
            "Access to security experts",
            "Cost-effective operations"
          ],
          price: "Starting at $5,000/month",
          timeline: "Ongoing service"
        },
        {
          title: "Managed EDR & XDR",
          description: "Advanced endpoint detection and response with extended visibility",
          features: [
            "Real-time threat detection",
            "Automated response actions",
            "Endpoint isolation capabilities",
            "Asset discovery and inventory",
            "Performance impact monitoring"
          ],
          benefits: [
            "Improved threat detection",
            "Faster incident response",
            "Reduced endpoint risks",
            "Better visibility"
          ],
          price: "Starting at $10/endpoint/month",
          timeline: "Ongoing service"
        }
      ]
    },
    implementation: {
      title: "Implementation Services",
      description: "Expert deployment and integration of security solutions",
      services: [
        {
          title: "Security Infrastructure",
          description: "Design and implementation of modern security architecture",
          features: [
            "Zero Trust Architecture implementation",
            "Cloud security controls deployment",
            "Identity and access management",
            "Data protection solutions",
            "Network security controls"
          ],
          benefits: [
            "Enhanced security posture",
            "Reduced attack surface",
            "Improved access control",
            "Better data protection"
          ],
          price: "Custom pricing",
          timeline: "3-6 months"
        },
        {
          title: "Security Automation",
          description: "Automated security workflows and orchestrated responses",
          features: [
            "Security process automation",
            "SOAR implementation",
            "Custom playbook development",
            "System integration",
            "Workflow optimization"
          ],
          benefits: [
            "Faster response times",
            "Reduced manual effort",
            "Consistent actions",
            "Improved efficiency"
          ],
          price: "Starting at $50,000",
          timeline: "2-4 months"
        }
      ]
    },
    cloud: {
      title: "Cloud Security",
      description: "Comprehensive cloud security services for modern enterprises",
      services: [
        {
          title: "Cloud Security Posture Management",
          description: "Continuous cloud security assessment and optimization",
          features: [
            "Multi-cloud security monitoring",
            "Configuration management",
            "Compliance monitoring",
            "Asset inventory and tracking",
            "Risk assessment"
          ],
          benefits: [
            "Reduced cloud risks",
            "Compliance assurance",
            "Cost optimization",
            "Better visibility"
          ],
          price: "Starting at $3,000/month",
          timeline: "Ongoing service"
        },
        {
          title: "Cloud Native Security",
          description: "Security for containerized and serverless workloads",
          features: [
            "Container security",
            "Kubernetes security",
            "Serverless security",
            "CI/CD pipeline security",
            "Runtime protection"
          ],
          benefits: [
            "Secure deployments",
            "DevSecOps enablement",
            "Reduced vulnerabilities",
            "Faster development"
          ],
          price: "Starting at $4,000/month",
          timeline: "Ongoing service"
        }
      ]
    }
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Essential",
      description: "Perfect for small businesses starting their security journey",
      price: "$499/month",
      features: [
        "Basic security assessment",
        "24/5 monitoring",
        "Email support",
        "Quarterly reports",
        "Basic incident response"
      ]
    },
    {
      name: "Professional",
      description: "Comprehensive protection for growing organizations",
      price: "$999/month",
      features: [
        "Advanced security assessment",
        "24/7 monitoring",
        "Priority support",
        "Monthly reports",
        "Incident response & recovery",
        "Compliance monitoring",
        "Employee training"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large enterprises",
      price: "Custom",
      features: [
        "Full security suite",
        "Dedicated SOC team",
        "24/7 premium support",
        "Custom reporting",
        "Advanced incident response",
        "Compliance automation",
        "Advanced threat hunting",
        "Custom integrations"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Assessment",
      description: "We begin with a thorough assessment of your current security posture",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Planning",
      description: "We develop a customized security strategy based on your needs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Implementation",
      description: "We deploy and configure security solutions efficiently",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Monitoring",
      description: "We provide ongoing monitoring and maintenance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const industrySpecific = {
    finance: {
      title: "Financial Services",
      challenges: [
        "Regulatory compliance (GDPR, PCI DSS)",
        "Fraud prevention",
        "Data protection",
        "24/7 availability"
      ],
      solutions: [
        "Compliance automation",
        "Fraud detection systems",
        "Encrypted data storage",
        "High-availability architecture"
      ]
    },
    healthcare: {
      title: "Healthcare",
      challenges: [
        "HIPAA compliance",
        "Patient data protection",
        "IoT device security",
        "Remote access security"
      ],
      solutions: [
        "HIPAA-compliant systems",
        "Medical device security",
        "Secure telehealth platforms",
        "Access control systems"
      ]
    },
    retail: {
      title: "Retail",
      challenges: [
        "Payment security",
        "Customer data protection",
        "Supply chain security",
        "E-commerce protection"
      ],
      solutions: [
        "PCI DSS compliance",
        "Fraud prevention",
        "Vendor risk management",
        "DDoS protection"
      ]
    }
  };
  return (
    <div className="min-h-screen particle-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-stable-particles">
        {/* Header Section */}
        <div className="text-center mb-16">          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 text-brand-gradient">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Comprehensive security solutions to protect your organization against evolving cyber threats
          </p>
        </div>

        {/* Service Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categories).map((category) => (            <button
              key={category}
              onClick={() => setActiveCategory(category)}              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 gradient-outline-button text-white
                ${activeCategory === category
                  ? 'shadow-lg scale-105'
                  : 'opacity-70 hover:opacity-100'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Category Overview */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-gradient">
            {categories[activeCategory].title}
          </h2>
          <p className="text-gray-300 text-lg">
            {categories[activeCategory].description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {categories[activeCategory].services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 text-brand-gradient">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              {service.benefits && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing & Timeline */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-900/50 rounded-xl">
                {service.price && (
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Pricing</h4>
                    <p className="text-gray-300">{service.price}</p>
                  </div>
                )}
                {service.timeline && (
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Timeline</h4>
                    <p className="text-gray-300">{service.timeline}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-gradient">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 
                  ${tier.highlight
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'border-gray-700 hover:border-cyan-500/50'}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-brand-gradient">
                  {tier.name}
                </h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold mb-6 text-white">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 gradient-outline-button text-white">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
