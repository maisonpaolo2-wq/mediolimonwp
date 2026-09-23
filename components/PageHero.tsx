import Image from 'next/image'
import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  image: string
  imageAlt: string
  position?: string
}

/** Cabecera de páginas secundarias: foto a sangre con velo y titular editorial */
export default function PageHero({ eyebrow, title, intro, image, imageAlt, position = 'center' }: Props) {
  return (
    <section className="phero">
      <div className="phero__media">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: position }} />
      </div>
      <div className="phero__veil" aria-hidden="true" />
      <div className="container phero__content">
        <Reveal variant="fade-in">
          <p className="phero__eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="phero__title">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <p className="phero__intro">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
