'use client';

import './ThemeToggle.css';
import { useTheme } from 'next-themes';
import { SunIcon } from '@/components/icons/SunIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';
import { SystemIcon } from '@/components/icons/SystemIcon';
import classNames from 'classnames';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-button-group">
      <button
        onClick={() => setTheme('system')}
        className={classNames('theme-button group', {
          active: theme === 'system',
        })}
        aria-label="System theme"
        title="System theme"
        data-testid="system-theme-button"
        tabIndex={0}
      >
        <SystemIcon className="button-icon" data-testid="system-icon" />
      </button>

      <button
        onClick={() => setTheme('light')}
        className={classNames('theme-button group', {
          active: theme === 'light',
        })}
        aria-label="Light theme"
        title="Light theme"
        data-testid="light-theme-button"
        tabIndex={0}
      >
        <SunIcon className="button-icon" data-testid="sun-icon" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={classNames('theme-button group', {
          active: theme === 'dark',
        })}
        aria-label="Dark theme"
        title="Dark theme"
        data-testid="dark-theme-button"
        tabIndex={0}
      >
        <MoonIcon className="button-icon" data-testid="moon-icon" />
      </button>
    </div>
  );
}
