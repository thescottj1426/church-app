import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.divinepowermbc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/',           priority: 1.0,  changeFrequency: 'weekly'  },
    { path: '/about',      priority: 0.8,  changeFrequency: 'monthly' },
    { path: '/staff',      priority: 0.7,  changeFrequency: 'monthly' },
    { path: '/visit',      priority: 0.9,  changeFrequency: 'monthly' },
    { path: '/calendar',   priority: 0.9,  changeFrequency: 'daily'   },
    { path: '/give',       priority: 0.8,  changeFrequency: 'monthly' },
    { path: '/ministries', priority: 0.7,  changeFrequency: 'monthly' },
    { path: '/contact',    priority: 0.6,  changeFrequency: 'monthly' },
  ] as const;

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
