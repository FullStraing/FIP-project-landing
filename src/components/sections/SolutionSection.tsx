import { FadeInSection } from '@/components/common/FadeInSection'

export function SolutionSection() {
  return (
    <FadeInSection className="px-4 py-16 bg-white">
      <section className="px-4 py-16 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            BilimTube – безопасная альтернатива
          </h2>
          <p className="text-brand-blue/80 mb-8 max-w-3xl">
            Мы собрали образовательный контент в формате коротких рилсов,
            добавили модерацию, возрастные ограничения и умную аналитику для
            родителей
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-5">
              <h3 className="font-semibold text-brand-blue mb-2">
                Проверенный контент
              </h3>
              <p className="text-sm text-brand-blue/80">
                Видеоролики от одобренных создателей, разделенные по возрасту и
                темам: математика, чтение, английский, логика, творчество
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5">
              <h3 className="font-semibold text-brand-blue mb-2">
                Кабинет родителя
              </h3>
              <p className="text-sm text-brand-blue/80">
                Время просмотра, любимые темы, динамика по дням и простое
                управление лимитами
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
