import React from 'react';
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
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative">
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
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
        </div>
    );
};

export default ProjectCard; 