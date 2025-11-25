import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Eye, Users, Star } from 'lucide-react';
import CountUp from './CountUp';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Google Cloud Silver League Champion',
      description: '1st Position with 15,320 Points',
      detail: 'Achieved top position in Google Cloud Skills Challenge, demonstrating expertise in cloud computing and completing multiple hands-on labs.',
      icon: <Trophy size={24} />,
      color: 'text-yellow-400',
      stats: '15,320 Points'
    },
    {
      title: 'LinkedIn Content Success',
      description: '100k+ Impressions & 15k+ Reach',
      detail: 'Built strong professional presence on LinkedIn with consistent content creation and engagement with the tech community.',
      icon: <TrendingUp size={24} />,
      color: 'text-blue-400',
      stats: '100k+ Views'
    },
    {
      title: 'Viral Article Publication',
      description: 'Article with 5k+ Reads',
      detail: 'Published insightful content about technology and career development that resonated with the professional community.',
      icon: <Eye size={24} />,
      color: 'text-green-400',
      stats: '5k+ Reads'
    },
    {
      title: 'Community Building',
      description: 'NinZae Growth to 500+ Followers',
      detail: 'Successfully grew NinZae LinkedIn page from zero to 500+ engaged followers through strategic content and community engagement.',
      icon: <Users size={24} />,
      color: 'text-electric-purple',
      stats: '500+ Followers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: 20, icon: <Star size={20} />, color: 'text-neon-cyan' },
    { label: 'Technologies Learned', value: 15, icon: <Trophy size={20} />, color: 'text-yellow-400' },
    { label: 'Certifications Earned', value: 43, icon: <Star size={20} />, color: 'text-electric-purple' },
    { label: 'Community Impact', value: 1000, icon: <Users size={20} />, color: 'text-pink-500' }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Recognition</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Celebrating milestones in professional growth, community impact, and technical excellence
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="glass-panel rounded-2xl p-6 text-center hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-heading flex justify-center items-center">
                <CountUp to={stat.value} duration={2} />+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl bg-white/5 ${achievement.color} ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-neon-cyan transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 font-semibold mb-3">
                    {achievement.description}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    {achievement.detail}
                  </p>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5 inline-block">
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">
                      {achievement.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-heading text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Posts</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LinkedIn Post 1 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex justify-center">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7399077107080871937?collapsed=1" 
                height="566" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post"
                className="w-full"
              ></iframe>
            </div>

            {/* LinkedIn Post 2 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex justify-center">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7393387855072497664?collapsed=1" 
                height="587" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post"
                className="w-full"
              ></iframe>
            </div>

            {/* LinkedIn Post 3 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex justify-center">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7361845259313594368?collapsed=1" 
                height="669" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post"
                className="w-full"
              ></iframe>
            </div>

            {/* LinkedIn Post 4 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex justify-center">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7301702031981862912?collapsed=1" 
                height="593" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 backdrop-blur-lg border border-white/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                Building Excellence Through Consistency
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Every achievement represents hours of dedication, continuous learning, and commitment to excellence in technology and community service.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-colors">
                  <span className="font-semibold">🏆 Top Performer</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-colors">
                  <span className="font-semibold">🚀 Fast Learner</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-colors">
                  <span className="font-semibold">🌟 Community Builder</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;