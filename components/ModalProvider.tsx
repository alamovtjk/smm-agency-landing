"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

type ModalContextValue = {
  openModal: (plan?: string) => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ModalProvider");
  }
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const openModal = useCallback((selectedPlan?: string) => {
    setPlan(selectedPlan);
    setSubmitted(false);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => ({ openModal }), [openModal]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="glass relative w-full max-w-md rounded-3xl p-6 sm:p-8"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Закрыть"
                className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Обсудим ваш проект
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {plan
                      ? `Выбранный тариф: ${plan}. Оставьте контакт — мы свяжемся в течение дня.`
                      : "Оставьте контакт — подберём лучший тариф под вашу задачу."}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/50">
                        Имя
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Как вас зовут?"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/50">
                        Телефон или Telegram
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="+992 ___ ___ ___ или @username"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/50">
                        Комментарий
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Коротко о проекте (необязательно)"
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-lime-500 px-6 py-3.5 text-sm font-bold text-bg transition hover:bg-lime-400 hover:shadow-neon"
                    >
                      Отправить заявку
                      <Send
                        size={16}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center py-8 text-center">
                  <CheckCircle2 size={48} className="text-lime-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Заявка отправлена!
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Мы свяжемся с вами в ближайшее время. Спасибо за интерес к
                    AlTeNo.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-lime-500 hover:text-lime-500"
                  >
                    Закрыть
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
