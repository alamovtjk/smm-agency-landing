import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";

export const metadata: Metadata = {
  title: "AlTeNo — продвижение бизнеса и блогов под ключ",
  description:
    "СММ-агентство AlTeNo: стратегия, съёмка, дизайн и автоматизация продаж. Продвигаем бизнес и блоги под ключ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@600;700;800;900&display=swap"
        />
      </head>
      <body className="font-sans bg-bg">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
