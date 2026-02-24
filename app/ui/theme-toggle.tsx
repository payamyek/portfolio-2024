'use client';

import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setIsDark(stored ? stored === 'dark' : prefersDark);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dark = e.target.checked;
    setIsDark(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  // Prevent layout shift while reading localStorage
  if (!mounted) return <div className='btn btn-circle btn-ghost opacity-0' />;

  return (
    <label className='swap swap-rotate btn btn-circle btn-ghost transition-transform duration-200 hover:scale-110 hover:rotate-12'>
      <input
        type='checkbox'
        className='theme-controller'
        value='dark'
        checked={isDark}
        onChange={handleChange}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      {/* Shown in dark mode */}
      <Moon
        className='swap-on'
        size={20}
      />
      {/* Shown in light mode */}
      <Sun
        className='swap-off'
        size={20}
      />
    </label>
  );
}
