// components/About.jsx
import React from 'react';
import profile from "../assets/Profile.png"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img 
              src={profile} 
              alt="Sumit Das"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                // Fallback to placeholder
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder */}
            <div 
              className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hidden"
              style={{display: 'none'}}
            >
              <span className="text-white text-lg font-semibold">Sumit Das</span>
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a backend developer specializing in Node.js, Express, MongoDB, and REST APIs. 
              I focus on clean architecture, authentication systems, and database design. 
              I love turning business logic into fast, secure backend systems.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/souravsumit07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;