'use client';

import { useState } from 'react';
import { TextInput, Button, Group, Text } from '@mantine/core';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <Text fz="sm" c="green.4" fw={600}>
        You&apos;re subscribed! Check your inbox.
      </Text>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Group gap="xs" align="flex-start">
        <TextInput
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
          required
          size="sm"
          style={{ flex: 1 }}
          styles={{
            input: {
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
            },
          }}
        />
        <Button type="submit" color="yellow" size="sm" loading={loading}>
          Subscribe
        </Button>
      </Group>
      {error && <Text fz="xs" c="red.4" mt="xs">{error}</Text>}
    </form>
  );
}
