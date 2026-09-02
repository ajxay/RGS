import Image from "next/image";
import { strengths } from "@/lib/site-data";

/** Figma 54:7778 — full-bleed navy band, 100px vertical padding, five columns. */
export function StrategicCounsel() {
  return (
    <section id="expertise" className="bg-primary py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[104px]">
        <div className="flex flex-col gap-10">
          <h2 className="font-title text-center text-[28px] leading-[36px] text-white lg:text-[32px] lg:leading-10">
            Strategic counsel, trusted advocacy
          </h2>

          {/* Five items, so a single mobile column ran the navy band far too
              long. Two per row halves it; the odd fifth spans the row and
              centres rather than sitting as an orphan in the left column. */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-5">
            {strengths.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-center gap-4 last:col-span-2 lg:last:col-span-1"
              >
                <span className="flex size-14 items-center justify-center rounded-[4px] border-[0.667px] border-accent/25 bg-white">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </span>
                <h3 className="font-title text-center text-[16px] leading-6 text-white">
                  {item.title}
                </h3>
                <p className="max-w-[227px] text-center text-[12px] leading-[19.5px] text-bg-1">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
