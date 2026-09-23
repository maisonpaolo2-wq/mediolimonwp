import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Gallery from '@/components/Gallery'
import CtaBand from '@/components/CtaBand'
import Reveal, { Eyebrow } from '@/components/Reveal'
import { photos } from '@/content/data'

export const metadata: Metadata = {
  title: 'Portfolio de bodas en Jaén y Andalucía',
  description:
    'Bodas organizadas por Medio Limón en cortijos, iglesias y olivares de Jaén y Andalucía: ceremonias, novias, decoración floral, papelería y celebración.',
  alternates: { canonical: '/portfolio' },
  openGraph: { url: '/portfolio', images: ['/og-image.jpg'] },
}

const venues = ['Cortijo El Madroño', 'Olivares de la campiña', 'Iglesias de Jaén', 'Casas de campo', 'Fincas en Andalucía']

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Bodas que <em>ya son recuerdo</em></>}
        intro="Ceremonias en iglesias barrocas, cócteles entre olivos y mesas con flores del campo. Tocad cualquier foto para verla en grande."
        image="/photos/confeti-puerta-iglesia.jpg"
        imageAlt="Novios con los brazos en alto bajo una lluvia de confeti a la salida de la iglesia"
        position="center 35%"
      />

      <section className="section portfolio">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <Eyebrow>{photos.length} momentos</Eyebrow>
              <Reveal><h2 className="h-lg">Novias, lugares <em>y detalles</em></h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <ul className="chips" aria-label="Lugares donde hemos trabajado">
                {venues.map(v => <li key={v}>{v}</li>)}
              </ul>
            </Reveal>
          </div>
          <Gallery photos={photos} />
        </div>
      </section>

      <CtaBand
        eyebrow="La siguiente"
        title={<>¿Y si la próxima <em>es la vuestra?</em></>}
        text="Agenda 2027 y 2028 abierta. Las fechas de primavera y septiembre vuelan."
      />
    </>
  )
}
