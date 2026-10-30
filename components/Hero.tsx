"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, Users, Sparkles, Zap } from "lucide-react";
import { useContactModal } from "./ModalProvider";
import { Grain } from "./Grain";

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-14 pt-28 sm:px-6 sm:pt-32 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-glow-lime opacity-25 blur-3xl" />
        <Grain opacity={0.03} />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-lime-500">
            <Sparkles size={14} />
            Продвижение под ключ
          </span>

          <h1 className="mt-5 font-display text-3xl font-black uppercase leading-[1.08] text-white sm:text-4xl lg:text-5xl">
            Продвижение бизнеса{" "}
            <span className="text-gradient">и блогов</span> под ключ
          </h1>

          <p className="mt-4 max-w-lg text-sm text-white/60 sm:text-base">
            От стратегии и съёмки — до узнаваемого бренда и потока клиентов.
            Берём весь SMM на себя: контент, дизайн, продажи и автоматизацию.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => openModal()}
              className="btn-primary group flex items-center gap-2"
            >
              Обсудить проект
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
            <a
              href="#cases"
              className="btn-outline group flex items-center gap-2"
            >
              <PlayCircle size={18} />
              Смотреть кейсы
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="font-display text-xl font-bold text-white">120+</p>
              <p className="text-xs text-white/50">проектов запущено</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-white">3.4x</p>
              <p className="text-xs text-white/50">средний рост охватов</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-white">98%</p>
              <p className="text-xs text-white/50">клиентов продлевают</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto h-[300px] w-full max-w-sm sm:h-[360px]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-transparent to-lime-500/20" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute left-2 top-4 w-36 rounded-xl p-3 shadow-neon-violet sm:left-4"
          >
            <div className="flex items-center gap-1.5 text-violet-400">
              <TrendingUp size={14} />
              <span className="text-[11px] font-semibold">Охваты</span>
            </div>
            <p className="mt-1.5 font-display text-lg font-bold text-white">+248%</p>
            <p className="text-[10px] text-white/40">за последний месяц</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="glass absolute bottom-6 right-0 w-32 rounded-xl p-3 shadow-neon sm:right-2"
          >
            <div className="flex items-center gap-1.5 text-lime-500">
              <Users size={14} />
              <span className="text-[11px] font-semibold">Новые лиды</span>
            </div>
            <p className="mt-1.5 font-display text-lg font-bold text-white">+86</p>
            <p className="text-[10px] text-white/40">за 30 дней</p>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),transparent_70%)] blur-xl sm:h-48 sm:w-48" />
            <div className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-lime-500 shadow-neon-violet">
              <Zap size={22} strokeWidth={1.75} />
            </div>
            <div className="absolute h-52 w-52 rounded-full border border-white/10 sm:h-60 sm:w-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
