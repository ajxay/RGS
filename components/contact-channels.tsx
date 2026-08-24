import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { contactChannels } from "@/lib/site-data";

const glyphs = {
  phone: PhoneIcon,
  mail: MailIcon,
  clock: ClockIcon,
};

/**
 * Figma 54:8570/8582/8595 — three 307.5px cards spread across a 1231.5px row,
 * each carrying a hairline on its own right edge rather than between columns.
 */
export function ContactChannels() {
  return (
    <section className="pt-12">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <ul className="mx-auto flex max-w-[1231.5px] flex-col gap-6 sm:flex-row sm:justify-between sm:gap-0">
          {contactChannels.map((channel, index) => {
            const Glyph = glyphs[channel.icon];
            return (
              <li
                key={channel.label}
                className={`flex items-center gap-3 py-6 pr-[25px] sm:w-[307.5px] lg:pl-6 ${
                  index < contactChannels.length - 1
                    ? "sm:border-r sm:border-[rgba(42,32,22,0.25)]"
                    : ""
                }`}
              >
                <span className="flex items-start pt-0.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[rgba(201,168,76,0.1)]">
                    <Glyph className="size-4 text-gold" />
                  </span>
                </span>

                <div className="flex flex-col">
                  <p className="text-[12px] leading-4 font-semibold tracking-[0.6px] text-gold uppercase">
                    {channel.label}
                  </p>
                  <p className="pt-1 text-[14px] leading-5 font-medium text-warm-ink">
                    {channel.primary}
                  </p>
                  <p className="text-[12px] leading-4 text-warm-muted">
                    {channel.secondary}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
