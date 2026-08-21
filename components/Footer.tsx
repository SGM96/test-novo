import { getTranslations } from "next-intl/server";
import { MessageCircle, Rss, Share2 } from "lucide-react";
import type { Product } from "./ProductCard";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tProducts = await getTranslations("Products");
  const products = tProducts.raw("items") as Product[];
  const companyLinks = t.raw("companyLinks") as string[];
  const legalLinks = t.raw("legalLinks") as string[];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-foreground">
              Novo<span className="text-gradient">payment</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-foreground/55">{t("description")}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Social 1"
                className="rounded-full border border-white/10 p-2 text-foreground/60 transition hover:border-white/25 hover:text-foreground"
              >
                <Share2 className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Social 2"
                className="rounded-full border border-white/10 p-2 text-foreground/60 transition hover:border-white/25 hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Social 3"
                className="rounded-full border border-white/10 p-2 text-foreground/60 transition hover:border-white/25 hover:text-foreground"
              >
                <Rss className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{t("productsTitle")}</p>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.id}>
                  <a href="#products" className="text-sm text-foreground/55 transition hover:text-foreground">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{t("companyTitle")}</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-foreground/55">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{t("legalTitle")}</p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-foreground/55">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="accent-bar mt-12 w-full opacity-40" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-foreground/40 sm:flex-row">
          <p>
            © {year} Novopayment. {t("rights")}
          </p>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-foreground/35">{t("legalNote")}</p>
      </div>
    </footer>
  );
}
