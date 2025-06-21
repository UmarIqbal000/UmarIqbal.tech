import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AwayHub',
      description: 'A modern hackathon UI template featuring responsive design, interactive components, and clean aesthetics. Built with focus on user experience and developer-friendly code structure.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/UmarIqbal000/AwayHub-UI-Hackathon.git',
      liveUrl: '#',
      icon: <Globe size={24} />,
      color: 'bg-primary-500',
      features: [
        'Responsive design for all devices',
        'Interactive UI components',
        'Modern CSS animations',
        'Clean and modular code structure'
      ]
    },
    {
      title: 'Password Manager',
      description: 'A secure password management application built with Python and Flask. Features encrypted storage, user authentication, and intuitive password generation and retrieval system.',
      technologies: ['Python', 'Flask', 'SQL', 'Cryptography'],
      githubUrl: 'https://github.com/UmarIqbal000/CS50P-Final-Project-Password-Manager.git',
      liveUrl: '#',
      icon: <Database size={24} />,
      color: 'bg-secondary-500',
      features: [
        'Secure password encryption',
        'User authentication system',
        'Password generation utility',
        'SQLite database integration'
      ]
    },
    {
      title: 'Stock Manager',
      description: 'A comprehensive web-based stock management system for tracking inventory, managing suppliers, and generating reports. Built as part of Harvard CS50 coursework.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      githubUrl: 'https://github.com/UmarIqbal000/Web-Based-Stock-Manger-Harvard-University-CS50-.git',
      liveUrl: '#',
      icon: <Code size={24} />,
      color: 'bg-accent-500',
      features: [
        'Inventory tracking and management',
        'Supplier information system',
        'Stock level monitoring',
        'Data export functionality'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, Python programming, and UI/UX design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${project.color} text-white p-3 rounded-xl`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/UmarIqbal000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200"
          >
            <Github size={24} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;