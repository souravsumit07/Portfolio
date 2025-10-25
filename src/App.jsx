// App.js
import React from 'react';
import Hero from "./components/Hero"
import About from './components/About';
import TechStack from './components/TechStack ';
import Projects from './components/Projects';
import Contact from "./components/Contact"
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    
  
    </div>
  );
}

export default App;