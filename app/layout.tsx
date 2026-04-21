import type { Metadata, Viewport } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const SITE_URL = "https://gmt-solar.com";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GMT Smart Energy | ติดตั้งโซลาร์เซลล์ครบวงจร บ้าน โรงงาน ธุรกิจ",
    template: "%s | GMT Smart Energy",
  },
  description:
    "GMT Smart Energy ผู้ให้บริการออกแบบ ติดตั้ง และดูแลระบบโซลาร์เซลล์ Hybrid ครบวงจร สำหรับบ้าน โรงงาน และธุรกิจ ด้วยทีมวิศวกรมืออาชีพ รับประกันแผง 30 ปี ล้างแผงฟรี 5 ครั้ง",
  applicationName: "GMT Smart Energy",
  authors: [{ name: "GMT Smart Energy", url: SITE_URL }],
  creator: "GMT Smart Energy",
  publisher: "GMT Smart Energy",
  keywords: [
    "โซลาร์เซลล์",
    "Solar Cell",
    "Solar Rooftop",
    "ติดตั้งโซลาร์เซลล์",
    "ราคาโซลาร์เซลล์",
    "แพ็กเกจโซลาร์เซลล์",
    "Hybrid Solar",
    "Deye Inverter",
    "พลังงานแสงอาทิตย์",
    "Smart Energy",
    "GMT Smart Energy",
    "ลดค่าไฟ",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: "GMT Smart Energy",
    title: "GMT Smart Energy | ติดตั้งโซลาร์เซลล์ครบวงจร",
    description:
      "ผู้ให้บริการติดตั้งโซลาร์เซลล์ Hybrid ครบวงจร พร้อม Deye Inverter + Battery รับประกันยาว ลดค่าไฟได้จริง",
    images: [
      {
        url: "/about-us.webp",
        width: 1200,
        height: 900,
        alt: "GMT Smart Energy ผู้ให้บริการติดตั้งโซลาร์เซลล์ครบวงจร",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMT Smart Energy | ติดตั้งโซลาร์เซลล์ครบวงจร",
    description:
      "ติดตั้งโซลาร์เซลล์ Hybrid ครบวงจร บ้าน โรงงาน ธุรกิจ รับประกันยาว ลดค่าไฟจริง",
    images: ["/about-us.webp"],
  },
  category: "energy",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <JsonLd />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
