'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import type { Photo } from '@/content/data'

type Props = {
  photos: Photo[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)
  const photo = photos[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onPrev, onNext])

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (dx > 50) onPrev()
    else if (dx < -50) onNext()
  }

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      onTouchStart={e => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={onTouchEnd}
    >
      <p className="lightbox__caption">{photo.alt}</p>

      <div className="lightbox__frame" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={photo.src}
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="92vw" />
          </motion.div>
        </AnimatePresence>
      </div>

      <button type="button" className="lightbox__btn lightbox__prev" aria-label="Foto anterior" onClick={e => { e.stopPropagation(); onPrev() }}>←</button>
      <button type="button" className="lightbox__btn lightbox__next" aria-label="Foto siguiente" onClick={e => { e.stopPropagation(); onNext() }}>→</button>
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" aria-label="Cerrar galería" onClick={onClose}>✕</button>
      <p className="lightbox__count">
        {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
      </p>
    </motion.div>
  )
}
