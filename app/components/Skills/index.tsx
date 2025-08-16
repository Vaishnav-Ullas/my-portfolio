import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
    "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3 / SCSS"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
    "Tools & Platforms": ["Git & GitHub", "Docker", "Vercel", "Jira", "Figma"],
    "Testing": ["Jest", "React Testing Library", "Cypress"]
};

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full h-full bg-gray-800 rounded-lg p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-3xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Skills & Expertise
      </motion.h3>
      <div className="space-y-6">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div 
            key={category} 
            className=""
            variants={categoryVariants}
          >
            <h4 className="text-xl font-semibold text-gray-200 mb-3">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md shadow-sm hover:bg-gray-600 transition-all duration-300 cursor-default"
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#4B5563"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection; 