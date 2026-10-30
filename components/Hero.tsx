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
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-6 sm:pt-44 lg:pb-32"
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

          <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Продвижение бизнеса{" "}
            <span className="text-gradient">и блогов</span> под ключ
          </h1>

          <p className="mt-6 max-w-lg text-base text-white/60 sm:text-lg">
            От стратегии и съёмки — до узнаваемого бренда и потока клиентов.
            Берём весь SMM на себя: контент, дизайн, продажи и автоматизацию.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="font-display text-2xl font-bold text-white">120+</p>
              <p className="text-xs text-white/50">проектов запущено</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">3.4x</p>
              <p className="text-xs text-white/50">средний рост охватов</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">98%</p>
              <p className="text-xs text-white/50">клиентов продлевают</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto h-[380px] w-full max-w-md sm:h-[460px]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-transparent to-lime-500/20" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute left-4 top-8 w-48 rounded-2xl p-4 shadow-neon-violet sm:left-8"
          >
            <div className="flex items-center gap-2 text-violet-400">
              <TrendingUp size={16} />
              <span className="text-xs font-semibold">Охваты</span>
            </div>
            <p className="mt-2 font-display text-xl font-bold text-white">+248%</p>
            <p className="text-[11px] text-white/40">за последний месяц</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="glass absolute bottom-10 right-2 w-44 rounded-2xl p-4 shadow-neon sm:right-6"
          >
            <div className="flex items-center gap-2 text-lime-500">
              <Users size={16} />
              <span className="text-xs font-semibold">Новые лиды</span>
            </div>
            <p className="mt-2 font-display text-xl font-bold text-white">+86</p>
            <p className="text-[11px] text-white/40">за 30 дней</p>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),transparent_70%)] blur-xl sm:h-64 sm:w-64" />
            <div className="absolute flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-lime-500 shadow-neon-violet">
              <Zap size={28} strokeWidth={1.75} />
            </div>
            <div className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-80 sm:w-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
