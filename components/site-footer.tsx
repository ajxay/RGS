import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { footerColumns, legalLinks, socialLinks } from "@/lib/site-data";

/** Figma 54:7973 — navy footer, hairline column rule at x=611, 1279px base rule. */
export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-[49px] sm:px-8 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
          <div className="lg:w-[531px] lg:shrink-0">
            <Image
              src="/images/rgs-legal-logo-box.png"
              alt="RGS Legal"
              width={67}
              height={40}
              className="h-10 w-[67px] object-cover"
            />

            <p className="max-w-[452px] pt-4 text-[12px] leading-[19.5px] text-bg-1">
              One of India&apos;s premier full-service law firms with over four
              decades of delivering legal excellence across all major practice
              areas.
            </p>

            <ul className="mt-4 flex flex-wrap items-center gap-4 text-[12px] leading-4 text-bg-1">
              <li className="flex items-center gap-2">
                <PhoneIcon className="shrink-0 text-bg-1" />
                <a href="tel:+911141299811" className="hover:text-accent">
                  +91 11 4129 9811
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="shrink-0 text-bg-1" />
                <a href="mailto:info@lakshmisri.com" className="hover:text-accent">
                  info@lakshmisri.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="shrink-0 text-bg-1" />
                <span>New Delhi, India</span>
              </li>
            </ul>

            <ul className="mt-[25px] flex flex-wrap items-center gap-5">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-[12px] leading-4 text-bg-1"
                    aria-label={`RGS Legal on ${social.name}`}
                  >
                    <span
                      className="mask-icon block size-4 shrink-0 bg-bg-1 transition-colors group-hover:bg-accent"
                      style={{
                        maskImage: `url(${social.icon})`,
                        WebkitMaskImage: `url(${social.icon})`,
                      }}
                    />
                    <span className="group-hover:text-accent">{social.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="hidden h-[191px] w-px shrink-0 bg-bg-1/50 lg:block"
          />

          <div className="flex flex-wrap gap-x-16 gap-y-10 lg:flex-nowrap lg:gap-x-[139px] lg:pl-[190px]">
            {footerColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-5">
                <h2 className="font-title text-[14px] leading-5 text-bg-1">
                  {column.heading}
                </h2>
                <ul className="flex flex-col gap-3 text-[12px] leading-4 text-bg-1">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-accent">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t-[0.5px] border-bg-1">
          <div className="flex flex-col gap-3 py-5 text-[11px] leading-[16.5px] text-bg-1 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026. RGS Legal All rights reserved.</p>
            <ul className="flex flex-wrap gap-5">
              {legalLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-accent">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
