'use client'

import { motion, type Variants } from 'framer-motion'

export const EASE = [0.25, 0.1, 0.25, 1] as const

const variants: Record<'fade-up' | 'fade-in' | 'scale-in', Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 1.08 },
    show: { opacity: 1, scale: 1 },
  },
}

type Props = {
  children?: React.ReactNode
  variant?: keyof typeof variants
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.5,
  className,
  style,
}: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Subtítulo con línea decorativa que crece de 0 a 100 % */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <motion.span
        className="eyebrow__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      />
      {children}
    </span>
  )
}

const staggerParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

/** Lista con stagger de 0.08 s por elemento */
export function StaggerList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.ol
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerParent}
    >
      {children}
    </motion.ol>
  )
}

export function StaggerGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerParent}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  li = false,
}: {
  children: React.ReactNode
  className?: string
  li?: boolean
}) {
  const props = { className, variants: variants['fade-up'], transition: { duration: 0.5, ease: EASE } }
  return li ? <motion.li {...props}>{children}</motion.li> : <motion.div {...props}>{children}</motion.div>
}
