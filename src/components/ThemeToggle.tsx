'use client';

import { SunIcon } from '@/icons/SunIcon';
import { MoonIcon } from '@/icons/MoonIcon';
import { SystemIcon } from '@/icons/SystemIcon';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  // Initialize state based on the class already on the document
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) setThemeState(savedTheme);
  }, []);

  const setTheme = (t: 'light' | 'dark' | 'system') => {
    setThemeState(t);
    const root = document.documentElement;

    if (t === 'system') {
      localStorage.removeItem('theme');
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', isDark);
    } else {
      localStorage.setItem('theme', t);
      root.classList.toggle('dark', t === 'dark');
    }
  };

  const buttonBaseClasses =
    'relative flex h-8 w-8 items-center justify-center text-neutral-400 transition-all duration-200 hover:text-neutral-500 active:scale-95';
  const buttonActiveClasses = 'bg-neutral-100/10 text-blue-500';

  return (
    <div className="flex w-fit rounded-lg border border-neutral-100/10 bg-transparent backdrop-blur-sm">
      <button
        onClick={() => setTheme('system')}
        className={classNames(buttonBaseClasses, 'rounded-l-lg', {
          [buttonActiveClasses]: theme === 'system',
        })}
      >
        <SystemIcon className="h-5 w-5" />
      </button>

      <button
        onClick={() => setTheme('light')}
        className={classNames(buttonBaseClasses, { [buttonActiveClasses]: theme === 'light' })}
      >
        <SunIcon className="h-5 w-5" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={classNames(buttonBaseClasses, 'rounded-r-lg', {
          [buttonActiveClasses]: theme === 'dark',
        })}
      >
        <MoonIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
