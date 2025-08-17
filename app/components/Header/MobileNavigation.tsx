import React from 'react';
import { MobileMenuProps } from './types';

export const MobileNavigation: React.FC<MobileMenuProps> = ({ 
    isOpen, 
    onClose, 
    navigationItems, 
    onNavClick 
}) => {
    const handleNavClick = (ref: MobileMenuProps['navigationItems'][0]['ref']) => {
        onNavClick(ref);
        onClose();
    };

    return (
        <div className={`md:hidden absolute top-full left-0 w-full bg-gray-950 shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}>
            <nav className="container mx-auto px-4 py-4">
                <ul className="space-y-4">
                    {navigationItems.map((item) => (
                        <li key={item.label}>
                            <button 
                                onClick={() => handleNavClick(item.ref)} 
                                className="w-full text-left text-gray-300 hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
