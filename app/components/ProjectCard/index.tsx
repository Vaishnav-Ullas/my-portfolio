import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
}

const ProjectCard = ({ title, description, image, imageAlt = 'Project Preview' }: ProjectCardProps) => {
    return (
        <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                {image?.src ? (
                    <Image 
                        src={image.src} 
                        alt={imageAlt} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <span className="text-gray-400">{imageAlt}</span>
                )}
            </motion.div>
            <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.2 }}
            >
                {title}
            </motion.h3>
            <motion.p 
                className="text-gray-300 text-sm mb-4"
                whileHover={{ color: "#E5E7EB" }}
                transition={{ duration: 0.2 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default ProjectCard; 