'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/calendar',  label: 'Calendar' },
  { href: '/staff',     label: 'Staff' },
  { href: '/visit',     label: 'Visit' },
  { href: '/contact',   label: 'Contact' },
];

function Logo({ dark = false, size = 'md' }: { dark?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const h = size === 'sm' ? 40 : size === 'lg' ? 64 : 52;
  const img = <img src="/logo.png" alt="Divine Power Christian Church" style={{ height: h, width: 'auto', display: 'block' }} />;
  if (dark) {
    return (
      <div style={{ background: 'var(--paper)', padding: '4px 10px', borderRadius: 4 }}>
        {img}
      </div>
    );
  }
  return img;
}

export default function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header style={{
        borderBottom: '1px solid var(--rule)',
        background: 'var(--cream)',
        position: 'sticky', top: 0, zIndex: 20,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px var(--pad-h)',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}
               className="dp-desktop-nav">
            {PAGES.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`dp-nav-link${pathname === href ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/give" className="dp-btn primary" style={{ textDecoration: 'none' }}>
              Give
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="dp-mobile-burger"
              style={{
                background: 'var(--ink)', color: 'var(--cream)',
                border: 'none', width: 40, height: 40,
                fontSize: 18, cursor: 'pointer', borderRadius: 4,
                display: 'none',
              }}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {drawerOpen && (
        <>
          <div
            onClick={() => setDrawerOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'oklch(0.10 0.04 258 / 0.5)',
              zIndex: 50,
            }}
          />
          <aside style={{
            position: 'fixed', top: 0, right: 0,
            width: 320, height: '100%',
            background: 'var(--ink)', color: 'var(--cream)',
            zIndex: 60, padding: '24px 28px',
            display: 'flex', flexDirection: 'column',
            animation: 'dp-slide-in .22s ease',
            overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
              <Logo size="sm" dark />
              <button
                onClick={() => setDrawerOpen(false)}
                style={{
                  background: 'transparent', border: '1px solid var(--cream)',
                  color: 'var(--cream)', width: 36, height: 36, cursor: 'pointer',
                  borderRadius: 4, fontSize: 16,
                }}>
                ✕
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {PAGES.map(({ href, label }, i) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    fontFamily: 'var(--serif-display)',
                    fontSize: 32, padding: '14px 0',
                    borderBottom: '1px solid oklch(0.30 0.08 258)',
                    display: 'flex', alignItems: 'baseline', gap: 14,
                    textDecoration: 'none', color: 'var(--cream)',
                  }}>
                  <span className="dp-eyebrow gold" style={{ fontSize: 10 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {label}
                </Link>
              ))}
            </nav>
            <div style={{ marginTop: 'auto', paddingTop: 24 }}>
              <Link
                href="/give"
                onClick={() => setDrawerOpen(false)}
                className="dp-btn primary"
                style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
              >
                Give →
              </Link>
              <div style={{
                marginTop: 24, fontFamily: 'var(--ui)', fontSize: 13,
                color: 'oklch(0.88 0.03 240)', lineHeight: 1.7,
              }}>
                <div>2025 Pullman Ave</div>
                <div>Jacksonville, FL 32209</div>
                <div style={{ marginTop: 8, color: 'var(--gold)' }}>(904) 123-4567</div>
              </div>
            </div>
          </aside>
        </>
      )}

      <style>{`
        @media (max-width: 900px) {
          .dp-desktop-nav { display: none !important; }
          .dp-mobile-burger { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  );
}
