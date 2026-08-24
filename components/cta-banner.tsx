import Image from "next/image";
import Link from "next/link";

/**
 * Figma 54:7954 — 1280x220 signage photo with a warm #f1e7e0 plate behind the
 * copy so the navy text keeps contrast over the lit part of the image.
 */
export function CtaBanner({ className = "pb-[100px]" }: { className?: string }) {
  return (
    <section id="contact" className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[220px]">
          <Image
            src="/images/cta-signage.png"
            alt="RGS Legal stone signage"
            fill
            sizes="(max-width: 1440px) 100vw, 1280px"
            className="object-cover"
          />

          {/* 428x117 plate at 67,61 within the card — Figma 54:7956 */}
          <div className="absolute top-[61px] left-[67px] hidden h-[117px] w-[428px] bg-cta-plate lg:block" />

          <div className="relative px-6 py-10 sm:px-10 lg:px-12 lg:py-8">
            <div className="flex max-w-[628px] flex-col gap-4">
              <h2 className="font-title text-[24px] leading-[32px] text-primary lg:text-[32px] lg:leading-10">
                Ready to resolve your legal challenge?
              </h2>
              <p className="text-[16px] leading-6 text-secondary">
                Schedule a confidential consultation with one of our senior
                attorneys. No obligation. Plain-language advice from day one.
              </p>
            </div>

            <Link
              href="#contact"
              className="mt-4 inline-flex items-center rounded-[4px] bg-primary px-5 py-2 text-center text-[13px] leading-[19.5px] font-semibold text-bg-1 transition-colors hover:bg-secondary"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
