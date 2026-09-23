import Image from 'next/image'
import Link from 'next/link'
import { navLinks, photoBySrc, site } from '@/content/data'
import { hasWhatsapp, whatsappHref } from './WhatsAppButton'
import Reveal from './Reveal'

export default function Footer() {
  const bg = photoBySrc('novios-baile-noche.jpg')
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__media" aria-hidden="true">
        <Image src={bg.src} alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
      </div>
      <div className="footer__veil" aria-hidden="true" />

      <div className="container footer__inner">
        <Reveal>
          <p className="footer__quote">{site.quote}</p>
        </Reveal>

        <div className="footer__grid">
          <div className="footer__brand">
            <Image src="/logo-blanco.png" alt={`${site.name} · Bodas + Eventos`} width={786} height={420} sizes="160px" />
            <p>Wedding planner en {site.locations.slice(0, 2).join(', ')} y toda Andalucía.</p>
          </div>

          <nav aria-label="Pie de página" className="footer__col">
            <p className="footer__label">Web</p>
            <Link href="/">Inicio</Link>
            {navLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>

          <div className="footer__col">
            <p className="footer__label">Contacto</p>
            <a href={`mailto:${site.email}`} className="footer__email">{site.email}</a>
            {hasWhatsapp && <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram {site.instagram}</a>
          </div>
        </div>

        <div className="footer__base">
          <span>© {year} {site.name} · Bodas + Eventos</span>
          <span>Hecho con cariño en Jaén</span>
        </div>
      </div>
    </footer>
  )
}
