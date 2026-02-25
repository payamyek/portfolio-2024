'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute='data-theme'
      defaultTheme='system'
      themes={['light', 'synthwave']}
      value={{ light: 'light', dark: 'synthwave' }}
    >
      {children}
    </NextThemesProvider>
  );
}
