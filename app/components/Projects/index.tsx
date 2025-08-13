import React, { forwardRef } from 'react';
import ProjectCard from '../ProjectCard'; // Path is now ../ProjectCard/index.tsx
// import styles from './Projects.module.css'; // No longer needed if all styles are inline
import ssd_failure from '../../../public/SSD_failure.png';
import portfolio from '../../../public/portfolio.png';
import code_complexity from '../../../public/code-complexity.jpg';
import image_annotation from '../../../public/Image_annotation_tool.png';

const Projects = forwardRef<HTMLElement>((props, ref) => {
    const projects = [
        {
            title: 'SSD Failure Detection',
            description: 'Analyze and improve conventional machine learning models to assess effectiveness in predicting failed solid-state drive(SSD) disks using historical SMART data.',
            image: ssd_failure,
            imageAlt: 'SSD Failure Detection',
            link: '#'
        },
        {
            title: 'Code Complexity Analyzer',
            description: 'A Python Program to calculate lines of code and complexity for each class in the given directory.',
            image: code_complexity,
            imageAlt: 'Code Complexity Analyzer',
            link: '#'
        },
        {
            title: 'Image Annotation Tool',
            description: 'Designed and developed a custom Image Annotation tool using Angular and JavaScript, utilizing HTML5 and Canvas to provide an efficient platform for annotating images',
            image: image_annotation,
            imageAlt: 'Image Annotation Tool',
            link: '#'
        },
        {
            title: 'Personal Portfolio',
            description: '',
            image: portfolio,
            imageAlt: 'Personal Portfolio',
            link: '#'
        }
    ];

    return (
        <section id="projects" ref={ref} className="py-16 bg-gray-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-10">My Projects</h2>
                <p className="text-center text-gray-200 mb-8">
                    A showcase of selected projects demonstrating expertise in building robust software solutions, strategic problem-solving, and functional design.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
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