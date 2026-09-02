import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { navLinks, practiceAreas } from "@/lib/site-data";

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

        <nav aria-label="Primary" className="hidden h-full items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.hasMenu ? (
              /* The trigger fills the full 68px bar so the panel opens flush
                 against the header's lower edge — the pointer never crosses a
                 dead gap on its way down into the menu. Hover drives it, and
                 `focus-within` opens the same panel for keyboard users. */
              <div key={link.label} className="group relative flex h-full items-center">
                <Link
                  href={link.href}
                  aria-haspopup="true"
                  className="flex items-center gap-0.5 text-[16px] leading-[19.5px] font-medium text-secondary transition-colors group-hover:text-primary group-focus-within:text-primary"
                >
                  {link.label}
                  <span className="flex h-[14px] w-3 items-start pt-0.5">
                    <ChevronDown className="opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </span>
                </Link>

                <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {/* Centred on the trigger, so the panel's half-width has to clear the
                        left gutter. At 1024 the trigger sits at x=315, so 680px would
                        hang 25px off-screen — hold it to 560px until xl. */}
                    <div className="w-[560px] max-w-[calc(100vw-40px)] rounded-[14px] xl:w-[680px] border-[0.667px] border-hairline bg-white p-3 shadow-[0_16px_44px_rgba(3,35,71,0.13)]">
                    <ul className="grid grid-cols-2 gap-1">
                      {practiceAreas.map((area) => (
                        <li key={area.title}>
                          <Link
                            href={area.href}
                            className="group/item flex gap-3 rounded-[10px] p-3 transition-colors hover:bg-bg-1"
                          >
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-bg-1 transition-colors group-hover/item:bg-white">
                              <Image
                                src={area.icon}
                                alt=""
                                width={20}
                                height={20}
                                className="size-5"
                              />
                            </span>
                            <span className="flex flex-col gap-0.5">
                              <span className="font-title text-[14px] leading-5 text-primary">
                                {area.title}
                              </span>
                              <span className="text-[12px] leading-[18px] text-secondary">
                                {area.description}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-1 border-t-[0.667px] border-hairline pt-3 pb-1 pl-3">
                      <Link
                        href={link.href}
                        className="flex w-fit items-center gap-2 text-[13px] leading-5 font-semibold text-primary transition-opacity hover:opacity-70"
                      >
                        View all practice areas
                        <ChevronRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-0.5 text-[16px] leading-[19.5px] font-medium text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden shrink-0 rounded-[4px] bg-primary px-5 py-2 text-center text-[13px] leading-[19.5px] font-semibold text-bg-1 transition-colors hover:bg-secondary sm:block"
          >
            Consult Now
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
