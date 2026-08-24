/**
 * Line icons lifted from the Figma export. Geometry (viewBox, path data,
 * stroke width) is copied verbatim from the exported SVGs; the baked-in stroke
 * colour is swapped for `currentColor` so one asset can serve the navy, white
 * and accent placements the design uses.
 */

type IconProps = { className?: string };

/** Nav dropdown caret — Figma 54:7494, 12x12. */
export function ChevronDown({ className }: IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Inline link caret — Figma 54:7534 / 86:1855, 14x14. */
export function ChevronRight({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.25 10.5L8.75 7L5.25 3.5"
        stroke="currentColor"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Card / list caret — Figma 82:1485 and 54:8980, 16x16. */
export function ChevronRightMedium({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Button arrow — Figma 54:7522 / 86:2439, 16x16. */
export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3.33333 8H12.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.33333L12.6667 8L8 12.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** "Read More" arrow — Figma 54:7891, 12x12. */
export function ArrowRightSmall({ className }: IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.5 6H9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 2.5L9.5 6L6 9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Contact channel glyph — Figma 54:8598, 16x16. */
export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g clipPath="url(#rgs-clock-clip)">
        <path
          d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 4V8L10.6667 9.33333"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="rgs-clock-clip">
          <rect width="16" height="16" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Footer contact glyph — Figma 54:8013, 14x14. */
export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g clipPath="url(#rgs-phone-clip)">
        <path
          d="M12.8333 9.87V11.62C12.834 11.7825 12.8007 11.9433 12.7356 12.0921C12.6705 12.241 12.5751 12.3746 12.4554 12.4844C12.3357 12.5942 12.1943 12.6779 12.0404 12.7299C11.8865 12.782 11.7235 12.8013 11.5617 12.7867C9.76665 12.5916 8.04242 11.9783 6.5275 10.9958C5.11807 10.1002 3.92311 8.90527 3.0275 7.49583C2.04165 5.97404 1.42814 4.24141 1.23667 2.43833C1.22209 2.27702 1.24126 2.11444 1.29296 1.96095C1.34466 1.80745 1.42775 1.6664 1.53695 1.54678C1.64614 1.42716 1.77905 1.33158 1.92721 1.26614C2.07537 1.2007 2.23553 1.16682 2.3975 1.16667H4.1475C4.4306 1.16388 4.70505 1.26413 4.91969 1.44873C5.13434 1.63333 5.27454 1.88968 5.31417 2.17C5.38803 2.73004 5.52501 3.27992 5.7225 3.80917C5.80098 4.01796 5.81797 4.24487 5.77145 4.46301C5.72492 4.68116 5.61684 4.8814 5.46 5.04L4.71917 5.78083C5.54957 7.24123 6.75877 8.45043 8.21917 9.28083L8.96 8.54C9.1186 8.38316 9.31884 8.27508 9.53699 8.22855C9.75513 8.18203 9.98204 8.19902 10.1908 8.2775C10.7201 8.47499 11.27 8.61197 11.83 8.68583C12.1134 8.72581 12.3722 8.86854 12.5571 9.08687C12.7421 9.30521 12.8404 9.58392 12.8333 9.87Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="rgs-phone-clip">
          <rect width="14" height="14" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Footer contact glyph — Figma 54:8017, 14x14. */
export function MailIcon({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M11.6667 2.33333H2.33333C1.689 2.33333 1.16667 2.85567 1.16667 3.5V10.5C1.16667 11.1443 1.689 11.6667 2.33333 11.6667H11.6667C12.311 11.6667 12.8333 11.1443 12.8333 10.5V3.5C12.8333 2.85567 12.311 2.33333 11.6667 2.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 4.08333L7.60083 7.40833C7.42074 7.52117 7.21252 7.58101 7 7.58101C6.78748 7.58101 6.57926 7.52117 6.39917 7.40833L1.16667 4.08333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Footer contact glyph — Figma 54:8025, 14x14. */
export function MapPinIcon({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7.35058 12.7161C8.43558 11.7793 11.6667 8.74592 11.6667 5.83333C11.6667 4.59566 11.175 3.40867 10.2998 2.5335C9.42466 1.65833 8.23768 1.16667 7 1.16667C5.76232 1.16667 4.57534 1.65833 3.70017 2.5335C2.825 3.40867 2.33333 4.59566 2.33333 5.83333C2.33333 8.74592 5.56442 11.7793 6.64942 12.7161C6.75049 12.7921 6.87353 12.8332 7 12.8332C7.12647 12.8332 7.24951 12.7921 7.35058 12.7161Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.58333C7.9665 7.58333 8.75 6.79983 8.75 5.83333C8.75 4.86683 7.9665 4.08333 7 4.08333C6.0335 4.08333 5.25 4.86683 5.25 5.83333C5.25 6.79983 6.0335 7.58333 7 7.58333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
