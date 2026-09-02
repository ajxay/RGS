import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { disputeResolution } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Alternative Dispute Resolution — Efficient Solutions | RGS Legal",
  description:
    "Arbitration, mediation, conciliation and settlement negotiation — resolving commercial disputes efficiently while avoiding the cost and delay of prolonged litigation.",
};

export default function DisputeResolutionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={disputeResolution} />
        {/* Four single-line value points, so the panel takes the wider 65px
            lead-in to fill its fixed 296px height. */}
        <ServiceOverview
          detail={disputeResolution}
          panelPadding="pt-[65px]"
          panelHeight="lg:h-[296px]"
        />
        <ServiceList
          detail={disputeResolution}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:h-[250px]"
        />
        <ServiceAdvisory
          detail={disputeResolution}
          className="pb-[97px]"
          headingWidth="max-w-[619px]"
          bodyWidth="max-w-[619px]"
        />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
