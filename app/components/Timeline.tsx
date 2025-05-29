import React, { useEffect, useRef, createRef, forwardRef } from 'react';
import { timelineData } from '../data/timelineData';

// The main Timeline component, already a forwardRef for page-level scrolling
const Timeline = forwardRef<HTMLElement>((props, sectionRef) => {
    // Create an array of refs for individual timeline items
    const itemRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
    // Populate the refs array, ensuring it matches the length of timelineData
    if (itemRefs.current.length !== timelineData.length) {
        itemRefs.current = timelineData.map((_, i) => itemRefs.current[i] ?? createRef<HTMLDivElement>());
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
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

        const currentItemRefs = itemRefs.current;
        currentItemRefs.forEach(itemRef => {
            if (itemRef.current) {
                observer.observe(itemRef.current);
            }
        });

        // Cleanup observer on component unmount
        return () => {
            currentItemRefs.forEach(itemRef => {
                if (itemRef.current) {
                    observer.unobserve(itemRef.current);
                }
            });
        };
    }, []); // Empty dependency array: effect runs once on mount, cleans up on unmount.

    return (
        <section id="timeline" ref={sectionRef} className="py-16 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-10">My Journey</h2>
                <p className="text-center text-gray-200 mb-12">
                    Explore key milestones and experiences in my professional journey. As you scroll, details about each year will gracefully appear, providing a chronological overview of my growth and contributions.
                </p>
                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Central Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

                    <div id="timeline-events" className="space-y-16 py-8">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.year + item.title} className={`flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10'} relative`}>
                                        {/* This is the div that gets animated and needs the ref */}
                                        <div
                                            ref={itemRefs.current[index]}
                                            className="bg-gray-800 p-6 rounded-lg shadow-lg timeline-item"
                                        >
                                            <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.year}</h3>
                                            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-300">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
});

Timeline.displayName = 'Timeline';

export default Timeline; 