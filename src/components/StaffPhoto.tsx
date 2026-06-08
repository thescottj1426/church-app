'use client';

import { useState } from 'react';

export default function StaffPhoto({
  name,
  photo,
  label,
}: {
  name: string;
  photo: string;
  label?: string;
}) {
  const [errored, setErrored] = useState(false);
  const src = `/photos/staff/${photo}`;

  if (errored) {
    return (
      <div
        className="dp-placeholder"
        style={{ aspectRatio: '3/4', borderRadius: 0, fontSize: 12 }}
      >
        {label ?? name}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
      <img
        src={src}
        alt={name}
        onError={() => setErrored(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 15%',
          transform: 'scale(1.12)',
        }}
      />
      {label && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '10px 16px',
          background: 'oklch(0.10 0.04 258 / 0.65)',
          backdropFilter: 'blur(4px)',
        }}>
          <div style={{ fontFamily: 'var(--serif-display)', fontSize: 18, color: 'var(--cream)' }}>{name}</div>
          <div className="dp-eyebrow gold" style={{ marginTop: 2 }}>{label}</div>
        </div>
      )}
    </div>
  );
}
