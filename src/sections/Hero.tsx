export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Фирменная лента - отсылка к логотипу */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 w-[520px] max-w-none opacity-90 md:-right-16 md:w-[680px]"
        viewBox="0 0 680 520"
        fill="none"
      >
        <path
          d="M540 40C420 60 330 160 320 290c-8 100 40 170 120 200"
          stroke="url(#g1)"
          strokeWidth="46"
          strokeLinecap="round"
        />
        <path
          d="M620 120C520 140 450 220 445 320c-4 80 34 136 100 160"
          stroke="url(#g2)"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.85"
        />
        <defs>
          <linearGradient id="g1" x1="320" y1="40" x2="470" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8447c" />
            <stop offset="0.55" stopColor="#2f7de1" />
            <stop offset="1" stopColor="#f2955c" />
          </linearGradient>
          <linearGradient id="g2" x1="445" y1="120" x2="560" y2="490" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2f7de1" />
            <stop offset="1" stopColor="#e8447c" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6e6e1] bg-white px-4 py-1.5 text-sm font-medium text-[#45474f]">
            <span className="h-2 w-2 rounded-full bg-[#e8447c]" />
            Веб-дизайн и запуск сайтов на Tilda
          </p>

          <h1 className="font-display text-[2rem] font-600 leading-[1.15] tracking-tight md:text-[3.4rem]">
            Сайты, которые решают задачи вашего бизнеса, - не просто «красивая страница»
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#45474f]">
            Проектирую и запускаю лендинги, многостраничные сайты и интернет-магазины на Tilda.
            От брифа до работающего сайта - с анализом ниши, продающей структурой и поддержкой
            после запуска.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-glow rounded-full bg-[#e8447c] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#c92c63]"
            >
              Обсудить проект
            </a>
            <a
              href="#works"
              className="btn-glow btn-glow-outline rounded-full bg-[#109bed] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0d86c9]"
            >
              Смотреть работы
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-[#e6e6e1] pt-8">
            <div>
              <dt className="font-display text-2xl font-600 md:text-3xl">от 7</dt>
              <dd className="mt-1 text-sm text-[#6b6d76]">дней на лендинг</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-600 md:text-3xl">6+</dt>
              <dd className="mt-1 text-sm text-[#6b6d76]">ниш в портфолио</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-600 md:text-3xl">2 нед.</dt>
              <dd className="mt-1 text-sm text-[#6b6d76]">поддержки после запуска</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
