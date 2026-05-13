import type { Metadata } from 'next';
import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'Learn about the mission, vision, and values of Divine Power Christian Church.',
};

const values = [
  {
    title: 'Faith',
    description:
      'We are anchored in the truth of Scripture and the grace of Jesus Christ. Our community is built on a living, active faith that shapes every part of life.',
  },
  {
    title: 'Community',
    description:
      "No one walks alone. We are called to carry one another's burdens, celebrate each other's joys, and grow together as the family of God.",
  },
  {
    title: 'Service',
    description:
      'We are sent into our neighborhoods and the world to love our neighbors, pursue justice, and reflect the generosity of God in everything we do.',
  },
  {
    title: 'Welcome',
    description:
      'The table is wide open. Wherever you are in your faith journey, you belong here. We believe everyone deserves to experience grace.',
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Our Mission
            </Title>
            <Text ta="center" c="gray.4" fz="lg">
              Who we are, what we believe, and why it matters.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Mission statement */}
      <section style={{ padding: '5rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="md">
          <Stack align="center" gap="md" ta="center">
            <Text
              tt="uppercase"
              fz="sm"
              fw={600}
              style={{ letterSpacing: '0.15em', color: '#d97706' }}
            >
              Our Mission
            </Text>
            <Title
              order={2}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: 1.3,
              }}
            >
              To Know God, Grow Together,
              <br />
              and Serve Our World.
            </Title>
            <Text c="dimmed" fz="lg" maw={600} lh={1.8}>
              Divine Power Christian Church exists to create a place where people can encounter
              the living God, be transformed by His grace, and be equipped to bring that
              grace to every corner of their lives.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Vision — drop /photos/worship.jpg to fill */}
      <section style={{
        backgroundImage: 'url(/photos/worship.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '6rem 1rem',
        backgroundColor: '#1e3a5f',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.72)' }} />
        <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" gap="md" ta="center">
            <Text tt="uppercase" fz="sm" fw={600} style={{ letterSpacing: '0.15em', color: '#f59e0b' }}>
              Our Vision
            </Text>
            <Title order={2} style={{ fontFamily: 'Georgia, serif', color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
              A Church That Looks Like the Kingdom
            </Title>
            <Text fz="lg" maw={600} lh={1.8} style={{ color: '#cbd5e1' }}>
              We envision a diverse, multi-generational community where the broken find
              healing, the lost find home, and every person discovers their God-given
              purpose. We want to be a church the city is glad to have in its neighborhood.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb="xl" ta="center">
            <Text
              tt="uppercase"
              fz="sm"
              fw={600}
              style={{ letterSpacing: '0.15em', color: '#d97706' }}
            >
              Our Values
            </Text>
            <Title order={2} style={{ fontFamily: 'Georgia, serif' }}>
              What Drives Everything We Do
            </Title>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            {values.map(({ title, description }) => (
              <Card key={title} shadow="xs" radius="lg" padding="xl" withBorder>
                <Title order={3} mb="sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {title}
                </Title>
                <Text c="dimmed" lh={1.8}>
                  {description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA banner */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '5rem 1rem' }}>
        <Container size="sm">
          <Stack align="center" gap="lg" ta="center">
            <Title order={2} style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Come as You Are
            </Title>
            <Text c="gray.4" fz="lg" maw={460}>
              We would love to meet you. Join us this Sunday and experience grace firsthand.
            </Text>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#d97706',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
            >
              Get in Touch
            </a>
          </Stack>
        </Container>
      </section>
    </>
  );
}
