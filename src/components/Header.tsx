import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  const titles = [
    'Aspiring Full Stack Developer',
    'AI & IoT Enthusiast',
    'CS Student',
    'Open Source Contributor'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

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
    <header className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-primary-400"
        >
          UI
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-gray-900 shadow-lg md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
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
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Umar <span className="text-primary-400">Iqbal</span>
            </h1>
            
            <div className="h-16 mb-8">
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              B.Tech CSE student passionate about AI, Python, and Cloud Computing. 
              Currently upskilling through Harvard and Stanford courses and building real-world tech projects.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.a
                href="mailto:umariq.cse@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
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
                className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
              >
                <Github size={20} />
                View Work
              </motion.a>
            </div>

            <div className="flex justify-center space-x-6">
              <motion.a
                href="mailto:umariq.cse@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <Mail size={24} className="text-gray-300" />
              </motion.a>
              
              <motion.a
                href="tel:+917906732247"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <Phone size={24} className="text-gray-300" />
              </motion.a>
              
              <motion.a
                href="https://github.com/UmarIqbal000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <Github size={24} className="text-gray-300" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/umariqbal000/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <Linkedin size={24} className="text-gray-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-900 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-900 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>
    </header>
  );
};

export default Header;