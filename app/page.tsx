// app/page.tsx
'use client'; // This directive is needed for client-side interactivity like our JS scroll/typing effects

import React, { useRef, useEffect, RefObject } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
    const aboutRef = useRef<HTMLElement | null>(null);
    const timelineRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);
    const contactRef = useRef<HTMLElement | null>(null);

    // useEffect for smooth scrolling is removed as Header will handle it.

    return (
        <>
            <Header 
                aboutRef={aboutRef as RefObject<HTMLElement>} 
                timelineRef={timelineRef as RefObject<HTMLElement>} 
                projectsRef={projectsRef as RefObject<HTMLElement>} 
                contactRef={contactRef as RefObject<HTMLElement>} 
            />
            <main>
                <Hero /> {/* Hero section typically does not need a ref for nav scrolling */}
                <About ref={aboutRef} />
                <Timeline ref={timelineRef} />
                <Projects ref={projectsRef} />
                <Contact ref={contactRef} />
            </main>
            <Footer />
        </>
    );
}