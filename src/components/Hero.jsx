// components/Hero.jsx
import React from "react";
import ParticlesBg from "particles-bg";
// components/Hero.jsx
 import Lottie from "lottie-react";
import heroAnimation from "../assets/anim.json"; // direct import from src

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-br opacity-90 from-gray-900 to-gray-800 text-white px-6 overflow-hidden">
      
      <ParticlesBg num={200} type="cobweb" bg={true} />

      {/* Left Text Section */}
      <div className="text-center md:text-left max-w-xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Sumit Sourav Das
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-blue-400">
         Backend Developer | Building Secure & Scalable APIs
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          I build secure, scalable, and high-performance backend systems.
        </p>

        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Animation Section */}
      <div className="w-80 md:w-96 z-10">
        <Lottie
          animationData={heroAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "200%", height: "100%" }}
        />
      </div>
    </section>
  );
};

export default Hero;
