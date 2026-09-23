'use client'

import { MotionConfig } from 'framer-motion'
import { useEffect } from 'react'

// Raíz cliente: respeta prefers-reduced-motion y arranca siempre arriba.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
