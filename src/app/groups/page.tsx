import type { Metadata } from 'next';
import { Badge, Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Small Groups',
  description: 'Find your community at Divine Power Christian Church. Small groups meet weekly to study, pray, and grow together.',
};

const groups = [
  {
    icon: '📖',
    name: "Men's Bible Study",
    description:
      "Iron sharpens iron. Men gather weekly to dig into Scripture, encourage one another, and grow as leaders in their homes, workplaces, and community.",
    when: 'Mondays · 7:00 PM',
    leader: 'Led by Pastor Steve Williams',
    who: 'Men 18+',
  },
  {
    icon: '🌸',
    name: "Women's Wednesday Study",
    description:
      'A warm, welcoming group for women to explore the Bible together, build deep friendships, and find encouragement for everyday life.',
    when: 'Wednesdays · 10:00 AM',
    leader: 'Led by Pastor Sarah Mitchell',
    who: 'Women of all ages',
  },
  {
    icon: '🔥',
    name: 'Young Adults',
    description:
      "Life in your 20s and 30s is full of big questions. This group tackles faith, purpose, relationships, and real life — together, in community.",
    when: 'Fridays · 7:00 PM',
    leader: 'Led by David Carter',
    who: 'Ages 18–35',
  },
  {
    icon: '💑',
    name: "Couples' Community",
    description:
      'A bi-weekly gathering for married couples to grow in faith, strengthen their relationships, and build lasting friendships with other couples.',
    when: 'Bi-weekly Saturdays · 6:00 PM',
    leader: 'Led by Robert & Lisa Thompson',
    who: 'Married couples',
  },
  {
    icon: '⭐',
    name: 'Senior Saints',
    description:
      "A joyful fellowship for the seasoned members of our church — sharing wisdom, studying God's Word, and doing life together with depth and laughter.",
    when: 'Thursdays · 10:00 AM',
    leader: 'Led by Linda Chen',
    who: 'Ages 55+',
  },
  {
    icon: '👨‍👩‍👧',
    name: 'Parent Connect',
    description:
      'Raising kids is one of the most important and challenging callings there is. This group supports parents with practical encouragement, prayer, and community.',
    when: 'Sundays after 11am service',
    leader: 'Led by Maria Johnson',
    who: 'Parents of young children',
  },
];

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
};

export default function GroupsPage() {
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
              Small Groups
            </Title>
            <Text ta="center" style={{ color: 'oklch(0.88 0.03 240)' }} fz="lg" maw={560}>
              Faith grows best in community. Find a small group and do life together with people who care.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Group cards */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--cream)' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {groups.map((g) => (
              <Card key={g.name} shadow="xs" radius="lg" padding="xl" withBorder style={{ backgroundColor: 'var(--paper)' }}>
                <Stack gap="sm" style={{ flex: 1 }}>
                  <Text fz="2.5rem" lh={1}>{g.icon}</Text>
                  <Title order={3} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}>
                    {g.name}
                  </Title>
                  <Stack gap={4}>
                    <Text fz="sm" fw={600} style={{ color: 'var(--gold)' }}>
                      {g.when}
                    </Text>
                    <Text fz="xs" style={{ color: 'var(--ink-2)' }}>{g.leader}</Text>
                  </Stack>
                  <Badge variant="light" color="blue" size="sm" style={{ alignSelf: 'flex-start' }}>
                    {g.who}
                  </Badge>
                  <Text fz="sm" style={{ color: 'var(--ink-2)' }} lh={1.7}>
                    {g.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--cobalt)', color: 'white', padding: '4.5rem 1rem' }}>
        <Container size="sm">
          <Stack align="center" gap="lg" ta="center">
            <Title order={2} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 400 }}>
              Don&apos;t See the Right Fit?
            </Title>
            <Text style={{ color: 'rgba(255,255,255,0.85)' }} fz="lg">
              We&apos;d love to help you find your community. Reach out and we&apos;ll point you in the right direction.
            </Text>
            <a href="/contact" style={{
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
              Contact Us
            </a>
          </Stack>
        </Container>
      </section>
    </>
  );
}
