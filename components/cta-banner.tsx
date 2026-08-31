import Image from "next/image";
import Link from "next/link";

/**
 * Figma 200:143 — 1280x220 banner. The artwork now carries its own light plate,
 * so the copy sits 64px in with no separate tinted rectangle behind it.
 */
export function CtaBanner({ className = "pb-[100px]" }: { className?: string }) {
  return (
    <section id="contact" className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[220px]">
          <Image
            src="/images/cta-scales.png"
            alt="Scales of justice and a gavel beside a stack of law books"
            fill
            sizes="(max-width: 1440px) 100vw, 1280px"
            className="object-cover"
          />

          <div className="relative px-6 py-10 sm:px-10 lg:px-16 lg:py-8">
            <div className="flex max-w-[628px] flex-col gap-4">
              <h2 className="font-title text-[24px] leading-[32px] text-primary lg:text-[32px] lg:leading-10">
                Ready to resolve your legal challenge?
              </h2>
              <p className="text-[16px] leading-6 text-secondary">
                Schedule a confidential consultation with one of our senior
                attorneys. No obligation. Plain-language advice from day one.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-[4px] bg-primary px-5 py-2 text-center text-[13px] leading-[19.5px] font-semibold text-bg-1 transition-colors hover:bg-secondary"
            >
              Consult Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
