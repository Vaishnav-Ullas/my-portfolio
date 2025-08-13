import React, { RefObject } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    aboutRef: RefObject<HTMLElement | null>; // Adjusted to match page.tsx refs
    timelineRef: RefObject<HTMLElement | null>;
    projectsRef: RefObject<HTMLElement | null>;
    contactRef: RefObject<HTMLElement | null>;
}

const Header = ({ aboutRef, timelineRef, projectsRef, contactRef }: HeaderProps) => {
    const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-gray-950 shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-black text-white font-dancing-script">Vaishnav</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <button 
                                onClick={() => scrollToSection(aboutRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer`}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection(timelineRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer`}
                            >
                                Timeline
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection(projectsRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer`}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection(contactRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer`}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; 