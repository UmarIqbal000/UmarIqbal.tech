import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'IILM University',
      period: '2024 - 2028',
      grade: 'Grade: A',
      description: 'Focused on AI, Machine Learning, and Full Stack Development',
      icon: <GraduationCap size={24} />,
      color: 'bg-primary-500'
    },
    {
      degree: '12th Grade - CBSE',
      institution: 'Modern Era Public School, Bijnor',
      period: '2023',
      grade: '73.4%',
      description: 'Science stream with focus on Mathematics and Computer Science',
      icon: <Award size={24} />,
      color: 'bg-secondary-500'
    },
    {
      degree: '10th Grade - CBSE',
      institution: 'Modern Era Public School, Bijnor',
      period: '2021',
      grade: '88.5%',
      description: 'Strong foundation in Science and Mathematics',
      icon: <Award size={24} />,
      color: 'bg-accent-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic journey building a strong foundation in computer science and technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${edu.color} text-white p-4 rounded-xl flex-shrink-0`}>
                  {edu.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary-400 mb-2">
                    {edu.institution}
                  </p>
                  
                  <p className="text-accent-400 font-medium mb-3">
                    {edu.grade}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;