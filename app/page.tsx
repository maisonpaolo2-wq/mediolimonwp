import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Reveal, { Eyebrow, StaggerGroup, StaggerItem, StaggerList } from '@/components/Reveal'
import Separator from '@/components/Separator'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import LemonHeart from '@/components/LemonHeart'
import HeartBand from '@/components/HeartBand'
import { directHref, directLabel } from '@/components/WhatsAppButton'
import { photoBySrc, photos, processSteps, services, site } from '@/content/data'

export default function Home() {
  const intro = photoBySrc('centro-mesa-flores-silvestres.jpg')
  const introSmall = photoBySrc('novia-lagrima.jpg')
  const church = photoBySrc('portada-iglesia-flores.jpg')
  const about = photoBySrc('seating-papel-algodon.jpg')
  const press = photoBySrc('novios-beso-puerta.jpg')
  const contact = photoBySrc('confeti-puerta-iglesia.jpg')
  const strip = photos.filter(p => !['novia-olivar-jaen.jpg', 'novios-baile-noche.jpg'].some(n => p.src.endsWith(n))).slice(0, 10)

  return (
    <>
      <Hero />

      {/* INTRO · asimétrica 40/60 con watermark ½ */}
      <section id="intro" className="section intro">
        <span className="watermark intro__watermark" aria-hidden="true">½</span>
        <div className="container intro__grid">
          <div className="intro__text">
            <Reveal variant="fade-in">
              <p className="kicker">Hola, somos Medio Limón</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">
                La otra mitad <em>de vuestra boda</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">{site.bioShort}</p>
              <p>
                Trabajo desde Jaén con proveedores de confianza, pocas bodas al año y una idea fija: que el día se parezca a vosotros y
                que lo viváis sin mirar el reloj.
              </p>
              <Link href="/sobre-mi" className="link-arrow">Conoce cómo trabajo <span>→</span></Link>
            </Reveal>
          </div>
          <div className="intro__media">
            <Reveal variant="scale-in" className="intro__photo">
              <Image src={intro.src} alt={intro.alt} fill sizes="(min-width: 960px) 55vw, 100vw" style={{ objectFit: 'cover' }} />
            </Reveal>
            <Reveal variant="scale-in" delay={0.15} className="intro__photo intro__photo--small">
              <Image src={introSmall.src} alt={introSmall.alt} fill sizes="(min-width: 960px) 22vw, 45vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <HeartBand />

      {/* SERVICIOS · tarjetas con foto */}
      <section className="section section--surface services" id="servicios">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <span className="section-num" aria-hidden="true">01</span>
              <Eyebrow>Servicios</Eyebrow>
              <Reveal><h2 className="h-xl">Tres formas de <em>acompañaros</em></h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="section-head__aside">
                Desde el primer café hasta el último baile, o solo el día B. Elegís el nivel de acompañamiento; el cuidado es el mismo.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="cards">
            {services.map((s, i) => (
              <StaggerItem key={s.slug} className="card">
                <Link href={`/servicios#${s.slug}`} className="card__link">
                  <div className="card__media">
                    <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 960px) 33vw, 100vw" style={{ objectFit: 'cover' }} />
                    <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="card__body">
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <span className="link-arrow">Ver qué incluye <span>→</span></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Separator src={church.src} alt={church.alt} position="center 60%">
        <p className="sep__quote">Menos cosas, <em>mejor elegidas</em>.</p>
        <p className="sep__note">Flores de temporada, papel escrito a mano y espacios que ya son bonitos por sí solos.</p>
      </Separator>

      {/* PROCESO · números grandes */}
      <section className="section process">
        <div className="container">
          <div className="section-head">
            <span className="rule" aria-hidden="true" />
            <Reveal><h2 className="h-xl">Cómo <em>trabajamos</em></h2></Reveal>
            <Reveal delay={0.1}>
              <p className="section-head__aside">Cinco pasos, sin prisas y con todo por escrito. Así llegáis a la última semana con la cabeza tranquila.</p>
            </Reveal>
          </div>
          <StaggerList className="steps">
            {processSteps.map(step => (
              <StaggerItem key={step.number} li className="step">
                <span className="step__num">{String(step.number).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* PORTFOLIO · filmstrip */}
      <section className="section section--surface portfolio-home" id="portfolio">
        <div className="container section-head section-head--split">
          <div>
            <span className="section-num section-num--rose" aria-hidden="true">02</span>
            <Eyebrow>Portfolio</Eyebrow>
            <Reveal><h2 className="h-xl">Bodas que <em>ya son recuerdo</em></h2></Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="btn">Ver portfolio completo <span className="btn__arrow">→</span></Link>
          </Reveal>
        </div>
        <Gallery photos={strip} layout="filmstrip" />
        <p className="container film__hint" aria-hidden="true">Desliza para ver más · toca para ampliar</p>
      </section>

      {/* SOBRE MÍ · foto portrait 55% */}
      <section className="section about">
        <div className="container about__grid">
          <Reveal variant="scale-in" className="about__photo">
            <Image src={about.src} alt={about.alt} fill sizes="(min-width: 960px) 55vw, 100vw" style={{ objectFit: 'cover' }} />
          </Reveal>
          <div className="about__text">
            <LemonHeart size={44} className="about__heart" />
            <Eyebrow>Sobre mí</Eyebrow>
            <Reveal><h2 className="h-lg">Organizo cada boda <em>como si fuera la de una amiga</em></h2></Reveal>
            <Reveal delay={0.1}>
              <p>
                Medio Limón es un estudio pequeño a propósito. Pocas bodas al año para poder estar de verdad: conocer a vuestras familias,
                escribir el seating a mano si hace falta y llegar al cortijo antes que nadie.
              </p>
              <p>
                Me gustan las bodas limpias y luminosas, con flores silvestres, papel de algodón y mucha risa. Y me gusta todavía más
                que el día salga tan bien que nadie note el trabajo que hay detrás.
              </p>
              <Link href="/sobre-mi" className="link-arrow">Leer mi historia <span>→</span></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator src={press.src} alt={press.alt} position="center 35%" tone="rose">
        <p className="sep__eyebrow">Visto en</p>
        <p className="sep__quote sep__quote--big">{site.press}</p>
        <p className="sep__note">Una de nuestras bodas en el Cortijo El Madroño, publicada en la revista.</p>
      </Separator>

      {/* TESTIMONIOS · cita grande */}
      <section className="section section--surface testimonials">
        <div className="container">
          <div className="section-head section-head--center">
            <Eyebrow>Lo que cuentan las parejas</Eyebrow>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section contact-home" id="contacto">
        <div className="container contact-home__grid">
          <div className="contact-home__side">
            <span className="section-num section-num--lemon" aria-hidden="true">03</span>
            <Eyebrow>Contacto</Eyebrow>
            <Reveal><h2 className="h-xl">¿Tomamos <em>un café?</em></h2></Reveal>
            <Reveal delay={0.1}>
              <p>
                Contadme la fecha, el lugar si ya lo tenéis y cómo os imagináis el día. Respondo en menos de 48 horas con disponibilidad
                y una propuesta de primera reunión.
              </p>
              <ul className="contact-list">
                <li><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><span>Instagram</span><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{site.instagram}</a></li>
                <li><span>Zona</span>{site.locations.join(' · ')}</li>
              </ul>
              <a href={directHref} target="_blank" rel="noopener noreferrer" className="btn">{directLabel}</a>
            </Reveal>
            <Reveal variant="scale-in" className="contact-home__photo">
              <Image src={contact.src} alt={contact.alt} fill sizes="(min-width: 960px) 30vw, 100vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="contact-home__form">
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  )
}
