import { useEffect, useState } from 'react';

const links = [
  { href: '#works', label: 'Работы' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#process', label: 'Процесс' },
  { href: '#about', label: 'Обо мне' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fbfbf9]/90 backdrop-blur border-b border-[#e6e6e1]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Aliks - на главную">
          <img src="/logo.png" alt="" className="h-9 w-9" />
          <span className="font-display text-lg font-600 tracking-tight">aliks</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#45474f] transition-colors hover:text-[#17181c]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[#17181c] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e8447c] md:inline-block"
          >
            Обсудить проект
          </a>
          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-[#17181c] transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#17181c] transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#e6e6e1] bg-[#fbfbf9] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[#17181c] hover:bg-[#f0f0ec]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-[#17181c] px-5 py-3 text-center text-base font-semibold text-white"
              >
                Обсудить проект
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
