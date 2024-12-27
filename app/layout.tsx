import type { Metadata } from 'next';

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
        className={`${spaceMono.className} mx-auto flex min-h-dvh w-4/5 flex-col self-center antialiased`}
      >
        <Navbar
          title='Experiences'
          progress={0}
        />
        <div className='flex items-center justify-center'>{children}</div>
      </body>
    </html>
  );
}
