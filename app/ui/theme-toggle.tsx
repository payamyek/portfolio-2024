'use client';

import { useEffect, useRef } from 'react';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    ref.current.checked = stored ? stored === 'dark' : prefersDark;
  }, []);

  return (
    <label className='swap swap-rotate btn btn-circle btn-ghost transition-transform duration-200 hover:scale-110 hover:rotate-12'>
      <input
        ref={ref}
        type='checkbox'
        className='theme-controller'
        value='dark'
        onChange={(e) =>
          localStorage.setItem('theme', e.target.checked ? 'dark' : 'light')
        }
        aria-label='Toggle dark mode'
      />
      <Moon
        className='swap-on'
        size={20}
      />
      <Sun
        className='swap-off'
        size={20}
      />
    </label>
  );
}
