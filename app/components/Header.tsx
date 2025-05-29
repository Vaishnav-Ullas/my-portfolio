import React, { RefObject } from 'react';

interface HeaderProps {
    aboutRef: RefObject<HTMLElement>;
    timelineRef: RefObject<HTMLElement>;
    projectsRef: RefObject<HTMLElement>;
    contactRef: RefObject<HTMLElement>;
}

const Header = ({ aboutRef, timelineRef, projectsRef, contactRef }: HeaderProps) => {
    const scrollToSection = (ref: RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-gray-950 shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Vaishnav</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <button onClick={() => scrollToSection(aboutRef)} className="text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(timelineRef)} className="text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer">
                                Timeline
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(projectsRef)} className="text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer">
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(contactRef)} className="text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer">
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