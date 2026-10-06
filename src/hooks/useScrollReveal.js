import { useEffect } from 'react';

/**
 * Custom hook to initialize smooth intersection observer for scroll reveal animations.
 * Features:
 * - Triggers once when entering viewport (unobserve).
 * - Smooth threshold and rootMargin so animations begin just as elements enter view.
 * - Zero layout shift and zero reflow jitter.
 */
export const useScrollReveal = (deps = []) => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Execute once per element!
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal:not(.is-revealed)');

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, deps);
};
