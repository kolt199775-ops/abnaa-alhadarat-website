import { Reveal } from "@/components/Reveal";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-80" />
      <div className="section-shell py-16">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-cyanbrand">{eyebrow}</p>
          <h1 className="metallic-text mt-3 text-5xl font-semibold leading-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
