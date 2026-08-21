"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  differentiator: string;
  steps: string[];
  useCases: string[];
};

type ProductCardProps = {
  product: Product;
  icon: ReactNode;
  howItWorksLabel: string;
  useCasesLabel: string;
  differentiatorLabel: string;
  expandLabel: string;
  collapseLabel: string;
};

export default function ProductCard({
  product,
  icon,
  howItWorksLabel,
  useCasesLabel,
  differentiatorLabel,
  expandLabel,
  collapseLabel,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="flex h-full flex-col rounded-3xl bg-card-gradient p-7 ring-1 ring-white/10">
      <div className="inline-flex w-fit rounded-2xl bg-white/10 p-3">{icon}</div>
      <div className="accent-bar mt-6 w-12" />
      <h3 className="mt-4 text-xl font-bold text-foreground">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/65">{product.description}</p>

      <div className="mt-4 rounded-xl border border-teal-brand/30 bg-teal-brand/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-brand">
          {differentiatorLabel}
        </p>
        <p className="mt-1 text-sm text-foreground/85">{product.differentiator}</p>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-semibold text-foreground/90 transition hover:border-white/30 hover:bg-white/5"
      >
        {open ? collapseLabel : expandLabel}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {howItWorksLabel}
          </p>
          <ol className="mt-3 space-y-3">
            {product.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-foreground/75">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-brand to-teal-brand text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {useCasesLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.useCases.map((useCase) => (
              <span
                key={useCase}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
