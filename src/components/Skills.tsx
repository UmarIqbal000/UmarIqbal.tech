import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop';
import { 
  SiPython, SiC, SiMysql, SiJavascript, SiDart,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiFlutter,
  SiFlask, SiDjango, SiNodedotjs, 
  SiSqlite, SiPostgresql,
  SiGit, SiGithub, SiGooglecloud, SiVercel, SiDocker,
  SiTensorflow, SiOpencv, SiOpenai
} from 'react-icons/si';

const Skills: React.FC = () => {
  const techLogos = [
    { node: <SiPython size={48} className="text-neon-cyan" />, title: "Python" },
    { node: <SiC size={48} className="text-neon-cyan" />, title: "C" },
    { node: <SiMysql size={48} className="text-yellow-400" />, title: "MySQL" },
    { node: <SiJavascript size={48} className="text-neon-cyan" />, title: "JavaScript" },
    { node: <SiDart size={48} className="text-neon-cyan" />, title: "Dart" },
    { node: <SiHtml5 size={48} className="text-electric-purple" />, title: "HTML" },
    { node: <SiCss3 size={48} className="text-electric-purple" />, title: "CSS" },
    { node: <SiTailwindcss size={48} className="text-electric-purple" />, title: "Tailwind CSS" },
    { node: <SiReact size={48} className="text-electric-purple" />, title: "React" },
    { node: <SiFlutter size={48} className="text-electric-purple" />, title: "Flutter" },
    { node: <SiFlask size={48} className="text-pink-500" />, title: "Flask" },
    { node: <SiDjango size={48} className="text-pink-500" />, title: "Django" },
    { node: <SiNodedotjs size={48} className="text-pink-500" />, title: "Node.js" },
    { node: <SiSqlite size={48} className="text-yellow-400" />, title: "SQLite" },
    { node: <SiPostgresql size={48} className="text-yellow-400" />, title: "PostgreSQL" },
    { node: <SiGit size={48} className="text-green-400" />, title: "Git" },
    { node: <SiGithub size={48} className="text-green-400" />, title: "GitHub" },
    { node: <SiGooglecloud size={48} className="text-green-400" />, title: "Google Cloud" },
    { node: <SiVercel size={48} className="text-green-400" />, title: "Vercel" },
    { node: <SiDocker size={48} className="text-green-400" />, title: "Docker" },
    { node: <SiTensorflow size={48} className="text-red-400" />, title: "TensorFlow" },
    { node: <SiOpencv size={48} className="text-red-400" />, title: "OpenCV" },
    { node: <SiOpenai size={48} className="text-red-400" />, title: "OpenAI" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-10">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={48}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#0b0b0b"
            ariaLabel="Technical Skills"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;