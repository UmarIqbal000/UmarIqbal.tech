import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:umariq.cse@gmail.com',
      icon: <Mail size={20} />,
      color: 'hover:text-red-400'
    },
    {
      name: 'Phone',
      href: 'tel:+917906732247',
      icon: <Phone size={20} />,
      color: 'hover:text-green-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/UmarIqbal000',
      icon: <Github size={20} />,
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umariqbal000/',
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-deep-space z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4 font-heading text-white">
                Umar <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Iqbal</span>
              </h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                "Building the future, one line of code at a time."
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A passionate Full Stack Developer and AI enthusiast dedicated to creating 
                innovative solutions and contributing to the tech community. Always eager to 
                learn, grow, and make a positive impact through technology.
              </p>
              <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full w-fit border border-white/5">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
                <span>by Umar Iqbal</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 font-heading">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-cyan transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-purple group-hover:bg-neon-cyan transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 font-heading">Get In Touch</h4>
              <div className="space-y-4">
                <div className="group">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Primary Email</p>
                  <a
                    href="mailto:umariq.cse@gmail.com"
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-200"
                  >
                    umariq.cse@gmail.com
                  </a>
                </div>
                <div className="group">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Business Email</p>
                  <a
                    href="mailto:umariqbal.business@gmail.com"
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-200"
                  >
                    umariqbal.business@gmail.com
                  </a>
                </div>
                <div className="group">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:+917906732247"
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-200"
                  >
                    +91 7906732247
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
        >
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : undefined}
                rel={social.name !== 'Email' && social.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-white/5 rounded-full text-gray-400 ${social.color} transition-all duration-300 border border-white/5 hover:border-white/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2025 Umar Iqbal. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(6,182,212,0.5)" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-r from-neon-cyan to-electric-purple rounded-full text-white shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 pt-8 border-t border-white/5"
        >
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            Open to collaboration opportunities • Currently pursuing B.Tech CSE at IILM University, Greater Noida
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;