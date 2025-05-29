import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageAlt?: string;
    link?: string;
}

const ProjectCard = ({ title, description, imageAlt = 'Project Preview', link = '#' }: ProjectCardProps) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">
                {imageAlt}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            <a href={link} className="text-blue-400 hover:underline text-sm font-medium">View Details →</a>
        </div>
    );
};

export default ProjectCard; 