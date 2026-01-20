import { ThemeToggle } from '@/components/ThemeToggle';
import { useActiveSection } from '@/hooks/useActiveSection';
import { AnimatePresence, motion } from 'motion/react';
import classNames from 'classnames';
import { useEffect, useState, type PropsWithChildren } from 'react';

export function MobileMenu({ children }: PropsWithChildren) {
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      // Show menu when we've scrolled well past the header content
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={classNames(
        'bg-background/60 fixed top-4 left-1/2 z-50 w-[calc(100%-3rem)] max-w-3xl -translate-x-1/2 rounded-2xl border border-neutral-100/20 shadow-lg backdrop-blur transition-all duration-300 ease-in-out md:w-[calc(100%-6rem)] lg:hidden',
        {
          '-translate-y-20': !isVisible,
          'translate-y-0': isVisible,
        }
      )}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Logo */}
          {children}

          {/* Active section */}
          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <span className="bg-primary bg-clip-text text-base font-bold text-transparent">
                  {activeSection}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
