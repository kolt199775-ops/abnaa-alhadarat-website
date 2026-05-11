import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeSections } from "@/components/ContentBlocks";
import { Hero } from "@/components/Hero";
import { isLocale, Locale, locales } from "@/lib/i18n";
import { pages } from "@/data/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = pages[locale];

  return {
    title: `${copy.company} | ${copy.business}`,
    description: copy.intro,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar"
      }
    },
    openGraph: {
      title: `${copy.company} | ${copy.companyAr}`,
      description: copy.intro,
      images: ["/abnaa-alhadarat-logo.jpeg"],
      locale: locale === "ar" ? "ar_IQ" : "en_US"
    }
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;

  return (
    <>
      <Hero locale={locale} />
      <HomeSections locale={locale} />
    </>
  );
}
