import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Harvard CS50X - Introduction to Computer Science',
      issuer: 'Harvard University',
      date: '2024',
      category: 'Computer Science',
      color: 'bg-red-500'
    },
    {
      title: 'Harvard CS50P - Programming with Python',
      issuer: 'Harvard University',
      date: '2024',
      category: 'Programming',
      color: 'bg-red-500'
    },
    {
      title: 'Harvard CS50AI - Introduction to AI',
      issuer: 'Harvard University',
      date: '2024',
      category: 'Artificial Intelligence',
      color: 'bg-red-500'
    },
    {
      title: 'Python Programming Mastery',
      issuer: 'Scaler',
      date: '2024',
      category: 'Programming',
      color: 'bg-blue-500'
    },
    {
      title: 'Linux System Administration',
      issuer: 'Udemy',
      date: '2024',
      category: 'System Administration',
      color: 'bg-green-500'
    },
    {
      title: 'ChatGPT & AI Tools Mastery',
      issuer: 'Udemy',
      date: '2024',
      category: 'Artificial Intelligence',
      color: 'bg-green-500'
    },
    {
      title: 'Governance, Risk & Compliance (GRC)',
      issuer: 'Udemy',
      date: '2024',
      category: 'Cybersecurity',
      color: 'bg-green-500'
    },
    {
      title: 'Data Engineering Virtual Experience',
      issuer: 'Tata Group',
      date: '2024',
      category: 'Data Engineering',
      color: 'bg-purple-500'
    },
    {
      title: 'Software Engineering Simulation',
      issuer: 'Ford Motor Company',
      date: '2024',
      category: 'Software Engineering',
      color: 'bg-blue-600'
    },
    {
      title: 'Google Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'Cloud Computing',
      color: 'bg-yellow-500'
    },
    {
      title: 'Google Cloud Skill Boost (18x Badges)',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'Cloud Computing',
      color: 'bg-yellow-500'
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Learning
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuous learning journey through industry-recognized certifications and professional development
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary-900 text-primary-300 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${cert.color} text-white p-3 rounded-xl flex-shrink-0`}>
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                  {cert.category}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                </motion.button>
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
          <div className="bg-primary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 mb-6">
              Always exploring new technologies and enhancing skills through structured learning paths
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400">10+</div>
                <div className="text-sm text-gray-300">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-400">18</div>
                <div className="text-sm text-gray-300">Google Cloud Badges</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400">3</div>
                <div className="text-sm text-gray-300">Harvard Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">5</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;