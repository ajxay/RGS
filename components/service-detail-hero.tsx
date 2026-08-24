import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { serviceDetail } from "@/lib/site-data";

/**
 * Figma 85:1821 + 54:8901 — the 1280x480 plate again, this time with an
 * untinted photo: the image itself is dark enough on the left to carry text.
 */
export function ServiceDetailHero() {
  return (
    <section className="pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="relative overflow-hidden rounded-[16px] lg:h-[480px]">
          <Image
            src="/images/service-hero-books.png"
            alt="Law volumes titled GST, Customs, Excise and Service Tax beside a globe and scales"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
            className="absolute top-[-29.81%] left-0 h-[150.08%] w-full max-w-none object-cover"
          />

          <div className="relative flex flex-col items-start justify-center px-6 py-20 sm:px-10 lg:h-full lg:px-12 lg:py-0">
            <p className="text-[12px] leading-[15px] font-semibold tracking-[2px] text-accent uppercase">
              {serviceDetail.eyebrow}
            </p>

            {/* 155px frame around a 108px text box — 16px above, 31px below */}
            <h1 className="font-title max-w-[569px] pt-4 pb-[31px] text-[28px] leading-[38px] text-bg-1 sm:text-[34px] sm:leading-[46px] lg:text-[40px] lg:leading-[54px]">
              {serviceDetail.titleLead}
              <br />
              <span className="text-accent">{serviceDetail.titleAccent}</span>
            </h1>

            <Link
              href="/#contact"
              className="flex h-[65px] w-fit items-center gap-2 rounded-[10px] bg-accent px-7 text-center text-[14px] leading-5 font-semibold text-bg-1 transition-opacity hover:opacity-90"
            >
              Free Consultation
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
