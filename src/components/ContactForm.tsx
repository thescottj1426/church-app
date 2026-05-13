'use client';

import { useState } from 'react';
import {
  Alert,
  Button,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState<string | null>('General Inquiry');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, message }),
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
        <Text fz={48}>🙏</Text>
        <Title order={3} style={{ fontFamily: 'Georgia, serif' }}>
          Message Received!
        </Title>
        <Text c="dimmed">
          Thank you for reaching out. Someone from our team will be in touch with you soon.
        </Text>
        <Button
          variant="subtle"
          color="yellow"
          onClick={() => {
            setSuccess(false);
            setName('');
            setEmail('');
            setType('General Inquiry');
            setMessage('');
          }}
        >
          Send Another Message
        </Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          label="Your Name"
          placeholder="Jane Smith"
          required
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="jane@example.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Select
          label="Type of Message"
          data={['General Inquiry', 'Prayer Request', 'Volunteer', 'Other']}
          value={type}
          onChange={setType}
        />
        <Textarea
          label="Message"
          placeholder="How can we help or pray for you?"
          required
          minRows={5}
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />

        {error && (
          <Alert color="red" title="Error">
            {error}
          </Alert>
        )}

        <Button type="submit" color="yellow" size="lg" fullWidth loading={loading}>
          Send Message
        </Button>

        <Text fz="xs" ta="center" c="dimmed">
          Your information is kept private and will only be used to respond to your message.
        </Text>
      </Stack>
    </form>
  );
}
