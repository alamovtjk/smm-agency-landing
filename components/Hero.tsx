"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, Users, Sparkles } from "lucide-react";
import { useContactModal } from "./ModalProvider";
import { Grain } from "./Grain";
import { Sparks } from "./Sparks";

const heroSparks = [
  { top: "8%", left: "6%", size: 16, delay: 0 },
  { top: "18%", left: "46%", size: 12, delay: 0.4, className: "text-lime-400/70" },
  { top: "4%", left: "88%", size: 14, delay: 0.8, className: "text-magenta-400/70" },
  { top: "32%", left: "2%", size: 10, delay: 1.2 },
  { top: "60%", left: "94%", size: 12, delay: 0.6, className: "text-violet-400/70" },
];

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-6 sm:pt-44 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-glow-lime opacity-40 blur-3xl mix-blend-screen" />
        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-glow-violet opacity-40 blur-3xl mix-blend-screen" />
        <div className="absolute right-10 top-40 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,46,196,0.3),transparent_65%)] blur-2xl mix-blend-screen" />
        <Grain opacity={0.08} />
      </div>
      <Sparks items={heroSparks} />

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
              className="group flex items-center gap-2 rounded-xl bg-lime-500 px-6 py-3.5 text-sm font-bold text-bg transition hover:bg-lime-400 hover:shadow-neon"
            >
              Обсудить проект
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
            <a
              href="#cases"
              className="group flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/40"
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
            <div className="relative h-60 w-60 sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,theme(colors.violet.500),theme(colors.magenta.500),theme(colors.lime.500),theme(colors.violet.500))] opacity-70 blur-xl" />
              <div className="absolute inset-[18%] rounded-full bg-bg" />
              <div className="absolute inset-[26%] rounded-full bg-[conic-gradient(from_280deg,theme(colors.magenta.400),theme(colors.violet.500),theme(colors.electric.500),theme(colors.magenta.400))] opacity-80 mix-blend-screen blur-sm" />
            </div>
            <div className="absolute h-56 w-56 rounded-full border border-lime-500/30 sm:h-64 sm:w-64" />
            <div className="absolute h-72 w-72 animate-pulse-slow rounded-full border border-violet-500/20 sm:h-80 sm:w-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
