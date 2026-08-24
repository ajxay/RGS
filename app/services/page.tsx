import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { PracticeAreas } from "@/components/practice-areas";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Our Services — RGS Legal",
  description:
    "RGS Legal's areas of practice — indirect and direct taxation, securities, insolvency, corporate law, contracts, dispute resolution and litigation support.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Figma 80:770 frames the grid tighter than the homepage does: the
            heading sits 49px under the bar and the CTA 180px under the cards. */}
        <PracticeAreas
          className="pt-[49px] pb-[180px]"
          headingLevel="h1"
          headingSpacing="mt-12"
          titleLeading="leading-6"
        />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
