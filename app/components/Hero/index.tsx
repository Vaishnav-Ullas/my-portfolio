'use client';

import React, { forwardRef } from 'react';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';
import { AnimatedBackground } from './AnimatedBackground';
import type { HeroProps } from './types';

const Hero = forwardRef<HTMLElement, HeroProps>(({ projectsRef, contactRef }, ref) => {
    return (
        <section id="hero" ref={ref} className="bg-gray-800 py-20 text-center min-h-screen flex flex-col justify-center items-center relative">
            {/* Beautiful animated background */}
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 relative z-10">
                <HeroTitle />
                <HeroDescription />
                <HeroButtons projectsRef={projectsRef} contactRef={contactRef} />
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;