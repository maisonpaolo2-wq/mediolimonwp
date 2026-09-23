import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Eyebrow, StaggerGroup, StaggerItem } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import Separator from '@/components/Separator'
import LemonHeart from '@/components/LemonHeart'
import { photoBySrc, site, values } from '@/content/data'

export const metadata: Metadata = {
  title: 'Sobre mí · Wedding planner en Jaén',
  description:
    'La historia de Medio Limón, wedding planner en Jaén: bodas limpias y luminosas en cortijos e iglesias de Andalucía, con pocas parejas al año y mucho detalle.',
  alternates: { canonical: '/sobre-mi' },
  openGraph: { url: '/sobre-mi', images: ['/og-image.jpg'] },
}

export default function SobreMiPage() {
  const main = photoBySrc('seating-papel-algodon.jpg')
  const detail = photoBySrc('novia-espejo-dorado.jpg')
  const sunset = photoBySrc('novios-atardecer-olivos.jpg')
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        title={<>Por qué <em>Medio Limón</em></>}
        intro="Porque una boda es la unión de dos mitades, y porque en Jaén todo sabe mejor con un poco de limón."
        image="/photos/novios-atardecer-olivos.jpg"
        imageAlt="Novios frente con frente entre olivos con la luz naranja del atardecer"
        position="center 40%"
      />

      <section className="section story">
        <span className="watermark story__watermark" aria-hidden="true">Jaén</span>
        <div className="container story__grid">
          <Reveal variant="scale-in" className="story__photo">
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 960px) 55vw, 100vw" style={{ objectFit: 'cover' }} />
          </Reveal>
          <div className="story__text">
            <Eyebrow>Mi historia</Eyebrow>
            <Reveal><h2 className="h-lg">Empecé organizando <em>las bodas de mis amigas</em></h2></Reveal>
            <Reveal delay={0.08}>
              <p className="lead">{site.bio}</p>
              <p>
                El nombre salió casi solo. Una boda es la unión de dos mitades, y el limón es la fruta más luminosa que conozco: fresca,
                honesta, un poco atrevida. Así quiero que sean las bodas que organizo. El corazón del logo es exactamente eso, medio
                limón convertido en algo que se regala.
              </p>
              <p>
                Trabajo con pocas parejas al año. No por exclusividad, sino porque solo así puedo estar de verdad: conocer a vuestras
                familias, visitar el cortijo tres veces si hace falta y llegar el día B sabiendo quién necesita una silla a la sombra.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface values">
        <div className="container">
          <div className="section-head section-head--center">
            <LemonHeart size={40} className="values__heart" />
            <Reveal><h2 className="h-xl">Lo que <em>me importa</em></h2></Reveal>
          </div>
          <StaggerGroup className="values__grid">
            {values.map((v, i) => (
              <StaggerItem key={v.title} className="value">
                <span className="value__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section detail">
        <div className="container detail__grid">
          <div className="detail__text">
            <span className="rule" aria-hidden="true" />
            <Reveal><h2 className="h-lg">Los detalles <em>que nadie ve</em></h2></Reveal>
            <Reveal delay={0.08}>
              <p>
                El botón número veintitrés del vestido que se suelta cinco minutos antes de salir. El abuelo que no puede subir la escalinata
                de la iglesia. La tarta que llega media hora antes y necesita sombra. De eso va mi trabajo el día de la boda: de verlo antes
                de que pase y de resolverlo sin que os enteréis.
              </p>
              <p>
                Llevo siempre un kit de emergencia que ya es famoso entre mis parejas: aguja e hilo blanco, imperdibles, tiritas, abanicos,
                pañuelos y un paraguas de más. Y el móvil de cada proveedor en marcación rápida.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale-in" className="detail__photo">
            <Image src={detail.src} alt={detail.alt} fill sizes="(min-width: 960px) 40vw, 100vw" style={{ objectFit: 'cover' }} />
          </Reveal>
        </div>
      </section>

      <Separator src={sunset.src} alt={sunset.alt} position="center 45%" tone="rose">
        <p className="sep__quote">{site.quote}</p>
      </Separator>

      <CtaBand
        eyebrow="Conozcámonos"
        title={<>Me encantaría <em>escuchar vuestra historia</em></>}
        text="Un café en Jaén o una videollamada. Sin compromiso y sin prisa."
      />
    </>
  )
}
