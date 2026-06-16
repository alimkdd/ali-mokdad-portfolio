import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alimokdadportfolio.vercel.app"),
  title: "Ali Mokdad — Senior Software Engineer",
  description:
    "Senior software engineer in Beirut building digital wallets, payment systems, and high-traffic platforms on .NET. Transactions, queues, and integrations that can't afford to fail.",
  openGraph: {
    title: "Ali Mokdad — Senior Software Engineer",
    description:
      "Senior software engineer building digital wallets and payment systems on .NET — transactions, queues, and integrations that can't afford to fail.",
    url: "https://alimokdadportfolio.vercel.app",
    siteName: "Ali Mokdad",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} bg-bg font-sans text-ink antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
