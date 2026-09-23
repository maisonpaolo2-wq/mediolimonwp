// Motivo del logo: medio limón en forma de corazón con su rabito.
const HEART = 'M50 92 C22 72 6 56 6 36 C6 20 18 10 31 10 C40 10 46 15 50 22 C54 15 60 10 69 10 C82 10 94 20 94 36 C94 56 78 72 50 92 Z'

export default function LemonHeart({
  size = 48,
  className,
  segments = true,
}: {
  size?: number
  className?: string
  segments?: boolean
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.08}
      viewBox="0 -8 100 108"
      fill="none"
      aria-hidden="true"
    >
      <path d="M40 -2 C42 6 58 6 60 -2" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d={HEART} stroke="currentColor" strokeWidth="5.5" strokeLinejoin="round" />
      {segments && (
        <g fill="currentColor">
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <ellipse
              key={i}
              cx="50"
              cy="32"
              rx="6.5"
              ry="12"
              transform={`rotate(${i * (360 / 7) + 180 / 7} 50 47)`}
            />
          ))}
        </g>
      )}
    </svg>
  )
}
