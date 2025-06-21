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
      color: 'hover:text-red-500'
    },
    {
      name: 'Phone',
      href: 'tel:+917906732247',
      icon: <Phone size={20} />,
      color: 'hover:text-green-500'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/UmarIqbal000',
      icon: <Github size={20} />,
      color: 'hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umariqbal000/',
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-600'
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
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">
                Umar <span className="text-primary-400">Iqbal</span>
              </h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                "Building the future, one line of code at a time."
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A passionate Full Stack Developer and AI enthusiast dedicated to creating 
                innovative solutions and contributing to the tech community. Always eager to 
                learn, grow, and make a positive impact through technology.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
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
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
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
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Primary Email</p>
                  <a
                    href="mailto:umariq.cse@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    umariq.cse@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Business Email</p>
                  <a
                    href="mailto:umariqbal.business@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    umariqbal.business@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+917906732247"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
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
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800"
        >
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : undefined}
                rel={social.name !== 'Email' && social.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-gray-800 rounded-full text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Umar Iqbal. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-200"
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
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            Open to collaboration opportunities • Currently pursuing B.Tech CSE at IILM University • 
            Aspiring Full Stack Developer specializing in AI and Cloud Technologies
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;