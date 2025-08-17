import React from 'react';
import { NavigationItem } from './types';
import styles from './Header.module.css';

interface DesktopNavigationProps {
    navigationItems: NavigationItem[];
    onNavClick: (ref: NavigationItem['ref']) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ 
    navigationItems, 
    onNavClick 
}) => {
    return (
        <nav className="hidden md:block">
            <ul className="flex space-x-6">
                {navigationItems.map((item) => (
                    <li key={item.label}>
                        <button 
                            onClick={() => onNavClick(item.ref)} 
                            className={`${styles.navButton} text-gray-300 hover:text-blue-400 font-medium bg-transparent border-none cursor-pointer transition-colors duration-200`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
