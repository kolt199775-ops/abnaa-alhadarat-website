"use client";

import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { pages, featureStats } from "@/data/site";
import { Locale } from "@/lib/i18n";
import { HeroScene } from "@/components/HeroScene";

export function Hero({ locale }: { locale: Locale }) {
  const copy = pages[locale];
  const isAr = locale === "ar";

  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="blueprint-grid absolute inset-0 -z-20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(circle_at_50%_10%,rgba(24,216,210,0.24),transparent_42rem)]" />
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
          <div className="mb-5 inline-flex rounded-[8px] border border-cyanbrand/30 bg-white/70 px-4 py-2 text-sm font-semibold text-deepbrand shadow-glow backdrop-blur">{copy.business}</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-navybrand md:text-7xl">
            <span className="metallic-text block">{copy.company}</span>
            <span className="mt-3 block font-arabic text-4xl text-deepbrand md:text-6xl">{copy.companyAr}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{copy.tagline}</p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-500">{copy.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${locale}/sectors`} className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-deepbrand via-cyanbrand to-lagoon px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              {copy.ctaExplore}<ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
            </Link>
            <Link href={`/${locale}/contact-us`} className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-cyanbrand/35 bg-white/80 px-6 py-3 font-semibold text-deepbrand transition hover:-translate-y-0.5 hover:bg-white">
              <Send size={18} />{copy.ctaContact}
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {featureStats.map((item) => (
              <div key={item.value} className="glass rounded-[8px] p-4">
                <div className="text-2xl font-bold text-deepbrand">{item.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{locale === "ar" ? item.ar : item.en}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative h-[450px] min-h-[420px] overflow-hidden rounded-[8px] border border-white/70 bg-gradient-to-br from-white/65 via-cyanbrand/10 to-lagoon/20 shadow-glass md:h-[620px]">
          <HeroScene />
          <div className="absolute inset-6 rounded-[8px] border border-white/50" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-[8px] p-4 text-sm font-semibold text-deepbrand">
            {isAr ? "منصة استثمارية متكاملة للصناعة والخدمات والبنى التحتية" : "Integrated investment platform for industry, services, and infrastructure"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
