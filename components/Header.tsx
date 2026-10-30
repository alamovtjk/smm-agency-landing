"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContactModal } from "./ModalProvider";
import { useLockBodyAndEscape } from "@/lib/useLockBodyAndEscape";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#process", label: "Процесс" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useLockBodyAndEscape(menuOpen, closeMenu);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 sm:mt-4 sm:px-6">
        <a href="#top" className="flex items-center">
          <Logo className="h-6 w-auto sm:h-7" priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => openModal()}
          className="btn-primary hidden lg:block"
        >
          Обсудить проект
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Открыть меню"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-bg/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Logo className="h-6 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-lg p-2 text-white"
                aria-label="Закрыть меню"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 px-6 py-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl font-bold text-white/80 transition hover:text-lime-500"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="btn-primary mt-4 w-full max-w-xs"
              >
                Обсудить проект
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
