import Image from "next/image";
import { advisoryPoints } from "@/lib/site-data";

/**
 * Figma 54:9067 + 54:9097 — the About page's advisory block reworked for this
 * layout: a 48px-padded 619px column at 16px body copy beside the same photo.
 */
export function ServiceAdvisory() {
  return (
    <section className="pb-[96px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch">
          <div className="flex flex-col justify-center bg-white sm:px-12 lg:h-[434px] lg:w-[619px] lg:shrink-0">
            <h2 className="font-title max-w-[523px] pb-5 text-[28px] leading-[36px] text-ink lg:text-[32px] lg:leading-10">
              Strategic Indirect Tax Advisory Built for Business
            </h2>

            <p className="max-w-[523px] pb-8 text-[16px] leading-6 text-ink-soft">
              Our team combines deep technical expertise with commercial insight
              to help businesses confidently manage indirect tax obligations.
              From advisory and compliance to dispute resolution and cross-border
              trade matters, we deliver practical legal solutions that protect
              your business while enabling sustainable growth.
            </p>

            <ul className="max-w-[523px]">
              {advisoryPoints.map((point, index) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 ${index > 0 ? "pt-4" : ""}`}
                >
                  <span className="flex shrink-0 items-start pt-0.5">
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
                  <span className="text-[16px] leading-6 text-ink-soft lg:whitespace-nowrap">
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
