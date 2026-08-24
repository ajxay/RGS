import { aboutStats } from "@/lib/site-data";

/**
 * Figma 54:8277 — one rounded white plate split into four cells by 0.1px
 * hairlines. The frame is a fixed 156px tall, so the top padding is what sets
 * the optical rhythm rather than symmetric padding.
 */
export function AboutStats() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <dl className="grid grid-cols-1 gap-4 overflow-hidden rounded-[16px] drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.1)] sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center rounded-[8px] bg-white px-8 pt-10 lg:h-[156px] ${
                index < aboutStats.length - 1
                  ? "lg:border-r lg:border-black/[0.125]"
                  : ""
              }`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="contents">
                <span className="font-title text-center text-[48px] leading-[60px] whitespace-nowrap text-primary">
                  {stat.value}
                </span>
                <span
                  aria-hidden="true"
                  className="pt-2 pb-10 text-center text-[14px] leading-[22px] whitespace-nowrap text-secondary lg:pb-0"
                >
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
