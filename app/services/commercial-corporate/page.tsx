import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { commercialCorporate } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Commercial & Corporate Laws — Strategic Legal Solutions | RGS Legal",
  description:
    "Legal and strategic support across corporate structuring, incorporation, transactions, governance and regulatory compliance for businesses operating in India.",
};

export default function CommercialCorporatePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={commercialCorporate} />
        {/* All four value points fit on one line here, so the panel needs the
            wider 65px lead-in to fill its fixed 296px height. */}
        <ServiceOverview
          detail={commercialCorporate}
          panelPadding="pt-[65px]"
          panelHeight="lg:h-[296px]"
        />
        <ServiceList
          detail={commercialCorporate}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:h-[250px]"
        />
        <ServiceAdvisory
          detail={commercialCorporate}
          className="pb-[97px]"
          headingWidth="max-w-[617px]"
          bodyWidth="max-w-[619px]"
        />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
