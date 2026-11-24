const items = [
  'лендинги',
  'интернет-магазины',
  'многостраничные сайты',
  'дизайн-концепции',
  'вёрстка на Tilda',
  'запуск и настройки',
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[#e6e6e1] bg-[#17181c] py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-white/80">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8447c]" />
          </span>
        ))}
      </div>
    </div>
  );
}
