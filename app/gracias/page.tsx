import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import LemonHeart from '@/components/LemonHeart'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: 'Gracias por escribir',
  description: 'Hemos recibido vuestra consulta. Medio Limón, wedding planner en Jaén, os responderá en menos de 48 horas para organizar la primera reunión sin compromiso.',
  robots: { index: false, follow: true },
}

export default function GraciasPage() {
  return (
    <>
      <PageHero
        eyebrow="Mensaje recibido"
        title={<>¡Gracias, <em>de corazón!</em></>}
        image="/photos/confeti-puerta-iglesia.jpg"
        imageAlt="Novios celebrando bajo una lluvia de confeti a la salida de la iglesia"
        position="center 35%"
      />
      <section className="section thanks">
        <div className="container thanks__inner">
          <LemonHeart size={56} className="thanks__heart" />
          <Reveal>
            <p className="lead">
              Ya tengo vuestro mensaje. Lo leo con calma y os respondo en menos de 48 horas con disponibilidad para la fecha y una propuesta
              para vernos.
            </p>
            <p>Mientras tanto, en Instagram tenéis las últimas bodas y el día a día del estudio.</p>
            <div className="thanks__actions">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
                Ver {site.instagram} <span className="btn__arrow">→</span>
              </a>
              <Link href="/" className="btn">Volver al inicio</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
