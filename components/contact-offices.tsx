import Link from "next/link";
import { ArrowRightSmall, MailIcon, PhoneIcon } from "@/components/icons";
import { officeSkyline, offices } from "@/lib/site-data";

/**
 * Figma 54:8802 + 54:8608/8705 — a 3x2 grid of 388.67px cards. The panel above
 * each address is a set of plain divs in the design, not an exported image.
 */
export function ContactOffices() {
  return (
    <section className="pt-[100px] pb-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <h2 className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Our Offices
        </h2>

        <ul className="mx-auto mt-12 grid max-w-[1246px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, index) => (
            <li
              key={`${office.city}-${index}`}
              className="flex flex-col rounded-[16px] border-[0.667px] border-[rgba(42,32,22,0.1)] p-[28.667px]"
            >
              <div
                aria-hidden="true"
                className="flex h-28 items-end gap-1 overflow-hidden rounded-[14px] bg-warm-panel px-4 pb-2"
              >
                {officeSkyline.map((height, bar) => (
                  <span
                    key={bar}
                    style={{ height: `${height}px` }}
                    className="min-w-px flex-1 rounded-t-[4px] bg-[rgba(42,32,22,0.1)]"
                  />
                ))}
              </div>

              <h3 className="font-title pt-5 text-[20px] leading-7 text-primary">
                {office.city}
              </h3>

              <p className="pt-3 text-[14px] leading-[22.75px] text-secondary">
                {office.address}
              </p>

              <div className="flex flex-col pt-4">
                <p className="flex items-center gap-2 text-[14px] leading-5 text-primary">
                  <PhoneIcon className="size-[13px] shrink-0" />
                  {office.phone}
                </p>
                <p className="flex items-center gap-2 pt-1.5 text-[14px] leading-5 text-primary">
                  <MailIcon className="size-[13px] shrink-0" />
                  {office.email}
                </p>
              </div>

              <Link
                href="#offices"
                className="mt-5 flex w-fit items-center gap-1 text-[12px] leading-4 font-semibold tracking-[0.3px] text-primary uppercase transition-opacity hover:opacity-70"
              >
                View Location
                <ArrowRightSmall />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
