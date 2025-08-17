'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import AnimatedBackground from './AnimatedBackground';

interface HeroProps {
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ projectsRef, contactRef }, ref) => {
    const [text, setText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const { scrollToSection } = useScrollToSection();

    useEffect(() => {
        const titles = ["Full-Stack Developer", "Tech Enthusiast", "Lifelong Learner", "Photographer"];
        const currentTitle = titles[titleIndex];
        let timeoutId: NodeJS.Timeout;

        if (isDeleting) {
            if (text.length > 0) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length - 1));
                }, 100);
            } else {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }
        } else {
            if (text.length < currentTitle.length) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length + 1));
                }, 150);
            } else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [text, isDeleting, titleIndex]);

    return (
        <section id="hero" ref={ref} className="bg-gray-800 py-20 text-center min-h-screen flex flex-col justify-center items-center relative">
            {/* Beautiful animated background */}
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.h1 
                    className="text-4xl md:text-5xl font-poppins font-extrabold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Hello, I&apos;m Vaishnav!
                    <br />
                    A <motion.span 
                        className="gradient-text-hover bg-clip-text text-transparent"
                        key={text}
                        initial={{ opacity: 1, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        transition={{ 
                            duration: 0.5, 
                            ease: "easeOut" as const,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                    >
                        {text}
                    </motion.span>
                    <span className="gradient-text">|</span>
                </motion.h1>
                
                <motion.p 
                    className="text-xl text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Continuously learning, Constantly building, Always evolving!
                </motion.p>
                
                <motion.div 
                    className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <motion.button 
                        onClick={() => scrollToSection(projectsRef)} 
                        className="relative px-8 py-4 text-lg rounded-xl font-semibold overflow-hidden group inline-flex items-center"
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
                        <Icon icon="material-symbols:code" className="w-5 h-5 mr-2" />
                        View My Work
                    </motion.button>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button 
                            className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center"
                        >
                            <Icon icon="material-symbols:download" className="w-5 h-5 mr-2" />
                            Download CV
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero; 