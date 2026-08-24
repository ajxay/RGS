import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/icons";

/** Figma 141:10 — 562px copy column beside a 638x318 rounded photo, 80px gutter. */
export function AboutFirm() {
  return (
    <section id="about" className="py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-4 lg:w-[562px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <h2 className="font-title text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
                Protecting interests, delivering outcomes
              </h2>
              <p className="text-[16px] leading-6 text-secondary">
                RGS Legal is a boutique law firm offering its services across
                various practice areas, with the aim of rendering well-conceived
                advice and strategies founded on legal principles and commercial
                realities that are receptive to the clients&apos; needs.
              </p>
            </div>

            <Link
              href="#about"
              className="flex w-fit items-center gap-2 border-b-[0.667px] border-primary pb-[2.667px] text-[16px] leading-6 text-primary transition-opacity hover:opacity-70"
            >
              More About Us
              <ChevronRight />
            </Link>
          </div>

          {/* Figma 54:7544 crops into the source photo rather than cropping to
              fit — these percentages are the frame's own image transform. */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] lg:h-[318px] lg:w-[638px] lg:shrink-0">
            <Image
              src="/images/about-a.jpeg"
              alt="RGS Legal partners in discussion around a table"
              width={800}
              height={450}
              sizes="(max-width: 1024px) 100vw, 638px"
              className="absolute top-[-75.4%] left-[-61.11%] h-[250.99%] w-[222.22%] max-w-none object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
