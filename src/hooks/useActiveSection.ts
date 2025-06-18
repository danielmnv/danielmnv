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
    const handleScroll = () => {
      // Get all sections and their title containers
      const sections = document.querySelectorAll<HTMLElement>('section[id]');

      // Get current scroll position with offset for the header
      const scrollPosition = window.scrollY + 100;

      // Find the current section
      for (const section of sections) {
        const titleContainer = section.querySelector<HTMLElement>('div:first-child');
        if (!titleContainer) continue;

        const titleBottom = titleContainer.offsetTop + titleContainer.offsetHeight;

        // When scrolling down, show section name after passing its title
        if (scrollPosition > titleBottom) {
          setActiveSection(getSectionName(section.id));
          continue;
        }

        // When scrolling up and reaching a title, clear the section name
        if (scrollPosition <= titleBottom) {
          const sectionName = getSectionName(section.id);

          if (sectionName === activeSection) {
            setActiveSection(null);
          }
          break;
        }
      }

      // If we're at the very top of the page, clear the active section
      if (window.scrollY < 50) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Add activeSection as dependency since we use it in the callback

  return activeSection;
}
