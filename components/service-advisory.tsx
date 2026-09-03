import Image from "next/image";
import type { ServiceDetailContent } from "@/lib/site-data";

/**
 * Figma 54:9069… (Indirect) and 202:233… (Direct) — the copy column sits flush
 * on the 80px page margin with no padded container, beside the library photo.
 */
/** Pages whose Figma frame hasn't been picked up yet keep the library shot. */
const fallbackImage = {
  src: "/images/about-law-library.png",
  alt: "Law library shelves behind a reading table",
  width: 3000,
  height: 2089,
  className:
    "absolute top-0 left-[-0.34%] h-full w-[100.36%] max-w-none object-cover",
};

export function ServiceAdvisory({
  detail,
  className = "pb-[96px]",
  headingWidth = "max-w-[523px]",
  bodyWidth = "max-w-[619px]",
}: {
  detail: ServiceDetailContent;
  className?: string;
  headingWidth?: string;
  bodyWidth?: string;
}) {
  const image = detail.advisory.image ?? fallbackImage;

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch">
          <div className="flex flex-col justify-center lg:min-h-[434px] lg:min-w-0 lg:flex-1 fig:h-[434px] fig:w-[619px] fig:flex-none">
            <h2
              className={`font-title ${headingWidth} pb-5 text-[28px] leading-[36px] text-ink lg:text-[32px] lg:leading-10`}
            >
              {detail.advisory.heading}
            </h2>

            <p className={`${bodyWidth} pb-5 text-[16px] leading-6 text-ink-soft`}>
              {detail.advisory.body}
            </p>

            <ul>
              {detail.advisory.points.map((point, index) => (
                <li
                  key={point}
                  className={`flex items-start gap-2 ${index > 0 ? "pt-4" : ""}`}
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
                  <span className="text-[16px] leading-6 text-ink-soft fig:whitespace-nowrap">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[621/434] w-full overflow-hidden rounded-[16px] lg:h-auto lg:min-w-0 lg:flex-1 fig:h-[434px] fig:w-[621px] fig:flex-none">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1440px) 621px, (min-width: 1024px) 50vw, 100vw"
              className={image.className}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
