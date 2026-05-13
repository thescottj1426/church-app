import type { Metadata } from 'next';
import DonationForm from '@/components/DonationForm';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the ministry of Divine Power Christian Church with a secure online gift.',
};

export default function GivePage() {
  return (
    <>
      {/* Dark hero */}
      <section style={{
        background: 'var(--ink)', color: 'var(--cream)',
        padding: 'var(--sp-lg) var(--pad-h) var(--sp-md)',
      }}>
        <div className="dp-grid-2" style={{ gap: 80, alignItems: 'end' }}>
          <div>
            <div className="dp-eyebrow gold" style={{ marginBottom: 24 }}>Generosity</div>
            <h1 style={{
              fontFamily: 'var(--serif-display)',
              fontSize: 'clamp(56px, 8vw, 120px)',
              lineHeight: 0.92, color: 'var(--cream)',
              fontWeight: 500, margin: 0,
            }}>
              Give with<br />
              a <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>cheerful</em> heart.
            </h1>
          </div>
          <div style={{ paddingLeft: 36, borderLeft: '2px solid var(--gold)' }}>
            <p style={{
              fontFamily: 'var(--serif-display)',
              fontStyle: 'italic',
              fontSize: 24, lineHeight: 1.4,
              color: 'var(--cream)', margin: 0,
            }}>
              &ldquo;Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            </p>
            <div className="dp-eyebrow gold" style={{ marginTop: 16 }}>2 Corinthians 9:7</div>
          </div>
        </div>
      </section>

      {/* Give form + alternatives */}
      <section style={{ padding: 'var(--sp-lg) var(--pad-h) var(--sp-lg)' }}>
        <div className="dp-grid-2" style={{ gap: 80, alignItems: 'start' }}>
          {/* Left: intro + other ways */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
              <span className="dp-eyebrow cobalt">01</span>
              <span className="dp-eyebrow">Online giving</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--serif-display)',
              fontSize: 'clamp(32px, 3vw, 48px)',
              fontWeight: 500, margin: '0 0 16px',
            }}>
              Every gift makes<br />a difference.
            </h2>
            <p style={{ fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 40, fontFamily: 'var(--serif)' }}>
              Your generosity supports our Sunday worship, community outreach, and the people who
              make this church a home. Thank you for giving.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Cash App */}
              <a
                href="https://cash.app/$DivinePowerBC"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="dp-card" style={{
                  padding: 24,
                  borderLeft: '3px solid var(--cobalt)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'transform .12s ease',
                }}>
                  <div>
                    <div className="dp-eyebrow cobalt" style={{ marginBottom: 6 }}>Cash App</div>
                    <div style={{ fontFamily: 'var(--serif-display)', fontSize: 24, color: 'var(--cobalt)' }}>$DivinePowerBC</div>
                  </div>
                  <div style={{ fontFamily: 'var(--ui)', fontSize: 20, color: 'var(--cobalt)' }}>→</div>
                </div>
              </a>

              {[
                { eyebrow: 'By mail', val: '2025 Pullman Ave, Jacksonville FL 32209' },
                { eyebrow: 'Bill pay / ACH', val: 'Set up automatic giving through your bank' },
              ].map(({ eyebrow, val }) => (
                <div key={eyebrow} className="dp-card" style={{ padding: 24 }}>
                  <div className="dp-eyebrow" style={{ marginBottom: 6 }}>{eyebrow}</div>
                  <div style={{ fontFamily: 'var(--serif-display)', fontSize: 20 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: give form */}
          <div className="dp-card dp-sticky-col" style={{ padding: 40, position: 'sticky', top: 100 }}>
            <div className="dp-eyebrow cobalt" style={{ marginBottom: 6 }}>Secure form</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontSize: 28, marginBottom: 24 }}>Give now</div>
            <DonationForm />
            <p style={{ fontFamily: 'var(--ui)', color: 'var(--ink-2)', textAlign: 'center', fontSize: 12, marginTop: 16 }}>
              🔒 Encrypted &amp; secure · 100% of your gift goes to the church
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
