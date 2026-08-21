import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegionalPresence from "@/components/RegionalPresence";
import WhyNovopayment from "@/components/WhyNovopayment";
import ProblemSolution from "@/components/ProblemSolution";
import CoreProducts from "@/components/CoreProducts";
import PlatformPerformance from "@/components/PlatformPerformance";
import CloudInfrastructure from "@/components/CloudInfrastructure";
import ValueAddedProducts from "@/components/ValueAddedProducts";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <RegionalPresence />
        <WhyNovopayment />
        <ProblemSolution />
        <CoreProducts />
        <PlatformPerformance />
        <CloudInfrastructure />
        <ValueAddedProducts />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
