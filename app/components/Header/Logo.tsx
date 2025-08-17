import React from 'react';

export const Logo: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <h1 className="text-2xl md:text-3xl font-black font-dancing-script">
            <button 
                onClick={scrollToTop}
                className="hover:scale-105 transition-transform duration-200 cursor-pointer"
                aria-label="Scroll to top"
            >
                <span className="gradient-text">Vaishnav</span>
            </button>
        </h1>
    );
};
