import type { MetadataRoute } from 'next'
import { site } from '@/content/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<[string, number]> = [
    ['', 1],
    ['/servicios', 0.9],
    ['/portfolio', 0.8],
    ['/sobre-mi', 0.7],
    ['/contacto', 0.9],
  ]
  const now = new Date()
  return routes.map(([path, priority]) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }))
}
