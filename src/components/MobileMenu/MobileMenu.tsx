import './MobileMenu.css';
import { Logo } from '@/components/Logo/Logo';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { useActiveSection } from '@/hooks/useActiveSection';
import { AnimatePresence, motion } from 'motion/react';
import classNames from 'classnames';

export function MobileMenu({ isVisible }: { isVisible: boolean }) {
  const activeSection = useActiveSection();

  return (
    <div
      className={classNames('mobile-menu', {
        visible: isVisible,
      })}
    >
      <div className="mobile-menu-content">
        <div className="mobile-menu-left">
          <Logo className="mobile-menu-logo" />
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
                <span className="mobile-menu-active-section">{activeSection}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
