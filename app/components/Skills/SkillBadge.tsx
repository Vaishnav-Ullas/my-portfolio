import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SkillBadgeProps } from './types';

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, variants }) => {
    return (
        <motion.span
            key={skill.name}
            className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md shadow-sm 
                     hover:bg-gray-600 transition-all duration-300 cursor-default flex items-center gap-2"
            variants={variants}
            whileHover={{ 
                scale: 1.05,
                backgroundColor: "#4B5563"
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Icon icon={skill.icon} className="w-4 h-4" />
            {skill.name}
        </motion.span>
    );
};
