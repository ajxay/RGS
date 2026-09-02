import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { insolvencyLaw } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insolvency Law — Restructuring, Insolvency & Recovery | RGS Legal",
  description:
    "Strategic advisory, restructuring and legal support for creditors, lenders, investors and businesses navigating financial distress under the IBC, 2016 and related frameworks.",
};

export default function InsolvencyLawPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={insolvencyLaw} />
        {/* Same frame geometry as Securities Law: 32px panel padding, 14px
            cards, and a six-line advisory paragraph. */}
        <ServiceOverview
          detail={insolvencyLaw}
          panelPadding="pt-8"
          panelHeight="lg:h-[296px]"
        />
        <ServiceList
          detail={insolvencyLaw}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:h-[250px]"
        />
        <ServiceAdvisory
          detail={insolvencyLaw}
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
