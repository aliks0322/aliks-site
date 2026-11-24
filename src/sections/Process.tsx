const steps = [
  {
    title: 'Бриф',
    text: 'Задаю вопросы о вашем проекте, готовлю персональное коммерческое предложение со сроками и стоимостью. При необходимости помогаю определиться с функционалом.',
  },
  {
    title: 'Аналитика',
    text: 'Анализирую нишу, рынок и конкурентов, составляю портрет целевой аудитории. Прорабатываю структуру сайта и обсуждаю с вами стилистику проекта.',
  },
  {
    title: 'Прототипирование',
    text: 'Собираем материалы. Создаю текстовый прототип - схему расположения контента без графического оформления. Правим текст, после утверждения - предоплата 50%.',
  },
  {
    title: 'Создание дизайна',
    text: 'На базе утверждённого прототипа разрабатываю дизайн-концепцию и стилистику. Каждый этап обсуждается и согласовывается с вами.',
  },
  {
    title: 'Вёрстка',
    text: 'Переношу утверждённые макеты на Tilda, анимирую и адаптирую под все разрешения экранов.',
  },
  {
    title: 'Технические настройки',
    text: 'Подключаю домен, аналитику, корзину, платёжные системы, формы заявок, корпоративную почту. Настраиваю базовое SEO, добавляю сайт в Яндекс и Google. Провожу тестирование. Вы вносите оставшиеся 50% - и я передаю вам сайт.',
  },
  {
    title: 'Сопровождение',
    text: 'Две недели после запуска я на связи и помогаю с сайтом. По желанию - продолжаю ведение.',
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-[#f3f3ef] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-3xl font-600 tracking-tight md:text-4xl">
            Как проходит разработка
          </h2>
          <p className="mt-4 text-[#45474f]">
            Семь понятных этапов. Вы всегда знаете, на каком этапе проект, что происходит сейчас
            и что будет дальше.
          </p>
        </div>

        <ol className="relative mt-16 space-y-0 border-l-2 border-[#d8d8d2] pl-8 md:pl-12">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#e8447c] ring-4 ring-[#f3f3ef] md:-left-[57px]"
              />
              <p className="text-xs font-bold uppercase tracking-widest text-[#6b6d76]">
                Этап {i + 1} из {steps.length}
              </p>
              <h3 className="mt-2 font-display text-xl font-600">{s.title}</h3>
              <p className="mt-2 max-w-2xl text-[#45474f]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
