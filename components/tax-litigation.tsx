import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { taxLawAreas } from "@/lib/site-data";

/**
 * Figma 141:13 + 141:157 — 600px narrative column beside a 3x2 grid of 200x112
 * outlined tiles, the tile grid sitting 26px lower than the copy.
 */
export function TaxLitigation({ className = "pb-[138px]" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-[600px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <h2 className="font-title text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
                Clarity in tax, strength
                <br className="hidden lg:inline" /> in litigation
              </h2>
              <p className="text-[14px] leading-[22px] text-muted">
                The Firm assists clients in litigation before all judicial and
                quasi-judicial fora as well as alternative dispute resolution,
                including arbitrations, both ad-hoc and institutional. It is
                noteworthy that the Firm has created a niche for itself
                particularly in field of fiscal laws including GST laws, Customs
                laws, legacy legislations like the Central Excise and Service Tax
                laws, Foreign Trade Policy, Income Tax laws and legislations
                relating to white collar crimes and economic offences.
              </p>
            </div>

            <Link
              href="/services"
              className="flex h-11 w-fit items-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-center text-[14px] leading-5 font-semibold text-white transition-colors hover:bg-secondary"
            >
              Explore All Areas
              <ArrowRight />
            </Link>
          </div>

          <ul className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[26px]">
            {taxLawAreas.map((area) => (
              <li
                key={area.title}
                className="flex h-28 flex-col items-center gap-4 rounded-[8px] border border-black/[0.125] px-2 py-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-bg-1">
                  <Image
                    src={area.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8"
                  />
                </span>
                <h3 className="font-title text-center text-[16px] leading-6 text-primary lg:whitespace-nowrap">
                  {area.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
