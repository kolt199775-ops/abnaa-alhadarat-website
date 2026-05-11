import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDirection, isLocale, Locale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;

  return (
    <div lang={locale} dir={getDirection(locale)} className="min-h-screen">
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  );
}
