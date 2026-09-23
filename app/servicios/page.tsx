import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Eyebrow, StaggerList, StaggerItem } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import Separator from '@/components/Separator'
import { photoBySrc, services } from '@/content/data'

export const metadata: Metadata = {
  title: 'Servicios de wedding planner en Jaén',
  description:
    'Organización integral de bodas, coordinación del día B y eventos privados en Jaén, Úbeda, Baeza y Andalucía. Qué incluye cada servicio y cómo trabajamos.',
  alternates: { canonical: '/servicios' },
  openGraph: { url: '/servicios', images: ['/og-image.jpg'] },
}

const faqs = [
  {
    q: '¿Con cuánta antelación conviene contactar?',
    a: 'Para organización integral, entre 12 y 18 meses antes es lo ideal, sobre todo si la boda es en mayo, junio o septiembre. Para coordinación del día B, basta con tres o cuatro meses.',
  },
  {
    q: '¿Trabajáis fuera de Jaén?',
    a: 'Sí. Hacemos bodas en toda Andalucía y, bajo consulta, en el resto de España. El desplazamiento va incluido y detallado en la propuesta.',
  },
  {
    q: '¿Tenemos que contratar a vuestros proveedores?',
    a: 'No. Os recomiendo los que conozco y en los que confío, pero si ya tenéis alguno elegido trabajo con él encantada.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del servicio, del número de invitados y del lugar. Tras la primera reunión recibís una propuesta cerrada, con todo incluido y sin sorpresas.',
  },
]

export default function ServiciosPage() {
  const sep = photoBySrc('novia-velo-ramo.jpg')
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={<>Lo que hago, <em>y cómo lo hago</em></>}
        intro="Tres servicios con el mismo cuidado. Elegís cuánto queréis delegar; yo me ocupo de que cada parte encaje."
        image="/photos/mesa-numero-trece.jpg"
        imageAlt="Mesa de banquete con copas de cristal y centro de flores silvestres en un salón de piedra"
      />

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`section svc${i % 2 ? ' svc--flip section--surface' : ''}`}>
          <div className="container svc__grid">
            <Reveal variant="scale-in" className="svc__photo">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 960px) 55vw, 100vw" style={{ objectFit: 'cover' }} />
            </Reveal>
            <div className="svc__text">
              <span className="svc__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <Eyebrow>{s.idealFor}</Eyebrow>
              <Reveal><h2 className="h-lg">{s.title}</h2></Reveal>
              <Reveal delay={0.08}><p>{s.longDescription}</p></Reveal>
              <p className="svc__label">Incluye</p>
              <StaggerList className="svc__list">
                {s.includes.map(item => (
                  <StaggerItem key={item} li>{item}</StaggerItem>
                ))}
              </StaggerList>
            </div>
          </div>
        </section>
      ))}

      <Separator src={sep.src} alt={sep.alt} position="center 30%">
        <p className="sep__quote">La calma del día <em>se construye antes</em>.</p>
      </Separator>

      <section className="section faq">
        <div className="container faq__grid">
          <div>
            <span className="rule" aria-hidden="true" />
            <Reveal><h2 className="h-xl">Preguntas <em>frecuentes</em></h2></Reveal>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.08}>
                <details className="faq__item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>¿Qué servicio <em>encaja con vosotros?</em></>}
        text="Si no lo tenéis claro, es normal. En la primera reunión lo vemos juntos, sin compromiso."
      />
    </>
  )
}
