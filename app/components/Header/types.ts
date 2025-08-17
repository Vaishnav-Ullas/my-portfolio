import { RefObject } from 'react';

export interface HeaderProps {
    aboutRef: RefObject<HTMLElement | null>;
    timelineRef: RefObject<HTMLElement | null>;
    projectsRef: RefObject<HTMLElement | null>;
    contactRef: RefObject<HTMLElement | null>;
}

export interface NavigationItem {
    label: string;
    ref: RefObject<HTMLElement | null>;
}

export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navigationItems: NavigationItem[];
    onNavClick: (ref: RefObject<HTMLElement | null>) => void;
}
