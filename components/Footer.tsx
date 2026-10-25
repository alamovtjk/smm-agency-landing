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
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-lime-500 hover:text-lime-500"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-lime-500 hover:text-lime-500"
            aria-label="Telegram"
          >
            <Send size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
