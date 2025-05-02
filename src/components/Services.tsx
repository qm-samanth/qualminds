import React from 'react';
import { Server, Shield, Code, Database, Cloud, MoveRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-10 h-10 text-blue-600" />,
      title: 'IT Infrastructure',
      description: 'Design, implementation, and management of robust IT infrastructure that scales with your business needs.',
      link: '#contact'
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your critical assets from evolving cyber threats.',
      link: '#contact'
    },
    {
      icon: <Code className="w-10 h-10 text-teal-600" />,
      title: 'Custom Software',
      description: 'Tailored software solutions that automate processes and solve unique business challenges.',
      link: '#contact'
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
      title: 'Cloud Services',
      description: 'Seamless migration, optimization, and management of cloud environments for maximum efficiency.',
      link: '#contact'
    },
    {
      icon: <Database className="w-10 h-10 text-purple-600" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive informed business decisions.',
      link: '#contact'
    },
    {
      icon: <MoveRight className="w-10 h-10 text-teal-600" />,
      title: 'Digital Transformation',
      description: 'Strategic guidance and implementation to evolve your business for the digital age.',
      link: '#contact'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to meet your business objectives and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;