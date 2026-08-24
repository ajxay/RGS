import Image from "next/image";
import Link from "next/link";
import { ArrowRightSmall } from "@/components/icons";
import { articles } from "@/lib/site-data";

/**
 * Figma 54:7874… — a rail of 394px article cards. The frame clips its fourth
 * card at the viewport edge, so the row scrolls horizontally rather than wraps.
 */
export function Insights() {
  return (
    <section id="insights" className="pb-[100px]">
      <h2 className="font-title mx-auto w-full max-w-[1440px] px-5 text-center text-[28px] leading-[36px] text-primary sm:px-8 lg:px-20 lg:text-[32px] lg:leading-10">
        Articles &amp; case studies
      </h2>

      <div className="mx-auto mt-[59px] w-full max-w-[1440px]">
        {/* scroll-padding matches the gutter so snapping keeps the first card
            flush with the 80px page margin instead of jumping to the edge */}
        <ul className="rail flex snap-x snap-mandatory gap-10 overflow-x-auto scroll-px-5 px-5 pb-1 sm:scroll-px-8 sm:px-8 lg:scroll-px-20 lg:px-20">
          {articles.map((article, index) => (
            <li
              key={index}
              className="w-[394px] shrink-0 snap-start overflow-hidden rounded-[16px] border-[0.667px] border-hairline bg-white"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="394px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-[10px] leading-[15px] font-semibold text-white">
                  {article.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-title text-[14px] leading-[22px] text-primary">
                  {article.title}
                </h3>

                <div className="flex h-12 items-center justify-between py-4 text-[12px] leading-5 text-secondary">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>

                <div className="flex h-6 items-center">
                  <Link
                    href="#insights"
                    className="flex items-center gap-1.5 text-[12px] leading-4 font-semibold text-primary transition-opacity hover:opacity-70"
                  >
                    Read More
                    <ArrowRightSmall />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
