import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Divine Power Christian Church — a family of faith since 1962.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="dp-page-hero">
        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 20 }}>About us</div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 108px)',
            lineHeight: 0.92, fontWeight: 500,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            A family of faith<br />since 1962.
          </h1>
          <p style={{ marginTop: 28, fontSize: 21, color: 'var(--ink-2)', maxWidth: 620, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
            Divine Power Christian Church was planted by twelve families meeting in a school cafeteria on Cedar Creek Road.
            Six decades later, the cafeteria is now a sanctuary — but the calling is the same.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="dp-split-r" style={{ padding: 'var(--sp-lg) var(--pad-h)', gap: 80 }}>
        <div className="dp-sticky-col" style={{ position: "sticky", top: 100, alignSelf: "start" }}>
          <div className="dp-eyebrow cobalt">01 · Our story</div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 56, marginTop: 18, lineHeight: 1, fontWeight: 500 }}>
            Three<br />generations,<br />one mission.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontSize: 19, lineHeight: 1.65, color: 'var(--ink-2)', fontFamily: 'var(--serif)' }}>
          <p>
            <span style={{
              fontFamily: 'var(--serif-display)', fontSize: 64,
              float: 'left', lineHeight: 0.85,
              marginRight: 12, marginTop: 6, color: 'var(--cobalt)',
            }}>
              I
            </span>
            n 1962, Pastor Robert Devine gathered eleven other families who wanted a Christian congregation rooted in expository preaching and warm community. They met in a borrowed school cafeteria for three years before purchasing land on Mulberry Lane.
          </p>
          <img
            src="/photos/staff/gallery/frontofchurch.jpg"
            alt="Front of Divine Power Christian Church"
            style={{ width: '100%', height: '80vh', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <p>
            The church bought its first piece of land in 1965 — five acres on Mulberry Lane, where we still meet today.
            The original sanctuary, built mostly by volunteers, seated 180. The current building was completed in 1998 and seats 600.
          </p>
          <p>
            Today, Divine Power is led by Pastor Steve Wilson and a staff of ten. Around 450 people call this church home — from babies in the nursery to widows who were here when the doors opened. Every generation, the calling has been the same: love Jesus, love each other, love our neighbors.
          </p>
        </div>
      </section>

      {/* Timeline strip */}
      <section style={{ background: 'var(--vellum)', padding: 'var(--sp-md) var(--pad-h)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 60 }}>
          <span className="dp-eyebrow cobalt">02</span>
          <span className="dp-eyebrow">A few markers</span>
        </div>
        <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 56, fontWeight: 500, margin: '0 0 60px' }}>
          64 years, briefly
        </h2>
        <div className="dp-grid-5" style={{ gap: 24 }}>
          {[
            ['1962', 'Founded by 12 families in a school cafeteria.'],
            ['1965', 'Mulberry Lane property purchased; first sanctuary built.'],
            ['1981', 'Pastor Devine retires. Pastor Harold Means begins a 27-year tenure.'],
            ['1998', 'Current sanctuary completed. Capacity grows from 180 to 600.'],
            ['2011', 'Pastor Steve Wilson begins as senior pastor.'],
          ].map(([year, text]) => (
            <div key={year} style={{ borderTop: '2px solid var(--cobalt)', paddingTop: 16 }}>
              <div style={{ fontFamily: 'var(--serif-display)', fontSize: 44, color: 'var(--cobalt)', lineHeight: 1 }}>{year}</div>
              <p style={{ marginTop: 12, color: 'var(--ink-2)', fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.55 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statement of faith */}
      <section style={{ padding: 'var(--sp-lg) var(--pad-h)' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, justifyContent: 'center', marginBottom: 16 }}>
            <span className="dp-eyebrow cobalt">03</span>
            <span className="dp-eyebrow">Statement of faith</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 56, fontWeight: 500, margin: 0 }}>What we believe</h2>
        </div>
        <div className="dp-grid-2" style={{
          gap: '48px 80px',
          maxWidth: 1100, margin: '0 auto',
        }}>
          {[
            ['The Scriptures', 'We believe the Bible is the inspired, inerrant Word of God — sufficient for faith and practice.'],
            ['One God in three persons', 'One God eternally existing in three persons: Father, Son, and Holy Spirit.'],
            ['Jesus Christ', 'The eternal Son of God, fully God and fully man, crucified for our sins, risen bodily, ascended, and coming again.'],
            ['Salvation by grace', 'Salvation is by grace alone, through faith alone, in Christ alone.'],
            ['The Church', 'A local assembly of baptized believers gathering for worship, teaching, fellowship, and the ordinances.'],
            ['The ordinances', "Two ordinances given by Christ: believer's baptism by immersion, and the Lord's Supper."],
          ].map(([title, desc], i) => (
            <div key={title as string}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span className="dp-eyebrow cobalt">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: 30, fontWeight: 500, margin: 0 }}>{title}</h3>
              </div>
              <p style={{ marginTop: 12, color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.6, fontFamily: 'var(--serif)' }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <button className="dp-btn ghost">Read the full statement of faith →</button>
        </div>
      </section>

      {/* Affiliations */}
      <section style={{ padding: 'var(--sp-sm) var(--pad-h) var(--sp-lg)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 30 }}>
          <div className="dp-eyebrow">In partnership with</div>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {['Assemblies of God', 'Florida Ministry Network', 'Jacksonville Ministry Council', 'World Hope Kenya'].map((a) => (
              <div key={a} style={{ fontFamily: 'var(--serif-display)', fontSize: 18, color: 'var(--ink-2)' }}>{a}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
