import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutStats } from "@/components/about-stats";
import { CoreValues } from "@/components/core-values";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { Partners } from "@/components/partners";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TaxAdvisory } from "@/components/tax-advisory";
import { TaxLitigation } from "@/components/tax-litigation";

export const metadata: Metadata = {
  title: "About Us — RGS Legal",
  description:
    "India's premier full-service law firm — combining four decades of judicial excellence with modern, client-centric legal strategies across every practice area.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutStats />
        <TaxAdvisory />
        <CoreValues />
        {/* Spacing overrides follow the About artboard's own rhythm, which is
            looser after the tax block and much looser before the newsletter. */}
        <Partners />
        <TaxLitigation className="pb-[74px]" />
        <CtaBanner className="pb-[199px]" />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
