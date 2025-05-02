import React from 'react';
import { CheckCircle, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: 'Certified IT professionals with 10+ years of experience'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: 'Customized solutions tailored to your specific needs'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: '24/7 support and monitoring for critical systems'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: 'Transparent pricing with no hidden costs'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: 'Proactive approach to prevent issues before they arise'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: 'Scalable solutions that grow with your business'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: '80vw' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating" 
                className="rounded-xl shadow-xl relative z-10 w-full"
              />
              {/* Key metrics */}
              <div className="absolute -right-10 bottom-1/3 bg-white shadow-lg rounded-lg p-6 z-20 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="w-12 h-12 text-blue-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">97%</p>
                    <p className="text-gray-600">Client retention</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-10 top-1/3 bg-white shadow-lg rounded-lg p-6 z-20 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-blue-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">15+</p>
                    <p className="text-gray-600">Years expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="mb-6 inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
              About QualMinds
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We Transform Businesses Through Technology</h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2008, QualMinds has been delivering innovative IT solutions that empower businesses to achieve their goals. Our team of experts is passionate about solving complex problems and helping our clients navigate the ever-evolving technology landscape.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe that technology should enable your business, not complicate it. That's why we focus on delivering solutions that are not only powerful and secure, but also user-friendly and aligned with your specific objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {benefit.icon}
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center">
              Learn More About Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;