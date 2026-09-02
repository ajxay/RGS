import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { securitiesLaw } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Securities Law — SEBI Compliance, Advisory & Litigation | RGS Legal",
  description:
    "Advisory, compliance and litigation support in matters governed by the SEBI Act — show cause notices, adjudication, SAT appeals and Supreme Court representation.",
};

export default function SecuritiesLawPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={securitiesLaw} />
        {/* Two of the four value points wrap, so the panel takes 32px padding
            to hold its 296px height; cards match the Direct Taxation frame. */}
        <ServiceOverview
          detail={securitiesLaw}
          panelPadding="pt-8"
          panelHeight="lg:min-h-[296px] fig:h-[296px]"
        />
        <ServiceList
          detail={securitiesLaw}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:min-h-[250px] fig:h-[250px]"
        />
        <ServiceAdvisory
          detail={securitiesLaw}
          className="pb-[97px]"
          headingWidth="max-w-[618px]"
          bodyWidth="max-w-[619px]"
        />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
