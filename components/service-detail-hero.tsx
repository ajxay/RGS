import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import type { ServiceDetailContent } from "@/lib/site-data";

/**
 * Figma 85:1821 + 209:20 (Indirect) and 246:34 + 209:3 (Direct) — the 1280x480
 * plate. Each page supplies its own photo, crop and optional scrim.
 */
export function ServiceDetailHero({ detail }: { detail: ServiceDetailContent }) {
  return (
    <section className="pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[480px]">
          <Image
            src={detail.hero.src}
            alt={detail.hero.alt}
            width={detail.hero.width}
            height={detail.hero.height}
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
            className={detail.hero.className}
          />
          {detail.heroOverlay ? (
            <div
              className="absolute inset-0"
              style={{ backgroundImage: detail.heroOverlay }}
            />
          ) : null}

          <div className="relative flex flex-col items-start gap-6 px-6 py-20 sm:px-10 lg:h-full lg:justify-center lg:px-12 lg:py-0">
            <div className="flex flex-col gap-4">
              <p className="text-[12px] leading-[15px] font-semibold tracking-[2px] text-accent uppercase">
                {detail.eyebrow}
              </p>

              <h1
                className={`font-title ${detail.hero.titleMaxWidth ?? "max-w-[569px]"} text-[28px] leading-[38px] text-bg-1 sm:text-[34px] sm:leading-[46px] lg:text-[40px] lg:leading-[54px]`}
              >
                {detail.titleLead}
                <br />
                <span className="text-accent">{detail.titleAccent}</span>
              </h1>
            </div>

            <Link
              href="/contact"
              className="flex h-[52px] w-fit items-center justify-center gap-2 rounded-[10px] bg-accent px-6 text-center text-[14px] leading-5 font-semibold text-bg-1 transition-opacity hover:opacity-90"
            >
              Consult Now
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
