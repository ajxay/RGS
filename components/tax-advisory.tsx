import Image from "next/image";
import { advisoryPoints } from "@/lib/site-data";

/**
 * Figma 143:258 + 88:3187 — 608px copy column beside a 621x434 library photo.
 * This is the one block that uses the warm ink palette instead of the navy.
 */
export function TaxAdvisory() {
  return (
    <section className="pb-[101px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[50px]">
          <div className="flex w-full flex-col gap-4 lg:w-[608px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <h2 className="font-title text-[28px] leading-[36px] text-ink lg:text-[32px] lg:leading-10">
                Strategic Indirect Tax Advisory Built for Business
              </h2>
              <p className="text-[14px] leading-[22px] text-ink-soft">
                Our team combines deep technical expertise with commercial
                insight to help businesses confidently manage indirect tax
                obligations. From advisory and compliance to dispute resolution
                and cross-border trade matters, we deliver practical legal
                solutions that protect your business while enabling sustainable
                growth.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {advisoryPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="flex items-start pt-0.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-check-bg">
                      <Image
                        src="/icons/check-small.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="size-3"
                      />
                    </span>
                  </span>
                  <span className="text-[14px] leading-[22px] text-ink-soft">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[621/434] w-full overflow-hidden rounded-[16px] lg:h-[434px] lg:w-[621px] lg:shrink-0">
            <Image
              src="/images/about-law-library.png"
              alt="Law library shelves behind a reading table"
              width={3000}
              height={2089}
              sizes="(max-width: 1024px) 100vw, 621px"
              className="absolute top-0 left-[-0.34%] h-full w-[100.36%] max-w-none object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
