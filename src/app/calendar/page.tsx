import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'Upcoming events and services at Divine Power Christian Church.',
};

// Replace the src with your Google Calendar embed URL.
// Google Calendar → Settings → select your calendar → "Integrate calendar" → copy the iframe src.
const GCAL_SRC =
  'https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID%40group.calendar.google.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&mode=MONTH';

export default function CalendarPage() {
  return (
    <>
      <section className="dp-page-hero">
        <div>
          <div className="dp-eyebrow cobalt" style={{ marginBottom: 20 }}>Schedule</div>
          <h1 style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(56px, 7vw, 108px)',
            lineHeight: 0.92, fontWeight: 500,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            Calendar.
          </h1>
          <p style={{ marginTop: 28, fontSize: 21, color: 'var(--ink-2)', maxWidth: 620, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
            Services, gatherings, and special events — all in one place.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--sp-sm) var(--pad-h) var(--sp-lg)' }}>
        <iframe
          src={GCAL_SRC}
          style={{ width: '100%', height: 700, border: 'none', display: 'block' }}
          title="Divine Power Christian Church Calendar"
        />
      </section>
    </>
  );
}
