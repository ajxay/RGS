import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { indirectTaxation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Indirect Taxation — GST, Customs & Trade | RGS Legal",
  description:
    "Comprehensive legal and strategic support across GST, Customs, Central Excise, Service Tax, VAT, Foreign Trade Policy, Anti-Dumping, Safeguard Duty and SEZ regulations.",
};

export default function IndirectTaxationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={indirectTaxation} />
        <ServiceOverview detail={indirectTaxation} />
        <ServiceList detail={indirectTaxation} />
        <ServiceAdvisory detail={indirectTaxation} />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
