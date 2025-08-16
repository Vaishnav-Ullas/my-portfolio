'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
                        className="text-blue-400"
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
                    <span className="text-blue-400">|</span>
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
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        View My Work
                    </motion.button>
                    
                    <motion.button 
                        onClick={() => scrollToSection(contactRef)} 
                        className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero; 