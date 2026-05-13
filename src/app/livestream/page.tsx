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
      <section style={{ backgroundColor: 'var(--cobalt)', color: 'white', padding: '4.5rem 1rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: '18rem', color: 'white', opacity: 0.07,
          fontFamily: 'serif', userSelect: 'none', pointerEvents: 'none',
        }}>✝</div>
        <Container size="lg" style={{ position: 'relative' }}>
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400 }}>
              Watch Live
            </Title>
            <Text ta="center" style={{ color: 'oklch(0.88 0.03 240)' }} fz="lg">
              Join us for Sunday services · Multiple service times
            </Text>
          </Stack>
        </Container>
      </section>

      <section style={{ padding: '3rem 1rem 4rem', backgroundColor: 'var(--cream)' }}>
        <Container size="lg">
          <LiveStreamPlayer />
          <Text ta="center" style={{ color: 'var(--ink-2)' }} fz="sm" mt="lg">
            Our live stream begins a few minutes before each service.
          </Text>
        </Container>
      </section>
    </>
  );
}
