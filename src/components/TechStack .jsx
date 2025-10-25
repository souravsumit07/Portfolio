// components/TechStack.jsx
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Node.js', description: 'JavaScript runtime for server-side development' },
    { name: 'Express', description: 'Web application framework for Node.js' },
    { name: 'MongoDB', description: 'NoSQL database for modern applications' },
    { name: 'Mongoose', description: 'MongoDB object modeling for Node.js' },
    { name: 'JWT', description: 'Secure token-based authentication' },
    { name: 'REST APIs', description: 'Architectural style for web services' },
    { name: 'Docker', description: 'Containerization platform' },
    { name: 'Git', description: 'Version control system' },
    { name: 'Postman', description: 'API development and testing' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              </div>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;