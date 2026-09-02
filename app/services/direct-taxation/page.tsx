import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { ServiceAdvisory } from "@/components/service-advisory";
import { ServiceDetailHero } from "@/components/service-detail-hero";
import { ServiceList } from "@/components/service-list";
import { ServiceOverview } from "@/components/service-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { directTaxation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Direct Taxation — Income Tax, Corporate & International | RGS Legal",
  description:
    "Advisory, compliance and litigation support across Income Tax law and related legislations, including corporate, international and individual taxation and the Black Money Act.",
};

export default function DirectTaxationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailHero detail={directTaxation} />
        {/* Four value points instead of five, so the panel carries more padding
            to keep its 296px height; the cards are rounded and top-aligned. */}
        <ServiceOverview
          detail={directTaxation}
          panelPadding="pt-8"
          panelHeight="lg:h-[296px]"
        />
        <ServiceList
          detail={directTaxation}
          className="pb-[110px]"
          cardClassName="rounded-[14px] lg:h-[250px]"
        />
        <ServiceAdvisory
          detail={directTaxation}
          className="pb-[97px]"
          headingWidth="max-w-[581px]"
          bodyWidth="max-w-[620px]"
        />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
