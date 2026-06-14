export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="dp-footer" style={{ padding: '72px var(--pad-h) 36px', marginTop: 0 }}>
      <div className="dp-footer-grid">
        {/* Brand */}
        <div>
          {/* Logo */}
          <div style={{ background: 'var(--paper)', padding: '6px 12px', borderRadius: 4, display: 'inline-block' }}>
            <img src="/logo.png" alt="Divine Power Christian Church" style={{ height: 52, width: 'auto', display: 'block' }} />
          </div>

          <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: 'oklch(0.88 0.03 240)' }}>
            A family of faith in Jacksonville — gathering, growing, and going out together.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
            <a href="/visit" className="dp-btn ghost-light" style={{ textDecoration: 'none' }}>Plan a visit</a>
            <a href="/contact" className="dp-btn ghost-light" style={{ textDecoration: 'none' }}>Get in touch</a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 8, marginTop: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'YouTube',  href: 'https://www.youtube.com/@DivinePowerBC' },
              { label: 'Facebook', href: 'https://www.facebook.com/divine.p.church' },
              { label: 'TikTok',   href: 'https://www.tiktok.com/@divinepowerbc' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--ui)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'oklch(0.88 0.03 240)',
                  border: '1px solid oklch(0.28 0.14 258)',
                  padding: '6px 12px',
                  borderRadius: 4,
                  textDecoration: 'none',
                  transition: 'color .15s, border-color .15s',
                }}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div>
          <div className="dp-eyebrow gold" style={{ marginBottom: 18 }}>Visit</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'oklch(0.88 0.03 240)', fontFamily: 'var(--ui)', fontSize: 14 }}>
            <div>2025 Pullman Ave</div>
            <div>Jacksonville, FL 32209</div>
            <div style={{ marginTop: 8 }}>Sun · 10:00 AM Sunday School</div>
            <div>Sun · 11:00 AM Worship</div>
            <div>Wed · 7:00 PM Midweek Worship</div>
          </div>
        </div>

        {/* Connect */}
        <div>
          <div className="dp-eyebrow gold" style={{ marginBottom: 18 }}>Connect</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="/about">About us</a>
            <a href="/ministries">Ministries</a>
            <a href="/give">Give online</a>
            <a href="/contact">Contact</a>
            <div style={{ marginTop: 6, height: 1, background: 'oklch(0.28 0.14 258)' }} />
            <a href="https://www.youtube.com/@DivinePowerBC" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.facebook.com/divine.p.church" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@divinepowerbc" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <div className="dp-eyebrow gold" style={{ marginBottom: 18 }}>Get in touch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'oklch(0.88 0.03 240)', fontFamily: 'var(--ui)', fontSize: 14 }}>
            <a href="mailto:office@devinepower.org">office@devinepower.org</a>
            <a href="tel:9041234567">(904) 123-4567</a>
            <div style={{ marginTop: 12, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Office hours
            </div>
            <div>Tue–Fri · 9 am – 4 pm</div>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid oklch(0.28 0.14 258)',
        paddingTop: 24,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--ui)', fontSize: 12,
        color: 'oklch(0.78 0.03 240)', letterSpacing: '0.04em',
        flexWrap: 'wrap', gap: 8,
      }}>
        <span>© {year} Divine Power Christian Church</span>
        <span>Built with Next.js + Mantine</span>
      </div>
    </footer>
  );
}
