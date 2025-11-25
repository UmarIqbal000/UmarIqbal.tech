import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Users, 
  Award,
  BookOpen,
  Zap,
  Code
} from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Vice President',
      company: 'ACM Students Chapter - IILM University, Greater Noida',
      period: 'Oct 2025 - Present',
      location: 'On-site',
      type: 'Leadership',
      description: 'Leading the student chapter to foster a community of computing professionals and students. Organizing technical events, workshops, and hackathons.',
      achievements: [
        'Organized university-level hackathons',
        'Led a team of 50+ student members',
        'Facilitated technical workshops and seminars',
        'Collaborated with industry experts for guest lectures'
      ],
      icon: <Users size={20} />,
      color: 'text-neon-cyan'
    },
    {
      title: 'Co-Founder, Website Developer',
      company: 'Umar Iqbal Store',
      period: 'July 2025 - Present',
      location: 'Remote',
      type: 'Entrepreneurship',
      description: 'Founded and developed an e-commerce platform. Responsible for full-stack development, website maintenance, and digital operations.',
      achievements: [
        'Built scalable e-commerce website',
        'Implemented secure payment gateways',
        'Optimized site performance and SEO',
        'Managed product inventory and digital marketing'
      ],
      icon: <Briefcase size={20} />,
      color: 'text-electric-purple'
    },
    {
      title: 'Co-Founder, Head of Operations',
      company: 'NinZae',
      period: 'Oct 2024 - Present',
      location: 'Remote',
      type: 'Entrepreneurship',
      description: 'Co-founded a content creation platform. Overseeing daily operations, content strategy, and community growth.',
      achievements: [
        'Scaled platform to 200+ followers',
        'Streamlined operational workflows',
        'Developed strategic partnerships',
        'Led content creation team'
      ],
      icon: <Briefcase size={20} />,
      color: 'text-pink-500'
    },
    {
      title: 'ALP Alumni',
      company: 'Aspire Institute',
      period: 'May 2025 - Present',
      location: 'Remote',
      type: 'Leadership',
      description: 'Alumni of the Aspire Leaders Program. Continuing to engage with the global network of young leaders and mentors.',
      achievements: [
        'Active member of global alumni network',
        'Mentoring incoming cohorts',
        'Participating in advanced leadership seminars',
        'Networking with global industry leaders'
      ],
      icon: <Award size={20} />,
      color: 'text-yellow-400'
    },
    {
      title: 'Campus Ambassador',
      company: 'MyGov India',
      period: 'Feb 2025 - Present',
      location: 'Hybrid',
      type: 'Volunteering',
      description: 'Promoting government initiatives and digital literacy on campus. Bridging the gap between students and public policy.',
      achievements: [
        'Organized awareness campaigns',
        'Promoted Digital India initiatives',
        'Facilitated student participation in policy discussions',
        'Increased campus engagement with government programs'
      ],
      icon: <Users size={20} />,
      color: 'text-green-400'
    },
    {
      title: 'ALP Program Fellow',
      company: 'Aspire Institute',
      period: 'Mar 2025 - May 2025',
      location: 'Remote',
      type: 'Leadership',
      description: 'Completed an intensive leadership development program founded by Harvard faculty. Focused on personal and professional growth.',
      achievements: [
        'Completed rigorous leadership curriculum',
        'Collaborated with peers from 100+ countries',
        'Developed social impact project proposals',
        'Enhanced cross-cultural communication skills'
      ],
      icon: <Award size={20} />,
      color: 'text-neon-cyan'
    },
    {
      title: 'CS50x, CS50p, CS50AI Learner',
      company: 'Harvard University',
      period: 'Oct 2024 - Nov 2025',
      location: 'Online',
      type: 'Education',
      description: 'Completed Harvard\'s suite of computer science courses covering fundamentals, Python programming, and Artificial Intelligence.',
      achievements: [
        'Mastered C, Python, SQL, and JavaScript',
        'Built AI projects using TensorFlow and PyTorch',
        'Developed full-stack web applications',
        'Solved complex algorithmic problems'
      ],
      icon: <BookOpen size={20} />,
      color: 'text-electric-purple'
    },
    {
      title: 'Frontend AI Chat Model Refiner',
      company: 'Outlier',
      period: 'Jun 2025 - Jul 2025',
      location: 'Remote',
      type: 'Work',
      description: 'Worked on refining and improving AI chat models. Focused on frontend integration and user experience for AI interfaces.',
      achievements: [
        'Improved AI model response accuracy',
        'Refined user interface for chat applications',
        'Collaborated with AI researchers',
        'Conducted usability testing'
      ],
      icon: <Code size={20} />,
      color: 'text-pink-500'
    },
    {
      title: 'Introduction to Internet of Things Learner',
      company: 'Stanford Online',
      period: 'Jan 2025 - Mar 2025',
      location: 'Online',
      type: 'Education',
      description: 'Studied the fundamentals of IoT, embedded systems, and network connectivity through Stanford Online.',
      achievements: [
        'Built IoT prototypes using ESP8266',
        'Understood IoT network protocols',
        'Implemented sensor data collection',
        'Explored IoT security challenges'
      ],
      icon: <Zap size={20} />,
      color: 'text-yellow-400'
    },
    {
      title: 'Campus Ambassador at Kaizen\'25',
      company: 'NSS IIT Delhi',
      period: 'Jan 2025 - Feb 2025',
      location: 'Hybrid',
      type: 'Volunteering',
      description: 'Represented NSS IIT Delhi\'s social fest Kaizen\'25. Promoted social causes and encouraged student participation.',
      achievements: [
        'Promoted social impact events',
        'Mobilized student volunteers',
        'Coordinated campus outreach activities',
        'Facilitated event logistics'
      ],
      icon: <Users size={20} />,
      color: 'text-green-400'
    },
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Codes',
      period: 'Nov 2024 - Feb 2025',
      location: 'Remote',
      type: 'Open Source',
      description: 'Contributed to open source projects during GSSoC. Fixed bugs, added features, and improved documentation.',
      achievements: [
        'Merged multiple pull requests',
        'Collaborated with project maintainers',
        'Improved code quality and test coverage',
        'Mentored new contributors'
      ],
      icon: <Code size={20} />,
      color: 'text-neon-cyan'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional journey through education, open source contributions, and entrepreneurship
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-electric-purple to-transparent opacity-30"></div>

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
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-deep-space border-2 border-neon-cyan rounded-full z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-panel rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${exp.color} bg-white/5 p-3 rounded-xl flex-shrink-0 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-white/5 border border-white/10 text-neon-cyan text-xs font-medium rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1 font-heading">
                          {exp.title}
                        </h3>
                        <p className="text-gray-300 font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-neon-cyan" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-neon-cyan" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${exp.color.replace('text-', 'bg-')}`}></div>
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