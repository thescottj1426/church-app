import type { Metadata } from 'next';
import { Container, Stack, Text, Title } from '@mantine/core';
import CalendarEmbed from '@/components/CalendarEmbed';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events and programs at Divine Power Christian Church.',
};

const CALENDAR_ID = '45a926efa346c9531d1c8e3fbcd6293ad4e44a5fca01a26b4f67572c45cce67a@group.calendar.google.com';

export default function EventsPage() {
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
              Events &amp; Programs
            </Title>
            <Text ta="center" style={{ color: 'oklch(0.88 0.03 240)' }} fz="lg">
              Stay connected — there&apos;s always something happening at Divine Power.
            </Text>
          </Stack>
        </Container>
      </section>

      <section style={{ padding: '3rem 1rem 4rem', backgroundColor: 'var(--cream)' }}>
        <Container size="xl">
          <CalendarEmbed calendarId={CALENDAR_ID} />
        </Container>
      </section>
    </>
  );
}
