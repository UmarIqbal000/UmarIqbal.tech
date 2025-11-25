import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import RippleGrid from './components/RippleGrid';

function App() {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-cyan selection:text-deep-space overflow-hidden">
      <div className="fixed inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      
      <Header />
      <main className="relative z-10">
        <Education />
        <Skills />
        <Experience />
        <Volunteering />
        <Projects />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;