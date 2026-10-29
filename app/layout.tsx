import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://alamovtjk.github.io/smm-agency-landing";

// next.config.js prefixes every route with basePath on GitHub Pages builds,
// but the metadata icons shorthand does not pick that prefix up automatically.
const basePath = process.env.GITHUB_PAGES === "true" ? "/smm-agency-landing" : "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AlTeNo — продвижение бизнеса и блогов под ключ",
  description:
    "СММ-агентство AlTeNo: стратегия, съёмка, дизайн и автоматизация продаж. Продвигаем бизнес и блоги под ключ.",
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AlTeNo — продвижение бизнеса и блогов под ключ",
    description:
      "СММ-агентство AlTeNo: стратегия, съёмка, дизайн и автоматизация продаж.",
    url: siteUrl,
    siteName: "AlTeNo",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="font-sans bg-bg">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
