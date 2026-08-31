import { coreValues } from "@/lib/site-data";

/**
 * Figma 54:8091 + 143:336 — four value cards on a 1220px row that is inset a
 * further 30px from the page margin the rest of the page uses. Each icon is an
 * alpha-mask bitmap tinted bg-1 on the navy disc, and its box differs per card.
 */
export function CoreValues() {
  return (
    <section className="pb-[109px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <h2 className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Our Core Values
        </h2>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1440px] px-5 sm:px-8 lg:px-[110px]">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <li
              key={value.title}
              className="flex flex-col gap-4 rounded-[16px] bg-bg-1 p-7"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <span
                  aria-hidden="true"
                  className="mask-icon block bg-bg-1"
                  style={{
                    width: value.width,
                    height: value.height,
                    maskImage: `url(${value.icon})`,
                    WebkitMaskImage: `url(${value.icon})`,
                  }}
                />
              </span>

              <div className="flex flex-col gap-4">
                <h3 className="font-title text-[18px] leading-7 text-primary">
                  {value.title}
                </h3>
                <p className="text-[14px] leading-[22.75px] text-secondary">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
