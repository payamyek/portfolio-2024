import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import CursorTrail from './ui/cursor-trail';
import { spaceMono } from './ui/fonts';
import Footer from './ui/footer';
import Navbar from './ui/navbar';
import QueryProvider from './ui/query-provider';
import ScrollToTop from './ui/scroll-to-top';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://payamyek.com',
  ),
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Payam Yektamaram',
              url: 'https://payamyek.com',
              jobTitle: 'Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'StackAdapt',
              },
              sameAs: [
                'https://github.com/payamyek',
                'https://www.linkedin.com/in/payamyek/',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of Toronto',
              },
              knowsAbout: [
                'React',
                'TypeScript',
                'Python',
                'Ruby on Rails',
                'Docker',
                'Machine Learning',
                'Chess Engines',
              ],
            }),
          }}
        />
        <QueryProvider>
          <CursorTrail />
          <Analytics />
          <Navbar />
          <main className='flex flex-1 flex-col'>{children}</main>
          <ScrollToTop />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
