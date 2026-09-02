import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { consultationChannels, matterOptions } from "@/lib/site-data";

const glyphs = {
  phone: PhoneIcon,
  mail: MailIcon,
  pin: MapPinIcon,
};

const fieldClass =
  "h-[45.333px] w-full rounded-[2px] border-[0.667px] border-white/12 bg-white/5 px-[16.667px] py-[12.667px] text-[14px] text-white outline-none placeholder:text-white/20 focus:border-accent";

const labelClass =
  "pb-2 text-[11px] leading-[16.5px] font-medium tracking-[0.275px] text-bg-1";

/**
 * Figma 54:8435 + 54:8804 — a full-bleed navy band holding a 551px copy column
 * and a 551px translucent form panel, 96px apart. Both are pinned to 551px at
 * the artboard width: an even `flex-1` split would not reproduce it, because a
 * `flex-basis: 0` item still carries its own padding on top of its share, which
 * pushed the padded form to 592px and squeezed the copy to 510px.
 */
export function ContactConsultation() {
  return (
    <section id="consultation" className="bg-primary py-12">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1198px] flex-col gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col justify-center lg:min-w-0 lg:flex-1 fig:w-[551px] fig:flex-none">
            <h2 className="font-title max-w-[412px] text-[28px] leading-[36px] text-white lg:text-[32px] lg:leading-10">
              Schedule a consultation
            </h2>

            <p className="pt-4 text-[15px] leading-[24.375px] text-white/50">
              Our partners are available for an initial consultation. We will
              respond within one business day and match you with the right
              practitioner for your matter.
            </p>

            <ul className="pt-6">
              {consultationChannels.map((channel, index) => {
                const Glyph = glyphs[channel.icon];
                return (
                  <li
                    key={channel.label}
                    className={`flex items-start gap-4 ${index > 0 ? "pt-7" : ""}`}
                  >
                    <span className="flex items-start pt-0.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-[2px] border-[0.667px] border-white/12">
                        <Glyph className="size-[14px] text-accent" />
                      </span>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] leading-[16.5px] tracking-[0.275px] text-white/35">
                        {channel.label}
                      </span>
                      <span className="pt-0.5 text-[14px] leading-[22.75px] text-white">
                        {channel.value}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <form className="rounded-[2px] border-[0.667px] border-white/10 bg-white/5 p-6 sm:p-[40.667px] lg:min-w-0 lg:flex-1 fig:w-[551px] fig:flex-none">
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-5">
              <div className="flex flex-1 flex-col">
                <label htmlFor="full-name" className={labelClass}>
                  Full Name *
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  required
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="email-address" className={labelClass}>
                  Email Address *
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col pt-5">
              <label htmlFor="company" className={labelClass}>
                Company / Organisation
              </label>
              <input
                id="company"
                name="company"
                placeholder="Your company name"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col pt-5">
              <label htmlFor="matter" className={labelClass}>
                Nature of Matter *
              </label>
              <select
                id="matter"
                name="matter"
                required
                defaultValue=""
                className={`${fieldClass} bg-[#1c3959]`}
              >
                <option value="" disabled />
                {matterOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col py-5">
              <label htmlFor="description" className={labelClass}>
                Brief Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                placeholder="Briefly describe your legal matter..."
                className={`${fieldClass} h-[105.333px] resize-none leading-5`}
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-[2px] bg-accent text-center text-[14px] leading-5 font-medium tracking-[0.35px] text-bg-1 transition-opacity hover:opacity-90"
            >
              Submit Request
            </button>

            <p className="pt-5 text-center text-[11px] leading-[17.875px] text-bg-1">
              By submitting this form you agree to our privacy policy. Initial
              consultations are confidential and do not create an attorney-client
              relationship.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
