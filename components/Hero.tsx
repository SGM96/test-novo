import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";

type Stat = { value: string; label: string };

export default async function Hero() {
  const t = await getTranslations("Hero");
  const stats = t.raw("stats") as Stat[];

  return (
    <section id="top" className="bg-hero-gradient relative overflow-hidden pt-28 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h1 className="animate-hero text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t("titleBefore")} <span className="text-gradient">{t("titleHighlight")}</span>{" "}
          {t("titleAfter")}
        </h1>

        <p
          className="animate-hero mx-auto mt-6 max-w-2xl text-lg text-foreground/70"
          style={{ animationDelay: "120ms" }}
        >
          {t("subtitle")}
        </p>

        <div className="animate-hero mt-10 flex justify-center" style={{ animationDelay: "200ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-brand to-teal-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-brand/30 transition hover:opacity-90"
          >
            {t("cta")}
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>

        <div
          className="animate-hero mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          style={{ animationDelay: "280ms" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-extrabold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
