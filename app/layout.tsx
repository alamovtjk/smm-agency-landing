import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";
import { basePath } from "@/lib/basePath";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tricid Lab — продвижение бизнеса и блогов под ключ",
  description:
    "СММ-агентство Tricid Lab: стратегия, съёмка, дизайн и автоматизация продаж. Продвигаем бизнес и блоги под ключ.",
  icons: {
    icon: `${basePath}/favicon.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tricid Lab — продвижение бизнеса и блогов под ключ",
    description:
      "СММ-агентство Tricid Lab: стратегия, съёмка, дизайн и автоматизация продаж.",
    url: siteUrl,
    siteName: "Tricid Lab",
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
