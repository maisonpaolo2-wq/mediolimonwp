import LemonHeart from './LemonHeart'

// Cinta en movimiento con los corazones de colores de los destacados de Instagram
const words = ['Bodas', 'Eventos', 'Jaén', 'Pedidas', 'Andalucía', 'Celebraciones']
const tones = ['lemon', 'rose', 'leaf'] as const

export default function HeartBand() {
  const row = words.map((w, i) => (
    <span className="band__item" key={w}>
      <span>{w}</span>
      <LemonHeart size={26} className={`band__heart band__heart--${tones[i % 3]}`} />
    </span>
  ))
  return (
    <div className="band" aria-hidden="true">
      <div className="band__track">
        {row}
        {row}
      </div>
    </div>
  )
}
