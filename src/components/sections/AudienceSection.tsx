import { FadeInSection } from "@/components/common/FadeInSection";

export function AudienceSection() {
  return (
    <FadeInSection className="px-4 py-16 bg-white">
      <section className="px-4 py-16 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Для кого BilimTube
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5">
              <h3 className="font-semibold text-brand-blue mb-2">Родители</h3>
              <p className="text-sm text-brand-blue/80">
                Хотят, чтобы ребенок проводил время в телефоне с пользой и под
                прозрачным контролем
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5">
              <h3 className="font-semibold text-brand-blue mb-2">Школы</h3>
              <p className="text-sm text-brand-blue/80">
                Ищут безопасный формат короткого обучающего контента для уроков
                и внеклассной работы
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5">
              <h3 className="font-semibold text-brand-blue mb-2">
                Детские центры
              </h3>
              <p className="text-sm text-brand-blue/80">
                Используют BilimTube как дополнительный интерактивный инструмент
                в занятиях
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
