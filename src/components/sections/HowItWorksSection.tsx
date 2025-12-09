export function HowItWorksSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Как это работает
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-brand-light p-5">
            <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-brand-red text-white text-sm font-semibold mb-3">
              1
            </span>
            <h3 className="font-semibold text-brand-blue mb-2">
              Профиль ребенка
            </h3>
            <p className="text-sm text-brand-blue/80">
              Родитель создает профиль, выбирает возраст, язык и интересы
            </p>
          </div>
          <div className="rounded-3xl bg-brand-light p-5">
            <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-brand-red text-white text-sm font-semibold mb-3">
              2
            </span>
            <h3 className="font-semibold text-brand-blue mb-2">
              Безопасные рилсы
            </h3>
            <p className="text-sm text-brand-blue/80">
              Ребенок смотрит короткие обучающие видео в детском интерфейсе
            </p>
          </div>
          <div className="rounded-3xl bg-brand-light p-5">
            <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-brand-red text-white text-sm font-semibold mb-3">
              3
            </span>
            <h3 className="font-semibold text-brand-blue mb-2">
              Аналитика для родителя
            </h3>
            <p className="text-sm text-brand-blue/80">
              Вы видите время, темы и динамику интересов, а не просто «сидел в
              телефоне»
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
