import { Container, SimpleGrid, Stack, Text } from '@mantine/core';
import NewsletterSignup from './NewsletterSignup';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const linkStyle: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '0.875rem',
    textDecoration: 'none',
  };

  return (
    <footer style={{ backgroundColor: '#1e293b', color: '#94a3b8', marginTop: 'auto' }}>
      <Container size="xl" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {/* Brand */}
          <Stack gap="xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Divine Power Christian Church" style={{ height: 90, width: 'auto', borderRadius: 8, padding: '4px 8px', backgroundColor: 'white' }} />
          </Stack>

          {/* Quick links */}
          <Stack gap="xs">
            <Text fw={600} c="white">Quick Links</Text>
            <a href="/donate" style={linkStyle}>Give Online</a>
            <a href="/livestream" style={linkStyle}>Watch Live</a>
            <a href="/events" style={linkStyle}>Events</a>
            <a href="/ministries" style={linkStyle}>Ministries</a>
            <a href="/groups" style={linkStyle}>Small Groups</a>
            <a href="/connect" style={linkStyle}>Connect</a>
            <a href="/about" style={linkStyle}>About Us</a>
            <a href="/mission" style={linkStyle}>Our Mission</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </Stack>

          {/* Connect */}
          <Stack gap="xs">
            <Text fw={600} c="white">Connect</Text>
            <a
              href="https://www.facebook.com/divine.p.church"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Facebook
            </a>
            <a href="mailto:info@divinepowerchurch.org" style={linkStyle}>
              info@divinepowerchurch.org
            </a>
          </Stack>

          {/* Newsletter */}
          <Stack gap="xs">
            <Text fw={600} c="white">Stay Connected</Text>
            <Text fz="sm">Get weekly announcements delivered to your inbox.</Text>
            <NewsletterSignup />
          </Stack>
        </SimpleGrid>

        <div style={{ borderTop: '1px solid #334155', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <Text fz="sm" ta="center" mb="xs">
            123 Main Street, Your City, ST 00000 &nbsp;·&nbsp;{' '}
            <a href="tel:5551234567" style={{ color: '#94a3b8', textDecoration: 'none' }}>(555) 123-4567</a>
            &nbsp;·&nbsp;{' '}
            <a href="mailto:info@divinepowerchurch.org" style={{ color: '#94a3b8', textDecoration: 'none' }}>info@divinepowerchurch.org</a>
          </Text>
          <Text fz="sm" ta="center" mb="xl">
            Sunday 9am &amp; 11am &nbsp;·&nbsp; Wednesday Bible Study 7pm &nbsp;·&nbsp; Office: Mon–Fri 9am–5pm
          </Text>
          <Text fz="xs" ta="center" style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem' }}>
            &copy; {year} Divine Power Christian Church. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
