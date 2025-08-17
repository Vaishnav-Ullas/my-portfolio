import React, { useState } from 'react';
import { Logo } from './Logo';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileNavigation } from './MobileNavigation';
import { useScrollDetection } from './hooks/useScrollDetection';
import { SCROLL_THRESHOLD } from './constants';
import type { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ 
    aboutRef, 
    timelineRef, 
    projectsRef, 
    contactRef 
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isScrolled = useScrollDetection(SCROLL_THRESHOLD);

    // Create navigation items with refs
    const navigationItems = [
        { label: 'About', ref: aboutRef },
        { label: 'Timeline', ref: timelineRef },
        { label: 'Projects', ref: projectsRef },
        { label: 'Contact', ref: contactRef }
    ];

    const handleNavClick = (ref: HeaderProps[keyof HeaderProps]) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const headerClassName = `fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        isScrolled 
            ? 'bg-gray-950 shadow-sm' 
            : 'md:bg-transparent bg-gray-950 shadow-sm'
    }`;

    return (
        <header className={headerClassName}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Logo />
                
                <DesktopNavigation 
                    navigationItems={navigationItems}
                    onNavClick={handleNavClick}
                />

                <MobileMenuButton 
                    isOpen={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                />
            </div>

            <MobileNavigation
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navigationItems={navigationItems}
                onNavClick={handleNavClick}
            />
        </header>
    );
};

export default Header;
