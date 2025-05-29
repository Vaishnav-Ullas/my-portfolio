// app/page.tsx
'use client'; // This directive is needed for client-side interactivity like our JS scroll/typing effects

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Timeline data (copy from the script block in the HTML)
        const timelineData = [
            {
                year: '2018',
                title: 'Graduated University',
                description: 'Completed my Bachelor\'s degree in Computer Science, gaining foundational knowledge in algorithms, data structures, and software engineering principles.'
            },
            {
                year: '2019',
                title: 'First Developer Role',
                description: 'Joined [Company A] as a Junior Frontend Developer, focusing on building responsive user interfaces with React and learning best practices in web development.'
            },
            {
                year: '2020',
                title: 'Became a Full-Stack Contributor',
                description: 'Transitioned to a Full-Stack role at [Company A], expanding my expertise to Node.js backend development, database management, and API design.'
            },
            {
                year: '2022',
                title: 'Led Key Project at [Company B]',
                description: 'Moved to [Company B] and took on a leadership role for a critical project, overseeing its full development lifecycle from conception to deployment, utilizing Next.js and serverless functions.'
            },
            {
                year: '2024',
                title: 'Explored AI/ML Integration',
                description: 'Began integrating AI/ML models into web applications, exploring new ways to enhance user experiences and automate complex processes.'
            },
            {
                year: 'Present',
                title: 'Seeking New Challenges',
                description: 'Continuously learning and seeking innovative opportunities to apply my full-stack expertise and passion for building impactful digital solutions.'
            }
        ];

        const timelineEventsContainer = document.getElementById('timeline-events');
        if (timelineEventsContainer) {
            // Clear existing content to prevent duplicates on re-renders if this were a full React component
            timelineEventsContainer.innerHTML = '';
            // Dynamically create timeline items
            timelineData.forEach((item, index) => {
                const isEven = index % 2 === 0;
                const itemHtml = `
                    <div class="flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}">
                        <div class="w-full md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10'} relative">
                            <div class="bg-gray-800 p-6 rounded-lg shadow-lg timeline-item">
                                <h3 class="text-2xl font-bold text-blue-400 mb-2">${item.year}</h3>
                                <h4 class="text-xl font-semibold text-white mb-2">${item.title}</h4>
                                <p class="text-gray-300">${item.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                timelineEventsContainer.insertAdjacentHTML('beforeend', itemHtml);
            });
        }

        // Intersection Observer for scroll animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Trigger when 20% of the item is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    // Optional: remove 'is-visible' when out of view to re-trigger on scroll back
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => {
            observer.observe(item);
        });

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

        // Cleanup observer on component unmount (important for React)
        return () => {
            timelineItems.forEach(item => observer.unobserve(item));
        };
    }, []); // Empty dependency array means this runs once after initial render

    return (
        <>
            {/* Header Section */}
            <header className="bg-gray-950 shadow-sm py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Vaishnav</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#about" className="text-gray-300 hover:text-blue-400 font-medium">About</a></li>
                            <li><a href="#timeline" className="text-gray-300 hover:text-blue-400 font-medium">Timeline</a></li>
                            <li><a href="#projects" className="text-gray-300 hover:text-blue-400 font-medium">Projects</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-blue-400 font-medium">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="hero" className="bg-gray-800 py-20 text-center min-h-screen flex flex-col justify-center items-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Hi, I'm <span id="typed-name"></span><span id="cursor" className="typing-cursor text-blue-400">|</span></h2>
                        <p className="text-xl text-gray-200 mb-8">A passionate **Full-Stack Developer** crafting seamless and impactful digital experiences.</p>
                        <div className="space-x-4">
                            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">View My Work</a>
                            <a href="#contact" className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300">Get in Touch</a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 bg-gray-950">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white text-center mb-10">About Me</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="md:order-2">
                                <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                                    [Placeholder for Profile Picture or a relevant diagram/icon]
                                </div>
                            </div>
                            <div className="md:order-1">
                                <p className="text-lg text-gray-200 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <p className="text-lg text-gray-200 mb-4">
                                    As a **Full-Stack Developer**, Vaishnav thrives on turning complex challenges into elegant solutions. With a strong foundation in both front-end aesthetics and back-end logic, Vaishnav builds robust and user-friendly applications that drive engagement and deliver real value. Specializing in technologies that bring ideas to life, Vaishnav is dedicated to writing clean, efficient, and scalable code.
                                </p>
                                <p className="text-lg text-gray-200">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This section would typically elaborate on key skills, professional journey, and unique problem-solving approaches, showcasing a passion for continuous learning and technological innovation.
                                </p>
                                <a href="#contact" className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Let's Connect</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section id="timeline" className="py-16 bg-gray-900 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white text-center mb-10">My Journey</h2>
                        <p className="text-center text-gray-200 mb-12">
                            Explore key milestones and experiences in my professional journey. As you scroll, details about each year will gracefully appear, providing a chronological overview of my growth and contributions.
                        </p>
                        <div className="relative w-full max-w-4xl mx-auto">
                            {/* Central Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

                            <div id="timeline-events" className="space-y-16 py-8">
                                {/* Timeline items will be dynamically inserted here by JavaScript */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 bg-gray-950">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white text-center mb-10">My Projects</h2>
                        <p className="text-center text-gray-200 mb-8">This section would feature a grid of your best work, with thumbnails and brief descriptions.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                                <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">Project 1 Placeholder</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Project Title One</h3>
                                <p className="text-gray-300 text-sm mb-4">A brief description of this exciting project, highlighting key technologies used and the problem it solved.</p>
                                <a href="#" className="text-blue-400 hover:underline text-sm font-medium">View Details →</a>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                                <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">Project 2 Placeholder</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Project Title Two</h3>
                                <p className="text-gray-300 text-sm mb-4">Another impactful project with a focus on [Key Aspect] and its successful outcome, demonstrating a specific skill.</p>
                                <a href="#" className="text-blue-400 hover:underline text-sm font-medium">View Details →</a>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                                <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">Project 3 Placeholder</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Project Title Three</h3>
                                <p className="text-gray-300 text-sm mb-4">Showcasing innovative solutions and clean code practices in this application, perhaps for a specific industry.</p>
                                <a href="#" className="text-blue-400 hover:underline text-sm font-medium">View Details →</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 bg-gray-800">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Collaborate?</h2>
                        <p className="text-xl text-gray-200 mb-8">I'm always open to new opportunities and interesting projects. Let's build something amazing together!</p>
                        <a href="mailto:your.email@example.com" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300">Say Hello</a>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-950 text-gray-300 py-8 text-center">
                <div className="container mx-auto px-4">
                    <p>&copy; 2025 Vaishnav. All rights reserved.</p>
                    <p className="text-sm mt-2">Built with passion and Next.js friendly HTML/Tailwind.</p>
                </div>
            </footer>
        </>
    );
}