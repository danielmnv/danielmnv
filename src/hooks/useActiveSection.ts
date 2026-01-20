import { useState, useEffect } from 'react';

function getSectionName(sectionId: string): string {
  return sectionId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function useActiveSection(): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // We only update if the section is entering the top 20% of the screen
        if (entry.isIntersecting) {
          setActiveSection(getSectionName(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      /* rootMargin: top right bottom left
         This margin 'shrinks' the detection area. 
         -20% from top means the trigger line is 20% down from the top of the screen.
         -75% from bottom means we ignore everything in the bottom 75% of the screen.
      */
      rootMargin: '-20% 0px -75% 0px',
      threshold: 0, // Trigger as soon as 1 pixel enters that thin strip
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    const handleTopScroll = () => {
      if (window.scrollY < 100) setActiveSection(null);
    };

    window.addEventListener('scroll', handleTopScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleTopScroll);
    };
  }, []);

  return activeSection;
}
