import React from 'react';
// import styles from './Footer.module.css'; // No longer needed if all styles are inline or default

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-8 text-center">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Vaishnav. All rights reserved.</p> {/* Default text styles apply */}
                <p className="text-sm mt-2">Built with passion and Next.js friendly HTML/Tailwind.</p>
            </div>
        </footer>
    );
};

export default Footer; 