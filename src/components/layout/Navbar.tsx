'use client'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-brand-gray/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          {/* тут потом вставим твой логотип-барса как <Image /> */}
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-red/90 text-white font-bold">
            B
          </div>
          <span className="text-lg font-semibold text-brand-blue">
            BilimTube
          </span>
        </div>
        <button className="hidden sm:inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue text-white px-5 py-2 text-sm font-semibold hover:bg-brand-blue/90 transition">
          Ранний доступ
        </button>
      </div>
    </header>
  )
}
