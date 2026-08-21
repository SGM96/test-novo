import { getTranslations } from "next-intl/server";
import { Fingerprint, MousePointerClick, Smartphone, Wifi, type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

type ValueItem = { name: string; description: string };

const ICONS: LucideIcon[] = [Fingerprint, MousePointerClick, Smartphone, Wifi];

export default async function ValueAddedProducts() {
  const t = await getTranslations("ValueAdded");
  const items = t.raw("items") as ValueItem[];

  return (
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-foreground/60">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICONS[index] ?? Fingerprint;
            return (
              <FadeIn key={item.name} delay={index * 90}>
                <div className="h-full rounded-3xl bg-card-gradient p-6 ring-1 ring-white/10">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="accent-bar mt-5 w-10" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
