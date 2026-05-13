import type { Metadata } from 'next';
import { Card, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import ConnectForm from '@/components/ConnectForm';

export const metadata: Metadata = {
  title: 'Connect',
  description: 'New to Divine Power Christian Church? Fill out a connect card and our team will reach out to welcome you.',
};

export default function ConnectPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Connect With Us
            </Title>
            <Text ta="center" c="gray.4" fz="lg" maw={560}>
              New here? We&apos;d love to get to know you. Fill out the card below and someone from our team will be in touch.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#fafaf9' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" style={{ alignItems: 'start' }}>
            {/* Info panel */}
            <Stack gap="xl">
              <div>
                <Title order={2} style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  You Belong Here
                </Title>
                <Text c="dimmed" lh={1.8}>
                  Whether this is your first visit or you&apos;ve been attending for a while, we want to make sure you feel at home. Our team genuinely cares about you and would love to help you take the next step in your faith journey.
                </Text>
              </div>

              <Stack gap="lg">
                {[
                  { icon: '👋', title: 'Warm Welcome', body: 'Our hospitality team is ready to meet you, answer your questions, and help you feel at home from day one.' },
                  { icon: '🤝', title: 'Find Community', body: 'We\'ll connect you with a small group or ministry that fits your interests, life stage, and schedule.' },
                  { icon: '🙏', title: 'Prayer Support', body: 'Share a prayer request and our team will be praying specifically for you and your family.' },
                ].map(({ icon, title, body }) => (
                  <Card key={title} withBorder radius="md" padding="md">
                    <Group gap="md" align="flex-start" style={{ display: 'flex' }}>
                      <Text fz="1.75rem" lh={1}>{icon}</Text>
                      <Stack gap={4} style={{ flex: 1 }}>
                        <Text fw={700} fz="sm">{title}</Text>
                        <Text fz="sm" c="dimmed" lh={1.7}>{body}</Text>
                      </Stack>
                    </Group>
                  </Card>
                ))}
              </Stack>
            </Stack>

            {/* Form */}
            <Card shadow="sm" radius="lg" padding="xl" withBorder>
              <ConnectForm />
            </Card>
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
