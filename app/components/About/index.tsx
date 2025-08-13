import React, { forwardRef } from 'react';
import SkillsSection from '../Skills';
// import styles from './About.module.css'; // No longer needed if all styles are inline

const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="about" ref={ref} className="py-16 bg-gray-950 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-10">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                        <SkillsSection />
                    </div>
                    <div className="md:order-1">
                        <p className="text-lg text-gray-200 mb-4 text-justify">
                            As a software developer with a Master's degree and over two years of professional experience, 
                            my journey is driven by curiosity and defined by code. I specialize in engineering elegant solutions
                            to complex challenges, consistently building robust, scalable, and highly interactive and responsive 
                            web applications from concept to deployment.
                        </p>
                        <p className="text-lg text-gray-200 mb-4 text-justify">
                            I specialise in full-stack development, particularly with Next.js, 
                            React, and Node.js but I'm always ready to pick up new technologies 
                            to fit a project's unique challenges. Ultimately, I strive to craft 
                            code that's not just functional but also creates intuitive and engaging 
                            digital experiences that leave a lasting impression.
                        </p>
                        <p className="text-lg text-gray-200 mb-4 text-justify">
                            I'm always eager to connect with others to build exceptional digital experiences. 
                            If you have an opening that might be a good fit, 
                            let's connect and explore the possibilities
                        </p>
                        <div className="text-center md:text-left">
                            <a href="#contact" className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Let's Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About; 