import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import { spaceMono } from './ui/fonts';
import Navbar from './ui/navbar';

export const metadata: Metadata = {
  title: "Payam Yektamaram's Portfolio",
  description: 'A Website Made with Love ❤️',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${spaceMono.className} mx-auto flex flex-col antialiased lg:w-3/5`}
      >
        <Analytics />
        <Navbar />
        <div className='flex items-center justify-center'>{children}</div>
      </body>
    </html>
  );
}
