import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/site-data";

const partnerSocials = [
  { name: "LinkedIn", icon: "/icons/social/linkedin.png" },
  { name: "Twitter", icon: "/icons/social/twitter.png" },
];

/**
 * Figma 54:7540 + 88:33xx — four 296x303 portrait plates with the name block
 * beneath and two 32px navy social glyphs.
 */
export function Partners({ className = "pb-[100px]" }: { className?: string }) {
  return (
    <section id="people" className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <h2 className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Meet the partners
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="relative aspect-[296/303] w-full overflow-hidden rounded-[16px] shadow-portrait">
                <Image
                  src={partner.photo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 296px"
                  className={`absolute max-w-none object-cover ${partner.crop}`}
                />
              </div>

              <h3 className="font-title mt-6 text-center text-[20px] leading-7 text-primary">
                {partner.name}
              </h3>
              <p className="mt-2 text-center text-[16px] leading-5 text-secondary">
                {partner.role}
              </p>
              <p className="mt-2 text-center text-[16px] leading-5 text-secondary">
                {partner.expertise}
              </p>

              <div className="mt-4 flex items-center gap-5">
                {partnerSocials.map((social) => (
                  <Link
                    key={social.name}
                    href="#people"
                    aria-label={`${partner.name} on ${social.name}`}
                    className="mask-icon block size-8 bg-primary transition-colors hover:bg-accent"
                    style={{
                      maskImage: `url(${social.icon})`,
                      WebkitMaskImage: `url(${social.icon})`,
                    }}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
