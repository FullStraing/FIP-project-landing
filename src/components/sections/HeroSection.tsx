export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full flex flex-col gap-8 text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold px-4 py-1">
          Безопасные рилсы для детей 3–13 лет
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-blue">
          BilimTube – обучающие видео для детей под контролем родителей
        </h1>
        <p className="text-base md:text-lg text-brand-blue/80 max-w-3xl mx-auto">
          Короткие рилсы, проверенный контент, умная аналитика для родителей и
          комфортный экран тайм для детей
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-brand-red text-white font-semibold text-base">
            Получить ранний доступ
          </button>
          <button className="px-8 py-3 rounded-full border border-brand-blue/20 text-brand-blue font-semibold text-base bg-white/70">
            Узнать подробнее
          </button>
        </div>
      </div>
    </section>
  )
}
