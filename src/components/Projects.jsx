// components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    id: 1,
    title: "Foodie – Online Food Ordering Platform 🍔",
    description:
      "A full-stack food ordering platform where users can browse food items, add them to cart, and place orders. Admins can manage foods and track orders.",
    tech: [
      "MERN Stack",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Multer",
      "TailwindCSS",
    ],
    features: [
      "User authentication and role-based admin panel",
      "Add to cart, order tracking, and CRUD food management",
      "RESTful API with secure JWT authorization",
    ],
    links: {
      github: "https://github.com/souravsumit07/Foodie",
      liveApi: "https://foodie-l25y.onrender.com/api/food/getFood",
      frontend: "https://foodie-frontend.vercel.app",
    },
  },

  
  {
    id: 2,
    title: "BookShow – Online Movie Ticket Booking 🎬",
    description:
      "A movie ticket booking web app where users can browse movies, check showtimes, and book seats. Admins can manage movies, shows, and bookings.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "JWT",
      "Prometheus",
      "Grafana",
      "React (future integration)",
    ],
    features: [
      "User authentication and authorization",
      "Movie and showtime management for admins",
      "Seat selection and booking system",
      "Dockerized microservice deployment",
      "Real-time performance monitoring with Prometheus & Grafana",
    ],
    links: {
      github: "https://github.com/souravsumit07/BookShow",
      liveApi: "https://bookshow-api.onrender.com/api/movies", // update if you have a different live API URL
    },
  },
  {
    id: 3,
    title: "E-commerce API",
    description:
      "Secure REST API with product management, user auth, and cart system.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    features: [
      "Product catalog management",
      "User authentication and authorization",
      "Shopping cart functionality",
    ],
    links: {
    },
    
  },
];


  const openJsonViewer = (project) => {
    setSelectedProject(project);
  };

  const closeJsonViewer = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Features:</h4>
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors"
                  >
                    GitHub
                  </a>
                  
                  {project.links.liveApi && (
                    <button
                      onClick={() => openJsonViewer(project)}
                      className="bg-green-700 hover:bg-green-600 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      View API
                    </button>
                  )}
                  
                  {project.links.frontend && (
                    <a 
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-700 hover:bg-purple-600 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      Frontend
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON Viewer Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">
                {selectedProject.title} - API Demo
              </h3>
              <button
                onClick={closeJsonViewer}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-[60vh]">
              <pre className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm overflow-auto">
                {JSON.stringify({
                  project: selectedProject.title,
                  description: selectedProject.description,
                  live_api: selectedProject.links.liveApi,
                  endpoints: [
                    "GET /api/user/login",
                    "POST /api/food/addFood",
                    "GET /api/food/getFood",
                    "POST /api/cart/addToCart"
                  ],
                  status: "API is live and responsive"
                }, null, 2)}
              </pre>
              <div className="mt-4 text-center">
                <a 
                  href={selectedProject.links.liveApi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Visit Live API
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;