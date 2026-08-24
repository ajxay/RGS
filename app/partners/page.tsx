import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { PartnerProfiles } from "@/components/partner-profiles";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Meet the Partners — RGS Legal",
  description:
    "The partners behind RGS Legal — deep technical expertise in indirect tax, compliance, dispute resolution and cross-border trade.",
};

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PartnerProfiles />
        <CtaBanner />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
