import { useEffect, useRef } from 'react';

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

interface ObserverOptions extends IntersectionObserverInit {
  onIntersect: ObserverCallback;
}

export const useIntersectionObserver = (options: ObserverOptions) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const { onIntersect, ...observerOptions } = options;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry);
          // Optional: unobserve after first intersection
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return targetRef;
}; 