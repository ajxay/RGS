"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

/**
 * The Figma file only specifies the 1440px bar, so below `lg` the same links
 * collapse into a disclosure panel using the design's own type and colours.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="flex size-10 items-center justify-center rounded-[4px] text-primary"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M5 5L17 17M17 5L5 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 6H19M3 11H19M3 16H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-b-[0.667px] border-black/[0.06] bg-white shadow-nav"
        >
          <nav aria-label="Primary" className="flex flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[16px] leading-[19.5px] font-medium text-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-[4px] bg-primary px-5 py-2 text-center text-[13px] leading-[19.5px] font-semibold text-bg-1"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
