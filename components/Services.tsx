"use client";

import { motion } from "framer-motion";
import { Target, Clapperboard, Palette, Bot } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Target,
    title: "СММ-стратегия и анализ",
    description:
      "Аудит, анализ конкурентов, позиционирование и целевая аудитория — фундамент перед запуском.",
  },
  {
    number: "02",
    icon: Clapperboard,
    title: "Контент-продакшн",
    description:
      "Профессиональная съёмка, монтаж reels и клипов, сценарии, которые удерживают внимание.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Дизайн и айдентика",
    description:
      "Оформление профиля, сторис, обложки и визуальный стиль, который запоминается.",
  },
  {
    number: "04",
    icon: Bot,
    title: "Автоматизация и продажи",
    description:
      "Чат-боты, CRM и воронки лидогенерации — превращаем подписчиков в клиентов.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
            Что мы делаем
          </span>
          <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            Создаём контент, который невозможно пролистать
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-lime-500/40"
              >
                <div className="absolute -right-3 -top-3 font-display text-5xl font-black text-white/[0.04] transition group-hover:text-lime-500/10">
                  {service.number}
                </div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-lime-500 transition group-hover:bg-lime-500 group-hover:text-bg">
                  <Icon size={18} />
                </div>
                <h3 className="relative mt-4 font-display text-base font-bold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
