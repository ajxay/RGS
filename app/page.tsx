import { AboutFirm } from "@/components/about-firm";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Newsletter } from "@/components/newsletter";
import { Partners } from "@/components/partners";
import { PracticeAreas } from "@/components/practice-areas";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StrategicCounsel } from "@/components/strategic-counsel";
import { TaxLitigation } from "@/components/tax-litigation";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutFirm />
        <StrategicCounsel />
        <PracticeAreas />
        <TaxLitigation />
        <Partners />
        <Insights />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
