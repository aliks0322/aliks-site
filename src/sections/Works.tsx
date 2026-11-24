type Work = {
  title: string;
  type: string;
  description: string;
  gradient: string;
};

const works: Work[] = [
  {
    title: 'Кроссовки',
    type: 'Интернет-магазин',
    description:
      'Интернет-магазин кроссовок под ключ: дизайн, вёрстка, технические настройки и запуск.',
    gradient: 'linear-gradient(135deg, #f6d9e4 0%, #dce9fa 100%)',
  },
  {
    title: 'Подставки для цветов',
    type: 'Лендинг',
    description:
      'Одностраничный сайт для мастерской по изготовлению кованых изделий.',
    gradient: 'linear-gradient(135deg, #fdeede 0%, #f6d9e4 100%)',
  },
  {
    title: 'Цветы с доставкой',
    type: 'Многостраничный сайт',
    description:
      'Сайт для сервиса доставки цветов с каталогом: дизайн, вёрстка, технические настройки.',
    gradient: 'linear-gradient(135deg, #dcefe2 0%, #fdeede 100%)',
  },
  {
    title: 'Каркасные дома',
    type: 'Лендинг',
    description:
      'Концепт дизайна для строительной компании: дизайн, вёрстка, технические настройки.',
    gradient: 'linear-gradient(135deg, #dce9fa 0%, #e8e4f7 100%)',
  },
  {
    title: 'О Египте',
    type: 'Лонгрид',
    description:
      'Лонгрид, рассказывающий о достопримечательностях Египта.',
    gradient: 'linear-gradient(135deg, #fdeede 0%, #dce9fa 100%)',
  },
  {
    title: 'Йога-центр',
    type: 'Лендинг',
    description:
      'Концепт дизайна для сайта йога-центра: дизайн, вёрстка, технические настройки.',
    gradient: 'linear-gradient(135deg, #e8e4f7 0%, #f6d9e4 100%)',
  },
];

export function Works() {
  return (
    <section id="works" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-600 tracking-tight md:text-4xl">Мои работы</h2>
            <p className="mt-4 max-w-xl text-[#45474f]">
              Каждый проект - от лендинга до интернет-магазина - собирается вокруг задачи
              бизнеса, а не вокруг модных эффектов.
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-[#e8447c] underline-offset-4 hover:underline"
          >
            Хочу так же - обсудить проект
          </a>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {works.map((w, i) => (
            <li key={w.title} className={`reveal group ${i % 2 === 1 ? 'md:mt-16' : ''}`}>
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e6e6e1]"
                style={{ background: w.gradient }}
              >
                <span className="absolute inset-0 flex items-center justify-center px-8 text-center font-display text-4xl font-700 leading-tight text-[#17181c]/15 transition-opacity duration-300 group-hover:text-[#17181c]/25 md:text-5xl">
                  {w.title}
                </span>
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#17181c]">
                  {w.type}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-600">{w.title}</h3>
              <p className="mt-2 max-w-md text-[#45474f]">{w.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
