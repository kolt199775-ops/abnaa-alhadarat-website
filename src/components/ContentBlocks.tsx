import Image from "next/image";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

import { contact, pages, sectors } from "@/data/site";
import { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SectorGrid } from "@/components/SectorGrid";

export function HomeSections({ locale }: { locale: Locale }) {
  const copy = pages[locale];

  return (
    <>
      <section id="sectors" className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow={locale === "ar" ? "القطاعات الأساسية" : "Core sectors"} title={locale === "ar" ? "قدرات متكاملة لبناء القيمة" : "Integrated capabilities for building value"} />
          <SectorGrid locale={locale} limit={6} />
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <InfoPanel title={copy.aboutTitle} text={copy.aboutText} badge={locale === "ar" ? "من نحن" : "About preview"} />
          <InfoPanel title={copy.industrialTitle} text={copy.industrialText} badge={locale === "ar" ? "استثمار صناعي" : "Industrial cities"} dark />
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-gradient-to-br from-navybrand via-deepbrand to-cyanbrand p-6 shadow-glass">
            <div className="absolute inset-0 blueprint-grid opacity-50" />
            <div className="relative grid h-full min-h-[312px] place-items-center">
              <div className="grid grid-cols-3 gap-3">
                {sectors.slice(0, 6).map((sector, index) => {
                  const Icon = sector.icon;
                  return (
                    <div key={sector.slug} className="glass grid h-24 w-24 place-items-center rounded-[8px]" style={{ transform: `translateY(${index % 2 ? 18 : 0}px)` }}>
                      <Icon className="text-deepbrand" size={30} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-cyanbrand">{locale === "ar" ? "اللوجستيات والتجارة" : "Logistics and trading"}</p>
            <h2 className="mt-3 text-3xl font-semibold text-navybrand md:text-5xl">{copy.logisticsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.logisticsText}</p>
          </Reveal>
        </div>
      </section>

      <CeoMessage locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wide text-cyanbrand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-navybrand md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </Reveal>
  );
}

function InfoPanel({ title, text, badge, dark = false }: { title: string; text: string; badge: string; dark?: boolean }) {
  return (
    <Reveal className={`${dark ? "glass-dark text-white" : "glass"} min-h-[310px] rounded-[8px] p-8`}>
      <span className={`inline-flex rounded-[8px] px-3 py-2 text-sm font-bold ${dark ? "bg-white/12 text-cyan-100" : "bg-cyanbrand/10 text-deepbrand"}`}>{badge}</span>
      <h2 className={`mt-8 text-3xl font-semibold md:text-4xl ${dark ? "text-white" : "text-navybrand"}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${dark ? "text-cyan-50/84" : "text-slate-600"}`}>{text}</p>
    </Reveal>
  );
}

export function CeoMessage({ locale }: { locale: Locale }) {
  const copy = pages[locale];

  return (
    <section className="py-16">
      <div className="section-shell">
        <Reveal className="grid overflow-hidden rounded-[8px] border border-cyanbrand/20 bg-white shadow-glass lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[320px] bg-gradient-to-br from-ice via-white to-cyanbrand/20 p-8">
            <Image src="/abnaa-alhadarat-logo.svg" alt="Abnaa Alhadarat logo" width={220} height={220} className="mx-auto mt-8 h-48 w-48 object-contain drop-shadow-2xl" />
            <div className="absolute bottom-8 left-8 right-8 rounded-[8px] bg-white/82 p-4 text-center shadow-glow backdrop-blur">
              <p className="font-semibold text-navybrand">{copy.ceoName}</p>
              <p className="text-sm text-cyanbrand">{copy.ceoTitle}</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-wide text-cyanbrand">{copy.ceoTitle}</p>
            <h2 className="mt-3 text-3xl font-semibold text-navybrand md:text-5xl">{copy.ceoName}</h2>
            <p className="mt-7 text-xl leading-9 text-slate-600">{copy.ceoMessage}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({ locale }: { locale: Locale }) {
  const copy = pages[locale];

  return (
    <section id="contact" className="py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="glass-dark rounded-[8px] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">{locale === "ar" ? "تواصل معنا" : "Contact"}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{copy.contactTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-cyan-50/85">{copy.contactText}</p>
          <div className="mt-8 space-y-4">
            <ContactLine icon={MapPin} label={locale === "ar" ? contact.hqAr : contact.hq} />
            <ContactLine icon={Mail} label={contact.email} />
            <ContactLine icon={Phone} label={contact.phone} />
          </div>
          <div className="mt-8 grid h-64 place-items-center rounded-[8px] border border-cyan-100/20 bg-white/10 text-center text-cyan-50">
            <div>
              <Building2 className="mx-auto mb-3" />
              <p className="font-semibold">{locale === "ar" ? "خريطة بغداد، شارع زها حديد" : "Google Map Placeholder"}</p>
              <p className="mt-1 text-sm opacity-80">{locale === "ar" ? contact.hqAr : contact.hq}</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="glass rounded-[8px] p-6 md:p-8">
          <form className="grid gap-4">
            <input className="field" type="text" name="name" placeholder={copy.form.name} />
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" type="email" name="email" placeholder={copy.form.email} />
              <input className="field" type="tel" name="phone" placeholder={copy.form.phone} />
            </div>
            <input className="field" type="text" name="subject" placeholder={copy.form.subject} />
            <textarea className="field min-h-40 resize-y" name="message" placeholder={copy.form.message} />
            <button className="rounded-[8px] bg-gradient-to-r from-deepbrand via-cyanbrand to-lagoon px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5" type="submit">{copy.form.send}</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label }: { icon: typeof MapPin; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[8px] border border-cyan-100/20 bg-white/10 p-3">
      <Icon className="shrink-0 text-lagoon" size={20} />
      <span>{label}</span>
    </div>
  );
}
