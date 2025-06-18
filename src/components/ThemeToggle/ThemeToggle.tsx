'use client';

import './ThemeToggle.css';
import { useTheme } from 'next-themes';
import { SunIcon } from '@/components/icons/SunIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="toggle-icon" data-testid="sun-icon" />
      ) : (
        <MoonIcon className="toggle-icon" data-testid="moon-icon" />
      )}
    </button>
  );
}
