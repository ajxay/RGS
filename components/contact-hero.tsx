import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

/**
 * Figma 107:3559 + 54:8460 — the 1280x480 plate with a light left-to-right
 * scrim. The second heading line is accent throughout; only "We're Here" is
 * italic.
 */
export function ContactHero() {
  return (
    <section className="pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[480px]">
          <Image
            src="/images/contact-hero-desk.png"
            alt="A desk with law volumes, a fountain pen and a bronze statue of justice"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
            className="absolute top-[-35.72%] left-0 h-[150.08%] w-full max-w-none object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(36,35,35,0.2) 2.812%, rgba(14,13,13,0.48) 102.54%)",
            }}
          />

          <div className="relative flex flex-col items-start justify-center px-6 py-20 sm:px-10 lg:h-full lg:px-12 lg:py-0">
            <h1 className="font-title max-w-[768px] py-4 text-[32px] leading-[42px] font-bold sm:text-[40px] sm:leading-[54px] lg:text-[48px] lg:leading-[64px]">
              <span className="text-bg-1">Let&apos;s Connect.</span>
              <br />
              <span className="text-accent italic">We&apos;re Here </span>
              <span className="text-accent">to Help.</span>
            </h1>

            <p className="max-w-[576px] text-[15px] leading-[24.375px] text-bg-1">
              India&apos;s premier full-service law firm — combining four decades
              of judicial excellence with modern, client-centric legal strategies
              across every practice area.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-10">
              <Link
                href="#consultation"
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
