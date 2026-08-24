# RGS Legal

Next.js + Tailwind CSS implementation of the RGS Legal site from Figma
([file `LHywHs6phjR0WUqcnj0ZWb`](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal)).

| Route | Figma frame |
| --- | --- |
| `/` | [`54:7485` Homepage](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal?node-id=54-7485) |
| `/about` | [`54:8048` About Us](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal?node-id=54-8048) |
| `/partners` | [`116:3573` Partners](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal?node-id=116-3573) |
| `/services` | [`80:770` Our Services](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal?node-id=80-770) |
| `/services/indirect-taxation` | [`54:8875` Service Detail](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal?node-id=54-8875) |
| `/contact` | [`54:8434` Contact Us](https://www.figma.com/design/LHywHs6phjR0WUqcnj0ZWb/RGS-Legal?node-id=54-8434) |

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces the static production build.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — tokens declared in `app/globals.css` via `@theme`
- **next/font** — Libre Baskerville (titles) and DM Sans (body), the two families
  in the Figma type scale

## Design tokens

Pulled straight from the Figma variable collection:

| Token | Value | Figma name |
| --- | --- | --- |
| `primary` | `#032347` | Primary |
| `secondary` | `#344e6c` | Secondary |
| `accent` | `#b68a4c` | Accent |
| `bg-1` | `#fafaf8` | BG 1 |

The About page's advisory block is the one area that leaves the navy palette,
so `ink` (`#2a2118`), `ink-soft` (`#4a3f35`) and `check-bg` (`#f3ede4`) exist
only for it. The Contact page adds a second warm set — `gold` (`#c9a84c`),
`warm-ink`, `warm-muted` and `warm-panel` — for its channel strip and office
cards.

Figma's `Radius/*` and `Spacing/*` scales are kept in `:root` as `--fig-*` for
reference. They are deliberately **not** in `@theme`: Tailwind v4 treats the
`--radius-*` and `--spacing-*` namespaces as its own scales, so registering them
there silently rewrites every `p-*`, `gap-*` and `rounded-*` utility.

## Layout

```
app/
  layout.tsx          fonts + metadata
  page.tsx            homepage composition
  about/page.tsx      About Us composition
  partners/page.tsx   Partners composition
  services/page.tsx   Our Services composition
  services/indirect-taxation/page.tsx  Service Detail composition
  contact/page.tsx    Contact Us composition
  globals.css         tokens, base styles, rail + mask helpers
components/
  site-header.tsx     54:7487   sticky 68px bar          shared
  mobile-nav.tsx      (added)   disclosure menu below lg shared
  hero.tsx            106:3555 + 54:7511
  about-firm.tsx      141:10
  strategic-counsel.tsx 54:7778 navy strengths band
  practice-areas.tsx  141:9 + 80:770  4x2 practice grid    shared
  insights.tsx        54:7874…  horizontal article rail
  about-hero.tsx      73:8 + 54:8073   left-aligned hero plate
  about-stats.tsx     54:8277   four-cell stat plate
  tax-advisory.tsx    143:258 + 88:3187
  core-values.tsx     54:8091 + 143:336
  partner-profiles.tsx 116:3573  three full-width profile rows
  service-detail-hero.tsx 85:1821 + 54:8901
  service-overview.tsx 54:8961 + 54:8968
  service-list.tsx    54:9065 + 82:1467  3x3 offering grid
  service-advisory.tsx 54:9067 + 54:9097
  contact-hero.tsx    107:3559 + 54:8460
  contact-channels.tsx 54:8570/8582/8595
  contact-offices.tsx 54:8802 + 54:8608/8705
  contact-consultation.tsx 54:8435 + 54:8804  navy band + form
  tax-litigation.tsx  141:13 + 141:157                   shared
  partners.tsx        54:7540 + 88:33xx                  shared
  cta-banner.tsx      54:7954                            shared
  newsletter.tsx      54:7961                            shared
  site-footer.tsx     54:7973                            shared
  icons.tsx           line icons, geometry copied from the SVG exports
lib/site-data.ts      all page copy and per-card asset wiring
public/               images and icons exported from the Figma file
```

`practice-areas.tsx` serves both the homepage and the whole of `/services`,
where the same grid is the entire page body — it takes props for its spacing,
heading level and card-title leading, which is all that differs between the two
artboards.

The four shared body sections take their outer spacing as a `className` prop,
because the two artboards use different section rhythm around them (the About
page leaves 74px under the tax block and 199px above the newsletter, versus
138px and 100px on the homepage).

## Notes on fidelity

- Every icon, photo and logo is the asset exported from the Figma file. The
  arrow/chevron/contact glyphs are inlined in `components/icons.tsx` with their
  exact path data so a single asset can render in navy, white or accent.
- The hero, about and partner photos use the **per-node image transforms** from
  Figma (e.g. `h-[150.08%] top-[-39.81%]`) rather than a plain `object-cover`,
  which is what makes their crops match the design.
- The logo ships in three forms, all derived from the one exported bitmap:
  navy-on-transparent (header), white-on-transparent, and the navy-on-white
  plate the footer uses.
- The Figma frame is a fixed 1440px canvas. Below `lg` the same tokens drive a
  responsive stack, and the nav collapses into a menu — neither is specified in
  the file.
- Figma's sub-pixel strokes (`0.1px` solid black on the stat dividers, `0.2px`
  black at 50% on the tax tiles) both resolve to about 12.5% ink in its render.
  Browsers round the width up to a full pixel, so the implementation matches the
  alpha instead — sampled against the export, both land on `#dfdfdf`.
- Some Figma frames are shorter than their own contents (the row-2 practice
  cards, the strengths cards, the stat cells). The implementation gives them the
  padding the rest of the design uses, so the homepage renders ~37px taller than
  its 4753px artboard and `/services` ~23px taller than its 1648px one; About
  lands within 8px and Partners within 1px of theirs.
- The services artboard places its eight cards by hand rather than on a grid, so
  the columns drift by up to 16px and the rows by 2px. The implementation uses
  the even 4-column grid the homepage frame defines, which is plainly the intent.
- On the service detail page two rows sit on their own centred widths rather than
  flush with the 80px page margin — the Overview pair on 1238px (21px in each
  side) and the offerings grid on 1262px (9px in). Both are reproduced.
- That page's advisory column is a fixed 434px frame whose nominal 48px padding
  only holds horizontally; vertically it centres its content with roughly 23px
  clear. The implementation matches the frame rather than the stated padding, and
  keeps the longest bullet on one line at desktop as the design does — it runs to
  x=719 against the photo at x=739.
- The Contact hero needs Libre Baskerville's italic face, so the font is loaded
  with `style: ["normal", "italic"]`. Google ships 400/400i/700 but no bold
  italic, so "We're Here" is synthesised the same way Figma renders it.
- The Contact form's "Nature of Matter" control is drawn as an empty rectangle in
  Figma. It is built as a real `<select>`, which means the browser adds its own
  disclosure arrow — the one intentional visual addition on the page.
- The About and Partners artboards draw the header logo at 67x40 where the
  homepage draws it at 81x48. Since the bar is one shared component it keeps the
  homepage size everywhere.
- The Partners rows reuse the same three bitmaps and per-node crops as the
  homepage partner grid, so `partnerProfiles` derives from `partners` rather
  than re-declaring the image wiring. The difference on this page is that the
  shadow moves to the card and the portrait is left square-cornered.
