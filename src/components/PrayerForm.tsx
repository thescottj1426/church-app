'use client';

import { useState } from 'react';

const AUDIENCE_OPTIONS = [
  { value: 'pastors', label: 'Pastors only' },
  { value: 'prayer-team', label: 'Prayer team' },
  { value: 'congregation', label: 'Whole congregation' },
];

export default function PrayerForm() {
  const [anonymous, setAnonymous] = useState(false);
  const [audience, setAudience] = useState('prayer-team');
  const [request, setRequest] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 600));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div style={{
        backgroundColor: 'var(--cobalt)',
        borderRadius: '0.75rem',
        padding: '2.5rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', color: 'var(--gold)' }}>★</div>
        <h3 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '1.6rem',
          fontWeight: 400,
          color: 'white',
          marginBottom: '0.75rem',
        }}>
          Your prayer has been received.
        </h3>
        <p style={{
          fontFamily: 'var(--font-eb-garamond), Georgia, serif',
          color: 'oklch(0.88 0.03 240)',
          lineHeight: 1.75,
          fontSize: '1.05rem',
        }}>
          Our team will be lifting you up in prayer. Thank you for trusting us with your heart.
        </p>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--ink-2)',
    marginBottom: '0.5rem',
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Anonymous toggle */}
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        cursor: 'pointer',
      }}>
        <input
          type="checkbox"
          checked={anonymous}
          onChange={e => setAnonymous(e.target.checked)}
          style={{ width: 18, height: 18, accentColor: 'var(--cobalt)', cursor: 'pointer' }}
        />
        <span style={{
          fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ink-2)',
        }}>
          Submit anonymously
        </span>
      </label>

      {/* Prayer textarea */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={labelStyle}>Prayer Request</label>
        <textarea
          value={request}
          onChange={e => setRequest(e.target.value)}
          required
          rows={5}
          placeholder="Share what's on your heart..."
          style={{
            width: '100%',
            padding: '0.875rem',
            border: '1px solid oklch(0.83 0.022 80)',
            borderRadius: '0.5rem',
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '1.05rem',
            color: 'var(--ink)',
            backgroundColor: 'var(--paper)',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Audience picker */}
      <div style={{ marginBottom: '1.75rem' }}>
        <p style={{ ...labelStyle, marginBottom: '0.75rem' }}>Share with</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {AUDIENCE_OPTIONS.map(({ value, label }) => (
            <label key={value} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
            }}>
              <input
                type="radio"
                name="audience"
                value={value}
                checked={audience === value}
                onChange={() => setAudience(value)}
                style={{ accentColor: 'var(--cobalt)', cursor: 'pointer' }}
              />
              <span style={{
                fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
                fontSize: '0.95rem',
                color: 'var(--ink)',
              }}>
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting || !request.trim()}
        style={{
          width: '100%',
          padding: '0.875rem',
          backgroundColor: 'var(--cobalt)',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontFamily: 'var(--font-public-sans), system-ui, sans-serif',
          fontWeight: 600,
          fontSize: '0.9rem',
          cursor: submitting || !request.trim() ? 'not-allowed' : 'pointer',
          opacity: submitting || !request.trim() ? 0.55 : 1,
          letterSpacing: '0.03em',
        }}
      >
        {submitting ? 'Sending…' : 'Submit Prayer Request'}
      </button>
    </form>
  );
}
