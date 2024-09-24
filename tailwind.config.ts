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
  plugins: [daisyui],
  safelist: [
    'basis-1/12',
    'basis-2/12',
    'basis-3/12',
    'basis-4/12',
    'basis-5/12',
    'basis-6/12',
    'basis-7/12',
    'basis-8/12',
    'basis-9/12',
    'basis-10/12',
    'basis-11/12',
    'basis-full',
  ],
};
export default config;
