// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600">
                  <span className="text-white font-bold">GH</span>
                </div>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-400 text-sm">github.com/yourusername</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700">
                  <span className="text-white font-bold">IN</span>
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-400 text-sm">linkedin.com/in/yourprofile</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">@</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400 text-sm">sumit@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;