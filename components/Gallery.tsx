'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from './Lightbox'
import { EASE } from './Reveal'
import type { Photo } from '@/content/data'

type Props = { photos: Photo[]; layout?: 'masonry' | 'filmstrip' }

export default function Gallery({ photos, layout = 'masonry' }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => setOpen(i => (i === null ? i : (i - 1 + photos.length) % photos.length)), [photos.length])
  const next = useCallback(() => setOpen(i => (i === null ? i : (i + 1) % photos.length)), [photos.length])

  const film = layout === 'filmstrip'

  return (
    <>
      <div className={film ? 'film' : 'masonry'} role={film ? 'list' : undefined}>
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            role={film ? 'listitem' : undefined}
            className={film ? 'film__item' : 'masonry__item'}
            onClick={() => setOpen(i)}
            aria-label={`Ampliar foto: ${p.alt}`}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: EASE }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={900}
              height={1000}
              sizes={film ? '(min-width: 960px) 30vw, 78vw' : '(min-width: 960px) 33vw, (min-width: 560px) 50vw, 100vw'}
            />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && <Lightbox photos={photos} index={open} onClose={close} onPrev={prev} onNext={next} />}
      </AnimatePresence>
    </>
  )
}
