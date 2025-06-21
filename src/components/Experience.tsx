import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Users, 
  Award,
  BookOpen,
  Zap
} from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      period: 'Nov 2024 - Feb 2025',
      location: 'Remote',
      type: 'Open Source',
      description: 'Contributing to various open source projects with focus on Frontend development, Python automation, and C programming. Collaborating with developers worldwide to build impactful solutions.',
      achievements: [
        'Frontend contributions using React and TailwindCSS',
        'Python automation scripts and tools',
        'C programming optimizations',
        'Code reviews and mentoring new contributors'
      ],
      icon: <Users size={20} />,
      color: 'bg-primary-500'
    },
    {
      title: 'IoT Developer & Researcher',
      company: 'Stanford Online IoT Course',
      period: 'Jan - Mar 2025',
      location: 'Online',
      type: 'Education',
      description: 'Built comprehensive ESP8266 WiFi hacking project using NodeMCU, focusing on embedded systems programming and cloud integration for IoT applications.',
      achievements: [
        'ESP8266 WiFi penetration testing tools',
        'NodeMCU embedded programming',
        'Cloud integration for IoT data',
        'Network security analysis'
      ],
      icon: <Zap size={20} />,
      color: 'bg-accent-500'
    },
    {
      title: 'Co-founder & Content Creator',
      company: 'NinZae',
      period: 'Oct 2024 - Present',
      location: 'Remote',
      type: 'Entrepreneurship',
      description: 'Co-founded and scaled a content creation platform focused on technology and career development. Grew LinkedIn presence to 200+ engaged followers through strategic content marketing.',
      achievements: [
        'Grew LinkedIn page to 200+ followers',
        'Content strategy and creation for tech audience',
        'Brand development and marketing',
        'Community building and engagement'
      ],
      icon: <Briefcase size={20} />,
      color: 'bg-secondary-500'
    },
    {
      title: 'Computer Science Student',
      company: 'Harvard CS50X, CS50P, CS50AI',
      period: 'Oct 2024 - Present',
      location: 'Online',
      type: 'Education',
      description: 'Completing Harvard\'s renowned computer science courses, building practical projects including Stock Manager and Password Manager applications using modern web technologies.',
      achievements: [
        'Stock Manager web application (HTML, CSS, JS)',
        'Password Manager (Python, Flask, SQL)',
        'CS50 problem sets and projects',
        'Algorithm design and implementation'
      ],
      icon: <BookOpen size={20} />,
      color: 'bg-purple-500'
    },
    {
      title: 'Selected Fellow',
      company: 'Aspire Leaders Program',
      period: 'Mar 2025 - Present',
      location: 'Hybrid',
      type: 'Leadership',
      description: 'Selected for prestigious leadership development program focusing on personal growth, professional skills, and community impact through technology.',
      achievements: [
        'Leadership skills development',
        'Professional networking',
        'Community impact projects',
        'Personal branding and development'
      ],
      icon: <Award size={20} />,
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional journey through education, open source contributions, and entrepreneurship
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-4 border-primary-500 rounded-full z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${exp.color} text-white p-3 rounded-xl flex-shrink-0`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-primary-900 text-primary-300 text-sm font-medium rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;