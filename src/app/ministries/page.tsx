import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ministries',
  description: 'Find your people at Divine Power Christian Church.',
};

const MIN = [
  { name: 'Children',          age: 'Birth – 5th grade',     when: 'Sun 9:45 am · Wed 6:30 pm', lead: 'Linda Whitley',   color: 'var(--gold)',   blurb: "Bible stories, songs, scripture memory, and a whole lot of fun. Kids ministry runs simultaneously with the 11 am service." },
  { name: 'Youth',             age: '6th – 12th grade',       when: 'Wed 6:30 pm · Fri events',  lead: 'Devon Carter',    color: 'var(--cobalt)',   blurb: 'Real conversations about real faith, with a pizza budget that takes it seriously. Annual fall and summer camps.' },
  { name: 'Young Adults',      age: '18 – 30',                when: 'Sun 6:00 pm',               lead: 'Marcus Reed',     color: 'var(--cobalt)', blurb: 'Sunday-evening community for college students, singles, and young marrieds. Currently studying Philippians.' },
  { name: "Women's Ministry",  age: 'All women',              when: 'Tue 6:30 pm',               lead: 'Sarah Beckett',   color: 'var(--cobalt)',   blurb: 'Bible study, mentoring, and the annual spring retreat at Lake Lanier. Currently in the book of Ruth.' },
  { name: "Men's Ministry",    age: 'All men',                when: 'Sat 8:00 am (monthly)',     lead: 'Tom Albright',    color: 'var(--cobalt)', blurb: "Breakfast, prayer, and conversation. Annual men's retreat and a fishing trip every June." },
  { name: 'Senior Saints',     age: '60+',                    when: 'Thu 10:00 am',              lead: 'Esther Park',     color: 'var(--cobalt)',   blurb: 'Bible study, day trips, hymn sings, and lunch out. The wisdom keepers of our church.' },
  { name: 'Worship',           age: 'Musicians & vocalists',  when: 'Wed rehearsal 7:00 pm',     lead: 'Patricia Howell', color: 'var(--gold)',   blurb: 'A blended worship team — hymns, modern songs, and the occasional choir Sunday. Auditions in August.' },
  { name: 'Missions',          age: 'Anyone called',          when: 'Year-round trips',          lead: 'Robert Ngozi',    color: 'var(--cobalt)',   blurb: 'Local outreach (food bank, schools) and international partners in Kenya and Honduras. Short-term trips offered each summer.' },
];

export default function MinistriesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="dp-page-hero">
        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 20 }}>Find your people</div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 108px)',
            lineHeight: 0.92, fontWeight: 500,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            Ministries.
          </h1>
          <p style={{ marginTop: 28, fontSize: 21, color: 'var(--ink-2)', maxWidth: 620, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
            A church is made of people who actually know each other. These are the groups where that happens — pick one and show up.
          </p>
        </div>
        <div style={{ paddingLeft: 36, borderLeft: '2px solid var(--cobalt)' }}>
          <p style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, color: 'var(--ink)', margin: 0 }}>
            &ldquo;As iron sharpens iron, so one person sharpens another.&rdquo;
          </p>
          <div className="dp-eyebrow" style={{ marginTop: 16 }}>Proverbs 27:17</div>
        </div>
      </section>

      {/* Filter pills */}
      <section style={{ padding: 'var(--sp-sm) var(--pad-h) 0', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {['All ministries', 'Children & Youth', 'Adults', 'Service & Missions', 'Worship'].map((c, i) => (
          <button key={c} className={`dp-btn ${i === 0 ? 'dark' : 'ghost'}`}
                  style={{ padding: '8px 16px', fontSize: 11 }}>{c}</button>
        ))}
      </section>

      {/* Ministry grid — 2-col cards with stained left panel */}
      <section style={{ padding: '40px var(--pad-h) 80px' }}>
        <div className="dp-grid-2" style={{ gap: 32 }}>
          {MIN.map((m, i) => (
            <div key={m.name} className="dp-card dp-min-inner" style={{
              padding: 0,
              borderLeft: `3px solid ${m.color}`,
            }}>
              <div className="dp-stained" style={{ height: 240, borderRadius: 0 }} />
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="dp-eyebrow" style={{ color: m.color }}>
                  {String(i + 1).padStart(2, '0')} · {m.age}
                </div>
                <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: 32, lineHeight: 1, margin: 0 }}>{m.name}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55, flex: 1, fontFamily: 'var(--serif)', margin: 0 }}>{m.blurb}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--rule)', paddingTop: 14 }}>
                  <div style={{ fontFamily: 'var(--ui)', fontSize: 12, color: 'var(--ink-2)' }}>
                    {m.when} · led by {m.lead}
                  </div>
                  <a href="/contact" className="dp-nav-link" style={{ fontSize: 12 }}>Join →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer CTA */}
      <section style={{ padding: 'var(--sp-sm) var(--pad-h) var(--sp-lg)' }}>
        <div className="dp-split" style={{
          background: 'var(--ink)', color: 'var(--cream)',
          padding: 'var(--sp-md) var(--pad-h)',
          gap: 60, alignItems: 'center',
        }}>
          <div>
            <div className="dp-eyebrow gold" style={{ marginBottom: 18 }}>Serve</div>
            <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 64, color: 'var(--cream)', lineHeight: 0.95, margin: 0 }}>
              Don&apos;t see your<br />
              gift yet?{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Bring it.</em>
            </h2>
            <p style={{ marginTop: 24, color: 'oklch(0.88 0.03 240)', fontSize: 18, lineHeight: 1.6, fontFamily: 'var(--serif)' }}>
              From greeting at the front door to mowing the lawn to teaching a class —
              every church needs more hands than it has. Tell us how you&apos;d like to serve.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="/contact" className="dp-btn primary" style={{ padding: '18px 28px', fontSize: 14 }}>
              Tell us how you&apos;d serve →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
