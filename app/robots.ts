import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nbs-auth.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/forgot-password',
          '/forgot-password-code',
          '/forgot-password-found',
          '/forgot-password-verify',
          '/new-user',
          '/new-user-code',
          '/new-user-password',
          '/verify',
          '/verify-choice',
          '/verify-details',
          '/blocked',
          '/api',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
