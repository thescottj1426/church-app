import type { Metadata } from 'next';
import { Container, Stack, Text, Title } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Divine Power Christian Church or submit a prayer request.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Contact Us
            </Title>
            <Text ta="center" c="gray.4" fz="lg">
              We would love to hear from you.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Contact info */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="sm">
          <Stack gap="xl">
            <div>
              <Text tt="uppercase" fz="sm" fw={600} style={{ letterSpacing: '0.12em', color: '#d97706', marginBottom: '0.75rem' }}>
                Find Us
              </Text>
              <Title order={3} mb="xs" style={{ fontFamily: 'Georgia, serif' }}>
                Divine Power Christian Church
              </Title>
              <Text c="dimmed" lh={1.8}>
                123 Main Street<br />
                Your City, ST 00000
              </Text>
            </div>

            <div>
              <Text tt="uppercase" fz="sm" fw={600} style={{ letterSpacing: '0.12em', color: '#d97706', marginBottom: '0.75rem' }}>
                Service Times
              </Text>
              <Text c="dimmed" lh={1.8}>
                Sunday: 9:00 AM &amp; 11:00 AM<br />
                Wednesday Bible Study: 7:00 PM
              </Text>
            </div>

            <div>
              <Text tt="uppercase" fz="sm" fw={600} style={{ letterSpacing: '0.12em', color: '#d97706', marginBottom: '0.75rem' }}>
                Get in Touch
              </Text>
              <Text c="dimmed" lh={1.8}>
                Email:{' '}
                <a href="mailto:info@gracechurch.org" style={{ color: '#d97706' }}>
                  info@gracechurch.org
                </a>
                <br />
                Phone: (555) 123-4567
              </Text>
            </div>

            <div>
              <Text tt="uppercase" fz="sm" fw={600} style={{ letterSpacing: '0.12em', color: '#d97706', marginBottom: '0.75rem' }}>
                Office Hours
              </Text>
              <Text c="dimmed" lh={1.8}>
                Monday – Friday: 9:00 AM – 5:00 PM<br />
                Saturday – Sunday: Closed (except services)
              </Text>
            </div>
          </Stack>
        </Container>
      </section>
    </>
  );
}
