'use client';

import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

interface Solution {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  details: {
    overview: string;
    implementation: string;
    support: string;
  };
  technologies: string[];
  useCases: {
    title: string;
    description: string;
  }[];
}

interface IndustrySolutions {
  title: string;
  description: string;
  challenges: string[];
  solutions: Solution[];
}

export default function SolutionsPage() {
  const [activeIndustry, setActiveIndustry] = useState<string>('finance');

  const industries: Record<string, IndustrySolutions> = {
    finance: {
      title: "Financial Services",
      description: "Comprehensive security solutions designed specifically for banks, fintech companies, and financial institutions. Protect sensitive financial data and ensure regulatory compliance while enabling digital innovation.",
      challenges: [
        "Increasing sophistication of cyber attacks targeting financial institutions",
        "Complex regulatory compliance requirements (GDPR, PSD2, SOX)",
        "Need for 24/7 availability of digital services",
        "Protection of sensitive customer financial data",
        "Integration of legacy systems with modern security solutions"
      ],
      solutions: [
        {
          title: "Banking Security Platform",
          description: "Comprehensive security solutions for banking operations with real-time threat detection and automated response capabilities.",
          features: [
            "Advanced Fraud Detection",
            "Real-time Transaction Monitoring",
            "Secure Mobile Banking Protection",
            "Multi-factor Authentication",
            "Regulatory Compliance Automation"
          ],
          benefits: [
            "Enhanced customer data protection",
            "Regulatory compliance assurance",
            "Reduced fraud incidents",
            "Improved operational efficiency",
            "Increased customer trust"
          ],
          details: {
            overview: "Our Banking Security Platform provides end-to-end protection for digital banking operations, combining advanced threat detection with automated compliance mechanisms.",
            implementation: "Seamless integration with existing banking infrastructure, with minimal disruption to operations during deployment.",
            support: "24/7 dedicated security monitoring and instant incident response support."
          },
          technologies: [
            "AI-powered fraud detection",
            "Blockchain security",
            "Secure API gateway",
            "Zero-trust architecture",
            "Advanced encryption"
          ],
          useCases: [
            {
              title: "Digital Banking Protection",
              description: "Secured online and mobile banking platforms for a top 10 Asian bank, reducing fraud attempts by 99.9%."
            },
            {
              title: "Payment Gateway Security",
              description: "Implemented secure payment processing solution for a major fintech, handling over 1M transactions daily."
            }
          ]
        },
        {
          title: "Cloud Security Integration",
          description: "Secure cloud infrastructure designed specifically for financial services, ensuring data protection and regulatory compliance in the cloud.",
          features: [
            "Cloud Access Security Broker",
            "Data Encryption Management",
            "Identity and Access Management",
            "Cloud Workload Protection",
            "Compliance Monitoring"
          ],
          benefits: [
            "Scalable security architecture",
            "Reduced operational costs",
            "Enhanced data protection",
            "Improved agility",
            "Automated compliance"
          ],
          details: {
            overview: "Our Cloud Security Integration solution enables financial institutions to safely leverage cloud technologies while maintaining the highest security standards.",
            implementation: "Phased implementation approach with continuous security testing and validation.",
            support: "Continuous monitoring and regular security assessments."
          },
          technologies: [
            "Multi-cloud security",
            "Containerization security",
            "Serverless security",
            "Cloud DLP",
            "CASB implementation"
          ],
          useCases: [
            {
              title: "Cloud Migration Security",
              description: "Secured cloud migration for a leading investment bank, ensuring zero data breaches during transition."
            },
            {
              title: "Fintech Cloud Security",
              description: "Implemented comprehensive cloud security for a digital payments provider, enabling rapid scaling."
            }
          ]
        }
      ]
    },
    healthcare: {
      title: "Healthcare",
      description: "Specialized security solutions for healthcare providers, medical device manufacturers, and healthcare technology companies. Protect patient data and ensure HIPAA compliance while enabling digital health innovations.",
      challenges: [
        "Protection of sensitive patient health information (PHI)",
        "HIPAA and HITECH compliance requirements",
        "Security of connected medical devices",
        "Integration of telemedicine security",
        "Legacy system vulnerabilities"
      ],
      solutions: [
        {
          title: "Medical Device Security",
          description: "Comprehensive security solutions for connected medical devices and healthcare IoT infrastructure.",
          features: [
            "Device Authentication",
            "Network Segmentation",
            "Real-time Monitoring",
            "Vulnerability Management",
            "Patch Management"
          ],
          benefits: [
            "Enhanced patient safety",
            "HIPAA compliance",
            "Device integrity",
            "Reduced vulnerabilities",
            "Operational continuity"
          ],
          details: {
            overview: "Our Medical Device Security solution provides comprehensive protection for connected healthcare devices and systems.",
            implementation: "Careful deployment ensuring no disruption to critical medical services.",
            support: "24/7 monitoring with specialized healthcare security experts."
          },
          technologies: [
            "IoT security",
            "Network segmentation",
            "Behavioral analytics",
            "Automated patching",
            "Risk assessment"
          ],
          useCases: [
            {
              title: "Hospital Device Security",
              description: "Secured over 10,000 connected devices for a major hospital network, preventing any security incidents."
            },
            {
              title: "Telemedicine Security",
              description: "Implemented secure telemedicine infrastructure for a healthcare provider serving 1M+ patients."
            }
          ]
        },
        {
          title: "Healthcare Data Protection",
          description: "Advanced data protection solutions designed specifically for healthcare providers and organizations.",
          features: [
            "PHI Protection",
            "Access Control",
            "Audit Logging",
            "Encryption Management",
            "DLP Implementation"
          ],
          benefits: [
            "Regulatory compliance",
            "Enhanced data privacy",
            "Secure data sharing",
            "Reduced risk",
            "Improved efficiency"
          ],
          details: {
            overview: "Our Healthcare Data Protection solution ensures the security and privacy of sensitive patient information across all systems.",
            implementation: "Systematic implementation with focus on maintaining healthcare service continuity.",
            support: "Dedicated healthcare security team with compliance expertise."
          },
          technologies: [
            "End-to-end encryption",
            "Access control",
            "DLP solutions",
            "Audit tracking",
            "Secure sharing"
          ],
          useCases: [
            {
              title: "PHI Protection",
              description: "Implemented comprehensive data protection for a healthcare network with 500+ locations."
            },
            {
              title: "Research Data Security",
              description: "Secured sensitive research data for a major medical research institution."
            }
          ]
        }
      ]
    },
    government: {
      title: "Government & Defense",
      description: "Advanced security solutions for government agencies and defense organizations. Protect critical infrastructure and sensitive information while ensuring operational continuity.",
      challenges: [
        "Protection of classified information",
        "Critical infrastructure security",
        "Nation-state threat actors",
        "Complex compliance requirements",
        "Legacy system integration"
      ],
      solutions: [
        {
          title: "Critical Infrastructure Protection",
          description: "Advanced security solutions for protecting vital government infrastructure and systems.",
          features: [
            "Advanced Threat Detection",
            "Access Control Systems",
            "24/7 Monitoring",
            "Incident Response",
            "Recovery Planning"
          ],
          benefits: [
            "Infrastructure resilience",
            "Enhanced security posture",
            "Operational continuity",
            "Rapid threat response",
            "Regulatory compliance"
          ],
          details: {
            overview: "Our Critical Infrastructure Protection solution provides comprehensive security for vital government systems and infrastructure.",
            implementation: "Highly secure deployment methodology following government security standards.",
            support: "Dedicated government security operations team with required clearances."
          },
          technologies: [
            "AI threat detection",
            "Zero-trust security",
            "SIEM integration",
            "Automated response",
            "Secure communications"
          ],
          useCases: [
            {
              title: "Utility Infrastructure",
              description: "Protected critical utility infrastructure serving millions of citizens with zero security incidents."
            },
            {
              title: "Defense Networks",
              description: "Secured classified networks for a major defense organization with 100% uptime."
            }
          ]
        },
        {
          title: "Classified Data Security",
          description: "Specialized solutions for protecting classified information and sensitive government data.",
          features: [
            "Data Encryption",
            "Secure Communications",
            "Access Control",
            "Audit Logging",
            "Data Loss Prevention"
          ],
          benefits: [
            "Enhanced data security",
            "Regulatory compliance",
            "Secure collaboration",
            "Threat prevention",
            "Operational efficiency"
          ],
          details: {
            overview: "Our Classified Data Security solution ensures the highest level of protection for sensitive government information.",
            implementation: "Phased deployment following strict security protocols and government standards.",
            support: "Dedicated security team with government security clearances."
          },
          technologies: [
            "Military-grade encryption",
            "Secure communication",
            "Advanced DLP",
            "Quantum-ready security",
            "Air-gap protection"
          ],
          useCases: [
            {
              title: "Classified Data Protection",
              description: "Implemented secure data handling for a major government agency with zero breaches."
            },
            {
              title: "Secure Communication",
              description: "Deployed encrypted communication system for sensitive government operations."
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
            Industry-Specific Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored cybersecurity solutions designed for the unique challenges of your industry
          </p>
        </div>

        {/* Industry Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(industries).map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 
                ${activeIndustry === industry
                  ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {industry.charAt(0).toUpperCase() + industry.slice(1)}
            </button>
          ))}
        </div>

        {/* Industry Overview */}
        <div className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              {industries[activeIndustry].title}
            </h2>
            <p className="text-gray-300 mb-6">{industries[activeIndustry].description}</p>
            
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Key Challenges</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries[activeIndustry].challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries[activeIndustry].solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                {solution.title}
              </h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>

              {/* Features Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Benefits</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Success Stories</h4>
                <div className="space-y-4">
                  {solution.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-xl p-4">
                      <h5 className="font-semibold text-teal-400 mb-2">{useCase.title}</h5>
                      <p className="text-gray-400">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
