'use client'

import Image from 'next/image'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-brand-gray/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-brand-red/10 overflow-hidden flex items-center justify-center">
            <Image
              src="/bilimtube-logo.png"
              alt="BilimTube logo"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
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
