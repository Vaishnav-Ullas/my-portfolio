import React from 'react';
import { motion } from 'framer-motion';

export const HeroDescription = () => {
    return (
        <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
            Continuously learning, Constantly building, Always evolving!
        </motion.p>
    );
};
