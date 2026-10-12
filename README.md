# 2e11.com

The 2e11 marketing site — Next.js (App Router) + TypeScript + Tailwind CSS v4,
built from the "editorial" brand package (paper/ink/signal-orange,
Archivo + IBM Plex Mono, the `2e11` wordmark with the line at ten and the
eleven raised through it).

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build && npm run start` for a
production build.

## Where things live

- `content.ts` — all copy. Every bracketed placeholder (`[city]`,
  `[Founder name]`, `[email]`, `[Instagram]`, `[SoundCloud]`,
  `[ONE-LINE DESCRIPTION OF CLRFY]`, `[ONE-LINE DESCRIPTION OF FOH]`,
  `[Client project]`, `[Release title]`, etc.) is kept exactly as supplied —
  search for `[` to find them all before launch.
- `app/globals.css` — the brand tokens (colour, type, layout, grain) mapped
  into the Tailwind theme, plus the `.display` / `.label` utility classes
  used everywhere for the two type voices.
- `components/Logo.tsx` / `LogoIcon.tsx` — the wordmark (route B, "over the
  line") and the icon (route E). `/dev/logo` (not linked anywhere) shows
  every size and colourway for review.
- `components/VolumeType.tsx` — the signature interaction: a sticky ~200vh
  section where page scroll drives the headline's variable-font weight/width
  from a whisper to the full brand voice, flipping to ink/white at 11. Also
  exposes 0–11 buttons for keyboard users (they scroll to the matching
  point in the section). Reduced-motion users get the static level-11 state.
- `components/ScaleRuler.tsx` — the 0–11 ruler under the hero; the orange
  marker tracks whole-page scroll progress.
- `public/images/brand/` — the founder photography. The three cut-outs
  (`founder-hero-studio-cutout.png`, `founder-vest-cutout.png`,
  `founder-portrait-cutout.png`) are PNG masters, not the `.webp` versions —
  Next's image optimizer needs the PNG source for these to rasterize
  correctly at large sizes; the two full-frame shots
  (`founder-portrait.webp`, `founder-studio.webp`) use the webp as supplied.
- `app/api/contact/route.ts` — accepts the contact form, logs and returns
  200 when `RESEND_API_KEY`/`CONTACT_TO` aren't set (so the form works
  end-to-end in any environment), sends via Resend when they are. See
  `.env.local.example`.

## Logo — before launch

The wordmark and icon in `components/Logo.tsx` / `LogoIcon.tsx` are a coded
interim, tuned visually at 20/32/40/64/120/300px (see `/dev/logo`). Before
launch, have both **redrawn as outlined vector artwork** by a designer: line
exactly on the cap height of the 2, spacing adjusted by eye, and a hinted
favicon version for 16–32px.

## Known tension: brand orange vs. WCAG contrast

The brand's signal orange (`#FF4D17`) on the paper ground (`#ECE7DC`) sits at
a 2.69:1 contrast ratio — just under the 3:1 WCAG AA threshold for large
text, as used for the wordmark's "11", the hero's "ELEVEN", and the large
background numerals. This is a property of the two colours as specified in
`brand/tokens.css`, not a bug in the implementation — the token file itself
already carves out `--signal-text` (`#C2360A`) as the AA-safe substitute for
*small* orange text on paper, which is used throughout for labels and ticks.
Worth flagging to the brand owner if strict AA compliance on the large
display type matters for this launch; fixing it means either darkening the
orange or accepting the shortfall as a deliberate brand choice.

## Quality bar (checked)

- Responsive 375–1920px, no horizontal scroll.
- `prefers-reduced-motion` respected: hero entrance, VolumeType (shows the
  static level-11 state), and the footer stamp's rotation.
- Lighthouse (production build, mobile): Performance 90, Accessibility 96,
  Best Practices 100, SEO 100.
- OG image generated with `next/og` (logo lockup + the vest cut-out, on the
  giant orange 11).

## Deploy

Auto-deploys to Vercel from `main`. Env vars: `RESEND_API_KEY`,
`CONTACT_TO`, `NEXT_PUBLIC_SITE_URL` (see `.env.local.example`).
