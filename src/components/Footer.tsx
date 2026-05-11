import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { contact, navItems, pages, sectors } from "@/data/site";
import { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const copy = pages[locale];

  return (
    <footer className="border-t border-cyanbrand/15 bg-white/75 py-12 backdrop-blur">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/abnaa-alhadarat-logo.jpeg" alt="Abnaa Alhadarat logo" width={54} height={54} className="h-14 w-14 object-contain" />
            <div>
              <p className="font-semibold text-navybrand">{copy.company}</p>
              <p className="font-arabic text-sm font-semibold text-deepbrand">{copy.companyAr}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-600">{copy.footerText}</p>
        </div>

        <FooterColumn title={locale === "ar" ? "روابط سريعة" : "Quick links"}>
          {navItems[locale].map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-600 transition hover:text-deepbrand">{item.label}</Link>
          ))}
        </FooterColumn>

        <FooterColumn title={locale === "ar" ? "القطاعات" : "Sectors"}>
          {sectors.slice(0, 5).map((sector) => (
            <Link key={sector.slug} href={`/${locale}/${sector.slug}`} className="text-slate-600 transition hover:text-deepbrand">{sector[locale].title}</Link>
          ))}
        </FooterColumn>

        <FooterColumn title={locale === "ar" ? "التواصل" : "Contact"}>
          <span className="inline-flex gap-2 text-slate-600"><MapPin size={18} className="shrink-0 text-cyanbrand" />{locale === "ar" ? contact.hqAr : contact.hq}</span>
          <a href={`mailto:${contact.email}`} className="inline-flex gap-2 text-slate-600 transition hover:text-deepbrand"><Mail size={18} className="text-cyanbrand" />{contact.email}</a>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="inline-flex gap-2 text-slate-600 transition hover:text-deepbrand"><Phone size={18} className="text-cyanbrand" />{contact.phone}</a>
        </FooterColumn>
      </div>
      <div className="section-shell mt-10 border-t border-cyanbrand/15 pt-5 text-sm text-slate-500">
        © 2026 Abnaa Alhadarat. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-deepbrand">{title}</h3>
      <div className="flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}
