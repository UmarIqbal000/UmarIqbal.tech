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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
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