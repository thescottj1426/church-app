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
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Events &amp; Programs
            </Title>
            <Text ta="center" c="gray.4" fz="lg">
              Stay connected — there&apos;s always something happening at Divine Power.
            </Text>
          </Stack>
        </Container>
      </section>

      <section style={{ padding: '3rem 1rem 4rem', backgroundColor: '#fafaf9' }}>
        <Container size="xl">
          <CalendarEmbed calendarId={CALENDAR_ID} />
        </Container>
      </section>
    </>
  );
}
