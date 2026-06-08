import type { Metadata } from 'next';
import StaffPhoto from '@/components/StaffPhoto';

export const metadata: Metadata = {
  title: 'Staff',
  description: 'Meet the pastoral team and staff of Divine Power Christian Church.',
};

const STAFF = [
  { name: 'Gloria Wilson',       role: 'Minister',         focus: '',                             photo: 'Minister Gloria Wilson.jpg',      color: 'var(--cobalt)' },
  { name: 'Shajuan Wilson',      role: 'Minister',         focus: '',                             photo: 'Minister Shajuan Wilson.jpeg',    color: 'var(--cobalt)' },
  { name: 'Artashia Edwards',    role: 'Minister',         focus: '',                             photo: 'Minister Artashia Edwards.jpeg',  color: 'var(--cobalt)' },
  { name: 'Marissa Myers',       role: 'Media/Marketing',  focus: '',                             photo: 'Marissa Myers.jpeg',              color: 'var(--cobalt)' },
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
            &ldquo;Be shepherds of God&apos;s flock that is under your care, watching over them — not because you must, but because you are willing.&rdquo;
          </p>
          <div className="dp-eyebrow" style={{ marginTop: 16 }}>1 Peter 5:2</div>
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
          <div style={{ fontFamily: 'var(--ui)', fontSize: 13, color: 'var(--ink-2)', marginBottom: 28 }}>
            MDiv · Howard University School of Divinity<br />
            DMin · Asbury Theological Seminary
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', fontFamily: 'var(--serif)' }}>
            <p style={{ margin: 0 }}>
              <span style={{
                fontFamily: 'var(--serif-display)', fontSize: 64,
                float: 'left', lineHeight: 0.85,
                marginRight: 10, marginTop: 6, color: 'var(--cobalt)',
              }}>P</span>
              astor Steve came to Divine Power in 2011 after ten years in pastoral ministry in Atlanta. His passion is expository preaching — working through books of the Bible verse by verse, letting the text set the agenda. He and his wife Carol have three children, two of whom grew up in this church.
            </p>
            <p style={{ margin: 0 }}>
              Outside the pulpit, Pastor Steve is a student of church history, an avid reader, and an occasional fisherman. He believes the local church is the hope of the world and has given his life to prove it.
            </p>
          </div>
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
