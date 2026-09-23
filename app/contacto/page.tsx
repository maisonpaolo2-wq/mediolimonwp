import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import Reveal, { Eyebrow, StaggerGroup, StaggerItem } from '@/components/Reveal'
import { directHref, directLabel } from '@/components/WhatsAppButton'
import { coverage, photoBySrc, site } from '@/content/data'

export const metadata: Metadata = {
  title: 'Contacto · Wedding planner en Jaén',
  description:
    'Contacta con Medio Limón, wedding planner en Jaén. Primera reunión gratuita para bodas y eventos en Úbeda, Baeza, Granada, Córdoba y resto de Andalucía.',
  alternates: { canonical: '/contacto' },
  openGraph: { url: '/contacto', images: ['/og-image.jpg'] },
}

export default function ContactoPage() {
  const side = photoBySrc('novia-tul-sofa.jpg')
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Contadme <em>vuestra boda</em></>}
        intro="Rellenad el formulario y os respondo en menos de 48 horas. La primera reunión es gratuita y sin compromiso."
        image="/photos/novios-beso-puerta.jpg"
        imageAlt="Novios riendo nariz con nariz frente a una puerta de madera"
        position="center 35%"
      />

      <section className="section contact">
        <div className="container contact__grid">
          <Reveal className="contact__form">
            <ContactForm />
          </Reveal>
          <aside className="contact__aside">
            <Eyebrow>Otras vías</Eyebrow>
            <ul className="contact-list">
              <li><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span>Instagram</span><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{site.instagram}</a></li>
              <li><span>Estudio</span>Jaén, Andalucía</li>
            </ul>
            <a href={directHref} target="_blank" rel="noopener noreferrer" className="btn">{directLabel}</a>
            <Reveal variant="scale-in" className="contact__photo">
              <Image src={side.src} alt={side.alt} fill sizes="(min-width: 960px) 35vw, 100vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--surface coverage">
        <div className="container">
          <div className="section-head">
            <span className="rule" aria-hidden="true" />
            <Reveal><h2 className="h-xl">Zona de <em>cobertura</em></h2></Reveal>
            <Reveal delay={0.1}>
              <p className="section-head__aside">Base en Jaén y bodas en toda Andalucía. Si os casáis fuera, lo hablamos.</p>
            </Reveal>
          </div>
          <StaggerGroup className="coverage__grid">
            {coverage.map((c, i) => (
              <StaggerItem key={c.area} className="coverage__item">
                <span className="coverage__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.area}</h3>
                <p>{c.note}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}
