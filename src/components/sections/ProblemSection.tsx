export function ProblemSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Обычные соцсети не созданы для детей
        </h2>
        <p className="text-brand-blue/80 mb-8 max-w-3xl">
          Взрослые платформы показывают рекламу, токсичные комментарии и
          случайные рекомендации. Родители не видят, что ребенок реально
          смотрит и как это влияет на него
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-brand-light p-5">
            <h3 className="font-semibold text-brand-blue mb-2">
              Случайный контент
            </h3>
            <p className="text-sm text-brand-blue/80">
              Ребенок за несколько свайпов попадает на взрослые темы, страшные
              сюжеты или бессмысленный шум
            </p>
          </div>
          <div className="rounded-3xl bg-brand-light p-5">
            <h3 className="font-semibold text-brand-blue mb-2">
              Нет контроля времени
            </h3>
            <p className="text-sm text-brand-blue/80">
              Экран тайм легко уходит за час, а родитель видит только факт
              «сидел в телефоне»
            </p>
          </div>
          <div className="rounded-3xl bg-brand-light p-5">
            <h3 className="font-semibold text-brand-blue mb-2">
              Ноль аналитики
            </h3>
            <p className="text-sm text-brand-blue/80">
              Невозможно понять, какие темы интересуют ребенка и развивается ли
              он через этот контент
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
