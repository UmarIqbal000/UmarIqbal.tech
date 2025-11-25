import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Music, 
  Bot, 
  BookOpen, 
  FileText, 
  ShoppingBag, 
  Zap 
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Password Manager',
      description: 'A secure password management application built with Python and Flask. Features encrypted storage, user authentication, and intuitive password generation.',
      technologies: ['Python', 'SQL', 'Flask', 'Cryptography'],
      githubUrl: 'https://github.com/UmarIqbal000/CS50P-Final-Project-Password-Manager',
      liveUrl: '#',
      icon: <Database size={24} />,
      color: 'text-electric-purple',
      features: [
        'AES encryption for passwords',
        'Secure user authentication',
        'Password strength analyzer',
        'SQL database integration'
      ]
    },
    {
      title: 'Web Based Stock Manager',
      description: 'A comprehensive web-based stock management system for tracking inventory, managing suppliers, and generating reports.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      githubUrl: 'https://github.com/UmarIqbal000/CS50X-Final-Project-Web-Based-Stock-Manager',
      liveUrl: '#',
      icon: <Code size={24} />,
      color: 'text-pink-500',
      features: [
        'Real-time inventory tracking',
        'Supplier management system',
        'Automated stock alerts',
        'Sales reporting dashboard'
      ]
    },
    {
      title: 'Music Recommendation System',
      description: 'An intelligent music recommendation engine that suggests songs based on user preferences and listening history using machine learning algorithms.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Spotify API'],
      githubUrl: 'https://github.com/UmarIqbal000/Music-Recommendation-System',
      liveUrl: '#',
      icon: <Music size={24} />,
      color: 'text-green-400',
      features: [
        'Content-based filtering',
        'Collaborative filtering',
        'Spotify playlist integration',
        'Personalized suggestions'
      ]
    },
    {
      title: 'AwayHub',
      description: 'A modern hackathon UI template featuring responsive design, interactive components, and clean aesthetics for event management.',
      technologies: ['React', 'Python', 'HTML', 'CSS', 'JS'],
      githubUrl: 'https://github.com/UmarIqbal000/AwayHub-UI-Hackathon',
      liveUrl: '#',
      icon: <Globe size={24} />,
      color: 'text-neon-cyan',
      features: [
        'Responsive event landing page',
        'Participant registration flow',
        'Interactive schedule timeline',
        'Sponsor showcase section'
      ]
    },
    {
      title: 'Ninzae.ai',
      description: 'An AI-powered platform for content creators to streamline their workflow, generate ideas, and manage their digital presence.',
      technologies: ['React', 'TypeScript', 'Python', 'AI Integration'],
      githubUrl: 'https://github.com/UmarIqbal000/ninzae.ai',
      liveUrl: '#',
      icon: <Bot size={24} />,
      color: 'text-yellow-400',
      features: [
        'AI content generation',
        'Social media scheduling',
        'Analytics dashboard',
        'Community engagement tools'
      ]
    },
    {
      title: 'Poly Academy',
      description: 'An educational platform offering courses and resources for students. Features a modern learning management system interface.',
      technologies: ['React', 'TypeScript', 'Python', 'HTML/CSS'],
      githubUrl: 'https://github.com/UmarIqbal000/polyacademy.edu',
      liveUrl: '#',
      icon: <BookOpen size={24} />,
      color: 'text-blue-400',
      features: [
        'Course catalog & enrollment',
        'Video lecture player',
        'Student progress tracking',
        'Interactive quizzes'
      ]
    },
    {
      title: 'Documorph',
      description: 'An intelligent document processing tool that uses AI to extract, analyze, and transform data from various document formats.',
      technologies: ['React', 'TypeScript', 'Python', 'AI/ML'],
      githubUrl: 'https://github.com/UmarIqbal000/DocuMorph',
      liveUrl: '#',
      icon: <FileText size={24} />,
      color: 'text-electric-purple',
      features: [
        'OCR & text extraction',
        'Document format conversion',
        'AI-powered summarization',
        'Batch processing support'
      ]
    },
    {
      title: 'Umar Iqbal Store',
      description: 'A full-featured e-commerce platform for digital and physical products, featuring a seamless shopping experience and secure checkout.',
      technologies: ['React', 'TypeScript', 'Python', 'Stripe'],
      githubUrl: 'https://umar-iqbal-store.vercel.app/',
      liveUrl: 'https://umar-iqbal-store.vercel.app/',
      icon: <ShoppingBag size={24} />,
      color: 'text-pink-500',
      features: [
        'Product catalog with filtering',
        'Shopping cart functionality',
        'Secure payment gateway',
        'Order management system'
      ]
    },
    {
      title: 'SolBoost',
      description: 'A web application designed to optimize and boost solar energy system performance through monitoring and analytics.',
      technologies: ['React', 'TypeScript', 'Python', 'Data Viz'],
      githubUrl: 'https://solboost000.netlify.app/',
      liveUrl: 'https://solboost000.netlify.app/',
      icon: <Zap size={24} />,
      color: 'text-yellow-400',
      features: [
        'Energy production monitoring',
        'Efficiency analysis reports',
        'System health alerts',
        'ROI calculator'
      ]
    }
  ];

  // Duplicate for seamless marquee
  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, Python programming, and UI/UX design
          </p>
        </motion.div>

        {/* Marquee Carousel */}
        <div className="relative w-full overflow-hidden group/carousel">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 animate-marquee w-max py-4 hover:[animation-play-state:paused]">
            {marqueeProjects.map((project, index) => (
              <div
                key={index}
                className="w-[400px] glass-panel rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group relative flex flex-col"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-white/5 ${project.color} ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${project.color.replace('text-', 'bg-')}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
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
                        className="flex items-center gap-2 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/UmarIqbal000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-cyan to-electric-purple text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300"
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