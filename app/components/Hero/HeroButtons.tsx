import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useScrollToSection } from '@/app/hooks/useScrollToSection';
import type { HeroProps } from './types';

export const HeroButtons: React.FC<HeroProps> = ({ projectsRef }) => {
    const { scrollToSection } = useScrollToSection();

    const handleDownloadCV = () => {
        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = '/Vaishnav_T_Ullas.pdf';
        link.download = 'Vaishnav_T_Ullas_Resume.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'line-md:github-loop',
            url: 'https://github.com/Vaishnav-Ullas',
            color: 'hover:text-blue-400'
        },
        {
            name: 'LinkedIn',
            icon: 'line-md:linkedin',
            url: 'https://www.linkedin.com/in/vaishnavtullas/',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: 'line-md:email',
            url: 'mailto:vaishnavullas98@gmail.com',
            color: 'hover:text-blue-400'
        }
    ];

    return (
        <div className="space-y-6">
            <motion.div 
                className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                <motion.button 
                    onClick={() => scrollToSection(projectsRef)} 
                    className="relative px-8 py-4 text-lg rounded-xl font-semibold overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 17 
                    }}
                >
                    <Icon icon="line-md:cloud-alt-tags-filled-loop" className="w-5 h-5 mr-2 inline-block" />
                    View My Work
                </motion.button>
                
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 17 
                    }}
                >
                    <button 
                        onClick={handleDownloadCV}
                        className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center"
                    >
                        <Icon icon="line-md:download-loop" className="w-5 h-5 mr-2" />
                        Download CV
                    </button>
                </motion.div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-colors duration-300`}
                        whileHover={{ 
                            scale: 1.1,
                            y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 17 
                        }}
                        aria-label={`Visit ${social.name}`}
                    >
                        <Icon icon={social.icon} className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};
