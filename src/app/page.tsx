import type { Metadata } from 'next';
import CountdownTimer from '@/components/CountdownTimer';
import VisitorChecklist from '@/components/VisitorChecklist';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Divine Power Christian Church — a family of faith in Jacksonville, FL.',
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="dp-hero-split">
        {/* Left: text */}
        <div style={{
          padding: 'var(--sp-lg) var(--pad-h) var(--sp-md)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: 'var(--cream)',
        }}>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="dp-orn" style={{ color: 'var(--cobalt)' }} />
            Welcome home
          </div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 96px)',
            lineHeight: 0.95,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            color: 'var(--ink)',
            margin: 0,
          }}>
            Where faith<br />
            finds <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>family.</em>
          </h1>
          <p style={{
            fontSize: 21, color: 'var(--ink-2)',
            marginTop: 28, maxWidth: 480, lineHeight: 1.5,
            fontFamily: 'var(--serif)',
          }}>
            A congregation in Jacksonville gathering each Sunday to worship, grow together,
            and serve our neighbors.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
            <a href="/visit" className="dp-btn primary">Plan your visit →</a>
            <a href="/contact" className="dp-btn ghost">Get in touch</a>
          </div>

          {/* Service times */}
          <div style={{
            display: 'flex', gap: 36, marginTop: 64, flexWrap: 'wrap',
            paddingTop: 32, borderTop: '1px solid var(--rule)',
          }}>
            {[
              ['Sunday Worship', 'Multiple services'],
              ['Wednesday Bible Study', 'Midweek service'],
              ['Sunday School', 'Between services'],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="dp-eyebrow" style={{ marginBottom: 8 }}>{k}</div>
                <div style={{ fontFamily: 'var(--serif-display)', fontSize: 22 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stained-glass panel with countdown card */}
        <div className="dp-hero-right">
          <div className="dp-stained" />

          {/* Countdown card overlapping the left edge */}
          <div className="dp-countdown-float">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE STRIP ── */}
      <section style={{
        background: 'var(--cobalt)',
        color: 'var(--cream)',
        padding: 'var(--sp-sm) var(--pad-h)',
        textAlign: 'center',
      }}>
        <div className="dp-eyebrow gold" style={{ marginBottom: 22 }}>Ephesians 4:11–12</div>
        <p style={{
          fontFamily: 'var(--serif-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 4vw, 38px)',
          color: 'var(--cream)',
          maxWidth: 920, margin: '0 auto',
          fontWeight: 400, lineHeight: 1.4,
        }}>
          &ldquo;So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up.&rdquo;
        </p>
      </section>

      {/* ── FIRST-TIME VISITOR CHECKLIST ── */}
      {/* <section style={{ padding: 'var(--sp-lg) var(--pad-h)', background: 'var(--cream)' }}>
        <div className="dp-grid-2" style={{ gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
              <span className="dp-eyebrow cobalt">01</span>
              <span className="dp-eyebrow">First-time visitors</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--serif-display)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 500, margin: 0, lineHeight: 1,
            }}>
              What to expect<br />on Sunday
            </h2>
            <p style={{
              fontSize: 19, color: 'var(--ink-2)', marginTop: 16,
              maxWidth: 440, lineHeight: 1.55, fontFamily: 'var(--serif)',
            }}>
              Coming to a new church can feel like a lot. Here&apos;s exactly how it goes — tick each item as you read, and you&apos;ll be ready.
            </p>
            <a href="/visit" className="dp-btn primary" style={{ marginTop: 32, display: 'inline-flex' }}>
              Tell us you&apos;re coming →
            </a>
          </div>
          <VisitorChecklist />
        </div>
      </section> */}

      {/* ── MINISTRIES GLIMPSE ── */}
      <section style={{ padding: '0 var(--pad-h) var(--sp-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
              <span className="dp-eyebrow cobalt">02</span>
              <span className="dp-eyebrow">Find your people</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 500, margin: 0 }}>
              Ministries for every season
            </h2>
          </div>
          <a href="/ministries" className="dp-nav-link">All ministries →</a>
        </div>
        <div className="dp-grid-4" style={{ gap: 24 }}>
          {[
            { name: 'Children',     age: 'Birth – 5th grade', color: 'var(--gold)' },
            { name: 'Youth',        age: '6th – 12th grade',  color: 'var(--cobalt)' },
            { name: 'Young Adults', age: '18 – 30',           color: 'var(--cobalt)' },
            { name: 'Senior Saints', age: '60+',              color: 'var(--cobalt)' },
          ].map((m) => (
            <a key={m.name} href="/ministries" style={{ textDecoration: 'none' }}>
              <div className="dp-card" style={{
                padding: '32px 28px', cursor: 'pointer',
                transition: 'transform .15s',
                borderTop: `3px solid ${m.color}`,
              }}>
                <div className="dp-eyebrow" style={{ marginBottom: 12 }}>{m.age}</div>
                <div style={{ fontFamily: 'var(--serif-display)', fontSize: 32, marginBottom: 36 }}>{m.name}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                  <div style={{ fontFamily: 'var(--ui)', fontSize: 13, color: 'var(--ink-2)' }}>Wed · 6:30 pm</div>
                  <div style={{ color: m.color, fontSize: 20 }}>→</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
