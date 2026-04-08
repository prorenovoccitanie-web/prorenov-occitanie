import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prorenov-occitanie.fr'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/investir', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
