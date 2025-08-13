import React, { RefObject, useState } from 'react';
import styles from './Header.module.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface HeaderProps {
    aboutRef: RefObject<HTMLElement | null>;
    timelineRef: RefObject<HTMLElement | null>;
    projectsRef: RefObject<HTMLElement | null>;
    contactRef: RefObject<HTMLElement | null>;
}

const Header = ({ aboutRef, timelineRef, projectsRef, contactRef }: HeaderProps) => {
    const { scrollToSection } = useScrollToSection();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (ref: RefObject<HTMLElement | null>) => {
        scrollToSection(ref);
        setIsMobileMenuOpen(false); // Close mobile menu after clicking
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-950 shadow-sm py-4 relative z-20">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-black text-white font-dancing-script">Vaishnav</h1>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <button 
                                onClick={() => handleNavClick(aboutRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer transition-colors duration-200`}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavClick(timelineRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer transition-colors duration-200`}
                            >
                                Timeline
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavClick(projectsRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer transition-colors duration-200`}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavClick(contactRef)} 
                                className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer transition-colors duration-200`}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMobileMenu}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white hover:text-blue-400 transition-colors duration-200"
                    aria-label="Toggle mobile menu"
                >
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-gray-950 shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <nav className="container mx-auto px-4 py-4">
                    <ul className="space-y-4">
                        <li>
                            <button 
                                onClick={() => handleNavClick(aboutRef)} 
                                className="w-full text-left text-gray-300 hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavClick(timelineRef)} 
                                className="w-full text-left text-gray-300 hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
                            >
                                Timeline
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavClick(projectsRef)} 
                                className="w-full text-left text-gray-300 hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavClick(contactRef)} 
                                className="w-full text-left text-gray-300 hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
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