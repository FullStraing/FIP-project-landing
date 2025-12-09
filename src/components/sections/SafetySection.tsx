export function SafetySection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Безопасность на первом месте
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-brand-blue/80">
            <li>✔ Только проверенный и модерируемый контент</li>
            <li>✔ Без рекламы, донатов и внешних ссылок</li>
            <li>✔ Нет открытых комментариев и личных сообщений</li>
            <li>✔ Возрастные фильтры и ограничение времени</li>
          </ul>
          <p className="text-brand-blue/80">
            Наша цель – дать ребенку пространство для развития и любопытства,
            не подвергая его взрослому информационному шуму и рискам обычных
            соцсетей
          </p>
        </div>
      </div>
    </section>
  )
}
