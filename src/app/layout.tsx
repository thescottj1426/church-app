import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const theme = createTheme({
  primaryColor: 'yellow',
  primaryShade: 8,
  fontFamily: 'Georgia, serif',
  headings: {
    fontFamily: 'Georgia, serif',
  },
});

export const metadata: Metadata = {
  title: {
    default: 'Divine Power Christian Church',
    template: '%s | Divine Power Christian Church',
  },
  description:
    'A welcoming community of faith. Join us for worship, service, and fellowship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
