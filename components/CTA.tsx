"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { useContactModal } from "./ModalProvider";

export default function CTA() {
  const { openModal } = useContactModal();

  return (
    <section id="contacts" className="px-5 py-20 sm:px-6 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-surface via-surface to-black p-8 text-center sm:p-14"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-glow-lime opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-glow-violet opacity-50 blur-3xl" />

        <h2 className="relative font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
          Напишите нам — подберём лучший тариф
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-sm text-white/60 sm:text-base">
          Расскажите о проекте — предложим стратегию и просчитаем результат
          под ваш бюджет.
        </p>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-lime-500 px-6 py-3.5 text-sm font-bold text-bg transition hover:bg-lime-400 hover:shadow-neon"
          >
            <Send size={18} />
            Написать в Telegram
          </a>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/40"
          >
            <MessageCircle size={18} />
            Оставить заявку
          </button>
        </div>
      </motion.div>
    </section>
  );
}
