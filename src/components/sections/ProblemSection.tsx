export function ProblemSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Обычные соцсети не созданы для детей
        </h2>
        <p className="text-brand-blue/80 mb-8 max-w-3xl">
          Взрослые платформы показывают случайные ролики, рекламу и токсичные
          комментарии. Ребенок попадает в информационный шум, а родитель ничего
          не контролирует.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-brand-light p-5">
            <h3 className="font-semibold text-brand-blue mb-2">
              Случайный контент
            </h3>
            <p className="text-sm text-brand-blue/80">
              Пара свайпов — и ребенок уже на роликах с страшными, агрессивными
              или просто бессмысленными темами.
            </p>
          </div>
          <div className="rounded-3xl bg-brand-light p-5">
            <h3 className="font-semibold text-brand-blue mb-2">
              Нет контроля времени
            </h3>
            <p className="text-sm text-brand-blue/80">
              Экран тайм растягивается, пока родитель думает, что «он просто
              смотрит мультики».
            </p>
          </div>
          <div className="rounded-3xl bg-brand-light p-5">
            <h3 className="font-semibold text-brand-blue mb-2">
              Ноль аналитики
            </h3>
            <p className="text-sm text-brand-blue/80">
              Никаких данных: ни по темам, ни по времени, ни по влиянию
              контента.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
