"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { sectors } from "@/data/site";
import { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function SectorGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const list = typeof limit === "number" ? sectors.slice(0, limit) : sectors;
  const isAr = locale === "ar";

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {list.map((sector, index) => {
        const copy = sector[locale];
        const Icon = sector.icon;

        return (
          <Reveal key={sector.slug} delay={index * 0.04}>
            <Link href={`/${locale}/${sector.slug}`} className="group block h-full rounded-[8px] border border-cyanbrand/15 bg-white/72 p-5 shadow-[0_18px_50px_rgba(6,60,143,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-lagoon/60 hover:shadow-glow">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="sector-icon grid h-16 w-16 place-items-center rounded-[8px] bg-gradient-to-br from-white via-ice to-cyanbrand/30 shadow-glow">
                  <Icon className="text-deepbrand" size={30} strokeWidth={1.8} />
                </div>
                <ArrowUpRight className={`text-cyanbrand transition group-hover:translate-x-1 group-hover:-translate-y-1 ${isAr ? "-scale-x-100" : ""}`} size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyanbrand">{copy.eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold text-navybrand">{copy.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{copy.summary}</p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
