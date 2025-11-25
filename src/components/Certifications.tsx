import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ImageIcon } from 'lucide-react';
import CountUp from './CountUp';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Harvard CS50X - Introduction to Computer Science',
      issuer: 'Harvard University',
      date: '2024',
      category: 'Computer Science',
      color: 'text-neon-cyan',
      pdf: '/1725049438265.pdf',
      image: '/Screenshot 2025-11-25 174050.png'
    },
    {
      title: 'Harvard CS50P - Programming with Python',
      issuer: 'Harvard University',
      date: '2024',
      category: 'Programming',
      color: 'text-electric-purple',
      pdf: '/1725049778541.pdf',
      image: '/Screenshot 2025-11-25 174110.png'
    },
    {
      title: 'Harvard CS50AI - Introduction to AI',
      issuer: 'Harvard University',
      date: '2024',
      category: 'Artificial Intelligence',
      color: 'text-pink-500',
      pdf: '/1735326643105.pdf',
      image: '/Screenshot 2025-11-25 174151.png'
    },
    {
      title: 'Python Programming Mastery',
      issuer: 'Scaler',
      date: '2024',
      category: 'Programming',
      color: 'text-yellow-400',
      pdf: '/1737833122072.pdf',
      image: '/Screenshot 2025-11-25 174214.png'
    },
    {
      title: 'Linux System Administration',
      issuer: 'Udemy',
      date: '2024',
      category: 'System Administration',
      color: 'text-green-400',
      pdf: '/1742329076998.pdf',
      image: '/Screenshot 2025-11-25 174236.png'
    },
    {
      title: 'ChatGPT & AI Tools Mastery',
      issuer: 'Udemy',
      date: '2024',
      category: 'Artificial Intelligence',
      color: 'text-red-400',
      pdf: '/1742899161851.pdf',
      image: '/Screenshot 2025-11-25 174255.png'
    },
    {
      title: 'Governance, Risk & Compliance (GRC)',
      issuer: 'Udemy',
      date: '2024',
      category: 'Cybersecurity',
      color: 'text-blue-400',
      pdf: '/1745659936699.pdf',
      image: '/Screenshot 2025-11-25 174316.png'
    },
    {
      title: 'Data Engineering Virtual Experience',
      issuer: 'Tata Group',
      date: '2024',
      category: 'Data Engineering',
      color: 'text-purple-400',
      pdf: '/1748333077813.pdf',
      image: '/Screenshot 2025-11-25 174336.png'
    },
    {
      title: 'Software Engineering Simulation',
      issuer: 'Ford Motor Company',
      date: '2024',
      category: 'Software Engineering',
      color: 'text-indigo-400',
      pdf: '/1748509121575.pdf',
      image: '/Screenshot 2025-11-25 174355.png'
    },
    {
      title: 'Google Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'Cloud Computing',
      color: 'text-orange-400',
      pdf: '/1748509716430.pdf',
      image: '/Screenshot 2025-11-25 174433.png'
    },
    {
      title: 'Google Cloud Skill Boost (18x Badges)',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'Cloud Computing',
      color: 'text-yellow-500',
      pdf: '/1749118185647.pdf',
      image: '/Screenshot 2025-11-25 174451.png'
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];
  
  // Duplicate for seamless marquee
  const marqueeCertifications = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Learning</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              className="px-4 py-2 bg-white/5 border border-white/10 text-neon-cyan rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Marquee Carousel */}
        <div className="relative w-full overflow-hidden group/carousel">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 animate-marquee w-max py-4 hover:[animation-play-state:paused]">
            {marqueeCertifications.map((cert, index) => (
              <div
                key={index}
                className="w-[320px] md:w-[380px] glass-panel rounded-2xl p-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group relative flex flex-col"
              >
                <div className="h-64 rounded-xl overflow-hidden relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain bg-black/20"
                  />
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
          <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-electric-purple/10 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Always exploring new technologies and enhancing skills through structured learning paths
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-neon-cyan mb-1 flex justify-center items-center">
                    <CountUp to={43} duration={2} />+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Certifications</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-electric-purple mb-1 flex justify-center items-center">
                    <CountUp to={18} duration={2} />+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Google Cloud Arcade Badges</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-pink-500 mb-1 flex justify-center items-center">
                    <CountUp to={3} duration={2} />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Harvard Courses</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-yellow-400 mb-1 flex justify-center items-center">
                    <CountUp to={15} duration={2} />+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;