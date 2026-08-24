import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

/**
 * Figma 106:3555 + 54:7511 — a 1280x480 rounded photo plate with a horizontal
 * scrim (106:3557) and the headline block centred over it.
 */
export function Hero() {
  return (
    <section className="pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[480px]">
          {/* Figma 106:3555 sizes the fill to the plate width and pulls it up
              39.81%, which keeps the desk edge and pen in frame. */}
          <Image
            src="/images/hero-legal-desk.png"
            alt="Scales of justice and law books on a desk"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
            className="absolute top-[-39.81%] left-0 h-[150.08%] w-full max-w-none object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(-90deg, rgba(85,84,84,0.6) 3.75%, rgba(0,0,0,0.72) 50.753%, rgba(96,96,96,0.41) 104.22%)",
            }}
          />

          {/* pb offset reproduces the 7px optical rise of the Figma text block */}
          <div className="relative flex flex-col items-center justify-center px-6 py-20 sm:px-10 lg:h-full lg:py-0 lg:pb-[14px]">
            <h1 className="font-title max-w-[768px] pt-4 text-center text-[32px] leading-[42px] text-bg-1 sm:text-[40px] sm:leading-[54px] lg:text-[48px] lg:leading-[64px]">
              Practical Legal Solutions
              <br />
              <span className="text-accent">for Modern Businesses.</span>
            </h1>

            <p className="max-w-[664px] text-center text-[15px] leading-[24.375px] text-bg-1">
              Combining deep legal expertise with practical business insight, we
              deliver tailored solutions that protect interests, mitigate risks,
              and drive successful outcomes for our clients across India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-[10px] bg-accent px-7 py-[14px] text-center text-[14px] leading-5 font-semibold text-bg-1 transition-opacity hover:opacity-90"
              >
                Free Consultation
                <ArrowRight />
              </Link>
              <Link
                href="/services"
                className="flex items-center rounded-[10px] border-[0.667px] border-white/25 px-[28.667px] py-[14.667px] text-center text-[14px] leading-5 font-semibold text-bg-1 transition-colors hover:bg-white/10"
              >
                Explore Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
