import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'IILM University, Greater Noida',
      period: '2024 - 2028',
      grade: 'Grade: A',
      description: 'Focused on AI, Machine Learning, and Full Stack Development',
      icon: <GraduationCap size={24} />,
      color: 'text-neon-cyan'
    },
    {
      degree: '12th Grade - CBSE',
      institution: 'Modern Era Public School, Bijnor',
      period: '2023',
      grade: '73.4%',
      description: 'Science stream with focus on Mathematics and Computer Science',
      icon: <Award size={24} />,
      color: 'text-electric-purple'
    },
    {
      degree: '10th Grade - CBSE',
      institution: 'Modern Era Public School, Bijnor',
      period: '2021',
      grade: '88.5%',
      description: 'Strong foundation in Science and Mathematics',
      icon: <Award size={24} />,
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              <div className="glass-panel rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`p-4 rounded-xl bg-white/5 ${edu.color} ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0 font-heading group-hover:text-neon-cyan transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar size={16} className="text-neon-cyan" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-semibold text-white/90 mb-2">
                      {edu.institution}
                    </p>
                    
                    <p className="text-neon-cyan font-medium mb-3">
                      {edu.grade}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
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