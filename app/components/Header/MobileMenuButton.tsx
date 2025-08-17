import React from 'react';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ 
    isOpen, 
    onClick 
}) => {
    return (
        <button 
            onClick={onClick}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white hover:text-blue-400 transition-colors duration-200"
            aria-label="Toggle mobile menu"
        >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
    );
};
