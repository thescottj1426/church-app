import type { Metadata } from 'next';
import StaffPhoto from '@/components/StaffPhoto';

export const metadata: Metadata = {
  title: 'Staff',
  description: 'Meet the pastoral team and staff of Divine Power Christian Church.',
};

const STAFF = [
  { name: 'Gloria Wilson',       role: 'Reverend',         focus: '',                             photo: 'GloriaWilson.jpeg.jpeg',          color: 'var(--cobalt)' },
  { name: 'Shajuan Wilson',      role: 'Minister',         focus: '',                             photo: 'Minister Shajuan Wilson.jpeg',    color: 'var(--cobalt)' },
  { name: 'Artashia Edwards',    role: 'Minister',         focus: '',                             photo: 'AtashiaEdwards.jpeg.jpeg',        color: 'var(--cobalt)' },
  { name: 'Marissa Myers',       role: 'Media/Marketing',  focus: '',                             photo: 'MrissaMyers.jpeg.jpeg',           color: 'var(--cobalt)' },
];

export default function StaffPage() {
  return (
    <>
      {/* Page hero */}
      <section className="dp-page-hero">
        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 20 }}>The people behind the pulpit</div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 108px)',
            lineHeight: 0.92, fontWeight: 500,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            Our staff.
          </h1>
          <p style={{ marginTop: 28, fontSize: 21, color: 'var(--ink-2)', maxWidth: 620, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
            A team called to shepherd, teach, and serve the congregation at Divine Power Christian Church.
          </p>
        </div>
        <div style={{ paddingLeft: 36, borderLeft: '2px solid var(--cobalt)' }}>
          <p style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, color: 'var(--ink)', margin: 0 }}>
            &ldquo;Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.&rdquo;
          </p>
          <div className="dp-eyebrow" style={{ marginTop: 16 }}>Proverbs 3:5–6</div>
        </div>
      </section>

      {/* Featured senior pastor */}
      <section className="dp-split-r" style={{ padding: 'var(--sp-md) var(--pad-h)', gap: 80, alignItems: 'start' }}>
        <StaffPhoto name="Pastor Steve T. Wilson" photo="Pastor Steve T. Wilson.jpeg" label="Senior Pastor" />

        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 16 }}>Senior Pastor · Since 2011</div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 84, lineHeight: 0.9, fontWeight: 500, margin: '0 0 28px' }}>
            Pastor<br />Steve<br />Wilson
          </h2>
        </div>
      </section>

      {/* Staff grid */}
      <section style={{ padding: 'var(--sp-sm) var(--pad-h) var(--sp-lg)', background: 'var(--vellum)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
          <span className="dp-eyebrow cobalt">01</span>
          <span className="dp-eyebrow">Ministry staff</span>
        </div>
        <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 56, fontWeight: 500, margin: '0 0 48px' }}>
          The team
        </h2>
        <div className="dp-grid-4" style={{ gap: 24 }}>
          {STAFF.map((s, i) => (
            <div key={s.name} className="dp-card" style={{ padding: 0, overflow: 'hidden', border: 'none' }}>
              <StaffPhoto name={s.name} photo={s.photo} />
              <div style={{ padding: '24px 28px' }}>
                <div className="dp-eyebrow" style={{ color: s.color, marginBottom: 8 }}>{s.role}</div>
                <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: 28, margin: '0 0 6px', fontWeight: 500 }}>{s.name}</h3>
                <div style={{ fontFamily: 'var(--ui)', fontSize: 13, color: 'var(--ink-2)' }}>{s.focus}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <a href="/contact" className="dp-btn ghost">Reach out to our team →</a>
        </div>
      </section>
    </>
  );
}
