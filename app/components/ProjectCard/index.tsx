import React from 'react';
import Image from 'next/image';
// import styles from './ProjectCard.module.css'; // No longer needed if all styles are inline

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string | any;
    imageAlt?: string;
    link?: string;
}

const ProjectCard = ({ title, description, image, imageAlt = 'Project Preview', link = '#' }: ProjectCardProps) => {
    console.log(image);
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative">
                {image?.src ? (
                    <Image 
                        src={image?.src ? image.src : null} 
                        alt={imageAlt} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <span className="text-gray-400">{imageAlt}</span>
                )}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            {/* <a href={link} className="text-blue-400 hover:underline text-sm font-medium">View Details →</a> */}
        </div>
    );
};

export default ProjectCard; 