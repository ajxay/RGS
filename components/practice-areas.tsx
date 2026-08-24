import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/icons";
import { practiceAreas } from "@/lib/site-data";

type PracticeAreasProps = {
  /** Outer section spacing — the two artboards frame this block differently. */
  className?: string;
  /** `h1` on the services page, where this is the page's own title. */
  headingLevel?: "h1" | "h2";
  /** Distance from the heading to the card grid. */
  headingSpacing?: string;
  /** Services page sets a tighter 24px card-title leading (88:3420). */
  titleLeading?: string;
};

/**
 * Figma 141:9 (homepage) and 80:770 (services) — the same 4x2 grid of 290px
 * cards on the off-white plate, under an "Areas of Practice" heading.
 */
export function PracticeAreas({
  className = "pt-[113px] pb-[100px]",
  headingLevel: Heading = "h2",
  headingSpacing = "mt-10",
  titleLeading = "leading-7",
}: PracticeAreasProps) {
  return (
    <section id="practice-areas" className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <Heading className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Areas of Practice
        </Heading>

        <ul
          className={`${headingSpacing} grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {practiceAreas.map((area) => (
            <li
              key={area.title}
              className="flex flex-col gap-4 rounded-[16px] bg-bg-1 px-4 pt-4 pb-10"
            >
              <Image
                src={area.icon}
                alt=""
                width={56}
                height={56}
                className="size-14"
              />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3
                    className={`font-title text-[20px] ${titleLeading} text-primary`}
                  >
                    {area.title}
                  </h3>
                  <p className="text-[14px] leading-5 text-secondary">
                    {area.description}
                  </p>
                </div>

                <Link
                  href={area.href}
                  className="flex h-[22px] w-fit items-center gap-2 border-b-[0.667px] border-primary pb-[2.667px] text-[14px] leading-5 font-medium text-primary transition-opacity hover:opacity-70"
                >
                  Learn More
                  <ChevronRight />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
