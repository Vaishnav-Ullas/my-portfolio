import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from './hooks/useTypingEffect';

export const HeroTitle = () => {
    const { text } = useTypingEffect();

    return (
        <motion.h1 
            className="text-4xl md:text-5xl font-poppins font-extrabold text-white text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            Hello, I&apos;m Vaishnav!
            <br />
            A <motion.span 
                className="gradient-text"
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
    );
};
