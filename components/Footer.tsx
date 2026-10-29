import { Zap, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime-500 text-bg">
            <Zap size={16} strokeWidth={2.5} />
          </span>
          <span className="font-display text-base font-bold text-white">
            Al<span className="text-lime-500">Te</span>No
          </span>
        </a>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} AlTeNo. Все права защищены.
        </p>

        <div className="flex gap-3">
          {/* TODO: заменить на <a href="..."> с реальными ссылками, когда появятся аккаунты в соцсетях */}
          <span
            title="Скоро здесь появится ссылка на Instagram"
            aria-label="Instagram (скоро)"
            className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-white/15 text-white/30"
          >
            <Instagram size={16} />
          </span>
          <span
            title="Скоро здесь появится ссылка на Telegram"
            aria-label="Telegram (скоро)"
            className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-white/15 text-white/30"
          >
            <Send size={16} />
          </span>
        </div>
      </div>
    </footer>
  );
}
