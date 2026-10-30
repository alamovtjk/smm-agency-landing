"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Grip,
  PlayCircle,
  TrendingUp,
  Crown,
  CreditCard,
} from "lucide-react";
import { useContactModal } from "./ModalProvider";

type Variant = "dark" | "lime" | "cream";

const plans: {
  number: string;
  name: string;
  price: string;
  tagline: string;
  variant: Variant;
  badge?: string;
  icon: typeof PlayCircle;
  features: string[];
  result: string;
}[] = [
  {
    number: "02",
    name: "Старт",
    price: "4 000",
    tagline: "Для уверенного запуска",
    variant: "dark",
    icon: PlayCircle,
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
    number: "03",
    name: "Рост",
    price: "6 000",
    tagline: "Для регулярного роста",
    variant: "lime",
    badge: "ПОПУЛЯРНЫЙ",
    icon: TrendingUp,
    features: [
      "Всё из тарифа «Старт»",
      "Глубокий анализ рынка и 10 конкурентов",
      "2 съёмочных дня (до 12 коротких видео)",
      "Модель в кадре",
      "Обложки, тексты и хештеги",
      "Публикация контента и ежемесячная аналитика",
    ],
    result: "Системный контент и рост узнаваемости.",
  },
  {
    number: "04",
    name: "Лидер",
    price: "10 000",
    tagline: "Для активного масштабирования",
    variant: "cream",
    icon: Crown,
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

const variantStyles: Record<
  Variant,
  {
    card: string;
    muted: string;
    price: string;
    check: string;
    iconRing: string;
    arrowBtn: string;
    resultBox: string;
    button: string;
  }
> = {
  dark: {
    card: "bg-surface border border-white/10 text-white",
    muted: "text-white/50",
    price: "text-lime-500",
    check: "text-magenta-500",
    iconRing: "from-violet-500 via-magenta-500 to-lime-500",
    arrowBtn: "border-white/15 text-white/70",
    resultBox: "bg-black/50 border border-white/10 text-white/70",
    button: "btn-primary",
  },
  lime: {
    card: "bg-lime-500 text-bg",
    muted: "text-bg/60",
    price: "text-bg",
    check: "text-bg",
    iconRing: "from-violet-500 via-magenta-500 to-electric-500",
    arrowBtn: "border-bg/20 text-bg/70",
    resultBox: "bg-bg/90 text-white/80",
    button: "rounded-xl px-6 py-3.5 text-sm font-bold transition bg-bg text-lime-400 hover:bg-black",
  },
  cream: {
    card: "bg-cream text-bg",
    muted: "text-bg/55",
    price: "text-magenta-600",
    check: "text-magenta-600",
    iconRing: "from-violet-500 via-magenta-400 to-amber-300",
    arrowBtn: "border-bg/15 text-bg/70",
    resultBox: "bg-bg/90 text-white/80",
    button:
      "rounded-xl px-6 py-3.5 text-sm font-bold transition bg-magenta-500 text-white hover:bg-magenta-600 hover:shadow-neon-magenta",
  },
};

export default function Pricing() {
  const { openModal } = useContactModal();

  return (
    <section id="pricing" className="relative px-5 py-14 sm:px-6 lg:py-20">
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
          <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            Продвижение блога под ключ
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const s = variantStyles[plan.variant];
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl p-5 sm:p-6 ${s.card} ${
                  plan.variant === "lime" ? "shadow-neon lg:-translate-y-3" : ""
                }`}
              >
                {plan.variant === "cream" && (
                  <>
                    <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/60 blur-3xl" />
                    <div className="pointer-events-none absolute right-8 top-12 h-20 w-32 rotate-12 rounded-full border border-magenta-400/40" />
                  </>
                )}

                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br ${s.iconRing} opacity-90 blur-[2px]`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-black/20" />
                </div>
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-5 top-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                />

                <div className="relative flex items-center justify-between">
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${s.muted}`}>
                    <Grip size={14} />
                    {plan.number}
                  </div>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${s.arrowBtn}`}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {plan.badge && (
                  <span className="relative mt-4 inline-block w-fit rounded-full bg-magenta-500 px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                    {plan.badge}
                  </span>
                )}

                <h3 className={`relative font-display text-xl font-black uppercase ${plan.badge ? "mt-2.5" : "mt-5"}`}>
                  {plan.name}
                </h3>

                <div className="relative mt-2 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-black sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className={`text-sm ${s.muted}`}>сомони / месяц</span>
                </div>
                <p className={`relative mt-1 text-sm font-medium ${s.muted}`}>
                  {plan.tagline}
                </p>

                <ul className="relative mt-5 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm">
                      <Check size={18} className={`mt-0.5 shrink-0 ${s.check}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className={`relative mt-5 rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${s.resultBox}`}>
                  <span className="font-semibold text-white">Результат: </span>
                  {plan.result}
                </p>

                <button
                  onClick={() => openModal(plan.name)}
                  className={`relative mt-5 flex items-center justify-center gap-2 !px-5 !py-3 ${s.button}`}
                >
                  Выбрать тариф
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white/70">
            <CreditCard size={14} className="text-lime-500" />
            Старт работы — после предоплаты
          </span>
        </div>
      </div>
    </section>
  );
}
