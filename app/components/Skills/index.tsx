'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from './skillsData';
import { SkillCategory } from './SkillCategory';
import { containerVariants, categoryVariants, skillVariants } from './animations';

const SkillsSection = () => {
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
                {Object.entries(skillsData).map(([category, skills]) => (
                    <SkillCategory
                        key={category}
                        title={category}
                        skills={skills}
                        variants={categoryVariants}
                        skillVariants={skillVariants}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsSection;