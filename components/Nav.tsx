'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, site } from '@/content/data'
import { EASE } from './Reveal'
import { hasWhatsapp, whatsappHref } from './WhatsAppButton'
import LemonHeart from './LemonHeart'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Fondo del nav al salir del top: IntersectionObserver sobre un centinela, sin eventos de scroll
  useEffect(() => {
    const sentinel = document.getElementById('nav-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header className={`nav${solid ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link href="/" className="nav__brand" aria-label={`${site.name}, inicio`}>
            <Image
              src={solid ? '/logo-limon.png' : '/logo-blanco.png'}
              alt={`${site.name} · Bodas + Eventos`}
              width={786}
              height={420}
              priority
              sizes="120px"
            />
          </Link>

          <nav className="nav__links" aria-label="Principal">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
            <span className="nav__lang" title="Próximamente · Coming soon">EN</span>
            <Link href="/contacto" className="btn btn--lemon btn--sm">
              Tomamos un café
            </Link>
          </nav>

          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
          >
            <span className="nav__burger" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <LemonHeart size={220} className="menu__heart" />
            <ul className="menu__links">
              <motion.li initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
                <Link href="/" onClick={() => setOpen(false)}><span>00</span>Inicio</Link>
              </motion.li>
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i + 1) * 0.08, ease: EASE }}
                >
                  <Link href={l.href} onClick={() => setOpen(false)} aria-current={pathname === l.href ? 'page' : undefined}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="menu__foot">
              {hasWhatsapp && <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{site.instagram}</a>
              <a href={`mailto:${site.email}`}>Email</a>
              <span className="nav__lang" title="Próximamente · Coming soon">EN · Próximamente</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
