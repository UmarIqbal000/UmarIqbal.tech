import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Calendar } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteerData = [
    {
      title: 'Class Representative',
      organization: 'IILM University',
      period: 'Aug 2024 - Present',
      description: 'Leading student initiatives, facilitating communication between students and faculty, organizing academic and social events for the computer science department.',
      impact: 'Representing 50+ students in academic matters',
      icon: <Users size={20} />,
      color: 'bg-primary-500'
    },
    {
      title: 'Campus Ambassador',
      organization: 'NSS IIT Delhi',
      period: 'Jan - Feb 2025',
      description: 'Promoted social service initiatives and community development programs among college students. Organized awareness campaigns and volunteer drives.',
      impact: 'Engaged 100+ students in social service activities',
      icon: <Heart size={20} />,
      color: 'bg-secondary-500'
    },
    {
      title: 'Campus Ambassador',
      organization: 'MyGov India',
      period: 'Feb 2025 - Present',
      description: 'Representing government initiatives and digital India campaigns on campus. Promoting citizen engagement and digital literacy programs among students.',
      impact: 'Increased awareness about digital governance initiatives',
      icon: <Award size={20} />,
      color: 'bg-accent-500'
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Volunteering
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Committed to community service and student leadership, creating positive impact through various initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerData.map((volunteer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`${volunteer.color} text-white p-3 rounded-xl`}>
                  {volunteer.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {volunteer.title}
                  </h3>
                  <p className="text-primary-400 font-semibold">
                    {volunteer.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar size={14} />
                <span>{volunteer.period}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {volunteer.description}
              </p>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Impact:</h4>
                <p className="text-sm text-gray-300">
                  {volunteer.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;