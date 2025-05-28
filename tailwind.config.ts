import type { Config } from 'tailwindcss';

import daisyui from 'daisyui';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        rustic: {
          primary: '#D9D9D9',
          secondary: '#CBC3e3',
          accent: '#D0CAE0',
          neutral: '#ffe4e6',
          'base-100': '#2B2929',
          info: '#d8b4fe',
          success: '#f0abfc',
          warning: '#c4b5fd',
          error: '#ec4899',
        },
      },
    ],
  },
  plugins: [daisyui],
};

export default config;
