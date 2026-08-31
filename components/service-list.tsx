import Image from "next/image";
import Link from "next/link";
import { ChevronRightMedium } from "@/components/icons";
import type { ServiceDetailContent } from "@/lib/site-data";

/**
 * Figma 54:9065 + 209:356… (Indirect) and 202:229 + 202:355 (Direct) — a 3x3
 * grid of 394px cards. Indirect draws them square-cornered with the content
 * centred; Direct rounds them to 14px and aligns the content to the top.
 */
export function ServiceList({
  detail,
  className = "pb-[82px]",
  cardClassName = "justify-center lg:h-[248px]",
}: {
  detail: ServiceDetailContent;
  className?: string;
  cardClassName?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <h2 className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Our Services
        </h2>

        <ul className="mx-auto mt-12 grid max-w-[1262px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {detail.offerings.map((service) => (
            <li
              key={service.title}
              className={`flex flex-col gap-5 bg-bg-1 p-6 ${cardClassName}`}
            >
              <div className="flex flex-col gap-4">
                <span className="flex size-10 items-center justify-center rounded-[10px] bg-white">
                  <Image
                    src={service.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="font-title text-[20px] leading-7 font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex h-5 w-fit items-center gap-1 text-[14px] leading-5 font-medium text-primary transition-opacity hover:opacity-70"
              >
                Learn More
                <ChevronRightMedium />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
