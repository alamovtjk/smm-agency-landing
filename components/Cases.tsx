"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    niche: "Beauty-бренд",
    title: "Рост охватов с нуля до 2.1M за 3 месяца",
    metric: "+340%",
    metricLabel: "охваты",
  },
  {
    niche: "Ресторан",
    title: "Поток заявок через reels и автоворонку в Telegram",
    metric: "+91",
    metricLabel: "заявок/мес",
  },
  {
    niche: "Личный бренд",
    title: "Из микроблога в узнаваемого эксперта ниши",
    metric: "+18K",
    metricLabel: "подписчиков",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
              Кейсы
            </span>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Результаты, а не обещания
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-black p-7"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {item.niche}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-white">
                {item.title}
              </h3>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-3xl font-black text-lime-500">
                    {item.metric}
                  </p>
                  <p className="text-xs text-white/40">{item.metricLabel}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition group-hover:border-lime-500 group-hover:text-lime-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
