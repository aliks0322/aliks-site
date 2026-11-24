import { Palette, Search, Rocket, LifeBuoy } from 'lucide-react';

const services = [
  {
    name: 'Лендинг',
    price: 'от 15 000 руб.',
    term: 'от 7 дней',
    description:
      'Одностраничный сайт под ключ с продающей структурой: для запуска услуги, товара или рекламного трафика.',
  },
  {
    name: 'Многостраничный сайт',
    price: 'от 20 000 руб.',
    term: 'от 14 дней',
    description:
      'Сайт со структурой из нескольких связанных страниц: навигация, по которой легко находить нужное.',
  },
  {
    name: 'Интернет-магазин',
    price: 'от 30 000 руб.',
    term: 'от 14 дней',
    description:
      'Каталог, карточки товаров, корзина и онлайн-оплата - чтобы продавать онлайн было проще.',
  },
];

export function V2Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="v2-container">
        <div className="reveal">
          <p className="v2-eyebrow text-[#55555c]">
            <span className="v2-dot" />
            Услуги
          </p>
          <h2 className="v2-display mt-5 text-3xl md:text-5xl">Я разрабатываю</h2>
          <p className="mt-5 max-w-xl text-base text-[#55555c]">
            Три формата под разные задачи. Если сомневаетесь, какой подходит - помогу определиться
            на брифе.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.name} className="reveal v2-card flex flex-col p-7 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="v2-display text-sm text-[#cf2f2f]">0{i + 1}</span>
                <span className="rounded-full border border-[#dcdce0] px-3 py-1 text-xs font-semibold text-[#55555c]">
                  {s.term}
                </span>
              </div>
              <h3 className="v2-display mt-6 text-xl md:text-2xl">{s.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#55555c]">{s.description}</p>
              <p className="v2-display mt-6 text-lg">{s.price}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="#contact" className="v2-btn-black px-6 py-3">
                  Заказать проект
                </a>
                <a href="#steps" className="v2-link-more">
                  Подробнее
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Palette,
    title: 'Современный дизайн',
    bullets: ['Аккуратная типографика и цельный стиль', 'Адаптив под все устройства'],
  },
  {
    icon: Search,
    title: 'Анализ ниши и аудитории',
    bullets: ['Изучаю конкурентов и предпочтения ЦА', 'Структура под целевые действия'],
  },
  {
    icon: Rocket,
    title: 'Запуск под ключ',
    bullets: ['Домен, аналитика, платёжные сервисы, SEO', 'Тестирование перед передачей'],
  },
  {
    icon: LifeBuoy,
    title: 'Поддержка после старта',
    bullets: ['2 недели дизайн-поддержки включены', 'Инструкция для самостоятельного редактирования'],
  },
];

