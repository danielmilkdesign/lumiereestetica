import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver.
 * - Accepts a threshold parameter (default 0.15), uses a ref.
 * - Observes the element; once isIntersecting is true, sets isVisible = true and unobserves (one-shot animation).
 * - Returns { ref, isVisible }.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
