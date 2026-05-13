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
    color: 'var(--cobalt)',
  },
  {
    title: 'Community',
    description:
      "No one walks alone. We are called to carry one another's burdens, celebrate each other's joys, and grow together as the family of God.",
    color: 'var(--cobalt)',
  },
  {
    title: 'Service',
    description:
      'We are sent into our neighborhoods and the world to love our neighbors, pursue justice, and reflect the generosity of God in everything we do.',
    color: 'var(--cobalt)',
  },
  {
    title: 'Welcome',
    description:
      'The table is wide open. Wherever you are in your faith journey, you belong here. We believe everyone deserves to experience grace.',
    color: 'var(--gold)',
  },
];

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  margin: 0,
};

export default function MissionPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: 'var(--cobalt)', color: 'white', padding: '4.5rem 1rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: '18rem', color: 'white', opacity: 0.07,
          fontFamily: 'serif', userSelect: 'none', pointerEvents: 'none',
        }}>✝</div>
        <Container size="lg" style={{ position: 'relative' }}>
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400 }}>
              Our Mission
            </Title>
            <Text ta="center" style={{ color: 'oklch(0.88 0.03 240)' }} fz="lg">
              Who we are, what we believe, and why it matters.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Mission statement */}
      <section style={{ padding: '5rem 1rem', backgroundColor: 'var(--cream)' }}>
        <Container size="md">
          <Stack align="center" gap="md" ta="center">
            <p style={eyebrow}>Our Mission</p>
            <Title order={2} style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}>
              To Know God, Grow Together,<br />and Serve Our World.
            </Title>
            <Text style={{ color: 'var(--ink-2)' }} fz="lg" maw={600} lh={1.8}>
              Divine Power Christian Church exists to create a place where people can encounter
              the living God, be transformed by His grace, and be equipped to bring that
              grace to every corner of their lives.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Vision — photo background */}
      <section style={{
        backgroundImage: 'url(/photos/worship.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '6rem 1rem',
        backgroundColor: 'var(--cobalt)',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.75)' }} />
        <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" gap="md" ta="center">
            <p style={{ ...eyebrow }}>Our Vision</p>
            <Title order={2} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 400 }}>
              A Church That Looks Like the Kingdom
            </Title>
            <Text fz="lg" maw={600} lh={1.8} style={{ color: 'oklch(0.82 0.025 80)' }}>
              We envision a diverse, multi-generational community where the broken find
              healing, the lost find home, and every person discovers their God-given
              purpose. We want to be a church the city is glad to have in its neighborhood.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1rem', backgroundColor: 'var(--cream)' }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb="xl" ta="center">
            <p style={eyebrow}>Our Values</p>
            <Title order={2} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400 }}>
              What Drives Everything We Do
            </Title>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            {values.map(({ title, description, color }) => (
              <Card key={title} shadow="xs" radius="lg" padding="xl" withBorder
                style={{ backgroundColor: 'var(--paper)', borderTop: `3px solid ${color}` }}>
                <Title order={3} mb="sm" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: color }}>
                  {title}
                </Title>
                <Text style={{ color: 'var(--ink-2)' }} lh={1.8}>
                  {description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA banner */}
      <section style={{ backgroundColor: 'var(--cobalt)', color: 'white', padding: '5rem 1rem' }}>
        <Container size="sm">
          <Stack align="center" gap="lg" ta="center">
            <Title order={2} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 400 }}>
              Come as You Are
            </Title>
            <Text style={{ color: 'rgba(255,255,255,0.85)' }} fz="lg" maw={460}>
              We would love to meet you. Join us this Sunday and experience grace firsthand.
            </Text>
            <a href="/visit" style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'var(--cobalt)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
            }}>
              Plan Your Visit
            </a>
          </Stack>
        </Container>
      </section>
    </>
  );
}
