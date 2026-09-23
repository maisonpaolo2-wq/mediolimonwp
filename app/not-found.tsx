import Link from 'next/link'
import LemonHeart from '@/components/LemonHeart'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <LemonHeart size={72} className="notfound__heart" />
        <p className="notfound__code" aria-hidden="true">404</p>
        <h1 className="h-lg">Esta página <em>se ha quedado sin su otra mitad</em></h1>
        <p>Puede que el enlace haya cambiado. Volvamos a empezar por el principio.</p>
        <div className="thanks__actions">
          <Link href="/" className="btn btn--solid">Ir al inicio <span className="btn__arrow">→</span></Link>
          <Link href="/contacto" className="btn">Contacto</Link>
        </div>
      </div>
    </section>
  )
}
