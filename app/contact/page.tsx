import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact-channels";
import { ContactConsultation } from "@/components/contact-consultation";
import { ContactHero } from "@/components/contact-hero";
import { ContactOffices } from "@/components/contact-offices";
import { CtaBanner } from "@/components/cta-banner";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact Us — RGS Legal",
  description:
    "Reach RGS Legal in New Delhi, Mumbai or Bangalore, or request an initial consultation — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactChannels />
        <ContactOffices />
        <ContactConsultation />
        <CtaBanner className="pt-[100px] pb-[100px]" />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}
