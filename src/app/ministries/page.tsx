import type { Metadata } from 'next';
import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Ministries',
  description: 'Discover the ministries and programs at Divine Power Christian Church.',
};

const ministries = [
  {
    icon: '🙌',
    name: 'Worship Team',
    description:
      'Our worship team leads the congregation in Spirit-filled praise every Sunday. Whether you sing, play an instrument, or run sound and media — there is a place for you.',
    time: 'Rehearsals: Saturdays 10:00 AM',
  },
  {
    icon: '👦',
    name: 'Youth Ministry',
    description:
      'A vibrant community for teens in grades 6–12. We meet bi-weekly for games, worship, small groups, and real conversations about faith and life.',
    time: 'Bi-weekly Fridays · 6:30 PM',
  },
  {
    icon: '🧒',
    name: "Children's Ministry",
    description:
      'We partner with parents to raise kids who love God. Every Sunday, children experience age-appropriate teaching, worship, and activities in a safe, fun environment.',
    time: 'Sundays during both services',
  },
  {
    icon: '👩',
    name: "Women's Ministry",
    description:
      'A sisterhood of faith where women connect, grow, and encourage one another through Bible study, prayer, and community events throughout the year.',
    time: 'Monthly gatherings — check calendar',
  },
  {
    icon: '👨',
    name: "Men's Ministry",
    description:
      'Iron sharpens iron. Our men gather to study Scripture, hold each other accountable, and serve the community together as men of God.',
    time: 'Monthly gatherings — check calendar',
  },
  {
    icon: '🤝',
    name: 'Community Outreach',
    description:
      'We are called to serve beyond our walls. From food drives to local partnerships, our outreach team meets practical needs and shares the love of Christ in our city.',
    time: 'Ongoing — volunteer anytime',
  },
];

export default function MinistriesPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Ministries
            </Title>
            <Text ta="center" c="gray.4" fz="lg" maw={560}>
              There&apos;s a place for everyone here. Find where you belong and get involved.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Photo banner — drop /photos/ministries.jpg to fill */}
      <section style={{
        backgroundImage: 'url(/photos/ministries.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        minHeight: 280,
        backgroundColor: '#1e3a5f',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.55)' }} />
        <Container size="lg" style={{ position: 'relative', zIndex: 1, padding: '3rem 1rem' }}>
          <Text
            ta="center"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', color: 'white', lineHeight: 1.6 }}
          >
            &ldquo;Each of you should use whatever gift you have received to serve others.&rdquo;
          </Text>
          <Text ta="center" fz="sm" mt="sm" style={{ color: '#f59e0b', fontWeight: 600 }}>— 1 Peter 4:10</Text>
        </Container>
      </section>

      {/* Ministry cards */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {ministries.map((m) => (
              <Card key={m.name} shadow="xs" radius="lg" padding="xl" withBorder>
                <Stack gap="sm" style={{ flex: 1 }}>
                  <Text fz="2.5rem" lh={1}>{m.icon}</Text>
                  <Title order={3} style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem' }}>
                    {m.name}
                  </Title>
                  <Text fz="sm" fw={600} style={{ color: '#d97706' }}>
                    {m.time}
                  </Text>
                  <Text fz="sm" c="dimmed" lh={1.7}>
                    {m.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="sm">
          <Stack align="center" gap="lg" ta="center">
            <Title order={2} style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Not Sure Where to Start?
            </Title>
            <Text c="gray.4" fz="lg">
              Reach out and we&apos;ll help you find the right fit.
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
              Contact Us
            </a>
          </Stack>
        </Container>
      </section>
    </>
  );
}
