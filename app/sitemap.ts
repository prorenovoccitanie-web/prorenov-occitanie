import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prorenov-occitanie.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/photovoltaique`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/renovation-energetique`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aides-financement`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pourquoi-nous`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/devenir-apporteur`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/formation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vision`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
