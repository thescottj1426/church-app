interface YouTubeEmbedProps {
  channelId?: string;
  videoId?: string;
  title?: string;
}

export default function YouTubeEmbed({
  channelId = 'UCxxxxxxxxxxxxxxxxxx',
  videoId,
  title = 'Divine Power Christian Church Live Stream',
}: YouTubeEmbedProps) {
  const src = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/live_stream?channel=${channelId}&rel=0&modestbranding=1`;

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9
        height: 0,
        overflow: 'hidden',
        borderRadius: '12px',
        backgroundColor: '#0f172a',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
      }}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}
