'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from './Reveal'
import { testimonials } from '@/content/data'

/** Cita grande centrada, una a la vez */
export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = testimonials.length
  const go = useCallback((d: number) => setI(x => (x + d + n) % n), [n])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 9000)
    return () => clearInterval(id)
  }, [paused, go])

  const t = testimonials[i]

  return (
    <div
      className="quote"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className="quote__mark" aria-hidden="true">“</span>
      <div className="quote__stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <blockquote className="quote__text">{t.text}</blockquote>
            <figcaption className="quote__who">
              <strong>{t.name}</strong>
              <span>{t.location} · {t.date}</span>
              <span className="quote__service">{t.service}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="quote__nav">
        <button type="button" className="quote__btn" onClick={() => go(-1)} aria-label="Testimonio anterior">←</button>
        <div className="quote__dots">
          {testimonials.map((x, k) => (
            <button
              key={x.name}
              type="button"
              className={`quote__dot${k === i ? ' is-on' : ''}`}
              onClick={() => setI(k)}
              aria-label={`Ver testimonio de ${x.name}`}
              aria-current={k === i ? 'true' : undefined}
            />
          ))}
        </div>
        <button type="button" className="quote__btn" onClick={() => go(1)} aria-label="Testimonio siguiente">→</button>
      </div>
    </div>
  )
}
