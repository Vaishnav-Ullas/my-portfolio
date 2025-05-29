import React, { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        // Typing animation for Vaishnav's name
        const typedNameSpan = document.getElementById('typed-name');
        const cursorSpan = document.getElementById('cursor');
        const nameToType = "Vaishnav!";
        let charIndex = 0;
        const typingSpeed = 150; // milliseconds per character

        function typeName() {
            if (typedNameSpan && charIndex < nameToType.length) {
                typedNameSpan.textContent += nameToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeName, typingSpeed);
            } else if (cursorSpan) {
                cursorSpan.style.display = 'none'; // Hide cursor after typing is complete
            }
        }

        // Start typing animation
        typeName();
    }, []);

    return (
        <section id="hero" className="bg-gray-800 py-20 text-center min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Hi, I'm <span id="typed-name"></span>
                    <span id="cursor" className="typing-cursor text-blue-400">|</span>
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                    A passionate **Full-Stack Developer** crafting seamless and impactful digital experiences.
                </p>
                <div className="space-x-4">
                    <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                        View My Work
                    </a>
                    <a href="#contact" className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 