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

    const executeScroll = (refName: string) => {
        let refToScroll: RefObject<HTMLElement | null> | null = null;
        if (refName === 'aboutRef') { // Hero doesn't scroll to about, but good to have for future
            refToScroll = aboutRef;
        } else if (refName === 'timelineRef') { // Hero doesn't scroll to timeline
            refToScroll = timelineRef;
        } else if (refName === 'projectsRef') {
            refToScroll = projectsRef;
        } else if (refName === 'contactRef') {
            refToScroll = contactRef;
        }

        if (refToScroll && refToScroll.current) {
            refToScroll.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header 
                aboutRef={aboutRef}
                timelineRef={timelineRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            <main>
                <Hero executeScroll={executeScroll} /> {/* Hero section typically does not need a ref for nav scrolling */}
                <About ref={aboutRef} />
                <Timeline ref={timelineRef} />
                <Projects ref={projectsRef} />
                <Contact ref={contactRef} />
            </main>
            <Footer />
        </>
    );
}