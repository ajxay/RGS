import { ChevronRightMedium } from "@/components/icons";
import type { ServiceDetailContent } from "@/lib/site-data";

/**
 * Figma 54:8961 + 209:351 — a 595px Overview column inset 21px from the page
 * margin, and a 595px value panel flush to the right margin. The panel is a
 * plain square-cornered bg-1 rectangle centred against the shorter copy column;
 * its vertical padding absorbs the differing number of value points per page.
 */
export function ServiceOverview({
  detail,
  panelPadding = "py-[49px]",
}: {
  detail: ServiceDetailContent;
  panelPadding?: string;
}) {
  return (
    <section className="py-[79px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:pl-[21px]">
          <div className="lg:w-[595px] lg:shrink-0">
            <h2 className="font-title text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
              Overview
            </h2>
            <p className="pt-5 text-[14px] leading-[22px] text-secondary">
              {detail.overview[0]}
            </p>
            <p className="pt-4 text-[14px] leading-[22px] text-secondary">
              {detail.overview[1]}
            </p>
          </div>

          <div className={`bg-bg-1 px-8 ${panelPadding} lg:w-[595px] lg:shrink-0`}>
            <h3 className="font-title text-[20px] leading-7 font-bold text-primary">
              How We Add Value
            </h3>

            <ul className="pt-5">
              {detail.valuePoints.map((point, index) => (
                <li
                  key={point}
                  className={`flex items-start gap-2 ${index > 0 ? "pt-2.5" : ""}`}
                >
                  <span className="flex shrink-0 items-start pt-0.5">
                    <ChevronRightMedium className="text-primary" />
                  </span>
                  <span className="text-[14px] leading-[22px] text-secondary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
