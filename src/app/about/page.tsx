import type { Metadata } from 'next';
import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the pastors and staff of Divine Power Christian Church.',
};

interface StaffMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
  avatarColor: string;
  photo?: string; // place file in /public/staff/ e.g. /staff/james-williams.jpg
}

const staff: StaffMember[] = [
  {
    name: 'Pastor James Williams',
    title: 'Senior Pastor',
    initials: 'JW',
    avatarColor: '#1e293b',
    photo: '/staff/james-williams.jpg',
    bio: 'Pastor James has led Divine Power Christian Church for over 15 years. With a heart for teaching and a passion for community, he believes the local church is God\'s greatest gift to the world. He and his wife Lisa have three children.',
  },
  {
    name: 'Pastor Sarah Mitchell',
    title: 'Associate Pastor — Worship & Arts',
    initials: 'SM',
    avatarColor: '#b45309',
    bio: 'Pastor Sarah oversees all worship experiences at Grace. A gifted musician and pastor, she is committed to creating spaces where people encounter God through authentic, Spirit-led worship.',
  },
  {
    name: 'David Carter',
    title: 'Youth & Young Adults Director',
    initials: 'DC',
    avatarColor: '#6d28d9',
    bio: 'David is passionate about the next generation. He leads our youth ministry and young adult programs, creating environments where teenagers and twenty-somethings can find community and grow in their faith.',
  },
  {
    name: 'Maria Johnson',
    title: 'Outreach & Missions Coordinator',
    initials: 'MJ',
    avatarColor: '#065f46',
    bio: 'Maria coordinates our local outreach efforts and global missions partnerships. She has a deep love for serving the marginalized and equipping the congregation to be the hands and feet of Jesus.',
  },
  {
    name: 'Robert Thompson',
    title: 'Operations Director',
    initials: 'RT',
    avatarColor: '#1e40af',
    bio: 'Robert oversees the day-to-day operations of the church, ensuring that all our ministries have the resources and support they need to thrive.',
  },
  {
    name: 'Linda Chen',
    title: 'Children\'s Ministry Director',
    initials: 'LC',
    avatarColor: '#9d174d',
    bio: 'Linda leads our children\'s programs with creativity and love. She builds a safe, joyful place where kids from birth through 5th grade discover that they are known and loved by God.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              About Us
            </Title>
            <Text ta="center" c="gray.4" fz="lg">
              Meet the people who serve Divine Power Christian Church.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Our Story */}
      <section style={{ padding: '5rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="md">
          <Stack align="center" gap="md" ta="center">
            <Text
              tt="uppercase"
              fz="sm"
              fw={600}
              style={{ letterSpacing: '0.15em', color: '#d97706' }}
            >
              Our Story
            </Text>
            <Title order={2} style={{ fontFamily: 'Georgia, serif' }}>
              Rooted in Faith Since 1985
            </Title>
            <Text c="dimmed" fz="lg" maw={640} lh={1.8}>
              Divine Power Christian Church was founded in 1985 by a small group of families
              with a simple vision: to build a church where every person feels known,
              loved, and equipped to live out their faith. Over four decades, that vision
              has grown into a thriving congregation of hundreds of families from across
              the community.
            </Text>
            <Text c="dimmed" fz="lg" maw={640} lh={1.8}>
              We are an interdenominational church rooted in orthodox Christian faith.
              We believe in the authority of Scripture, the transforming power of the
              Holy Spirit, and the call to love our neighbors as ourselves. Whatever your
              background, there is a place for you here.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Photo banner — drop /photos/church-building.jpg to fill */}
      <section style={{
        backgroundImage: 'url(/photos/church-building.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 320,
        backgroundColor: '#1e293b',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.45)' }} />
      </section>

      {/* Staff grid */}
      <section style={{ padding: '5rem 1rem', backgroundColor: 'white' }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb="xl" ta="center">
            <Text
              tt="uppercase"
              fz="sm"
              fw={600}
              style={{ letterSpacing: '0.15em', color: '#d97706' }}
            >
              Our Team
            </Text>
            <Title order={2} style={{ fontFamily: 'Georgia, serif' }}>
              Meet the Staff
            </Title>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {staff.map((member) => (
              <Card key={member.name} shadow="xs" radius="lg" padding="xl" withBorder>
                <Stack align="center" gap="md" ta="center">
                  {/* Photo: place file at member.photo path in /public to replace the initials */}
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{
                        width: 100, height: 100,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #e2e8f0',
                      }}
                    />
                  ) : (
                    <div style={{
                      width: 100, height: 100, borderRadius: '50%',
                      backgroundColor: member.avatarColor,
                      color: 'white', fontSize: '1.5rem', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {member.initials}
                    </div>
                  )}
                  <Stack gap={4}>
                    <Title order={3} style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
                      {member.name}
                    </Title>
                    <Text fz="sm" fw={600} style={{ color: '#d97706' }}>
                      {member.title}
                    </Text>
                  </Stack>
                  <Text fz="sm" c="dimmed" lh={1.7} ta="left">
                    {member.bio}
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
              We&apos;d Love to Meet You
            </Title>
            <Text c="gray.4" fz="lg">
              Come visit us on Sunday or send us a message — our team would love to connect.
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
