interface Props {
  calendarId: string;
}

export default function CalendarEmbed({ calendarId }: Props) {
  const src =
    `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}` +
    `&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&mode=MONTH`;

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
      <iframe
        src={src}
        style={{ display: 'block', width: '100%', height: 600, border: 'none' }}
        title="Church Calendar"
      />
    </div>
  );
}
