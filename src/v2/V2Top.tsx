import { useEffect, useState } from 'react';

const links = [
  { href: '#services', label: 'Услуги' },
  { href: '#works', label: 'Проекты' },
  { href: '#steps', label: 'Этапы' },
  { href: '#contact', label: 'Контакты' },
];

export function V2Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0a0b]' : 'bg-transparent'
      }`}
    >
      <div className="v2-container flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Aliks - наверх">
          <img src="/logo.png" alt="" className="h-9 w-9 rounded-lg" />
          <span className="v2-display text-lg text-white">aliks</span>
        </a>

        <nav aria-label="Основная навигация">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-semibold text-white/85 transition-colors hover:text-white underline-offset-8 hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="v2-btn-red px-5 py-2.5">
          Заказать проект
        </a>
      </div>
    </header>
  );
}

/* Детерминированные псевдослучайные звёзды */
const STARS = Array.from({ length: 70 }, (_, i) => {
  const seed = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  const r1 = seed - Math.floor(seed);
  const seed2 = Math.sin(i * 269.5 + 183.3) * 28001.8384;
  const r2 = seed2 - Math.floor(seed2);
  const seed3 = Math.sin(i * 419.2 + 71.9) * 12345.6789;
  const r3 = seed3 - Math.floor(seed3);
  return {
    left: r1 * 100,
    top: r2 * 100,
    size: 1 + r3 * 2,
    opacity: 0.25 + r3 * 0.7,
  };
});

export function V2Hero() {
  return (
    <section id="top" className="v2-space relative flex min-h-screen items-end overflow-hidden">
      {/* звёздное небо */}
      <div aria-hidden="true" className="absolute inset-0">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="v2-star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
            }}
          />
        ))}
        <span className="v2-bokeh left-[-8%] top-[8%] h-72 w-72 bg-[#3b5bff]/25" />
        <span className="v2-bokeh right-[6%] top-[30%] h-56 w-56 bg-[#7a4bff]/20" />
        <span className="v2-bokeh bottom-[10%] left-[30%] h-64 w-64 bg-[#2f6bff]/15" />
      </div>

      {/* красная точка-фирменный знак */}
      <span aria-hidden="true" className="v2-dot absolute right-[12%] top-[24%] hidden h-4 w-4 md:block" />

      <div className="v2-container relative pb-20 pt-36 md:pb-28">
        <div className="reveal">
          <p className="v2-eyebrow text-white/80">
            <span className="v2-dot" />
            Веб-дизайнер · сайты на Tilda
          </p>
          <h1 className="v2-display mt-8 text-white text-[2.1rem] sm:text-[3.4rem] lg:text-[5.2rem]">
            Создаю
            <br />
            сайты, которые
            <br />
            <span className="text-[#ff5a4e]">работают</span> на бизнес
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Лендинги, многостраничные сайты и интернет-магазины с продающей структурой.
            От брифа до запуска - понятные этапы и поддержка после старта.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="v2-btn-red px-8 py-4 text-sm">
              Обсудить проект
            </a>
            <a
              href="#works"
              className="v2-link-more !text-white/85 hover:!text-white"
            >
              Смотреть проекты
            </a>
          </div>
        </div>

        {/* строка фактов */}
        <dl className="reveal mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur-sm sm:grid-cols-3">
          {[
            { num: '6+', label: 'ниш в портфолио' },
            { num: 'от 7 дней', label: 'срок запуска лендинга' },
            { num: '2 недели', label: 'поддержки после старта' },
          ].map((s) => (
            <div key={s.label} className="bg-[#060a1c]/70 px-6 py-5">
              <dt className="order-2 mt-1 block text-sm text-white/60">{s.label}</dt>
              <dd className="v2-display text-xl text-white md:text-2xl">{s.num}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
