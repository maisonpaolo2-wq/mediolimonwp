import Image from 'next/image'
import Reveal from './Reveal'

/** Foto a sangre completa con velo de la paleta y una frase encima */
export default function Separator({
  src,
  alt,
  children,
  position = 'center',
  tone = 'ink',
}: {
  src: string
  alt: string
  children?: React.ReactNode
  position?: string
  tone?: 'ink' | 'rose'
}) {
  return (
    <section className={`sep sep--${tone}`}>
      <Reveal variant="scale-in" className="sep__media">
        <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: position }} />
      </Reveal>
      <div className="sep__veil" aria-hidden="true" />
      {children && (
        <div className="container sep__content">
          <Reveal>{children}</Reveal>
        </div>
      )}
    </section>
  )
}
