import Image from "next/image";
import Link from "next/link";
import { ChevronRightMedium } from "@/components/icons";
import { serviceOfferings } from "@/lib/site-data";

/**
 * Figma 54:9065 + 82:1467 — a 3x3 grid of 394px cards on a 1262px row, again
 * centred inside the page column rather than flush with the 80px margin.
 */
export function ServiceList() {
  return (
    <section className="pb-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <h2 className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Our Services
        </h2>

        <ul className="mx-auto mt-12 grid max-w-[1262px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOfferings.map((service) => (
            <li
              key={service.title}
              className="flex flex-col rounded-[14px] bg-bg-1 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-[10px] bg-white">
                <Image
                  src={service.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
              </span>

              <h3 className="font-title pt-4 text-[20px] leading-7 font-bold text-primary">
                {service.title}
              </h3>

              <p className="pt-2 pb-4 text-[14px] leading-[22px] text-secondary">
                {service.description}
              </p>

              <Link
                href="/#contact"
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
