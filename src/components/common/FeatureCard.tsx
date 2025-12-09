'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
  accent?: 'red' | 'blue'
}

export function FeatureCard({ icon, title, description, accent = 'blue' }: Props) {
  const accentBg =
    accent === 'red' ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-blue/10 text-brand-blue'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group rounded-3xl bg-white/90 p-5 shadow-sm hover:shadow-lg border border-brand-gray/20 transition"
    >
      <div
        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl ${accentBg}`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-brand-blue mb-2">{title}</h3>
      <p className="text-sm text-brand-blue/80">{description}</p>
    </motion.div>
  )
}
