/** Figma 54:7961 — accent strip between the CTA card and the footer. */
export function Newsletter() {
  return (
    <section className="border-b-[0.667px] border-white/[0.07] bg-accent">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 py-5 pr-5 pl-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:pr-[104px] lg:pl-20">
        <div className="flex flex-col gap-[3px]">
          <p className="font-title text-[20px] leading-6 text-bg-1">
            Subscribe to our newsletter
          </p>
          <p className="pt-1 text-[14px] leading-5 text-bg-1">
            Stay up to date with the latest legal updates
          </p>
        </div>

        <form
          className="flex w-full gap-2 md:w-[362.615px]"
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="h-[41.333px] min-w-0 flex-1 rounded-[4px] border-[0.667px] border-white/10 bg-bg-1 px-[16.667px] py-[10.667px] text-[14px] text-secondary outline-none placeholder:text-secondary focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            className="shrink-0 rounded-[4px] bg-primary px-5 py-[10px] text-center text-[12px] leading-4 font-semibold text-bg-1 transition-colors hover:bg-secondary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
