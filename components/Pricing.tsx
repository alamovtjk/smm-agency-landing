"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useContactModal } from "./ModalProvider";

const plans = [
  {
    name: "Старт",
    price: "4 000",
    tagline: "Для уверенного запуска",
    featured: false,
    features: [
      "Аудит и упаковка профиля",
      "Анализ ниши и 5 конкурентов",
      "Позиционирование и целевая аудитория",
      "Контент-план на месяц",
      "1 съёмочный день (до 8 коротких видео)",
      "Сценарии, монтаж и субтитры",
    ],
    result: "Оформленный блог и первый месяц контента.",
  },
  {
    name: "Рост",
    price: "6 000",
    tagline: "Популярный выбор",
    featured: true,
    features: [
      "Всё из тарифа «Старт»",
      "Глубокий анализ рынка и 10 конкурентов",
      "2 съёмочных дня (до 12 коротких видео)",
      "Модель в кадре",
      "Обложки, тексты и хештеги",
      "Публикация контента, ежемесячная аналитика",
    ],
    result: "Системный контент и рост узнаваемости.",
  },
  {
    name: "Лидер",
    price: "10 000",
    tagline: "Для активного масштабирования",
    featured: false,
    features: [
      "Всё из тарифа «Рост»",
      "Полная стратегия продвижения",
      "4 съёмочных дня (до 20 коротких видео)",
      "Команда и модель в кадре",
      "Фирменный стиль контента",
      "Чат-бот, CRM и автоворонка",
      "Автопубликация и сбор заявок",
    ],
    result: "Медиа-система, которая привлекает клиентов.",
  },
];

export default function Pricing() {
  const { openModal } = useContactModal();

  return (
    <section id="pricing" className="relative px-5 py-20 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-glow-violet opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
            Тарифы
          </span>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
            Продвижение блога под ключ
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-7 ${
                plan.featured
                  ? "border-2 border-lime-500 bg-surface shadow-neon lg:-translate-y-4"
                  : "border border-white/10 bg-surface"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-500 px-4 py-1 text-xs font-bold text-bg">
                  Популярный
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">{plan.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-black text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-white/50">сомони / мес</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-white/70">
                    <Check
                      size={18}
                      className={
                        plan.featured ? "mt-0.5 shrink-0 text-lime-500" : "mt-0.5 shrink-0 text-violet-500"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-xl bg-white/5 px-4 py-3 text-xs leading-relaxed text-white/50">
                <span className="font-semibold text-white/70">Результат: </span>
                {plan.result}
              </p>

              <button
                onClick={() => openModal(plan.name)}
                className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                  plan.featured
                    ? "bg-lime-500 text-bg hover:bg-lime-400 hover:shadow-neon"
                    : "border border-white/15 text-white hover:border-lime-500 hover:text-lime-500"
                }`}
              >
                Выбрать тариф
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Старт работы — после предоплаты.
        </p>
      </div>
    </section>
  );
}
