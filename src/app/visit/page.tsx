import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit',
  description: "Everything you need to know before your first visit to Divine Power Christian Church.",
};

const FAQS = [
  ["What should I wear?", "Whatever you'd wear to a nice dinner with friends. Jeans are fine. A jacket is fine. Sundresses, polos, suits — all welcome. We care about you, not your outfit."],
  ["Where do I park?", "There are two lots, both free. Cobalt-blue spots in the front row are reserved for first-time visitors. If you can't find a spot, a parking team member will help you."],
  ["What about my kids?", "We have nursery (birth–2), preschool (3–5), and elementary (K–5) classes during both services. Check-in is in the east lobby — security tags, safe rooms, the whole bit."],
  ["How long is the service?", "About 75 minutes. We're not a rushed crowd, but we're not a marathon either."],
  ["Will I be asked to give?", "Never as a visitor. We pass an offering plate, but the only ask of first-timers is that you fill out a Welcome Card so we can thank you for coming."],
  ["Can I just watch online first?", "Absolutely. Every service streams live on our website, YouTube, and Facebook. Watch as many as you want before you visit in person."],
];

export default function VisitPage() {
  return (
    <>
      {/* Page hero */}
      <section className="dp-page-hero">
        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 20 }}>Plan your visit</div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 108px)',
            lineHeight: 0.92, fontWeight: 500,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            We can&apos;t wait<br />to meet you.
          </h1>
          <p style={{ marginTop: 28, fontSize: 21, color: 'var(--ink-2)', maxWidth: 620, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
            Whether it&apos;s your first time in a church in a while — or ever — here&apos;s everything you need to know to feel at home on Sunday.
          </p>
        </div>
      </section>

      {/* Map + address */}
      <section style={{ background: 'var(--vellum)' }} className="dp-split">
        <iframe
          src="https://maps.google.com/maps?q=2025+Pullman+Ave,+Jacksonville,+FL+32209&output=embed&z=15"
          style={{ width: '100%', height: 520, minHeight: 260, border: 'none', display: 'block' }}
          title="Divine Power Christian Church location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div style={{ padding: 'var(--sp-sm) var(--pad-h)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 16 }}>Where to find us</div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 48, lineHeight: 1, marginBottom: 24, fontWeight: 500 }}>
            2025 Pullman Ave<br />Jacksonville, FL
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, color: 'var(--ink-2)', fontSize: 17, fontFamily: 'var(--serif)' }}>
            <div>
              <div className="dp-eyebrow" style={{ marginBottom: 6 }}>From I-985</div>
              Take exit 18 toward Cedar Creek. Head south on Pullman Ave — we&apos;re on the right, just past the elementary school.
            </div>
            <div>
              <div className="dp-eyebrow" style={{ marginBottom: 6 }}>Parking</div>
              Two large lots, with reserved cobalt-blue spots up front for first-time visitors.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="https://www.google.com/maps/dir/?api=1&destination=2025+Pullman+Ave%2C+Jacksonville%2C+FL+32209" target="_blank" rel="noopener noreferrer" className="dp-btn primary">
              Get directions →
            </a>
            <a href="tel:9041234567" className="dp-btn ghost">Call the office</a>
          </div>
        </div>
      </section>

      {/* Service times */}
      <section style={{ padding: 'var(--sp-lg) var(--pad-h)' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, justifyContent: 'center', marginBottom: 16 }}>
            <span className="dp-eyebrow cobalt">01</span>
            <span className="dp-eyebrow">Sunday rhythm</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 56, fontWeight: 500, margin: 0 }}>Service times</h2>
        </div>
        <div className="dp-grid-3" style={{ gap: 32, maxWidth: 1100, margin: '0 auto' }}>
          {[
            { t: 'Morning',   n: 'Traditional Service', d: 'Hymns, choir, and organ — a reverent start to Sunday morning. Sunday best is welcome but never required.', c: 'var(--cobalt)' },
            { t: 'Mid-day',   n: 'Sunday School',        d: 'Classes for every age group — adult electives, kids, youth, and seniors. Between services.', c: 'var(--gold)' },
            { t: 'Late',      n: 'Blended Service',       d: 'Hymns and modern worship together, with children\'s church for K–5. Families welcome.', c: 'var(--cobalt)' },
          ].map((s) => (
            <div key={s.t} className="dp-card" style={{ padding: 36, borderTop: `3px solid ${s.c}` }}>
              <div style={{ fontFamily: 'var(--serif-display)', fontSize: 56, color: s.c, lineHeight: 1 }}>{s.t}</div>
              <h3 style={{ fontFamily: 'var(--serif-display)', marginTop: 18, fontSize: 28, fontWeight: 500 }}>{s.n}</h3>
              <p style={{ marginTop: 14, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, fontFamily: 'var(--serif)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '40px var(--pad-h) 120px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
          <span className="dp-eyebrow cobalt">02</span>
          <span className="dp-eyebrow">Common questions</span>
        </div>
        <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 56, fontWeight: 500, margin: '0 0 40px' }}>What to expect</h2>
        <div style={{ borderTop: '2px solid var(--ink)' }}>
          {FAQS.map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '1px solid var(--rule)', padding: '22px 0' }}>
              <summary style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer', listStyle: 'none',
                fontFamily: 'var(--serif-display)', fontSize: 24,
              }}>
                <span>
                  <span className="dp-eyebrow" style={{ marginRight: 16, fontSize: 11 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {q}
                </span>
                <span style={{ fontSize: 24, color: 'var(--cobalt)', flexShrink: 0, marginLeft: 16 }}>+</span>
              </summary>
              <p style={{ marginTop: 14, color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.65, maxWidth: 820, fontFamily: 'var(--serif)' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
