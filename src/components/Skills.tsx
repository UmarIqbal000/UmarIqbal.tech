import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Brain
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      color: 'bg-primary-500',
      skills: ['Python', 'C', 'SQL', 'JavaScript', 'Dart']
    },
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      color: 'bg-secondary-500',
      skills: ['HTML', 'CSS', 'TailwindCSS', 'React', 'Flutter']
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      color: 'bg-accent-500',
      skills: ['Flask', 'Django', 'Node.js', 'REST APIs']
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      color: 'bg-purple-500',
      skills: ['MySQL', 'SQLite', 'PostgreSQL']
    },
    {
      title: 'DevOps/Cloud',
      icon: <Cloud size={24} />,
      color: 'bg-green-500',
      skills: ['Git', 'GitHub', 'Google Cloud', 'Vercel', 'Docker']
    },
    {
      title: 'AI/ML',
      icon: <Brain size={24} />,
      color: 'bg-pink-500',
      skills: ['TensorFlow', 'OpenCV', 'OpenAI API', 'ChatGPT', 'Machine Learning']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} text-white p-3 rounded-xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    className="flex items-center justify-between bg-gray-800 rounded-lg p-3 shadow-sm"
                  >
                    <span className="font-medium text-gray-300">
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(Math.random() * 2) + 3
                              ? category.color
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;