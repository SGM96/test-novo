"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const t = useTranslations("FinalCta");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-hero-gradient py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl bg-card-gradient p-8 ring-1 ring-white/10 sm:p-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-center text-foreground/65">{t("subtitle")}</p>

            {submitted ? (
              <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-teal-brand/30 bg-teal-brand/10 px-6 py-5 text-teal-brand">
                <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                <span className="text-sm font-medium">{t("formSuccess")}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder={t("formNamePlaceholder")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-teal-brand/60"
                />
                <input
                  required
                  type="email"
                  placeholder={t("formEmailPlaceholder")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-teal-brand/60"
                />
                <input
                  required
                  type="text"
                  placeholder={t("formCompanyPlaceholder")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-teal-brand/60 sm:col-span-2"
                />
                <textarea
                  required
                  rows={4}
                  placeholder={t("formMessagePlaceholder")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-teal-brand/60 sm:col-span-2"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-brand to-teal-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 sm:col-span-2"
                >
                  {t("formSubmit")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2} />
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
