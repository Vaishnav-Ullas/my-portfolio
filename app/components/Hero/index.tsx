import React, { forwardRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
    executeScroll: (refName: string) => void;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ executeScroll }, ref) => {
    const [text, setText] = useState('');
    const titles = ["Full-Stack Developer", "Tech Enthusiast", "Lifelong Learner", "Photographer"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        let timeoutId: NodeJS.Timeout;

        if (isDeleting) {
            if (text.length > 0) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length - 1));
                }, 100); // Deleting speed
            } else {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                setCharIndex(0); 
            }
        } else {
            if (text.length < currentTitle.length) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length + 1));
                }, 150); // Typing speed
            } else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000); // Pause before deleting
            }
        }

        return () => clearTimeout(timeoutId);
    }, [text, isDeleting, titleIndex, titles]);

    return (
        <section id="hero" ref={ref} className="bg-gray-800 py-20 text-center min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Hello, I'm Vaishnav
                    <br />
                    I'm a <span className="text-blue-400">{text}</span>
                    <span className={`typing-cursor text-blue-400 ${styles.cursor}`}>|</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                    Crafting Digital Experiences, One Line of Code at a Time.
                </p>
                <div className="space-x-4">
                    <button 
                        onClick={() => executeScroll('projectsRef')} 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        View My Work
                    </button>
                    <button 
                        onClick={() => executeScroll('contactRef')} 
                        className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero; 