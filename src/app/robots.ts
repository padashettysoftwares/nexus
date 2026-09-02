import { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/portal/', '/api/', '/admin/'],
    },
    sitemap: 'https://www.nexussolutions.in/sitemap.xml',
  }
}
