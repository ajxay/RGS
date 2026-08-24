import Image from "next/image";
import Link from "next/link";
import { partnerProfiles } from "@/lib/site-data";

const partnerSocials = [
  { name: "LinkedIn", icon: "/icons/social/linkedin.png" },
  { name: "Twitter", icon: "/icons/social/twitter.png" },
];

/**
 * Figma 116:3573 — three 1280x351 profile cards. Unlike the homepage grid the
 * shadow sits on the card and the 296x303 portrait is left square-cornered.
 */
export function PartnerProfiles() {
  return (
    <section id="people" className="pt-[49px] pb-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <h1 className="font-title text-center text-[28px] leading-[36px] text-primary lg:text-[32px] lg:leading-10">
          Meet the partners
        </h1>

        <ul className="mt-12 flex flex-col gap-10">
          {partnerProfiles.map((partner, index) => (
            <li
              key={index}
              /* 24px inset all round except the right, where the Figma content
                 frame stops 20px short of the card edge */
              className="rounded-[16px] bg-white p-6 shadow-portrait lg:pr-5"
            >
              <article className="flex flex-col gap-6 sm:flex-row sm:items-center lg:gap-10">
                <div className="relative h-[303px] w-full overflow-hidden sm:w-[296px] sm:shrink-0">
                  <Image
                    src={partner.photo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    sizes="(max-width: 640px) 100vw, 296px"
                    className={`absolute max-w-none object-cover ${partner.crop}`}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-4">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-title text-[24px] leading-7 text-primary">
                        {partner.name}
                      </h2>
                      <p className="text-[24px] leading-7 text-secondary">
                        {partner.role}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-5">
                      {partnerSocials.map((social) => (
                        <Link
                          key={social.name}
                          href="#"
                          aria-label={`${partner.name} on ${social.name}`}
                          className="mask-icon block size-8 bg-primary transition-colors hover:bg-accent"
                          style={{
                            maskImage: `url(${social.icon})`,
                            WebkitMaskImage: `url(${social.icon})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="max-w-[891px] text-[14px] leading-[22px] text-ink-soft">
                    {partner.bio}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
