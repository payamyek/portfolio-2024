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
        className={`${spaceMono.className} mx-auto flex min-h-dvh w-3/5 flex-col self-center antialiased`}
      >
        <Navbar />
        <div className='flex items-center justify-center'>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
