import React, { forwardRef } from 'react';
import ProjectCard from '../ProjectCard'; // Path is now ../ProjectCard/index.tsx
// import styles from './Projects.module.css'; // No longer needed if all styles are inline

const Projects = forwardRef<HTMLElement>((props, ref) => {
    const projects = [
        {
            title: 'Project Title One',
            description: 'A brief description of this exciting project, highlighting key technologies used and the problem it solved.',
            imageAlt: 'Project 1 Placeholder',
            link: '#'
        },
        {
            title: 'Project Title Two',
            description: 'Another impactful project with a focus on [Key Aspect] and its successful outcome, demonstrating a specific skill.',
            imageAlt: 'Project 2 Placeholder',
            link: '#'
        },
        {
            title: 'Project Title Three',
            description: 'Showcasing innovative solutions and clean code practices in this application, perhaps for a specific industry.',
            imageAlt: 'Project 3 Placeholder',
            link: '#'
        }
    ];

    return (
        <section id="projects" ref={ref} className="py-16 bg-gray-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-10">My Projects</h2>
                <p className="text-center text-gray-200 mb-8">
                    This section features a collection of my best work, demonstrating my skills and experience in various technologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageAlt={project.imageAlt}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects; 