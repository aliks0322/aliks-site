import { RussianRuble, Zap, Puzzle, MonitorSmartphone, Wrench } from 'lucide-react';

const points = [
  {
    icon: RussianRuble,
    title: 'Экономия бюджета',
    text: 'Над сайтом работает один специалист: дизайн и вёрстка в одних руках. Не нужно нанимать верстальщика и программиста отдельно.',
  },
  {
    icon: Zap,
    title: 'Скорость запуска',
    text: 'Сборка на Tilda без написания кода ускоряет разработку примерно в два раза - сайт запускается за недели, а не за месяцы.',
  },
  {
    icon: Puzzle,
    title: 'Интеграции и аналитика',
    text: 'Платёжные системы, доставки, рассылки, CRM - подключаются штатно. Встроенная аналитика и сбор заявок помогают управлять бизнесом.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Адаптивность',
    text: 'Сайт корректно работает и отображается на всех устройствах: от большого монитора до телефона.',
  },
  {
    icon: Wrench,
    title: 'Удобство для вас',
    text: 'После запуска вы сможете сами обновлять информацию и добавлять элементы дизайна - я оставлю инструкцию по работе с платформой.',
  },
];

export function WhyTilda() {
  return (
    <section className="bg-[#f3f3ef] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-3xl font-600 tracking-tight md:text-4xl">Почему Tilda?</h2>
          <p className="mt-4 text-[#45474f]">
            Пять причин, по которым я собираю сайты именно на этой платформе - и что из этого
            получаете вы.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-[#e0e0da] border-y border-[#e0e0da]">
          {points.map((p) => (
            <li key={p.title} className="reveal flex gap-6 py-7 md:gap-10">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#e8447c] shadow-sm">
                <p.icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-600">{p.title}</h3>
                <p className="mt-2 max-w-2xl text-[#45474f]">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
