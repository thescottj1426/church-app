import type { Metadata } from 'next';
// import ContactForm from '@/components/ContactForm';
// import PrayerForm from '@/components/PrayerForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Divine Power Christian Church or submit a prayer request.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="dp-page-hero">
        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 20 }}>We&apos;d love to hear from you</div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 108px)',
            lineHeight: 0.92, fontWeight: 500,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            Get in touch.
          </h1>
          <p style={{ marginTop: 28, fontSize: 21, color: 'var(--ink-2)', maxWidth: 620, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
            Questions, prayer requests, volunteer interest — we&apos;re glad you reached out.
          </p>
        </div>
      </section>

      {/* Two forms — hidden until ready */}
      {/* <section className="dp-grid-2" style={{ padding: 'var(--sp-md) var(--pad-h)', gap: 60 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
            <span className="dp-eyebrow cobalt">01</span>
            <span className="dp-eyebrow">General</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 48, fontWeight: 500, margin: '0 0 12px' }}>
            Send us a message
          </h2>
          <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.55, margin: '0 0 36px', fontFamily: 'var(--serif)' }}>
            For general inquiries, pastoral care, event questions, or anything else.
          </p>
          <ContactForm />
        </div>
        <div style={{ background: 'var(--vellum)', padding: 48 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
            <span className="dp-eyebrow cobalt">02</span>
            <span className="dp-eyebrow">Prayer</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 48, fontWeight: 500, margin: '0 0 12px' }}>
            Prayer request
          </h2>
          <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.55, margin: '0 0 36px', fontFamily: 'var(--serif)' }}>
            Our prayer team lifts every request by name — in private or together.
          </p>
          <PrayerForm />
        </div>
      </section> */}

      {/* Office info strip */}
      <section style={{ padding: 'var(--sp-sm) var(--pad-h) var(--sp-lg)', background: 'var(--vellum)', borderTop: '1px solid var(--rule)' }}>
        <div className="dp-grid-4" style={{ gap: 48 }}>
          {[
            { label: 'Office',  val: '2025 Pullman Ave\nJacksonville, FL 32209' },
            { label: 'Phone',   val: '(904) 123-4567' },
            { label: 'Email',   val: 'office@devinepower.org' },
            { label: 'Hours',   val: 'Tue – Fri  9 am – 4 pm\nSun  8 am – 12:30 pm' },
          ].map(({ label, val }) => (
            <div key={label}>
              <div className="dp-eyebrow" style={{ marginBottom: 12 }}>{label}</div>
              <div style={{ fontFamily: 'var(--serif-display)', fontSize: 22, lineHeight: 1.4, whiteSpace: 'pre-line' }}>{val}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
