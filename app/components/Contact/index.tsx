import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
// import styles from './Contact.module.css'; // No longer needed if all styles are inline

const email = 'vaishnavullas98@gmail.com';

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="contact" ref={ref} className="py-16 bg-gray-800 relative z-10">
            <div className="container mx-auto px-4 text-center">
                <motion.h2 
                    className="text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Ready to Collaborate?
                </motion.h2>
                <motion.p 
                    className="text-xl text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    I&apos;m always open to new opportunities and interesting projects. Let&apos;s build something amazing together!
                </motion.p>
                <motion.a
                    href={`mailto:${email}`}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 17 
                    }}
                >
                    Say Hello
                </motion.a>
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact; 