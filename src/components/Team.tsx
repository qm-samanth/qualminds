import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ramesh Vallabhaneni',
    role: 'Chief Executive Officer',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Ramesh.png',
    bio: 'Visionary leader driving QualMinds’ growth and innovation.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ramesh-vallabhaneni-qualminds/',
      email: 'ramesh@qualminds.com'
    }
  },
  {
    name: 'Samanth Vallabhaneni',
    role: 'Director of Operations',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Samanth.png',
    bio: 'Ensures seamless operations and client delivery at QualMinds.',
    social: {
      linkedin: 'https://www.linkedin.com/in/samanth-vallabhaneni/',
      email: 'samanth@qualminds.com'
    }
  },
  {
    name: 'Leela Narasimha',
    role: 'Technical Architect (UI)',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Leela.png',
    bio: 'Expert in UI architecture and modern web technologies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/leela-narasimha/',
      email: 'leela@qualminds.com'
    }
  },
  {
    name: 'Koteswara Gupta',
    role: 'Technical Lead (.Net)',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Koti.png',
    bio: 'Specialist in .Net technologies and enterprise solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/koteswara-gupta/',
      email: 'koteswara@qualminds.com'
    }
  },
  {
    name: 'Avishek Kumar',
    role: 'Director of Engineering',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Avishek.png',
    bio: 'Leads engineering teams to deliver high-quality software.',
    social: {
      linkedin: 'https://www.linkedin.com/in/avishek-kumar/',
      email: 'avishek@qualminds.com'
    }
  },
  {
    name: 'Kishore Kumar',
    role: 'Technical Lead (.Net)',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Kishore.png',
    bio: 'Experienced .Net lead focused on scalable solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/kishore-kumar/',
      email: 'kishore@qualminds.com'
    }
  },
  {
    name: 'Raveendra Badugu',
    role: 'HR Manager',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Raveendra.png',
    bio: 'Drives talent acquisition and employee engagement.',
    social: {
      linkedin: 'https://www.linkedin.com/in/raveendra-badugu/',
      email: 'raveendra@qualminds.com'
    }
  },
  {
    name: 'Krishna Chaitanya',
    role: 'IT Operations',
    image: 'https://qualminds.com/images/whowearesliders/employee-images/Krishnachaitanya.png',
    bio: 'Manages IT operations and infrastructure.',
    social: {
      linkedin: 'https://www.linkedin.com/in/krishna-chaitanya/',
      email: 'krishna@qualminds.com'
    }
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-40 blur-3xl animate-blob z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl animate-blob animation-delay-2000 z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Our Innovative Team</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Meet the passionate leaders and experts who drive <span className="text-blue-600 font-semibold">QualMinds</span>’ success and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/90 rounded-3xl shadow-strong hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-8 relative border border-blue-100 hover:-translate-y-2 hover:scale-105 cursor-pointer backdrop-blur-xs"
            >
              <div className="relative w-28 h-28 mb-4 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-blue-200 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="flex space-x-3 mb-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-white hover:text-blue-400 transition-colors">
                        <Mail size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4 min-h-[48px]">{member.bio}</p>
              <div className="flex justify-center space-x-3 mt-auto opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-blue-500 hover:text-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.social.email && (
                  <a href={`mailto:${member.social.email}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;