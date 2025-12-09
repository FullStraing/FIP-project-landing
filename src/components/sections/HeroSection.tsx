"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-light">
      {/* красный play-фон */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rotate-12 rounded-[3rem] bg-brand-red/80 blur-3xl opacity-70" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:flex-row md:items-center md:pt-16">
        {/* Левая колонка: текст */}
        <div className="relative z-10 flex-1 space-y-6">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-brand-blue/80 shadow-sm"
          >
            Безопасные рилсы для детей 3–13 лет
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-3xl leading-tight font-extrabold text-brand-blue md:text-5xl"
          >
            Обучающие видео,
            <br />
            которые родители могут доверить
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl text-sm md:text-base text-brand-blue/80"
          >
            Короткие рилсы по математике, чтению, логике и английскому. Все
            модерируется, разделено по возрасту, а в кабинете родителя —
            понятные отчеты и контроль времени.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <button className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-red/90 transition">
              Получить ранний доступ
            </button>
            <button className="rounded-full border border-brand-blue/20 bg-white/80 px-7 py-3 text-sm font-semibold text-brand-blue hover:bg-white transition">
              Посмотреть, как это работает
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-2 text-xs text-brand-blue/70"
          >
            <span className="rounded-full bg-white/80 px-3 py-1">
              Без рекламы
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1">
              Возрастные фильтры
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1">
              Аналитика для родителей
            </span>
          </motion.div>
        </div>

        {/* Правая колонка: телефон с рилсами */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex-1 flex justify-center md:justify-end"
        >
          <div className="relative h-[360px] w-[220px] rounded-[2rem] bg-white shadow-2xl shadow-brand-blue/20 p-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-2xl bg-brand-light px-3 py-2">
              <div className="h-7 w-7 rounded-full bg-white overflow-hidden">
                <Image
                  src="/bilimtube-logo.png"
                  alt="BilimTube mascot"
                  width={28}
                  height={28}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-brand-blue">
                  Профиль: Алиса, 7
                </p>
                <p className="text-[11px] text-brand-blue/70">
                  Математика · Логика
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="h-28 rounded-2xl bg-brand-blue/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 rounded-2xl bg-brand-red/15" />
                <div className="h-20 rounded-2xl bg-brand-blue/10" />
              </div>
              <div className="h-16 rounded-2xl bg-brand-gray/20" />
            </div>

            <div className="mt-1 flex items-baseline justify-between gap-2 text-[10px] text-brand-blue/70">
              <span className="whitespace-nowrap">
                Экран тайм сегодня:{" "}
                <span className="font-semibold">22 мин</span>
              </span>
              <span className="whitespace-nowrap font-semibold text-brand-red">
                Почти лимит
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
