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
    location: 'In-Person',
    leader: 'Led by Pastor James Williams',
    who: 'Men 18+',
  },
  {
    icon: '🌸',
    name: "Women's Wednesday Study",
    description:
      'A warm, welcoming group for women to explore the Bible together, build deep friendships, and find encouragement for everyday life.',
    when: 'Wednesdays · 10:00 AM',
    location: 'In-Person',
    leader: 'Led by Pastor Sarah Mitchell',
    who: 'Women of all ages',
  },
  {
    icon: '🔥',
    name: 'Young Adults',
    description:
      "Life in your 20s and 30s is full of big questions. This group tackles faith, purpose, relationships, and real life — together, in community.",
    when: 'Fridays · 7:00 PM',
    location: 'In-Person',
    leader: 'Led by David Carter',
    who: 'Ages 18–35',
  },
  {
    icon: '💑',
    name: "Couples' Community",
    description:
      'A bi-weekly gathering for married couples to grow in faith, strengthen their relationships, and build lasting friendships with other couples.',
    when: 'Bi-weekly Saturdays · 6:00 PM',
    location: 'In-Person',
    leader: 'Led by Robert & Lisa Thompson',
    who: 'Married couples',
  },
  {
    icon: '⭐',
    name: 'Senior Saints',
    description:
      'A joyful fellowship for the seasoned members of our church — sharing wisdom, studying God\'s Word, and doing life together with depth and laughter.',
    when: 'Thursdays · 10:00 AM',
    location: 'In-Person',
    leader: 'Led by Linda Chen',
    who: 'Ages 55+',
  },
  {
    icon: '👨‍👩‍👧',
    name: 'Parent Connect',
    description:
      'Raising kids is one of the most important and challenging callings there is. This group supports parents with practical encouragement, prayer, and community.',
    when: 'Sundays after 11am service',
    location: 'In-Person',
    leader: 'Led by Maria Johnson',
    who: 'Parents of young children',
  },
];

export default function GroupsPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Small Groups
            </Title>
            <Text ta="center" c="gray.4" fz="lg" maw={560}>
              Faith grows best in community. Find a small group and do life together with people who care.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Group cards */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {groups.map((g) => (
              <Card key={g.name} shadow="xs" radius="lg" padding="xl" withBorder>
                <Stack gap="sm" style={{ flex: 1 }}>
                  <Text fz="2.5rem" lh={1}>{g.icon}</Text>
                  <Title order={3} style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem' }}>
                    {g.name}
                  </Title>
                  <Stack gap={4}>
                    <Text fz="sm" fw={600} style={{ color: '#d97706' }}>
                      {g.when}
                    </Text>
                    <Text fz="xs" c="dimmed">{g.leader}</Text>
                  </Stack>
                  <Badge variant="light" color="blue" size="sm" style={{ alignSelf: 'flex-start' }}>
                    {g.who}
                  </Badge>
                  <Text fz="sm" c="dimmed" lh={1.7}>
                    {g.description}
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
              Don&apos;t See the Right Fit?
            </Title>
            <Text c="gray.4" fz="lg">
              We&apos;d love to help you find your community. Reach out and we&apos;ll point you in the right direction.
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
