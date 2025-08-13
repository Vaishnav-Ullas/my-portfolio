import { RefObject } from 'react';

export const useScrollToSection = () => {
    const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return { scrollToSection };
};
