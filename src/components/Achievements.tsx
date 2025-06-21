import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Eye, Users, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Google Cloud Silver League Champion',
      description: '1st Position with 15,320 Points',
      detail: 'Achieved top position in Google Cloud Skills Challenge, demonstrating expertise in cloud computing and completing multiple hands-on labs.',
      icon: <Trophy size={24} />,
      color: 'bg-yellow-500',
      stats: '15,320 Points'
    },
    {
      title: 'LinkedIn Content Success',
      description: '60k+ Impressions & 12k+ Reach',
      detail: 'Built strong professional presence on LinkedIn with consistent content creation and engagement with the tech community.',
      icon: <TrendingUp size={24} />,
      color: 'bg-blue-500',
      stats: '60k+ Views'
    },
    {
      title: 'Viral Article Publication',
      description: 'Article with 2k+ Reads',
      detail: 'Published insightful content about technology and career development that resonated with the professional community.',
      icon: <Eye size={24} />,
      color: 'bg-green-500',
      stats: '2k+ Reads'
    },
    {
      title: 'Community Building',
      description: 'NinZae Growth to 200+ Followers',
      detail: 'Successfully grew NinZae LinkedIn page from zero to 200+ engaged followers through strategic content and community engagement.',
      icon: <Users size={24} />,
      color: 'bg-purple-500',
      stats: '200+ Followers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: <Star size={20} /> },
    { label: 'Technologies Learned', value: '15+', icon: <Trophy size={20} /> },
    { label: 'Certifications Earned', value: '10+', icon: <Star size={20} /> },
    { label: 'Community Impact', value: '500+', icon: <Users size={20} /> }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">
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
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`${achievement.color} text-white p-4 rounded-xl flex-shrink-0`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-3">
                    {achievement.description}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {achievement.detail}
                  </p>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <span className="text-lg font-bold text-white">
                      {achievement.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Building Excellence Through Consistency
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Every achievement represents hours of dedication, continuous learning, and commitment to excellence in technology and community service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">🏆 Top Performer</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">🚀 Fast Learner</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">🌟 Community Builder</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;