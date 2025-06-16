'use client';

import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  title: string;
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'endpoint-protection',
      name: 'Endpoint Protection Platform',
      title: 'Endpoint Security',
      category: 'endpoint',
      description: 'Advanced endpoint security solution with AI-powered threat detection and response capabilities.',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated response',
        'Device control',
        'Application control'
      ]
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security Suite',
      title: 'Cloud Security',
      category: 'cloud',
      description: 'Comprehensive cloud security platform for protecting cloud-native applications and infrastructure.',
      features: [
        'Cloud workload protection',
        'Container security',
        'Cloud compliance',
        'Asset discovery',
        'Threat detection'
      ]
    },
    {
      id: 'network-security',
      name: 'Network Defense System',
      title: 'Network Security',
      category: 'network',
      description: 'Next-generation network security solution with advanced threat prevention capabilities.',
      features: [
        'Intrusion prevention',
        'Advanced firewall',
        'Network monitoring',
        'Traffic analysis',
        'VPN support'
      ]
    },
    {
      id: 'identity-access',
      name: 'Identity & Access Management',
      title: 'Identity & Access',
      category: 'identity',
      description: 'Enterprise-grade identity and access management solution for secure authentication and authorization.',
      features: [
        'Multi-factor authentication',
        'Single sign-on',
        'Role-based access control',
        'Identity governance',
        'Password management'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'endpoint', name: 'Endpoint Security' },
    { id: 'cloud', name: 'Cloud Security' },
    { id: 'network', name: 'Network Security' },
    { id: 'identity', name: 'Identity & Access' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  return (
    <div className="min-h-screen particle-background">
      {/* Hero Section */}
      <div className="py-20 bg-stable-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 text-brand-gradient">
            Security Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade cybersecurity solutions designed to protect your organization against modern threats
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 gradient-outline-button text-white
                ${activeCategory === category.id
                  ? 'shadow-lg scale-105'
                  : 'opacity-70 hover:opacity-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <PlaceholderImage 
                  width={600} 
                  height={300} 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  text={product.name}
                  bgClassName="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
                />
              </div>

              <h2 className="text-2xl font-bold mb-4 text-brand-gradient">
                {product.name}
              </h2>
              
              <p className="text-gray-300 mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveProduct(product.id)}
                  className="flex-1 gradient-outline-button text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </button>
                <button className="flex-1 gradient-outline-button text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-brand-gradient">
              Why Choose Our Products?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Advanced Protection</h4>
                <p className="text-gray-300">Next-generation security features powered by AI and machine learning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Real-time Response</h4>
                <p className="text-gray-300">Instant threat detection and automated response capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Easy Integration</h4>
                <p className="text-gray-300">Seamless integration with your existing infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
