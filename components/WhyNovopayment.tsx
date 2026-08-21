import { getTranslations } from "next-intl/server";
import { Cpu, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

type WhyCard = { icon: string; title: string; description: string };

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  users: Users,
  cpu: Cpu,
};

export default async function WhyNovopayment() {
  const t = await getTranslations("WhyUs");
  const cards = t.raw("cards") as WhyCard[];

  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-foreground/60">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = ICONS[card.icon] ?? ShieldCheck;
            return (
              <FadeIn key={card.title} delay={index * 100}>
                <div className="h-full rounded-3xl bg-card-gradient p-8 ring-1 ring-white/10">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="accent-bar mt-6 w-12" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                    {card.description}
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
