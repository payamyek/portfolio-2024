import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import { spaceMono } from './ui/fonts';
import Navbar from './ui/navbar';

export const metadata: Metadata = {
  title: "Payam's Portfolio",
  description: 'A Website Made with Love ❤️',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link
        rel='manifest'
        href='/site.webmanifest'
      />
      <body
        className={`${spaceMono.className} mx-auto flex min-h-dvh flex-col antialiased lg:w-3/5`}
      >
        {/* Runs synchronously before first paint — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
        <Analytics />
        <Navbar />
        <main className='flex flex-1 flex-col'>{children}</main>
      </body>
    </html>
  );
}
