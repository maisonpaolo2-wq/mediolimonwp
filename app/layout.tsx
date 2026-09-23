import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MotionProvider from '@/components/MotionProvider'
import { site, testimonials, services } from '@/content/data'

// Fuentes locales (subset latin de Google Fonts): next/font/google puede romper el build en Vercel.
const serif = localFont({
  src: [
    { path: './fonts/dm-serif-display.woff2', weight: '400', style: 'normal' },
    { path: './fonts/dm-serif-display-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
})

const sans = localFont({
  src: [{ path: './fonts/outfit-variable.woff2', weight: '300 500', style: 'normal' }],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#1d2620',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Wedding planner en Jaén`,
    template: `%s · ${site.name}`,
  },
  description:
    'Wedding planner en Jaén. Organización integral de bodas, coordinación del día B y eventos en cortijos, iglesias y fincas de Úbeda, Baeza y toda Andalucía.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${site.name}, wedding planner en Jaén` }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}

// Las reseñas de content/data.ts son de muestra. Poner a true solo cuando sean reales:
// Google penaliza el marcado de valoraciones que no corresponden a opiniones verificables.
const REVIEWS_ARE_REAL: boolean = false

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: `${site.name} · Wedding Planner`,
  description: site.description,
  url: site.url,
  image: `${site.url}/og-image.jpg`,
  logo: `${site.url}/icon.png`,
  email: site.email,
  ...(site.whatsapp ? { telephone: `+${site.whatsapp}` } : {}),
  ...(site.planner ? { founder: { '@type': 'Person', name: site.planner, jobTitle: 'Wedding planner' } } : {}),
  knowsAbout: ['Wedding planning', 'Organización de bodas', 'Coordinación de bodas', 'Eventos privados'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: 'ES',
  },
  areaServed: site.locations.map(name => ({ '@type': 'Place', name })),
  sameAs: [site.instagramUrl],
  makesOffer: services.map(s => ({ '@type': 'Offer', name: s.title, description: s.description })),
  ...(REVIEWS_ARE_REAL ? {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      reviewCount: testimonials.length,
    },
    review: testimonials.map(t => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.text,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  } : {}),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div id="nav-sentinel" className="nav-sentinel" aria-hidden="true" />
        <MotionProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  )
}
