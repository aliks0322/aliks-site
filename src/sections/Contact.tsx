import { useState } from 'react';
import { Phone, Send, MessageCircle, Users } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    label: '+7 921 557-53-02',
    href: 'tel:+79215575302',
    note: 'если нужен сайт срочно - звоните',
  },
  {
    icon: Send,
    label: 'Telegram',
    href: 'https://t.me/Aliks70',
    note: '@Aliks70',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/79533453660?text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B9%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B5',
    note: 'проконсультироваться по услуге',
  },
  {
    icon: Users,
    label: 'ВКонтакте',
    href: 'https://vk.com/aliks_dizayner',
    note: 'aliks_dizayner',
  },
];

type FormState = {
  name: string;
  contact: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', contact: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [key]: e.target.value });
    setErrors({ ...errors, [key]: undefined });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Напишите, как к вам обращаться';
    if (!form.contact.trim()) next.contact = 'Укажите телефон, почту или ник в Telegram';
    if (!form.message.trim()) next.message = 'Пара слов о проекте - какой сайт нужен?';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-[#17181c] py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
        <div className="reveal">
          <h2 className="font-display text-3xl font-600 tracking-tight md:text-4xl">
            Давайте создавать сайт вместе
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Выберите удобный способ связи и кратко опишите проект. Отвечаю лично, обычно в
            течение дня.
          </p>

          <ul className="mt-10 space-y-4">
            {contacts.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:border-[#e8447c]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#e8447c]">
                    <c.icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold">{c.label}</span>
                    <span className="block text-sm text-white/60">{c.note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8447c]">
                <Send size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-600">Спасибо, {form.name}!</h3>
              <p className="mt-3 max-w-sm text-white/70">
                Сообщение сохранено. Я свяжусь с вами по указанному контакту и отвечу на все
                вопросы по проекту.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: '', contact: '', message: '' });
                }}
                className="mt-8 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Написать ещё одно сообщение
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9">
              <h3 className="font-display text-xl font-600">Расскажите о вашем проекте</h3>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="cf-name" className="mb-2 block text-sm font-medium text-white/80">
                    Ваше имя
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-[#e8447c]"
                    placeholder="Как к вам обращаться"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-[#ff8fb4]">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="cf-contact" className="mb-2 block text-sm font-medium text-white/80">
                    Телефон, почта или Telegram
                  </label>
                  <input
                    id="cf-contact"
                    type="text"
                    value={form.contact}
                    onChange={update('contact')}
                    aria-invalid={!!errors.contact}
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-[#e8447c]"
                    placeholder="Куда ответить"
                  />
                  {errors.contact && <p className="mt-1.5 text-sm text-[#ff8fb4]">{errors.contact}</p>}
                </div>

                <div>
                  <label htmlFor="cf-message" className="mb-2 block text-sm font-medium text-white/80">
                    Какой сайт вам нужен?
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    aria-invalid={!!errors.message}
                    className="w-full resize-y rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-[#e8447c]"
                    placeholder="Лендинг, многостраничный сайт, интернет-магазин - и пара слов о бизнесе"
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-[#ff8fb4]">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#e8447c] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#c92c63]"
                >
                  Отправить сообщение
                </button>

                <p className="text-xs leading-relaxed text-white/50">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
