'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
        background: 'var(--cobalt)', color: 'var(--cream)',
        padding: '48px 40px', textAlign: 'center',
      }}>
        <div style={{ fontSize: 32, color: 'var(--gold)', marginBottom: 16 }}>✦</div>
        <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: 28, color: 'var(--cream)', margin: '0 0 12px' }}>
          Message received.
        </h3>
        <p style={{ fontFamily: 'var(--serif)', color: 'oklch(0.88 0.03 240)', lineHeight: 1.6, margin: 0 }}>
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid var(--rule)',
    background: 'var(--paper)',
    fontFamily: 'var(--serif)',
    fontSize: 16,
    color: 'var(--ink)',
    outline: 'none',
    boxSizing: 'border-box',
    borderRadius: 0,
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="dp-form-row">
        <div>
          <div className="dp-eyebrow" style={{ marginBottom: 8 }}>Name</div>
          <input
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            style={inputStyle}
          />
        </div>
        <div>
          <div className="dp-eyebrow" style={{ marginBottom: 8 }}>Email</div>
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="you@example.com"
            style={inputStyle}
          />
        </div>
      </div>
      <div>
        <div className="dp-eyebrow" style={{ marginBottom: 8 }}>Message</div>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="How can we help?"
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="dp-btn primary"
        style={{ alignSelf: 'flex-start', opacity: submitting ? 0.6 : 1 }}
      >
        {submitting ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  );
}
