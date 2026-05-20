import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ── Fonts ─────────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Arjun Chaudhary — Young Leader, Entrepreneur, Community Voice",
  description:
    "Official website of Arjun Chaudhary — Political leader, entrepreneur, and community voice from Uttarakhand/Bijnor. Building Bharat's future through leadership, enterprise, and service.",
  keywords: [
    "Arjun Chaudhary",
    "Yuva Neta",
    "Young Leader",
    "Uttarakhand",
    "Bijnor",
    "Political Leader",
    "Entrepreneur",
    "Kisan Congress",
    "Jat Mahasabha",
  ],
  authors: [{ name: "Arjun Chaudhary" }],
  openGraph: {
    title: "Arjun Chaudhary — Young Leader, Entrepreneur, Community Voice",
    description:
      "Official website of Arjun Chaudhary — Political leader, entrepreneur, and community voice from Uttarakhand/Bijnor.",
    type: "website",
    locale: "en_IN",
    siteName: "Arjun Chaudhary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Chaudhary — Young Leader, Entrepreneur, Community Voice",
    description:
      "Political leader, entrepreneur, and community voice from Uttarakhand/Bijnor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
