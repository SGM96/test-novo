import { getTranslations } from "next-intl/server";
import { BadgeCheck } from "lucide-react";
import FadeIn from "./FadeIn";

export default async function TrustSection() {
  const t = await getTranslations("Trust");
  const certifications = t.raw("certifications") as string[];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-foreground/45">
            {t("certificationsTitle")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-foreground/75"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-teal-brand" strokeWidth={2} />
                {cert}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="accent-bar mx-auto mt-16 w-24" />

        <FadeIn delay={100}>
          <h2 className="mt-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
            {t("title")}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex h-16 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] text-xs font-medium uppercase tracking-wide text-foreground/30"
              >
                LOGO
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-foreground/40">{t("partnersPlaceholder")}</p>
        </FadeIn>
      </div>
    </section>
  );
}
