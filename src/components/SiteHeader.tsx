'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Button,
  Anchor,
} from '@mantine/core';

const navLinks = [
  { href: '/events', label: 'Events' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/groups', label: 'Groups' },
  { href: '/about', label: 'About' },
  { href: '/livestream', label: 'Watch Live' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/connect', label: 'Connect' },
];

export default function SiteHeader() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: '#1e293b', color: 'white' }}>
      <Container size="xl" py="md">
        <Group justify="space-between">
          {/* Logo */}
          <Anchor component={Link} href="/" style={{ textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Divine Power Christian Church"
              style={{ height: 90, width: 'auto', display: 'block', borderRadius: 8, padding: '4px 8px', backgroundColor: 'white' }}
            />
          </Anchor>

          {/* Desktop nav */}
          <Group gap="xl" visibleFrom="sm">
            {navLinks.map(({ href, label }) => (
              <Anchor
                key={href}
                component={Link}
                href={href}
                style={{
                  textDecoration: 'none',
                  fontWeight: pathname === href ? 700 : 500,
                  color: pathname === href ? '#f59e0b' : '#cbd5e1',
                }}
              >
                {label}
              </Anchor>
            ))}
            <Button
              component={Link}
              href="/donate"
              color="yellow"
              variant="filled"
              radius="md"
            >
              Give
            </Button>
          </Group>

          {/* Mobile burger */}
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="sm"
            color="white"
            aria-label="Toggle navigation"
          />
        </Group>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        size="xs"
        padding="md"
      >
        <Stack gap="lg" mt="md">
          {navLinks.map(({ href, label }) => (
            <Anchor
              key={href}
              component={Link}
              href={href}
              fz="lg"
              onClick={() => setOpened(false)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {label}
            </Anchor>
          ))}
          <Button
            component={Link}
            href="/donate"
            color="yellow"
            onClick={() => setOpened(false)}
            fullWidth
          >
            Give
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
