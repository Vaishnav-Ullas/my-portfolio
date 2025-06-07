import React, { useRef, useState, useEffect } from 'react';

const skillsData = {
    "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3 / SCSS"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
    "Tools & Platforms": ["Git & GitHub", "Docker", "Vercel", "Jira", "Figma"],
    "Testing": ["Jest", "React Testing Library", "Cypress"]
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-full bg-gray-800 rounded-lg p-6">
      <h3 className={`text-3xl font-bold text-white mb-6 text-center transition-all duration-700 ease-out ${isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-15px]'}`}>
        Skills & Expertise
      </h3>
      <div className="space-y-6">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={category} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${categoryIndex * 150}ms`}}>
            <h4 className="text-xl font-semibold text-gray-200 mb-3">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                 <span
                    key={skill}
                    className={`bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md shadow-sm hover:bg-gray-600 transition-all duration-300 cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${categoryIndex * 150 + (skillIndex + 1) * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 