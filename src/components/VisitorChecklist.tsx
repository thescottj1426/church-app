'use client';

import { useState } from 'react';

const ITEMS = [
  { t: 'Arrive 10 minutes early',  d: 'Grab a coffee in the lobby and meet a greeter.' },
  { t: 'Park in the front lot',     d: 'Reserved visitor spots are marked in cobalt blue.' },
  { t: 'Check in your kids',        d: 'Birth–5th grade have classes on the east wing.' },
  { t: 'Find a seat — anywhere',    d: 'No reserved pews. Service runs about 75 minutes.' },
  { t: 'Connect after the service', d: "Stop by the Welcome Table — we'd love to meet you." },
];

export default function VisitorChecklist() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {ITEMS.map((item, i) => (
        <label key={i} style={{
          display: 'grid', gridTemplateColumns: '32px 1fr',
          gap: 20, alignItems: 'start',
          padding: '22px 0',
          borderTop: i === 0 ? '1px solid var(--ink)' : '1px solid var(--rule)',
          cursor: 'pointer',
        }}>
          <input
            type="checkbox"
            checked={!!checked[i]}
            onChange={() => toggle(i)}
            style={{ width: 22, height: 22, accentColor: 'var(--cobalt)', marginTop: 4 }}
          />
          <div>
            <div style={{
              fontFamily: 'var(--serif-display)', fontSize: 24,
              textDecoration: checked[i] ? 'line-through' : 'none',
              color: checked[i] ? 'var(--ink-2)' : 'var(--ink)',
              transition: 'color .15s',
            }}>
              <span className="dp-eyebrow cobalt" style={{ marginRight: 12, fontSize: 11 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.t}
            </div>
            <div style={{ color: 'var(--ink-2)', marginTop: 4, fontSize: 16, fontFamily: 'var(--serif)' }}>
              {item.d}
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
