import React, { forwardRef } from 'react';
// import styles from './Contact.module.css'; // No longer needed if all styles are inline
const email = 'vaishnavullas98@gmail.com';
const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="contact" ref={ref} className="py-16 bg-gray-800 relative z-10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Collaborate?</h2>
                <p className="text-xl text-gray-200 mb-8">
                    I&apos;m always open to new opportunities and interesting projects. Let&apos;s build something amazing together!
                </p>
                <a
                    href={`mailto:${email}`}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact; 