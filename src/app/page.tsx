import type { Metadata } from 'next';
import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import PhotoCarousel from '@/components/PhotoCarousel';

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Divine Power Christian Church — a welcoming community of faith in Your City.',
};

const btnPrimary: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#d97706',
  color: 'white',
  fontWeight: 700,
  fontSize: '1rem',
  padding: '0.85rem 2rem',
  borderRadius: '0.5rem',
  textDecoration: 'none',
};

const btnOutline: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: 'transparent',
  color: '#cbd5e1',
  fontWeight: 600,
  fontSize: '1rem',
  padding: '0.85rem 2rem',
  borderRadius: '0.5rem',
  textDecoration: 'none',
  border: '1px solid #475569',
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO with carousel background ── */}
      <section style={{ position: 'relative', color: 'white' }}>
        {/* Carousel in normal flow — receives pointer events naturally */}
        <PhotoCarousel
          height={580}
          slides={[
            { src: '/photos/carousel-1.jpg' },
            { src: '/photos/carousel-2.jpg' },
            { src: '/photos/carousel-3.jpg' },
            { src: '/photos/carousel-4.jpg' },
            { src: '/photos/carousel-5.jpg' },
          ]}
        />

        {/* Everything below is absolutely on top, pointer-events off so carousel arrows still work */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Dark gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.82) 0%, rgba(30,41,59,0.72) 50%, rgba(30,58,95,0.78) 100%)',
          }} />
          {/* Decorative cross */}
          <div style={{
            position: 'absolute', top: '50%', right: '8%',
            transform: 'translateY(-50%)',
            opacity: 0.06, fontSize: '28rem', lineHeight: 1,
            fontFamily: 'Georgia, serif', userSelect: 'none',
          }}>✝</div>

          {/* Hero text — re-enable pointer events just for this content */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
            <Container size="lg" style={{ width: '100%', padding: '4rem 1rem', pointerEvents: 'auto' }}>
              <Stack align="center" gap="lg">
                <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.2em', color: '#f59e0b' }}>
                  Welcome to Divine Power
                </Text>
                <Title
                  order={1}
                  ta="center"
                  style={{
                    fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                    fontFamily: 'Georgia, serif',
                    color: 'white',
                    lineHeight: 1.15,
                    maxWidth: 700,
                  }}
                >
                  A Place to Know God,<br />Grow Together &amp; Serve
                </Title>
                <Text ta="center" fz="lg" c="gray.4" maw={560} lh={1.7}>
                  Everyone is welcome here. Join us this Sunday and experience a community
                  rooted in faith, love, and purpose.
                </Text>
              </Stack>
            </Container>
          </div>
        </div>
      </section>

      {/* ── SERVICE TIMES STRIP ── */}
      <section style={{ backgroundColor: '#d97706', color: 'white', padding: '0' }}>
        <Container size="xl">
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', alignItems: 'stretch',
          }}>
            {[
              { icon: '🕊️', label: 'Sunday Worship', value: '9:00 AM & 11:00 AM' },
              { icon: '📖', label: 'Wednesday Bible Study', value: '7:00 PM' },
              { icon: '📍', label: 'Location', value: '123 Main Street, Your City' },
              { icon: '📞', label: 'Call Us', value: '(555) 123-4567' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.25rem 2rem',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : 'none',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                flex: '1 1 200px',
              }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <Text fz="xs" fw={600} style={{ opacity: 0.8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {item.label}
                  </Text>
                  <Text fz="sm" fw={700}>{item.value}</Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WELCOME VIDEO ── */}
      {/* Swap WELCOME_VIDEO_ID for your real YouTube video ID */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <Container size="lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            {/* Text */}
            <Stack gap="md" style={{ flex: '1 1 280px', maxWidth: 480 }}>
              <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.2em', color: '#d97706' }}>
                A Message For You
              </Text>
              <Title order={2} style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.25 }}>
                Welcome to Divine Power Christian Church
              </Title>
              <Text c="dimmed" lh={1.8}>
                Whether this is your first time visiting or you&apos;ve been with us for years,
                we&apos;re glad you&apos;re here. Watch a personal welcome from our pastor
                and discover what God is doing in our community.
              </Text>
              <a href="/contact" style={{
                display: 'inline-block', color: '#d97706', fontWeight: 700,
                textDecoration: 'none', fontSize: '0.95rem',
              }}>
                Plan Your Visit →
              </a>
            </Stack>
            {/* Video */}
            <div style={{ flex: '1 1 340px' }}>
              <YouTubeEmbed videoId="irudeHYeLcQ" title="Welcome from our Pastor" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── PLAN YOUR VISIT ── */}
      <section style={{ backgroundColor: '#fafaf9', padding: '5rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb="3rem">
            <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.15em', color: '#d97706' }}>
              First Time Here?
            </Text>
            <Title order={2} ta="center" style={{ fontFamily: 'Georgia, serif' }}>
              What to Expect
            </Title>
            <Text ta="center" c="dimmed" maw={500} fz="sm" lh={1.7}>
              We want your first visit to feel comfortable and welcoming. Here&apos;s what you need to know.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            {[
              {
                icon: '👋',
                title: 'A Warm Welcome',
                body: 'Our greeters are at every door to welcome you. Come as you are — there\'s no dress code and no pressure.',
              },
              {
                icon: '👶',
                title: 'Kids Are Welcome',
                body: 'We have age-appropriate children\'s ministry running during both Sunday services so the whole family can experience worship.',
              },
              {
                icon: '⏱️',
                title: 'About 75 Minutes',
                body: 'Services include worship, prayer, and a message from Scripture. We start and end on time.',
              },
            ].map(({ icon, title, body }) => (
              <Card key={title} shadow="xs" radius="lg" padding="xl" withBorder>
                <Stack gap="sm">
                  <Text fz="2.2rem" lh={1}>{icon}</Text>
                  <Title order={3} style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
                    {title}
                  </Title>
                  <Text fz="sm" c="dimmed" lh={1.7}>{body}</Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/contact" style={btnPrimary}>Let Us Know You&apos;re Coming</a>
          </div>
        </Container>
      </section>


      {/* ── FULL-WIDTH PHOTO BANNER ── Drop /photos/congregation.jpg to fill */}
      <section style={{
        backgroundImage: 'url(/photos/congregation.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        minHeight: 420,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.5) 60%, rgba(15,23,42,0.2) 100%)' }} />
        <Container size="lg" style={{ position: 'relative', zIndex: 1, padding: '5rem 1rem' }}>
          <Stack gap="md" style={{ maxWidth: 520 }}>
            <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.2em', color: '#f59e0b' }}>
              Our Community
            </Text>
            <Title order={2} style={{ fontFamily: 'Georgia, serif', color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', lineHeight: 1.25 }}>
              More Than a Church — A Family
            </Title>
            <Text style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.05rem' }}>
              We do life together. From Sunday mornings to community outreach, every moment here is an opportunity to grow closer to God and to each other.
            </Text>
            <a href="/about" style={{
              display: 'inline-block', backgroundColor: '#d97706', color: 'white',
              fontWeight: 700, fontSize: '0.95rem', padding: '0.75rem 1.75rem',
              borderRadius: '0.5rem', textDecoration: 'none', width: 'fit-content',
            }}>
              Meet Our Team
            </a>
          </Stack>
        </Container>
      </section>

      {/* ── IMPACT STATS ── */}
      <section style={{ backgroundColor: '#d97706', color: 'white', padding: '3.5rem 1rem' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl">
            {[
              { number: '500+', label: 'Church Family' },
              { number: '35+', label: 'Years Serving' },
              { number: '6', label: 'Active Ministries' },
              { number: '100s', label: 'Lives Impacted' },
            ].map(({ number, label }) => (
              <Stack key={label} align="center" gap={4}>
                <Text style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, fontFamily: 'Georgia, serif', color: 'white', lineHeight: 1 }}>
                  {number}
                </Text>
                <Text fz="sm" fw={600} style={{ opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* ── WATCH LIVE / FACEBOOK ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #1e3a5f 100%)',
        color: 'white', padding: '5rem 1rem',
      }}>
        <Container size="lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack gap="md" style={{ flex: '1 1 300px', maxWidth: 500 }}>
              <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.15em', color: '#f59e0b' }}>
                Can&apos;t Make It In Person?
              </Text>
              <Title order={2} style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
                Watch Us Live on Facebook
              </Title>
              <Text c="gray.4" lh={1.7}>
                Every Sunday service is streamed live on our Facebook page. Join us from anywhere in the world — no account needed to watch.
              </Text>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/livestream" style={btnPrimary}>Watch Live</a>
                <a
                  href="https://www.facebook.com/divine.p.church"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...btnOutline, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Follow on Facebook
                </a>
              </div>
            </Stack>
            <div style={{
              flex: '1 1 280px', maxWidth: 360,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <Text fz="3rem" mb="xs">📺</Text>
              <Text fw={700} fz="lg" c="white" mb="xs">Live Every Sunday</Text>
              <Text fz="sm" c="gray.4">9:00 AM &amp; 11:00 AM</Text>
              <div style={{ marginTop: '1.5rem', padding: '0.75rem', background: 'rgba(217,119,6,0.15)', borderRadius: '0.5rem', border: '1px solid rgba(217,119,6,0.3)' }}>
                <Text fz="xs" style={{ color: '#fcd34d' }} fw={600}>Stream starts 5 minutes before service</Text>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MINISTRIES STRIP ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb="3rem">
            <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.15em', color: '#d97706' }}>
              Get Involved
            </Text>
            <Title order={2} ta="center" style={{ fontFamily: 'Georgia, serif' }}>
              Find Your Community
            </Title>
          </Stack>
          <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing="md">
            {[
              { icon: '🙌', name: 'Worship' },
              { icon: '👦', name: 'Youth' },
              { icon: '🧒', name: "Children's" },
              { icon: '👩', name: "Women's" },
              { icon: '👨', name: "Men's" },
              { icon: '🤝', name: 'Outreach' },
            ].map(({ icon, name }) => (
              <a key={name} href="/ministries" style={{ textDecoration: 'none' }}>
                <Card
                  shadow="xs" radius="lg" padding="lg" withBorder
                  style={{ textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.15s' }}
                >
                  <Text fz="2rem" mb="xs">{icon}</Text>
                  <Text fz="sm" fw={600} c="dark">{name}</Text>
                </Card>
              </a>
            ))}
          </SimpleGrid>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/ministries" style={{ color: '#d97706', fontWeight: 600, textDecoration: 'none' }}>
              View All Ministries →
            </a>
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: '#fafaf9', padding: '5rem 1rem' }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb="3rem">
            <Text tt="uppercase" fz="xs" fw={700} style={{ letterSpacing: '0.15em', color: '#d97706' }}>
              Our Community
            </Text>
            <Title order={2} ta="center" style={{ fontFamily: 'Georgia, serif' }}>
              What Our Members Say
            </Title>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            {[
              {
                quote: 'Divine Power has felt like home from the very first Sunday. The warmth here is something you have to experience for yourself.',
                name: 'Latoya M.',
                detail: 'Member for 5 years',
              },
              {
                quote: "My kids love the children's ministry and I love the teaching. We found exactly what we were looking for as a family.",
                name: 'Marcus & Denise R.',
                detail: 'Members for 3 years',
              },
              {
                quote: "The community outreach changed my perspective on what a church can be. We're not just attending — we're making a difference.",
                name: 'Pastor Anthony W.',
                detail: 'Member for 7 years',
              },
            ].map(({ quote, name, detail }) => (
              <Card key={name} shadow="xs" radius="lg" padding="xl" withBorder>
                <Stack gap="md">
                  <Text fz="2.5rem" lh={1} style={{ color: '#d97706' }}>&ldquo;</Text>
                  <Text fz="sm" c="dimmed" lh={1.8} style={{ fontStyle: 'italic' }}>{quote}</Text>
                  <div>
                    <Text fz="sm" fw={700}>{name}</Text>
                    <Text fz="xs" c="dimmed">{detail}</Text>
                  </div>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* ── GIVE CTA ── */}
      <section style={{ backgroundColor: '#d97706', color: 'white', padding: '4rem 1rem' }}>
        <Container size="md">
          <Stack align="center" gap="md" ta="center">
            <Title order={2} style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
              Support the Mission
            </Title>
            <Text fz="lg" style={{ opacity: 0.9, maxWidth: 480 }} lh={1.7}>
              Your generosity fuels everything we do — from Sunday services to community outreach.
            </Text>
            <a
              href="/donate"
              style={{
                display: 'inline-block',
                backgroundColor: 'white',
                color: '#92400e',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.85rem 2.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
            >
              Give Online
            </a>
          </Stack>
        </Container>
      </section>

      {/* ── SCRIPTURE ── */}
      <section style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 1rem' }}>
        <Container size="md">
          <Stack align="center" gap="sm">
            <Text
              ta="center"
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                lineHeight: 1.6,
                color: '#e2e8f0',
              }}
            >
              &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
            </Text>
            <Text fz="sm" style={{ color: '#f59e0b' }}>— Matthew 18:20</Text>
          </Stack>
        </Container>
      </section>
    </>
  );
}
