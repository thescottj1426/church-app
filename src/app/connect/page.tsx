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
      <section style={{ backgroundColor: 'var(--cobalt)', color: 'white', padding: '4.5rem 1rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: '18rem', color: 'white', opacity: 0.07,
          fontFamily: 'serif', userSelect: 'none', pointerEvents: 'none',
        }}>✝</div>
        <Container size="lg" style={{ position: 'relative' }}>
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400 }}>
              Connect With Us
            </Title>
            <Text ta="center" style={{ color: 'oklch(0.88 0.03 240)' }} fz="lg" maw={560}>
              New here? We&apos;d love to get to know you. Fill out the card below and someone from our team will be in touch.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--cream)' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" style={{ alignItems: 'start' }}>
            {/* Info panel */}
            <Stack gap="xl">
              <div>
                <Title order={2} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 400, marginBottom: '0.75rem' }}>
                  You Belong Here
                </Title>
                <Text style={{ color: 'var(--ink-2)' }} lh={1.8}>
                  Whether this is your first visit or you&apos;ve been attending for a while, we want to make sure you feel at home. Our team genuinely cares about you and would love to help you take the next step in your faith journey.
                </Text>
              </div>

              <Stack gap="lg">
                {[
                  { icon: '👋', title: 'Warm Welcome', body: 'Our hospitality team is ready to meet you, answer your questions, and help you feel at home from day one.' },
                  { icon: '🤝', title: 'Find Community', body: "We'll connect you with a small group or ministry that fits your interests, life stage, and schedule." },
                  { icon: '🙏', title: 'Prayer Support', body: 'Share a prayer request and our team will be praying specifically for you and your family.' },
                ].map(({ icon, title, body }) => (
                  <Card key={title} withBorder radius="md" padding="md" style={{ backgroundColor: 'var(--paper)' }}>
                    <Group gap="md" align="flex-start">
                      <Text fz="1.75rem" lh={1}>{icon}</Text>
                      <Stack gap={4} style={{ flex: 1 }}>
                        <Text fw={700} fz="sm" style={{ color: 'var(--ink)' }}>{title}</Text>
                        <Text fz="sm" style={{ color: 'var(--ink-2)' }} lh={1.7}>{body}</Text>
                      </Stack>
                    </Group>
                  </Card>
                ))}
              </Stack>
            </Stack>

            {/* Form */}
            <Card shadow="sm" radius="lg" padding="xl" withBorder style={{ backgroundColor: 'var(--paper)' }}>
              <ConnectForm />
            </Card>
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
