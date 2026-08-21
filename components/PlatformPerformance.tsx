import { getTranslations } from "next-intl/server";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

type Metric = {
  prefix: string;
  value: number;
  decimals: number;
  suffix: string;
  label: string;
};

export default async function PlatformPerformance() {
  const t = await getTranslations("Performance");
  const metrics = t.raw("metrics") as Metric[];

  return (
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 80}>
              <div className="flex h-full flex-col items-center gap-2 rounded-2xl bg-card-gradient px-4 py-8 text-center ring-1 ring-white/10">
                <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
                  <AnimatedCounter
                    value={metric.value}
                    decimals={metric.decimals}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-xs text-foreground/60">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-foreground/45">
            {t("subtitle")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
