import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import SkillsSection from '../Skills';
// import styles from './About.module.css'; // No longer needed if all styles are inline

const About = forwardRef<HTMLElement>((props, ref) => {
    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section id="about" ref={ref} className="py-16 bg-gray-950 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-3xl font-bold text-white text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    About Me
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="md:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <SkillsSection />
                    </motion.div>
                    <div className="md:order-1">
                        <motion.p 
                            className="text-lg text-gray-200 mb-4 text-justify"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            As a software developer with a Master&apos;s degree and over two years of professional experience, 
                            my journey is driven by curiosity and defined by code. I specialize in engineering elegant solutions
                            to complex challenges, consistently building robust, scalable, and highly interactive and responsive 
                            web applications from concept to deployment.
                        </motion.p>
                        <motion.p 
                            className="text-lg text-gray-200 mb-4 text-justify"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            I specialise in full-stack development, particularly with Next.js, 
                            React, and Node.js but I&apos;m always ready to pick up new technologies 
                            to fit a project&apos;s unique challenges. Ultimately, I strive to craft 
                            code that&apos;s not just functional but also creates intuitive and engaging 
                            digital experiences that leave a lasting impression.
                        </motion.p>
                        <motion.p 
                            className="text-lg text-gray-200 mb-4 text-justify"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            I&apos;m always eager to connect with others to build exceptional digital experiences. 
                            If you have an opening that might be a good fit, 
                            let&apos;s connect and explore the possibilities
                        </motion.p>
                        <motion.div 
                            className="text-center md:text-left"
                            variants={buttonVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.a 
                                href="#contact" 
                                className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 400, 
                                    damping: 17,
                                    delay: 0.2
                                }}
                            >
                                Let&apos;s Connect
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About; 