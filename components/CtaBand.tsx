import Link from 'next/link'
import Reveal, { Eyebrow } from './Reveal'
import LemonHeart from './LemonHeart'
import { directHref, directLabel } from './WhatsAppButton'

export default function CtaBand({
  eyebrow = 'Hablamos',
  title,
  text,
}: {
  eyebrow?: string
  title: React.ReactNode
  text?: string
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <LemonHeart size={64} className="cta__heart" />
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="cta__title">{title}</h2>
          {text && <p className="cta__text">{text}</p>}
          <div className="cta__actions">
            <Link href="/contacto" className="btn btn--solid">
              Pedir primera reunión <span className="btn__arrow">→</span>
            </Link>
            <a href={directHref} target="_blank" rel="noopener noreferrer" className="btn">
              {directLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
