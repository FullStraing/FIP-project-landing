export function AnalyticsSection() {
  return (
    <section className="px-4 py-16 bg-brand-light">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Прозрачная аналитика для родителей
        </h2>
        <p className="text-brand-blue/80 mb-8 max-w-3xl">
          Визуальные отчеты показывают, как ребенок проводит время в приложении,
          какие темы его интересуют и как меняется активность
        </p>
        <div className="rounded-3xl bg-white p-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-brand-blue/60 mb-1">
              Время просмотра за неделю
            </p>
            <p className="text-2xl font-bold text-brand-blue">3 ч 40 мин</p>
          </div>
          <div>
            <p className="text-sm text-brand-blue/60 mb-1">
              Любимая тема ребенка
            </p>
            <p className="text-2xl font-bold text-brand-blue">Математика</p>
          </div>
          <div>
            <p className="text-sm text-brand-blue/60 mb-1">
              Активные дни
            </p>
            <p className="text-2xl font-bold text-brand-blue">5 из 7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
