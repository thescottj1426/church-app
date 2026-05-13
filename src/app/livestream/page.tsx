import type { Metadata } from 'next';
import { Container, Stack, Text, Title } from '@mantine/core';
import LiveStreamPlayer from '@/components/LiveStreamPlayer';

export const metadata: Metadata = {
  title: 'Live Stream',
  description: 'Watch Divine Power Christian Church services live on Facebook or YouTube.',
};

export default function LiveStreamPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Watch Live
            </Title>
            <Text ta="center" c="gray.4" fz="lg">
              Join us for Sunday services · 9:00 AM &amp; 11:00 AM
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Player */}
      <section style={{ padding: '3rem 1rem 4rem', backgroundColor: '#fafaf9' }}>
        <Container size="lg">
          <LiveStreamPlayer />
          <Text ta="center" c="dimmed" fz="sm" mt="lg">
            Our live stream begins a few minutes before each service.
          </Text>
        </Container>
      </section>
    </>
  );
}
