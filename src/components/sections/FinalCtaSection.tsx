export function FinalCtaSection() {
  return (
    <section className="px-4 py-20 bg-brand-blue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Хотите попробовать BilimTube первыми?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Оставьте контакты, и мы отправим приглашение в ранний доступ, как
          только приложение будет готово
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Ваша почта"
            className="flex-1 rounded-full px-5 py-3 text-brand-blue outline-none"
          />
          <button className="px-8 py-3 rounded-full bg-brand-red font-semibold">
            Получить приглашение
          </button>
        </form>
      </div>
    </section>
  )
}
