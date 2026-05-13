import type { Metadata } from 'next';
import { Container } from '@mantine/core';
import DonationForm from '@/components/DonationForm';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the ministry of Divine Power Christian Church with a secure online donation.',
};

const uses = [
  { icon: '🙏', label: 'Sunday Worship', desc: 'Music, media, and facilities for every service' },
  { icon: '🧒', label: 'Children & Youth', desc: 'Programs that shape the next generation' },
  { icon: '🤝', label: 'Community Outreach', desc: 'Food pantry, local partnerships, and missions' },
  { icon: '📖', label: 'Discipleship', desc: 'Small groups, Bible study, and teaching resources' },
];

export default function DonatePage() {
  return (
    <>
      {/* Dark hero */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'white', padding: '5rem 1rem', position: 'relative', overflow: 'hidden' }}>
        <div className="dp-stained" style={{
          position: 'absolute', inset: 0, opacity: 0.15,
        }} />
        <Container size="md" style={{ position: 'relative', textAlign: 'center' }}>
          <p className="dp-eyebrow" style={{ marginBottom: '1rem' }}>Generosity</p>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            fontWeight: 400,
            color: 'white',
            margin: '0 0 1rem',
            lineHeight: 1.02,
          }}>
            Give with a<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>cheerful heart.</em>
          </h1>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.15rem',
            color: 'oklch(0.72 0.015 65)',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto',
          }}>
            Your generosity fuels our mission. Every gift — large or small — makes a lasting difference in our community and beyond.
          </p>
        </Container>
      </section>

      {/* Give form + info */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '4rem 1rem 5rem' }}>
        <Container size="lg">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Give form */}
            <div>
              <p className="dp-eyebrow" style={{ marginBottom: '0.75rem' }}>Online Giving</p>
              <h2 style={{
                fontFamily: 'var(--serif-display)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 400,
                color: 'var(--ink)',
                margin: '0 0 1.5rem',
              }}>
                Make a Gift
              </h2>
              <DonationForm />
              <p style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.85rem',
                color: 'var(--ink-2)',
                margin: '1.5rem 0 0',
                lineHeight: 1.6,
              }}>
                Divine Power Christian Church is a registered 501(c)(3) nonprofit. Donations may be tax-deductible.
              </p>
            </div>

            {/* Other ways + where it goes */}
            <div>
              <p className="dp-eyebrow" style={{ marginBottom: '0.75rem' }}>Where Your Gift Goes</p>
              <h2 style={{
                fontFamily: 'var(--serif-display)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 400,
                color: 'var(--ink)',
                margin: '0 0 1.5rem',
              }}>
                Investing in People
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {uses.map(({ icon, label, desc }) => (
                  <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0, marginTop: '0.1rem' }}>{icon}</span>
                    <div>
                      <p style={{
                        fontFamily: 'var(--ui)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        margin: '0 0 0.1rem',
                      }}>
                        {label}
                      </p>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other ways to give */}
              <div style={{
                backgroundColor: 'var(--vellum)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                border: '1px solid oklch(0.87 0.025 80)',
              }}>
                <p className="dp-eyebrow" style={{ marginBottom: '0.75rem' }}>Other Ways to Give</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--ink-2)', margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--ink)' }}>In Person:</strong> Offering boxes are available at all service entrances.
                  </p>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--ink-2)', margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--ink)' }}>By Mail:</strong> 2025 Pullman Ave, Jacksonville, FL 32209
                  </p>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--ink-2)', margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--ink)' }}>Bill Pay:</strong> Set up automatic giving through your bank&apos;s bill pay service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Scripture CTA */}
      <section style={{ backgroundColor: 'var(--cobalt)', padding: '4rem 1rem' }}>
        <Container size="sm" style={{ textAlign: 'center' }}>
          <blockquote style={{
            fontFamily: 'var(--serif-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            color: 'white',
            lineHeight: 1.6,
            margin: '0 0 1rem',
          }}>
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </blockquote>
          <p style={{ fontFamily: 'var(--ui)', fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, margin: 0 }}>
            — 2 Corinthians 9:7
          </p>
        </Container>
      </section>
    </>
  );
}
