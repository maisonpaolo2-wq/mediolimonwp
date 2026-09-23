'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EASE } from './Reveal'
import { photoBySrc, site } from '@/content/data'

const lines = [
  <>Bodas con</>,
  <>luz propia,</>,
  <em key="e">entre olivos</em>,
]

export default function Hero() {
  const photo = photoBySrc('novia-olivar-jaen.jpg')
  return (
    <section className="hero" aria-label="Presentación">
      <motion.div
        className="hero__media"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '55% 40%' }} />
      </motion.div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__content">
        <motion.p
          className="hero__kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          Wedding planner · Jaén · Andalucía
        </motion.p>

        <h1 className="hero__title">
          {lines.map((line, i) => (
            <span className="hero__line" key={i}>
              <motion.span
                initial={{ opacity: 0, y: '0.6em' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero__foot"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75, ease: EASE }}
        >
          <p>Agenda 2027 y 2028 abierta · Visto en {site.press}</p>
          <div className="hero__ctas">
            <Link href="/contacto" className="btn btn--lemon">
              Contadnos vuestra boda <span className="btn__arrow">→</span>
            </Link>
            <Link href="/portfolio" className="btn btn--ghost-light">
              Ver bodas
            </Link>
          </div>
        </motion.div>
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Bajar a la presentación">
        <span />
      </a>
    </section>
  )
}
