export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-[1fr_1.4fr]">
        <div className="reveal">
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="Логотип Aliks"
              className="h-20 w-20 rounded-2xl border border-[#e6e6e1]"
            />
            <div>
              <p className="font-display text-2xl font-600">Любовь Аликсейчук</p>
              <p className="mt-1 text-[#6b6d76]">веб-дизайнер</p>
            </div>
          </div>
          <blockquote className="mt-8 border-l-2 border-[#e8447c] pl-5 font-display text-lg font-500 leading-relaxed text-[#17181c]">
            «Моя цель - создать качественный продукт, который будет приносить пользу вам и вашим
            клиентам».
          </blockquote>
        </div>

        <div className="reveal space-y-5 text-[#45474f]">
          <p>
            Я люблю создавать яркие сайты, которые отражают характер продукта или услуги. В
            дизайне уделяю особое внимание аккуратности, чтобы сайт был удобен и приятен для
            пользователя.
          </p>
          <p>
            Стараюсь каждый проект делать на уровень выше предыдущего, актуализирую знания и
            слежу за новыми тенденциями. Поэтому не делаю сайты «быстрого приготовления» за 3
            дня и 3000 рублей - мне важно не только эстетическое удовлетворение от работы, но и
            результат, которым можно гордиться.
          </p>
          <p>
            В свободное время развиваю дизайнерские навыки: прохожу курсы и читаю профильную
            литературу.
          </p>
        </div>
      </div>
    </section>
  );
}
