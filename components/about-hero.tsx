import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

/**
 * Figma 73:8 + 54:8073 — same 1280x480 rounded plate as the homepage hero, but
 * the copy is left-aligned inside it and sits behind a left-heavy scrim.
 */
export function AboutHero() {
  return (
    <section className="pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[480px]">
          <Image
            src="/images/about-hero-courtroom.png"
            alt="Brass scales of justice in a courtroom"
            width={1500}
            height={679}
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
            className="absolute top-[-4.24%] left-0 h-[120.71%] w-full max-w-none object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(63,59,59,0.44) 0%, rgba(0,0,0,0.42) 47.115%, rgba(29,27,27,0.74) 100%)",
            }}
          />

          <div className="relative flex flex-col items-start justify-center px-6 py-20 sm:px-10 lg:h-full lg:px-20 lg:py-0">
            <p className="text-[12px] leading-[15px] font-semibold tracking-[2px] text-accent uppercase">
              About RJS Legal
            </p>

            {/* Figma's Heading-1 frame is 155px tall around a 139px text box,
                so the block carries 11px below the second line. */}
            <h1 className="font-title max-w-[768px] pt-4 pb-[11px] text-[32px] leading-[42px] text-bg-1 sm:text-[40px] sm:leading-[54px] lg:text-[48px] lg:leading-[64px]">
              Where Law Meets
              <br />
              Business Reality.
            </h1>

            <p className="max-w-[576px] text-[15px] leading-[24.375px] text-bg-1">
              India&apos;s premier full-service law firm — combining four decades
              of judicial excellence with modern, client-centric legal strategies
              across every practice area.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-10">
              <Link
                href="/#contact"
                className="flex items-center gap-2 rounded-[10px] bg-accent px-7 py-[14px] text-center text-[14px] leading-5 font-semibold text-bg-1 transition-opacity hover:opacity-90"
              >
                Consult Now
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
