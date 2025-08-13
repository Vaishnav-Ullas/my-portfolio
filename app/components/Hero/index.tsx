import React, { forwardRef, useEffect, useState, useCallback, RefObject } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import styles from './Hero.module.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const particlesConfig = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: false,
      },
      resize: {
        enable: false,
      }
    },
    modes: {
      repulse: {
        distance: 30,
        speed: 0.25,
        duration: 1.5,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      enable: false,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: {
        default: "out" as const,
      },
      random: false,
      speed: .5,
      straight: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 1000,
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle" as const,
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

interface HeroProps {
    projectsRef: RefObject<HTMLElement | null>;
    contactRef: RefObject<HTMLElement | null>;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ projectsRef, contactRef }, ref) => {
    const [text, setText] = useState('');
    const titles = ["Full-Stack Developer", "Tech Enthusiast", "Lifelong Learner", "Photographer"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const { scrollToSection } = useScrollToSection();

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        let timeoutId: NodeJS.Timeout;

        if (isDeleting) {
            if (text.length > 0) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length - 1));
                }, 100);
            } else {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                setCharIndex(0); 
            }
        } else {
            if (text.length < currentTitle.length) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length + 1));
                }, 150);
            } else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [text, isDeleting, titleIndex, titles]);

    return (
        <section id="hero" ref={ref} className="bg-gray-800 py-20 text-center min-h-screen flex flex-col justify-center items-center relative">
             <Particles
                id="tsparticles-hero"
                init={particlesInit}
                options={particlesConfig as any}
                className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-4xl md:text-5xl font-poppins font-extrabold text-white mb-4">
                    Hello, I'm Vaishnav!
                    <br />
                    A <span className="text-blue-400">{text}</span>
                    <span className={`typing-cursor text-blue-400 ${styles.cursor}`}>|</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Continuously learning, Constantly building, Always evolving!
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
                    <button 
                        onClick={() => scrollToSection(projectsRef)} 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        View My Work
                    </button>
                    <button 
                        onClick={() => scrollToSection(contactRef)} 
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