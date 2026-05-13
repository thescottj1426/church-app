import type { Metadata } from 'next';
import { Container, Stack, Text, Title } from '@mantine/core';
import DonationForm from '@/components/DonationForm';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the ministry of Divine Power Christian Church with a secure online donation.',
};

export default function DonatePage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Give Online
            </Title>
            <Text ta="center" c="gray.4" fz="lg" maw={500}>
              Your generosity fuels our mission. Every gift — large or small — makes a difference.
            </Text>
          </Stack>
        </Container>
      </section>

      {/* Tithe.ly embed */}
      <section style={{ backgroundColor: '#fafaf9', padding: '3rem 1rem 4rem' }}>
        <Container size="sm">
          <DonationForm />
          <Text fz="sm" ta="center" c="dimmed" mt="lg">
            Divine Power Christian Church is a registered 501(c)(3) nonprofit organization.
            Donations may be tax-deductible.
          </Text>
        </Container>
      </section>
    </>
  );
}
