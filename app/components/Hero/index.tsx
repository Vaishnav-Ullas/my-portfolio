'use client';

import React, { forwardRef } from 'react';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';
import { AnimatedBackground } from './AnimatedBackground';
import { ScrollIndicator } from './ScrollIndicator';
import type { HeroProps } from './types';

const Hero = forwardRef<HTMLElement, HeroProps>(({ projectsRef }, ref) => {
    return (
        <section id="hero" ref={ref} className="bg-gray-800 h-screen pt-16 flex flex-col justify-center items-center relative">
            {/* Beautiful animated background */}
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center flex-1">
                <HeroTitle />
                <HeroDescription />
                <HeroButtons projectsRef={projectsRef} />
            </div>
            
            {/* Animated scroll indicator */}
            <ScrollIndicator />
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;