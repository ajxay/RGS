import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { litigationSupport } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "End to End Litigation Support — Strategic Representation | RGS Legal",
  description:
    "Comprehensive representation across civil, criminal, corporate and commercial disputes — from initial assessment through courts, tribunals and adjudicatory forums.",
};

export default function LitigationSupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={litigationSupport} />
        {/* Longest overview on the site — 5+5 line paragraphs fill a 296px
            column, matching the panel exactly rather than the usual 254px. */}
        <ServiceOverview
          detail={litigationSupport}
          columnHeight="lg:min-h-[296px] fig:h-[296px]"
          panelPadding="pt-[43px]"
          panelHeight="lg:min-h-[296px] fig:h-[296px]"
        />
        <ServiceList
          detail={litigationSupport}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:min-h-[250px] fig:h-[250px]"
        />
        <ServiceAdvisory
          detail={litigationSupport}
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
