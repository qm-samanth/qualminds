import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="mb-6 inline-block p-3 bg-blue-50 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
      >
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;