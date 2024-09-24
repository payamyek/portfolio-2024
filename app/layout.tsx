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
        className={`${spaceMono.className} flex min-h-dvh w-screen flex-col antialiased md:px-24`}
      >
        <Navbar
          title='Experiences'
          progress={24}
        />
        <div className='flex items-center justify-center'>{children}</div>
      </body>
    </html>
  );
}
