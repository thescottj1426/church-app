'use client';

import { useEffect, useState } from 'react';

function nextService(now: Date): Date {
  // Interpret current time in ET (handles EDT/EST automatically)
  const etNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const etDay = etNow.getDay();
  const etHour = etNow.getHours();
  const etOffset = now.getTime() - etNow.getTime();

  // If Sunday before noon ET, count to today's service; otherwise next Sunday
  const daysUntil = etDay === 0 && etHour < 12 ? 0 : (7 - etDay) || 7;

  const target = new Date(etNow);
  target.setDate(target.getDate() + daysUntil);
  target.setHours(11, 0, 0, 0);

  return new Date(target.getTime() + etOffset);
}

function isServiceNow(now: Date): boolean {
  const etNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const etDay = etNow.getDay();
  const etHour = etNow.getHours();
  // Sunday between 11 AM and 1 PM ET
  return etDay === 0 && etHour >= 11 && etHour < 13;
}

export default function CountdownTimer() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const live = now && isServiceNow(now);

  return (
    <div style={{
      background: 'var(--paper)',
      border: '1px solid var(--rule)',
      boxShadow: '0 24px 60px -20px oklch(0.14 0.06 258 / 0.35)',
      padding: '28px 32px',
    }}>
      <div className="dp-eyebrow cobalt" style={{ marginBottom: 14 }}>Next Service</div>
      <div style={{ fontFamily: 'var(--serif-display)', fontSize: 30, lineHeight: 1.1, marginBottom: 6 }}>
        Sunday Worship
      </div>
      <div style={{ fontFamily: 'var(--ui)', fontSize: 13, color: 'var(--ink-2)', marginBottom: 22, minHeight: 18 }}>
        {now ? now.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ' '}
      </div>

      {live ? (
        <div style={{
          background: 'var(--cobalt)',
          color: 'var(--cream)',
          textAlign: 'center',
          padding: '18px 0',
          borderRadius: 4,
          fontFamily: 'var(--serif-display)',
          fontSize: 22,
          letterSpacing: '0.02em',
        }}>
          Service is today — join us!
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {(['Days', 'Hrs', 'Min', 'Sec'] as const).map((l) => {
            let v = 0;
            if (now) {
              const next = nextService(now);
              const diff = Math.max(0, next.getTime() - now.getTime());
              if (l === 'Days') v = Math.floor(diff / 86400000);
              else if (l === 'Hrs') v = Math.floor((diff % 86400000) / 3600000);
              else if (l === 'Min') v = Math.floor((diff % 3600000) / 60000);
              else v = Math.floor((diff % 60000) / 1000);
            }
            return (
              <div key={l} style={{
                background: 'var(--vellum)',
                padding: '12px 0',
                textAlign: 'center',
                borderRadius: 4,
              }}>
                <div style={{ fontFamily: 'var(--serif-display)', fontSize: 28, fontWeight: 500, lineHeight: 1 }}>
                  {String(v).padStart(2, '0')}
                </div>
                <div className="dp-eyebrow" style={{ fontSize: 10, marginTop: 4 }}>{l}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
