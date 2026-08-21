import { getTranslations } from "next-intl/server";
import { CheckCircle2, XCircle } from "lucide-react";
import FadeIn from "./FadeIn";

type Row = { category: string; problem: string; solution: string };

export default async function ProblemSolution() {
  const t = await getTranslations("ProblemSolution");
  const rows = t.raw("rows") as Row[];

  return (
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("titleBefore")} <span className="text-gradient">{t("titleHighlight")}</span>{" "}
            {t("titleAfter")}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10">
            <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] sm:grid">
              <div className="bg-white/5 px-6 py-4 text-sm font-semibold text-foreground/70">
                {t("categoryHeader")}
              </div>
              <div className="bg-white/5 px-6 py-4 text-sm font-semibold text-foreground/70">
                {t("problemHeader")}
              </div>
              <div className="bg-gradient-to-r from-purple-brand/30 to-teal-brand/20 px-6 py-4 text-sm font-semibold text-foreground">
                {t("solutionHeader")}
              </div>
            </div>

            {rows.map((row) => (
              <div
                key={row.category}
                className="grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-[1fr_1.4fr_1.4fr] sm:divide-y-0"
              >
                <div className="bg-white/[0.03] px-6 py-5 text-sm font-semibold text-foreground sm:flex sm:items-center">
                  {row.category}
                </div>
                <div className="flex items-start gap-2 px-6 py-5 text-sm text-foreground/60">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/30" strokeWidth={1.5} />
                  {row.problem}
                </div>
                <div className="flex items-start gap-2 bg-card-gradient px-6 py-5 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-brand" strokeWidth={1.5} />
                  {row.solution}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
