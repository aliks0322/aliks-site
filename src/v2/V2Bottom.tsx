import { useState } from 'react';
import { Phone, Send, MessageCircle, Users, Check } from 'lucide-react';

const contacts = [
  { icon: Phone, label: '+7 921 557-53-02', href: 'tel:+79215575302' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/Aliks70' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/79533453660' },
  { icon: Users, label: 'ВКонтакте', href: 'https://vk.com/aliks_dizayner' },
];

export function V2Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '', agree: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (key: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Укажите имя';
    if (!form.contact.trim()) next.contact = 'Укажите телефон, почту или Telegram';
    if (!form.message.trim()) next.message = 'Пара слов о проекте';
    if (!form.agree) next.agree = 'Нужно согласие на обработку персональных данных';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-[#ededed] pb-20 pt-4 md:pb-28">
      <div className="v2-container">
        <div className="reveal v2-panel-fog grid gap-12 p-7 md:grid-cols-2 md:p-14">
          <div>
            <p className="v2-eyebrow text-[#55555c]">
              <span className="v2-dot" />
              Контакт
            </p>
            <h2 className="v2-display mt-5 text-3xl md:text-5xl">
              Начать<br />проект
            </h2>
            <p className="mt-5 max-w-md text-base text-[#55555c]">
              Опишите задачу любым удобным способом - отвечу лично, обычно в течение дня.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="v2-card flex items-center gap-4 px-5 py-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0b] text-white">
                      <c.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white px-8 py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#cf2f2f] text-white">
                  <Check size={28} aria-hidden="true" />
                </span>
                <h3 className="v2-display mt-6 text-xl md:text-2xl">Спасибо, {form.name}!</h3>
                <p className="mt-3 max-w-sm text-sm text-[#55555c]">
                  Заявка сохранена. Я свяжусь с вами по указанному контакту.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', contact: '', message: '', agree: false });
                  }}
                  className="v2-btn-black mt-8 px-6 py-3"
                >
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="rounded-2xl bg-white p-7 md:p-9">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="v2-name" className="mb-2 block text-sm font-semibold text-[#141416]">
                      Имя
                    </label>
                    <input
                      id="v2-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      className="v2-input"
                      placeholder="Как к вам обращаться"
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-[#cf2f2f]">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="v2-contact" className="mb-2 block text-sm font-semibold text-[#141416]">
                      Телефон, почта или Telegram
                    </label>
                    <input
                      id="v2-contact"
                      type="text"
                      value={form.contact}
                      onChange={(e) => set('contact', e.target.value)}
                      aria-invalid={!!errors.contact}
                      className="v2-input"
                      placeholder="Куда ответить"
                    />
                    {errors.contact && <p className="mt-1.5 text-sm text-[#cf2f2f]">{errors.contact}</p>}
                  </div>

                  <div>
                    <label htmlFor="v2-message" className="mb-2 block text-sm font-semibold text-[#141416]">
                      Какой сайт нужен?
                    </label>
                    <textarea
                      id="v2-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      aria-invalid={!!errors.message}
                      className="v2-input resize-y"
                      placeholder="Лендинг, многостраничный сайт, интернет-магазин"
                    />
                    {errors.message && <p className="mt-1.5 text-sm text-[#cf2f2f]">{errors.message}</p>}
                  </div>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-[#55555c]">
                      <input
                        type="checkbox"
                        checked={form.agree}
                        onChange={(e) => set('agree', e.target.checked)}
                        aria-invalid={!!errors.agree}
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#cf2f2f]"
                      />
                      Я соглашаюсь с правилами обработки персональных данных
                    </label>
                    {errors.agree && <p className="mt-1.5 text-sm text-[#cf2f2f]">{errors.agree}</p>}
                  </div>

                  <button type="submit" className="v2-btn-red w-full py-4 text-sm">
                    Отправить заявку
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function V2Footer() {
  return (
    <footer className="bg-[#0a0a0b] py-12 text-white">
      <div className="v2-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-10 w-10 rounded-lg" />
          <div>
            <p className="v2-display text-base">Любовь Аликсейчук</p>
            <p className="mt-1 text-xs text-white/60">дизайн и запуск сайтов на Tilda</p>
          </div>
        </div>
        <p className="text-sm text-white/60">© 2022-2026 Aliks. Версия 2 (по мотивам rband.pro).</p>
        <span aria-hidden="true" className="v2-dot" style={{ width: 14, height: 14 }} />
      </div>
    </footer>
  );
}
