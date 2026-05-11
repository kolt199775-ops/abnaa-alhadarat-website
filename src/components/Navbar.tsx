"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, pages } from "@/data/site";
import { Locale, localizedPath } from "@/lib/i18n";

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const copy = pages[locale];
  const otherLocale = locale === "en" ? "ar" : "en";
  const otherPath = pathname?.replace(`/${locale}`, `/${otherLocale}`) || localizedPath(otherLocale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="glass mx-auto flex h-20 w-full max-w-7xl items-center justify-between rounded-[8px] px-4 md:px-6">
        <Link href={localizedPath(locale)} className="flex items-center gap-3" aria-label="Abnaa Alhadarat home">
          <span className="relative grid h-12 w-12 place-items-center rounded-[8px] bg-white shadow-glow">
            <Image src="/abnaa-alhadarat-logo.jpeg" alt="Abnaa Alhadarat logo" width={42} height={42} className="h-10 w-10 object-contain" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-navybrand">{copy.company}</span>
            <span className="block font-arabic text-sm font-semibold text-deepbrand">{copy.companyAr}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems[locale].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-[8px] px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 hover:text-deepbrand">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href={otherPath} className="rounded-[8px] border border-cyanbrand/30 bg-white/70 px-4 py-2 text-sm font-bold text-deepbrand transition hover:border-lagoon hover:bg-white">
            {copy.languageLabel}
          </Link>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-[8px] border border-cyanbrand/25 bg-white/70 text-deepbrand lg:hidden" aria-label="Toggle navigation">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 w-full max-w-7xl rounded-[8px] p-3 lg:hidden">
          {navItems[locale].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-white/75">
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
