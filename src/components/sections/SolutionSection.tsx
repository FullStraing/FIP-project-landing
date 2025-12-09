'use client'

import { ShieldCheck, Presentation, BarChart3, Baby } from 'lucide-react'
import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/common/FeatureCard'

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-brand-light scroll-mt-24"
    >
      <div className="pointer-events-none absolute -right-40 -top-32 h-72 w-72 rounded-[999px] bg-brand-red/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-[-80px] h-72 w-72 rounded-[999px] bg-brand-blue/10 blur-3xl" />

      <motion.div
        className="relative max-w-5xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-brand-blue mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        >
          BilimTube – безопасная альтернатива
        </motion.h2>

        <motion.p
          className="text-brand-blue/80 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
        >
          Короткие обучающие рилсы, ручная модерация, возрастные фильтры и
          понятная аналитика для родителей вместо бесконечной взрослой ленты.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={<ShieldCheck size={18} />}
            title="Проверенный контент"
            description="Видеоролики проходят модерацию и помечаются по возрасту и темам: математика, чтение, английский, логика, творчество."
            accent="red"
          />
          <FeatureCard
            icon={<Baby size={18} />}
            title="Возрастные профили"
            description="Отдельные режимы для 3–6, 7–9 и 10–13 лет. Интерфейс и подбор роликов адаптируются под возраст ребенка."
          />
          <FeatureCard
            icon={<BarChart3 size={18} />}
            title="Аналитика для родителей"
            description="Время просмотра, темы, динамика по дням. Вы видите, что ребенок реально смотрит, а не просто «сидит в телефоне»."
          />
          <FeatureCard
            icon={<Presentation size={18} />}
            title="Обучение через рилсы"
            description="Короткий формат удерживает внимание, а структура и темы помогают ребенку повторять и запоминать материал."
          />
        </div>
      </motion.div>
    </section>
  )
}
