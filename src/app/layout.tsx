import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Cormorant_Garamond, EB_Garamond, Public_Sans } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-public-sans',
  display: 'swap',
});

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'var(--font-eb-garamond), Georgia, serif',
  headings: {
    fontFamily: 'var(--font-cormorant), Georgia, serif',
  },
});

export const metadata: Metadata = {
  title: {
    default: 'Divine Power Christian Church',
    template: '%s | Divine Power Christian Church',
  },
  description:
    'A family of faith since 1962. Join us for worship, community, and the Word in Jacksonville, FL.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${publicSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <SiteHeader />
            <main style={{ flex: 1 }}>{children}</main>
            <SiteFooter />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
