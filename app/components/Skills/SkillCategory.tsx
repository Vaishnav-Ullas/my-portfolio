import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategoryProps } from './types';
import { SkillBadge } from './SkillBadge';

export const SkillCategory: React.FC<SkillCategoryProps> = ({ 
    title, 
    skills, 
    variants, 
    skillVariants 
}) => {
    return (
        <motion.div 
            className=""
            variants={variants}
        >
            <h4 className="text-xl font-semibold text-gray-200 mb-3">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <SkillBadge 
                        key={skill.name}
                        skill={skill}
                        variants={skillVariants}
                    />
                ))}
            </div>
        </motion.div>
    );
};
