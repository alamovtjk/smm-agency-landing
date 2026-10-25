"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Знакомство", desc: "Обсуждаем цели, нишу и бюджет на коротком звонке." },
  { step: "02", title: "Стратегия", desc: "Готовим анализ, позиционирование и контент-план." },
  { step: "03", title: "Продакшн", desc: "Снимаем, монтируем и оформляем визуал бренда." },
  { step: "04", title: "Рост", desc: "Публикуем, анализируем и масштабируем результат." },
];

export default function Process() {
  return (
    <section id="process" className="px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
            Как мы работаем
          </span>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
            Прозрачный процесс от звонка до результата
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-6"
            >
              <span className="font-display text-sm font-black text-lime-500">
                {item.step}
              </span>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-lime-500/60 to-transparent" />
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
