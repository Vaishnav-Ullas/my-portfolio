import React, { forwardRef } from 'react';
// import styles from './About.module.css'; // No longer needed if all styles are inline

const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="about" ref={ref} className="py-16 bg-gray-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-10">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                        <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                            [Placeholder for Profile Picture or a relevant diagram/icon]
                        </div>
                    </div>
                    <div className="md:order-1">
                        <p className="text-lg text-gray-200 mb-4">
                            As a <strong>Full-Stack Developer</strong>, Vaishnav thrives on turning complex challenges into elegant solutions. With a strong foundation in both front-end aesthetics and back-end logic, Vaishnav builds robust and user-friendly applications that drive engagement and deliver real value.
                        </p>
                        <p className="text-lg text-gray-200 mb-4">
                            Specializing in technologies that bring ideas to life, Vaishnav is dedicated to writing clean, efficient, and scalable code. With expertise in modern web technologies and a passion for creating seamless user experiences, every project is an opportunity to innovate and excel.
                        </p>
                        <p className="text-lg text-gray-200">
                            This section showcases key skills, professional journey, and unique problem-solving approaches, highlighting a commitment to continuous learning and technological innovation.
                        </p>
                        <a href="#contact" className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About; 