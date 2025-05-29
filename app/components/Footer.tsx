import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-8 text-center">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Vaishnav. All rights reserved.</p>
                <p className="text-sm mt-2">Built with passion and Next.js friendly HTML/Tailwind.</p>
            </div>
        </footer>
    );
};

export default Footer; 