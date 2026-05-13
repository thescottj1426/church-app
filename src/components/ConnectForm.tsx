'use client';

import { useState } from 'react';
import {
  Alert,
  Button,
  Checkbox,
  Group,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

export default function ConnectForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState<string | null>('Friend or Family');
  const [visitStatus, setVisitStatus] = useState<string | null>('First time');
  const [wantsContact, setWantsContact] = useState(true);
  const [prayer, setPrayer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError('Please fill in your first name, last name, and email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, hearAboutUs, visitStatus, wantsContact, prayer }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Stack align="center" gap="md" ta="center" py="xl">
        <Text fz={48}>🤗</Text>
        <Title order={3} style={{ fontFamily: 'Georgia, serif' }}>
          We&apos;re So Glad You&apos;re Here!
        </Title>
        <Text c="dimmed" maw={400}>
          Thank you for reaching out. Someone from our team will be in touch with you soon. We&apos;re excited to get to know you!
        </Text>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '0.5rem',
            backgroundColor: '#d97706',
            color: 'white',
            fontWeight: 600,
            fontSize: '1rem',
            padding: '0.65rem 1.75rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
          }}
        >
          Return Home
        </a>
      </Stack>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <Group grow>
          <TextInput
            label="First Name"
            placeholder="Jane"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          <TextInput
            label="Last Name"
            placeholder="Smith"
            required
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </Group>

        <TextInput
          label="Email Address"
          placeholder="jane@example.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <TextInput
          label="Phone Number (optional)"
          placeholder="(555) 123-4567"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />

        <Select
          label="How did you hear about us?"
          data={['Friend or Family', 'Social Media', 'Website', 'Drove By', 'Other']}
          value={hearAboutUs}
          onChange={setHearAboutUs}
        />

        <Select
          label="Have you visited before?"
          data={['First time', 'A few times', "I'm a regular"]}
          value={visitStatus}
          onChange={setVisitStatus}
        />

        <Checkbox
          label="I'd like someone from the church to reach out to me"
          checked={wantsContact}
          onChange={(e) => setWantsContact(e.currentTarget.checked)}
        />

        <Textarea
          label="Prayer request or note (optional)"
          placeholder="Share anything you'd like us to know or pray for..."
          minRows={4}
          value={prayer}
          onChange={(e) => setPrayer(e.currentTarget.value)}
        />

        {error && (
          <Alert color="red" title="Error">
            {error}
          </Alert>
        )}

        <Button type="submit" color="yellow" size="lg" fullWidth loading={loading}>
          Submit Connect Card
        </Button>

        <Text fz="xs" ta="center" c="dimmed">
          Your information is kept private and will only be used by our team to follow up with you.
        </Text>
      </Stack>
    </form>
  );
}
