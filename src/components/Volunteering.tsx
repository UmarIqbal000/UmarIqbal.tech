import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Calendar } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteerData = [
    {
      title: 'Class Representative',
      organization: 'IILM University, Greater Noida',
      period: 'Aug 2024 - Present',
      description: 'Leading student initiatives, facilitating communication between students and faculty, organizing academic and social events for the computer science department.',
      impact: 'Representing 50+ students in academic matters',
      icon: <Users size={20} />,
      color: 'text-neon-cyan'
    },
    {
      title: 'Campus Ambassador',
      organization: 'NSS IIT Delhi',
      period: 'Jan - Feb 2025',
      description: 'Promoted social service initiatives and community development programs among college students. Organized awareness campaigns and volunteer drives.',
      impact: 'Engaged 100+ students in social service activities',
      icon: <Heart size={20} />,
      color: 'text-electric-purple'
    },
    {
      title: 'Campus Ambassador',
      organization: 'MyGov India',
      period: 'Feb 2025 - Present',
      description: 'Representing government initiatives and digital India campaigns on campus. Promoting citizen engagement and digital literacy programs among students.',
      impact: 'Increased awareness about digital governance initiatives',
      icon: <Award size={20} />,
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="volunteering" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Leadership & Volunteering
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="glass-panel rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-white/5 ${volunteer.color} ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {volunteer.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-neon-cyan transition-colors">
                    {volunteer.title}
                  </h3>
                  <p className="text-gray-400 font-medium text-sm">
                    {volunteer.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 bg-white/5 px-3 py-1.5 rounded-full w-fit border border-white/5">
                <Calendar size={14} className="text-neon-cyan" />
                <span>{volunteer.period}</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {volunteer.description}
              </p>

              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <h4 className="font-semibold text-neon-cyan mb-1 text-sm uppercase tracking-wider">Impact</h4>
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