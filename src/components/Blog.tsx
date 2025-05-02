import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Future of Cloud Computing in 2025',
    excerpt: 'Discover the emerging trends that will shape cloud technology in the coming years.',
    date: 'May 15, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cloud',
    link: '#'
  },
  {
    title: 'Strengthening Your Cybersecurity Posture',
    excerpt: 'Essential strategies to protect your business from evolving cyber threats.',
    date: 'May 10, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Security',
    link: '#'
  },
  {
    title: 'Digital Transformation Success Stories',
    excerpt: 'Real-world examples of businesses that have thrived through digital transformation.',
    date: 'May 5, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Digital Transformation',
    link: '#'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the latest trends and insights in the world of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center bg-transparent hover:bg-blue-50 text-blue-600 font-medium py-3 px-6 rounded-full border border-blue-200 transition-colors"
          >
            View All Insights
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;