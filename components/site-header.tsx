import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { navLinks } from "@/lib/site-data";

/** Figma 54:7487 — 68px translucent bar, hairline rule, 12px soft shadow. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[0.667px] border-black/[0.06] bg-white/96 shadow-nav backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-20">
        <Link href="/" className="shrink-0" aria-label="RGS Legal — home">
          <Image
            src="/images/rgs-legal-logo.png"
            alt="RGS Legal"
            width={81}
            height={48}
            priority
            className="h-12 w-[81px] object-contain"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-0.5 text-[16px] leading-[19.5px] font-medium text-secondary transition-colors hover:text-primary"
            >
              {link.label}
              {link.hasMenu ? (
                <span className="flex h-[14px] w-3 items-start pt-0.5">
                  <ChevronDown className="opacity-60" />
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden shrink-0 rounded-[4px] bg-primary px-5 py-2 text-center text-[13px] leading-[19.5px] font-semibold text-bg-1 transition-colors hover:bg-secondary sm:block"
          >
            Free Consultation
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
