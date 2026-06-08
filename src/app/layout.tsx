import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.divinepowermbc.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Divine Power Christian Church',
    template: '%s | Divine Power Christian Church',
  },
  description:
    'A family of faith in Jacksonville, FL. Join us for Sunday worship, Bible study, and community at Divine Power Christian Church.',
  keywords: ['Divine Power Christian Church', 'church Jacksonville FL', 'Jacksonville church', 'Christian church Jacksonville'],
  openGraph: {
    type: 'website',
    siteName: 'Divine Power Christian Church',
    title: 'Divine Power Christian Church',
    description: 'A family of faith in Jacksonville, FL. Join us for Sunday worship, Bible study, and community.',
    url: siteUrl,
    images: [{ url: '/logo.png', width: 512, alt: 'Divine Power Christian Church' }],
  },
  twitter: {
    card: 'summary',
    title: 'Divine Power Christian Church',
    description: 'A family of faith in Jacksonville, FL.',
    images: ['/logo.png'],
  },
  alternates: { canonical: siteUrl },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Church',
            name: 'Divine Power Christian Church',
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            image: `${siteUrl}/logo.png`,
            description: 'A family of faith in Jacksonville, FL gathering each Sunday to worship, grow, and serve.',
            telephone: '+1-904-123-4567',
            email: 'office@divinepower.church',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2025 Pullman Ave',
              addressLocality: 'Jacksonville',
              addressRegion: 'FL',
              postalCode: '32209',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 30.3322,
              longitude: -81.6557,
            },
            sameAs: [
              'https://www.youtube.com/@DivinePowerBC',
              'https://www.facebook.com/divine.p.church',
              'https://www.tiktok.com/@divinepowerbc',
            ],
          })}}
        />
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
