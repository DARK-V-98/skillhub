
'use client';

import { useState, useEffect, RefObject } from 'react';

export function useScrollAnimation(ref: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to animate when scrolling into view from the top or bottom
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when out of view
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isVisible;
}
