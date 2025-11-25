import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  const titles = [
    'Aspiring Full Stack Developer',
    'AI & IoT Enthusiast',
    'CS Student',
    'Open Source Contributor'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentTitleIndex]);

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-heading text-white"
          >
            UI<span className="text-neon-cyan">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-neon-cyan transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-cyan font-medium tracking-wider mb-4 uppercase">Welcome to my portfolio</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-heading leading-tight">
              Umar <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Iqbal</span>
            </h1>
            
            <div className="h-12 mb-8 flex items-center">
              <div className="w-1 h-8 bg-neon-cyan mr-4 animate-pulse"></div>
              <h2 className="text-xl md:text-3xl text-gray-300 font-light">
                {displayText}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
              B.Tech CSE student passionate about AI, Python, and Cloud Computing. 
              Crafting digital experiences with modern technologies and creative design.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <motion.a
                href="mailto:umariq.cse@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan px-8 py-4 rounded-full font-medium hover:bg-neon-cyan hover:text-black transition-all duration-300"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="https://github.com/UmarIqbal000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 glass-panel text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Github size={20} />
                View Work
              </motion.a>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-px w-12 bg-gray-700"></div>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/UmarIqbal000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#06b6d4' }}
                  className="text-gray-400 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/umariqbal000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#06b6d4' }}
                  className="text-gray-400 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>

                <motion.a
                  href="mailto:umariq.cse@gmail.com"
                  whileHover={{ y: -5, color: '#06b6d4' }}
                  className="text-gray-400 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent"></div>
      </motion.div>
    </header>
  );
};

export default Header;