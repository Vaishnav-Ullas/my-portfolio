import React, { useEffect, useRef, createRef, forwardRef } from 'react';
import { timelineData } from '../../data/timelineData';
import styles from './Timeline.module.css';

const Timeline = forwardRef<HTMLElement>((props, sectionRef) => {
    const itemRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
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
                    entry.target.classList.add(styles.timelineItemBoxVisible);
                } else {
                    entry.target.classList.remove(styles.timelineItemBoxVisible);
                }
            });
        }, observerOptions);

        const currentItemRefs = itemRefs.current;
        currentItemRefs.forEach(itemRef => {
            if (itemRef.current) {
                observer.observe(itemRef.current);
            }
        });

        return () => {
            currentItemRefs.forEach(itemRef => {
                if (itemRef.current) {
                    observer.unobserve(itemRef.current);
                }
            });
        };
    }, []);

    return (
        <section id="timeline" ref={sectionRef} className="py-16 bg-gray-900 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-10">My Journey</h2>
                <p className="text-center text-gray-200 mb-12">
                    Follow my professional journey from past to present. This overview showcases my career progression and the development of the skills and expertise I bring to every project.
                </p>
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"></div>
                    <div id="timeline-events" className="space-y-16 py-8">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const entryClasses = `flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`;
                            const contentWrapperClasses = `w-full md:w-1/2 relative ${isEven ? 'md:pr-10' : 'md:pl-10'}`;

                            return (
                                <div key={item.year + item.title} className={entryClasses}>
                                    <div className={contentWrapperClasses}>
                                        <div
                                            ref={itemRefs.current[index]}
                                            className={`${styles.timelineItemBox} ${isEven ? styles.left : styles.right} bg-gray-800 p-6 rounded-lg shadow-lg`}
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