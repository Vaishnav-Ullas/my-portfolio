import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useScrollToSection } from '@/app/hooks/useScrollToSection';
import type { HeroProps } from './types';

export const HeroButtons: React.FC<HeroProps> = ({ projectsRef, contactRef }) => {
    const { scrollToSection } = useScrollToSection();

    return (
        <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
            <motion.button 
                onClick={() => scrollToSection(projectsRef)} 
                className="relative px-8 py-4 text-lg rounded-xl font-semibold overflow-hidden group"
                style={{
                    background: 'linear-gradient(to right, #2563eb, #9333ea)',
                    boxShadow: '0 4px 15px rgba(96, 165, 250, 0.2)'
                }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Icon icon="line-md:cloud-alt-tags-filled-loop" className="w-5 h-5 mr-2 inline-block" />
                View My Work
            </motion.button>
            
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <button 
                    className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center"
                >
                    <Icon icon="line-md:download-loop" className="w-5 h-5 mr-2" />
                    Download CV
                </button>
            </motion.div>
        </motion.div>
    );
};
