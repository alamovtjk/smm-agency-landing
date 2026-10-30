"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { useContactModal } from "./ModalProvider";

export default function CTA() {
  const { openModal } = useContactModal();

  return (
    <section id="contacts" className="px-5 py-14 sm:px-6 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface via-surface to-black p-6 text-center sm:p-10"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-glow-lime opacity-40 blur-3xl" />

        <h2 className="relative font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
          Напишите нам — подберём лучший тариф
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm text-white/60">
          Расскажите о проекте — предложим стратегию и просчитаем результат
          под ваш бюджет.
        </p>

        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* TODO: заменить на <a href="..."> с реальной ссылкой, когда появится Telegram-аккаунт */}
          <span
            title="Скоро здесь появится ссылка на Telegram"
            className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-lime-500/40 px-5 py-3 text-sm font-bold text-bg/70"
          >
            <Send size={18} />
            Telegram скоро
          </span>
          <button
            onClick={() => openModal()}
            className="btn-outline flex items-center gap-2 !px-5 !py-3"
          >
            <MessageCircle size={18} />
            Оставить заявку
          </button>
        </div>
      </motion.div>
    </section>
  );
}
