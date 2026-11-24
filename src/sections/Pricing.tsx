type Tier = {
  name: string;
  price: string;
  term: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Лендинг',
    price: 'от 15 000 руб.',
    term: 'от 7 дней',
    description:
      'Одностраничный сайт под ключ с продающей структурой и современным дизайном - рассказать о вас, продукте или услуге.',
    features: [
      'Знакомство и составление ТЗ',
      'Анализ ниши и конкурентов',
      'Текстовый прототип',
      'Дизайн-концепция и анимация',
      'Сборка на Tilda, адаптив под мобильные',
      'Домен, платёжные сервисы, базовое SEO',
      '2 недели дизайн-поддержки после запуска',
      'Инструкция по работе с платформой',
    ],
  },
  {
    name: 'Многостраничный сайт',
    price: 'от 20 000 руб.',
    term: 'от 14 дней',
    description:
      'Сайт со сложной структурой из нескольких связанных страниц: навигация, по которой легко находить нужное.',
    features: [
      'Всё из тарифа «Лендинг»',
      'Проработка структуры сайта и текстов',
      'Карта сайта и прототипы страниц',
      'Несколько дизайн-шаблонов страниц',
    ],
    featured: true,
  },
  {
    name: 'Интернет-магазин',
    price: 'от 30 000 руб.',
    term: 'от 14 дней',
    description:
      'Многостраничный сайт (3+ страницы) для продажи товаров: каталог, заявки и платежи - чтобы продавать онлайн проще.',
    features: [
      'Всё из тарифа «Многостраничный сайт»',
      'Каталог товаров, карточки, фильтры и сортировка',
      'Корзина и формы приёма заявок',
      'Подключение платёжных сервисов',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-3xl font-600 tracking-tight md:text-4xl">
            Услуги и стоимость
          </h2>
          <p className="mt-4 text-[#45474f]">
            Фиксирую состав работ и сроки до старта. Точная стоимость - после короткого брифа,
            когда понятна задача.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`reveal flex flex-col rounded-2xl border p-8 ${
                t.featured
                  ? 'border-[#17181c] bg-[#17181c] text-white'
                  : 'border-[#e6e6e1] bg-white'
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-600">{t.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    t.featured ? 'bg-[#e8447c] text-white' : 'bg-[#f3f3ef] text-[#45474f]'
                  }`}
                >
                  {t.term}
                </span>
              </div>

              <p className={`mt-6 font-display text-2xl font-700 ${t.featured ? 'text-white' : 'text-[#17181c]'}`}>
                {t.price}
              </p>

              <p className={`mt-3 text-sm ${t.featured ? 'text-white/70' : 'text-[#6b6d76]'}`}>
                {t.description}
              </p>

              <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 text-sm ${t.featured ? 'border-white/15 text-white/85' : 'border-[#e6e6e1] text-[#45474f]'}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${t.featured ? 'bg-[#e8447c]' : 'bg-[#e8447c]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  t.featured
                    ? 'bg-[#e8447c] text-white hover:bg-[#c92c63]'
                    : 'border border-[#17181c] text-[#17181c] hover:bg-[#17181c] hover:text-white'
                }`}
              >
                Обсудить проект
              </a>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 max-w-2xl text-sm text-[#6b6d76]">
          Если сомневаетесь, какой формат подходит - напишите, помогу определиться. Иногда задачу
          решает простой лендинг, а не магазин.
        </p>
      </div>
    </section>
  );
}
