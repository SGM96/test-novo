import { getTranslations } from "next-intl/server";
import { CreditCard, Landmark, Network, Zap, Wallet, type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import ProductCard, { type Product } from "./ProductCard";

const ICONS: Record<string, LucideIcon> = {
  novocard: CreditCard,
  novocredit: Landmark,
  novoflow: Network,
  novoflux: Zap,
  novospend: Wallet,
};

export default async function CoreProducts() {
  const t = await getTranslations("Products");
  const items = t.raw("items") as Product[];

  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-foreground/60">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, index) => (
            <FadeIn key={product.id} delay={(index % 3) * 100}>
              <ProductCard
                product={product}
                icon={(() => {
                  const Icon = ICONS[product.id] ?? CreditCard;
                  return <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />;
                })()}
                howItWorksLabel={t("howItWorksLabel")}
                useCasesLabel={t("useCasesLabel")}
                differentiatorLabel={t("differentiatorLabel")}
                expandLabel={t("expandLabel")}
                collapseLabel={t("collapseLabel")}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