export function V2Features() {
  return (
    <section className="relative overflow-hidden bg-[#ededed] py-20 md:py-28">
      {/* гигантское контурное слово, как у донора */}
      <div aria-hidden="true" className="v2-outline-word absolute -top-4 left-0 text-[22vw] md:text-[16vw]">
        дизайн
      </div>

      <div className="v2-container relative">
        <div className="reveal max-w-2xl">
          <p className="v2-eyebrow text-[#55555c]">
            <span className="v2-dot" />
            Подход
          </p>
          <h2 className="v2-display mt-5 text-3xl md:text-5xl">Как я работаю</h2>
          <p className="mt-5 text-base text-[#55555c]">
            Четыре опоры каждого проекта - от первого созвона до момента, когда сайт начинает
            приводить заявки.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="reveal v2-card flex gap-6 p-7 md:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0a0a0b] text-white">
                <f.icon size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h3 className="v2-display text-base md:text-lg">{f.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-[#55555c]">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="v2-dot mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const works = [
  { title: 'Кроссовки', slogan: 'Интернет-магазин под ключ: дизайн, вёрстка, запуск.', tag: 'Интернет-магазин' },
  { title: 'Цветы с доставкой', slogan: 'Сервис доставки цветов с каталогом.', tag: 'Многостраничный сайт' },
  { title: 'Каркасные дома', slogan: 'Концепт для строительной компании.', tag: 'Лендинг' },
  { title: 'Подставки для цветов', slogan: 'Сайт мастерской кованых изделий.', tag: 'Лендинг' },
  { title: 'Йога-центр', slogan: 'Концепт дизайна для студии йоги.', tag: 'Лендинг' },
  { title: 'О Египте', slogan: 'Лонгрид о достопримечательностях.', tag: 'Лонгрид' },
];

export function V2Works() {
  return (
    <section id="works" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="v2-container">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="v2-eyebrow text-[#55555c]">
              <span className="v2-dot" />
              Портфолио
            </p>
            <h2 className="v2-display mt-5 text-3xl md:text-5xl">Проекты</h2>
          </div>
          <a href="#contact" className="v2-link-more">
            Хочу так же
          </a>
        </div>

        <ul className="mt-12 divide-y divide-[#dcdce0] border-y border-[#dcdce0]">
          {works.map((w) => (
            <li key={w.title} className="reveal group">
              <a href="#contact" className="grid gap-3 py-7 transition-colors md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:py-9">
                <div>
                  <h3 className="v2-display text-lg transition-colors group-hover:text-[#cf2f2f] md:text-3xl">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#55555c] md:text-base">{w.slogan}</p>
                </div>
                <span className="justify-self-start rounded-full bg-[#ededed] px-4 py-1.5 text-xs font-semibold text-[#55555c] md:justify-self-end">
                  {w.tag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  { title: 'Бриф', text: 'Вопросы о проекте, персональное КП со сроками и стоимостью.' },
  { title: 'Аналитика', text: 'Ниша, конкуренты, портрет аудитории, структура сайта.' },
  { title: 'Прототип', text: 'Текстовая схема страниц. После утверждения - предоплата 50%.' },
  { title: 'Дизайн', text: 'Дизайн-концепция и стилистика, каждый этап согласуем.' },
  { title: 'Вёрстка', text: 'Сборка на Tilda, анимация, адаптив под все экраны.' },
  { title: 'Настройки', text: 'Домен, аналитика, платежи, SEO, тестирование. Финальный расчёт 50%.' },
  { title: 'Сопровождение', text: '2 недели поддержки после запуска, обучение работе с сайтом.' },
];

export function V2Steps() {
  return (
    <section id="steps" className="scroll-mt-24 bg-[#ededed] py-20 md:py-28">
      <div className="v2-container">
        <div className="reveal max-w-2xl">
          <p className="v2-eyebrow text-[#55555c]">
            <span className="v2-dot" />
            Процесс
          </p>
          <h2 className="v2-display mt-5 text-3xl md:text-5xl">Этапы реализации</h2>
          <p className="mt-5 text-base text-[#55555c]">
            Семь шагов от брифа до запуска. Вы всегда знаете, что происходит сейчас и что дальше.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal v2-card p-5">
              <span className="v2-display text-2xl text-[#cf2f2f]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="v2-display mt-4 text-sm md:text-base">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#55555c]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const principles = [
  {
    title: 'Ваш проект = мой проект',
    text: 'Я заинтересована в результате не меньше вас: сайт, которым вы гордитесь, - лучшая рекомендация для меня.',
  },
  {
    title: 'Честные сроки и бюджет',
    text: 'Фиксирую состав работ до старта. Никаких «доплат по факту», которых не было в договорённостях.',
  },
  {
    title: 'Без «сайтов за 3 дня»',
    text: 'Не делаю сайты быстрого приготовления за копейки. Делаю так, чтобы результатом можно было гордиться.',
  },
];

export function V2Principles() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden="true" className="v2-outline-word absolute bottom-0 right-0 text-[20vw] md:text-[13vw]">
        tilda
      </div>

      <div className="v2-container relative">
        <div className="reveal">
          <p className="v2-eyebrow text-[#55555c]">
            <span className="v2-dot" />
            Ценности
          </p>
          <h2 className="v2-display mt-5 text-3xl md:text-5xl">Принципы</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <article key={p.title} className="reveal v2-card p-7">
              <span className="v2-display text-sm text-[#cf2f2f]">0{i + 1}</span>
              <h3 className="v2-display mt-4 text-base md:text-lg">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#55555c]">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
