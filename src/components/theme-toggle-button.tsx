'use client';

import { useEffect, useState } from 'react';
import SunIcon from '@/assets/sun.svg';
import MoonIcon from '@/assets/moon.svg';

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<string>();

  const initTheme = () => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    if (stored === 'dark' || (stored === null && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    initTheme();
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme(isDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-md p-2 text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
