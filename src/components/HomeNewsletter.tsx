'use client';

import { useState } from 'react';

export default function HomeNewsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
    } catch {
      // fail silently — show success anyway
    } finally {
      setLoading(false);
      setDone(true);
    }
  }

  if (done) {
    return (
      <div style={{
        padding: '40px 40px', background: 'var(--paper)',
        border: '1px solid var(--rule)', textAlign: 'center', borderRadius: 6,
      }}>
        <div style={{ fontSize: 48, color: 'var(--cobalt)' }}>✓</div>
        <div style={{ fontFamily: 'var(--serif-display)', fontSize: 28, marginTop: 8 }}>
          You&apos;re on the list.
        </div>
        <div style={{ fontFamily: 'var(--ui)', color: 'var(--ink-2)', marginTop: 8, fontSize: 14 }}>
          Look out for Friday&apos;s letter at <strong>{email}</strong>.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label className="dp-label">Your name</label>
        <input
          className="dp-input"
          placeholder="Mary Johnson"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="dp-label">Email address</label>
        <input
          className="dp-input"
          type="email"
          required
          placeholder="mary@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="dp-btn primary"
        disabled={loading}
        style={{ alignSelf: 'flex-start', marginTop: 8 }}
      >
        {loading ? 'Subscribing…' : 'Subscribe →'}
      </button>
    </form>
  );
}
