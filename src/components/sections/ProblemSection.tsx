'use client'

import { motion } from 'framer-motion'

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-white scroll-mt-24"
    >
      {/* фоновые фигуры */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-72 w-72 rounded-[999px] bg-brand-red/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-[-80px] h-72 w-72 rounded-[999px] bg-brand-blue/10 blur-3xl" />

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
          Обычные соцсети не созданы для детей
        </motion.h2>

        <motion.p
          className="text-brand-blue/80 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
        >
          TikTok, YouTube, Reels — они сделаны для удержания внимания взрослых,
          а не для развития ребенка. Реклама, случайные рекомендации и токсичные
          комментарии попадают в ленту за пару свайпов.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-3xl bg-brand-light/80 p-5 shadow-sm hover:shadow-md border border-brand-gray/20 transition"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red text-lg">
              ⚠️
            </div>
            <h3 className="font-semibold text-brand-blue mb-2">
              Случайный контент
            </h3>
            <p className="text-sm text-brand-blue/80">
              Пара свайпов — и ребенок уже на роликах со страшными,
              агрессивными или просто бессмысленными темами.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.28, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-3xl bg-brand-light/80 p-5 shadow-sm hover:shadow-md border border-brand-gray/20 transition"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue text-lg">
              ⏱
            </div>
            <h3 className="font-semibold text-brand-blue mb-2">
              Экран тайм без лимитов
            </h3>
            <p className="text-sm text-brand-blue/80">
              Лента бесконечна. Экран тайм растягивается на час и больше, пока
              родитель уверен, что «он просто смотрит мультики».
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.36, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-3xl bg-brand-light/80 p-5 shadow-sm hover:shadow-md border border-brand-gray/20 transition"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue text-lg">
              ❓
            </div>
            <h3 className="font-semibold text-brand-blue mb-2">
              Ноль прозрачности
            </h3>
            <p className="text-sm text-brand-blue/80">
              Родитель не видит, какие темы смотрит ребенок, чему он учится и
              как контент влияет на его интересы и привычки.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
