import Image from "next/image";
import { ChevronRightMedium } from "@/components/icons";
import { serviceDetail } from "@/lib/site-data";

/**
 * Figma 54:8961 + 54:8968 — two 595px columns on a 1238px row that centres
 * itself inside the 1280px page column, so it sits 21px in on each side.
 */
export function ServiceOverview() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1238px] flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="lg:w-[595px] lg:shrink-0">
            <h2 className="font-title text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
              Overview
            </h2>
            <p className="pt-5 text-[14px] leading-[22px] text-secondary">
              {serviceDetail.overview[0]}
            </p>
            <p className="pt-4 text-[14px] leading-[22px] text-secondary">
              {serviceDetail.overview[1]}
            </p>
          </div>

          <div className="rounded-[16px] bg-bg-1 p-8 lg:w-[595px] lg:shrink-0">
            <h3 className="flex items-center gap-2">
              <Image
                src="/icons/services/gst-law.svg"
                alt=""
                width={20}
                height={20}
                className="size-5 shrink-0"
              />
              <span className="font-title text-[20px] leading-7 font-bold text-primary">
                How We Add Value
              </span>
            </h3>

            <ul className="pt-5">
              {serviceDetail.valuePoints.map((point, index) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 ${index > 0 ? "pt-3" : ""}`}
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
