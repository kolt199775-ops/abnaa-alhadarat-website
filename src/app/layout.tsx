import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abnaa-alhadarat.com"),
  title: {
    default: "Abnaa Alhadarat | General Contracting and Trading",
    template: "%s | Abnaa Alhadarat"
  },
  description:
    "Abnaa Alhadarat is a bilingual Iraqi company website for industrial cities, logistics, hospitality, IT solutions, trading, contracting, and infrastructure.",
  icons: {
    icon: "/abnaa-alhadarat-logo.jpeg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
