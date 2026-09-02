import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { draftingContracts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Drafting & Negotiating Contracts — Clear Agreements | RGS Legal",
  description:
    "Strategic legal assistance in negotiating, drafting and finalising agreements that protect your interests while minimising the risk of future disputes.",
};

export default function DraftingContractsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={draftingContracts} />
        {/* Four single-line value points, so the panel takes the wider 65px
            lead-in to fill its fixed 296px height. */}
        <ServiceOverview
          detail={draftingContracts}
          panelPadding="pt-[65px]"
          panelHeight="lg:h-[296px]"
        />
        <ServiceList
          detail={draftingContracts}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:h-[250px]"
        />
        <ServiceAdvisory
          detail={draftingContracts}
          className="pb-[97px]"
          /* The frame is 619px, but "…Advisory to Protect" measures 618px in
             our cut of Libre Baskerville — a pixel under the wrap. 610px sits
             inside the [492, 618) window that yields the design's three lines. */
          headingWidth="max-w-[610px]"
          bodyWidth="max-w-[619px]"
        />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
