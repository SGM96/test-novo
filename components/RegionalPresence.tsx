import { getTranslations } from "next-intl/server";
import { MapPin } from "lucide-react";
import FadeIn from "./FadeIn";
import { flagEmoji } from "@/lib/flag";

type Country = { code: string; name: string; hq: boolean };

export default async function RegionalPresence() {
  const t = await getTranslations("Regions");
  const countries = t.raw("countries") as Country[];

  return (
    <section id="regions" className="bg-section-alt py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-foreground/60">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="accent-bar mx-auto mt-10 w-24" />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {countries.map((country, index) => (
            <FadeIn key={country.code} delay={index * 40}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-card-gradient px-4 py-6 text-center transition hover:border-white/20">
                <span className="text-3xl" aria-hidden>
                  {flagEmoji(country.code)}
                </span>
                <span className="text-sm font-semibold text-foreground">{country.name}</span>
                {country.hq && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-brand/15 px-2.5 py-0.5 text-xs font-medium text-teal-brand">
                    <MapPin className="h-3 w-3" strokeWidth={2} />
                    {t("hqBadge")}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
