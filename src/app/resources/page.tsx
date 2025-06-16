'use client';

import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

interface Resource {
  id: string;
  title: string;
  type: 'blog' | 'whitepaper' | 'case-study' | 'webinar';
  description: string;
  date: string;
  readTime?: string;
  downloadLink?: string;
}

export default function ResourcesPage() {
  const [activeType, setActiveType] = useState<string>('all');

  const resources: Resource[] = [
    {
      id: 'ransomware-trends-2025',
      title: 'Ransomware Trends and Prevention Strategies for 2025',
      type: 'blog',
      description: 'An in-depth analysis of emerging ransomware threats and effective prevention strategies.',
      date: 'June 15, 2025',
      readTime: '8 min read'
    },
    {
      id: 'zero-trust-whitepaper',
      title: 'Implementing Zero Trust Architecture in Enterprise Networks',
      type: 'whitepaper',
      description: 'A comprehensive guide to implementing zero trust security model in modern enterprises.',
      date: 'June 10, 2025',
      downloadLink: '/whitepapers/zero-trust-2025.pdf'
    },
    {
      id: 'fintech-case-study',
      title: 'How Leading Fintech Secured Their Cloud Infrastructure',
      type: 'case-study',
      description: 'Learn how a major fintech company enhanced their security posture with our solutions.',
      date: 'June 5, 2025',
      downloadLink: '/case-studies/fintech-security.pdf'
    },
    {
      id: 'ai-security-webinar',
      title: 'AI in Cybersecurity: Opportunities and Challenges',
      type: 'webinar',
      description: 'Join our experts as they discuss the role of AI in modern cybersecurity.',
      date: 'June 20, 2025',
      readTime: '60 min'
    }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Resources' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'whitepaper', name: 'Whitepapers' },
    { id: 'case-study', name: 'Case Studies' },
    { id: 'webinar', name: 'Webinars' },
  ];

  const filteredResources = activeType === 'all'
    ? resources
    : resources.filter(resource => resource.type === activeType);

  // Icon mapper for resource types
  const typeIcons = {
    blog: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    whitepaper: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'case-study': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    webinar: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  };
  return (
    <div className="min-h-screen particle-background">
      {/* Hero Section */}
      <div className="py-20 bg-stable-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 text-brand-gradient">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with our latest cybersecurity research, insights, and best practices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resource Type Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {resourceTypes.map(type => (            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 gradient-outline-button text-white
                ${activeType === type.id
                  ? 'shadow-lg scale-105'
                  : 'opacity-70 hover:opacity-100'}`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => (
            <div 
              key={resource.id} 
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <PlaceholderImage
                  width={640}
                  height={360}
                  text={resource.title}
                  className="w-full h-48"
                  bgClassName="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm mb-3">
                  <span className="flex items-center">
                    {typeIcons[resource.type as keyof typeof typeIcons]}
                    <span className="ml-1 capitalize">{resource.type.replace('-', ' ')}</span>
                  </span>
                  <span>•</span>
                  <span>{resource.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-brand-gradient">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  {resource.readTime && (
                    <span className="text-sm text-gray-400 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {resource.readTime}
                    </span>
                  )}
                    {resource.downloadLink ? (
                    <button className="px-4 py-2 rounded-lg text-sm font-semibold gradient-outline-button text-white hover:shadow-lg transition-all duration-300">
                      Download
                    </button>
                  ) : (
                    <button className="px-4 py-2 rounded-lg text-sm font-semibold gradient-outline-button text-white transition-all duration-300">
                      Read More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-brand-gradient">
                Stay Updated with Security Insights
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive the latest cybersecurity insights, research, and best practices directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-md px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:border-cyan-500"
                />                <button className="px-6 py-3 rounded-lg font-semibold gradient-outline-button text-white hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
