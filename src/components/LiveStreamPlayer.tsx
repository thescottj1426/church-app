'use client';

import { useState } from 'react';

const FB_PAGE = 'divine.p.church';
const FB_EMBED =
  `https://www.facebook.com/plugins/video.php` +
  `?href=https%3A%2F%2Fwww.facebook.com%2F${FB_PAGE}%2F` +
  `&show_text=false&width=1280&height=720`;

const YT_EMBED =
  `https://www.youtube.com/embed/live_stream?channel=UCxxxxxxxxxxxxxxxxxx&rel=0&modestbranding=1`;

type Platform = 'facebook' | 'youtube';

export default function LiveStreamPlayer() {
  const [platform, setPlatform] = useState<Platform>('facebook');

  return (
    <div>
      {/* Toggle */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <button
          onClick={() => setPlatform('facebook')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: platform === 'facebook' ? '#1877f2' : '#e2e8f0',
            color: platform === 'facebook' ? 'white' : '#475569',
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          Facebook
        </button>
        <button
          onClick={() => setPlatform('youtube')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: platform === 'youtube' ? '#dc2626' : '#e2e8f0',
            color: platform === 'youtube' ? 'white' : '#475569',
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube
        </button>
      </div>

      {/* Player */}
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: 12,
        backgroundColor: '#0f172a',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
      }}>
        <iframe
          key={platform}
          src={platform === 'facebook' ? FB_EMBED : YT_EMBED}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title="Church Live Stream"
        />
      </div>
    </div>
  );
}
