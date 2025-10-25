// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Sumit Sourav Das</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-blue-400">
          Backend Developer & API Architect
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I build secure, scalable, and high-performance backend systems.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;