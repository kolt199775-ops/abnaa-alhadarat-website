import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CeoMessage, ContactSection, SectionHeading } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectorGrid } from "@/components/SectorGrid";
import { pages, sectors } from "@/data/site";
import { isLocale, Locale, locales } from "@/lib/i18n";

const baseSlugs = ["about-us", "sectors", "projects", "contact-us"] as const;
const sectorSlugs = sectors.map((sector) => sector.slug);
const allSlugs = [...baseSlugs, ...sectorSlugs];

export function generateStaticParams() {
  return locales.flatMap((locale) => allSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = pages[locale];
  const sector = sectors.find((item) => item.slug === slug);
  const title = sector ? sector[locale].title : copy.pageTitles[slug] || copy.company;
  const description = sector ? sector[locale].summary : copy.intro;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}/${slug}`, languages: { en: `/en/${slug}`, ar: `/ar/${slug}` } },
    openGraph: { title: `${title} | ${copy.company}`, description, images: ["/abnaa-alhadarat-logo.jpeg"], locale: locale === "ar" ? "ar_IQ" : "en_US" }
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !allSlugs.includes(slug)) notFound();

  const locale = rawLocale as Locale;
  if (slug === "about-us") return <AboutPage locale={locale} />;
  if (slug === "sectors") return <SectorsPage locale={locale} />;
  if (slug === "projects") return <ProjectsPage locale={locale} />;
  if (slug === "contact-us") return <ContactPage locale={locale} />;
  return <SectorDetailPage locale={locale} slug={slug} />;
}

function AboutPage({ locale }: { locale: Locale }) {
  const copy = pages[locale];
  const isAr = locale === "ar";
  const values = isAr ? ["استثمار طويل الأمد", "تنفيذ منضبط", "نمو وطني"] : ["Long-term investment", "Disciplined execution", "National growth"];

  return (
    <>
      <PageHero eyebrow={isAr ? "من نحن" : "About Us"} title={copy.aboutTitle} text={copy.aboutText} />
      <section className="py-16">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item} delay={index * 0.06} className="glass rounded-[8px] p-6">
              <div className="mb-8 text-4xl font-bold text-cyanbrand">0{index + 1}</div>
              <h2 className="text-2xl font-semibold text-navybrand">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">{isAr ? "نربط الرؤية الاستثمارية بالقدرة التشغيلية لتقديم مشاريع ذات أثر اقتصادي مستدام." : "We connect investment vision with operating capability to deliver projects with durable economic impact."}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CeoMessage locale={locale} />
    </>
  );
}

function SectorsPage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  return (
    <>
      <PageHero eyebrow={isAr ? "القطاعات" : "Sectors"} title={isAr ? "قطاعات استراتيجية ضمن منصة واحدة" : "Strategic sectors under one platform"} text={isAr ? "نغطي قطاعات مترابطة تدعم الصناعة والاستثمار والخدمات والتجارة والبنى التحتية." : "We cover connected sectors that support industry, investment, services, trading, and infrastructure."} />
      <section className="py-16"><div className="section-shell"><SectorGrid locale={locale} /></div></section>
    </>
  );
}

function ProjectsPage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const projects = [
    { title: isAr ? "منصة مدينة صناعية حديثة" : "Modern Industrial City Platform", text: isAr ? "تطوير مناطق صناعية جاهزة للاستثمار والإدارة والتشغيل." : "Development of investor-ready industrial zones for management and operation." },
    { title: isAr ? "شبكة لوجستية وتجارية" : "Logistics and Trading Network", text: isAr ? "ربط التوريد والخزن والنقل لتسريع تسليم المشاريع." : "Connecting sourcing, warehousing, and transport to accelerate project delivery." },
    { title: isAr ? "أصول ضيافة وتطوير حضري" : "Hospitality and Urban Assets", text: isAr ? "مفاهيم ضيافة تدعم سفر الأعمال والوجهات الاستثمارية." : "Hospitality concepts supporting business travel and investment destinations." }
  ];

  return (
    <>
      <PageHero eyebrow={isAr ? "المشاريع" : "Projects"} title={isAr ? "محفظة مبنية على التنفيذ والشراكات" : "A portfolio shaped by execution and partnerships"} text={isAr ? "تعرض هذه الصفحة توجهات المشاريع والفرص الاستراتيجية للشركة." : "This page presents the company’s project directions and strategic opportunity areas."} />
      <section className="py-16"><div className="section-shell grid gap-5 md:grid-cols-3">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.06} className="glass rounded-[8px] p-6"><div className="mb-10 h-36 rounded-[8px] bg-gradient-to-br from-deepbrand via-cyanbrand to-lagoon shadow-glow" /><h2 className="text-2xl font-semibold text-navybrand">{project.title}</h2><p className="mt-4 leading-7 text-slate-600">{project.text}</p></Reveal>)}</div></section>
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const copy = pages[locale];
  return <><PageHero eyebrow={locale === "ar" ? "اتصل بنا" : "Contact Us"} title={copy.contactTitle} text={copy.contactText} /><ContactSection locale={locale} /></>;
}

function SectorDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const sector = sectors.find((item) => item.slug === slug);
  if (!sector) notFound();
  const copy = sector[locale];
  const Icon = sector.icon;
  const isAr = locale === "ar";

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} text={copy.summary} />
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="glass-dark sticky top-28 h-fit rounded-[8px] p-8 text-white">
            <div className="sector-icon mb-10 grid h-24 w-24 place-items-center rounded-[8px] bg-white/14 shadow-glow"><Icon className="text-lagoon" size={44} /></div>
            <h2 className="text-3xl font-semibold">{copy.title}</h2>
            <p className="mt-5 leading-8 text-cyan-50/85">{copy.summary}</p>
            <Link href={`/${locale}/contact-us`} className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-white px-5 py-3 font-semibold text-deepbrand transition hover:-translate-y-0.5">{isAr ? "ناقش فرصة" : "Discuss an opportunity"}<ArrowRight size={18} className={isAr ? "rotate-180" : ""} /></Link>
          </Reveal>
          <div>
            <SectionHeading eyebrow={isAr ? "نطاق العمل" : "Scope"} title={isAr ? "كيف نخلق القيمة في هذا القطاع" : "How we create value in this sector"} text={isAr ? "يتم التعامل مع كل فرصة وفق احتياجها التجاري والتشغيلي والاستثماري." : "Every opportunity is shaped around its commercial, operational, and investment requirements."} />
            <div className="grid gap-4">{copy.details.map((detail, index) => <Reveal key={detail} delay={index * 0.05} className="glass flex gap-4 rounded-[8px] p-5"><CheckCircle2 className="mt-1 shrink-0 text-lagoon" /><p className="text-lg leading-8 text-slate-600">{detail}</p></Reveal>)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
