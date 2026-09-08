# Personal portfolio

A scrapbook-flavoured portfolio: warm paper background, serif display type,
hand-drawn doodles, and project cards taped down at slight angles — but a
clean, conventional layout underneath so it still reads as a serious
engineering portfolio.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind v4.

## Run it

```bash
npm run dev
```

Then open http://localhost:3000.

## Editing your content

**Almost everything lives in [`content/site.ts`](content/site.ts).** You should
not need to touch the components to keep the site up to date.

| What you want to change | Where |
| --- | --- |
| Name, headline, the landing blurb, status pill | `profile` |
| Email, GitHub, LinkedIn | `links` |
| Projects (add / remove / reorder) | `projects` |
| Hobby tiles under "Off the clock" | `offTheClock` |
| The two About paragraphs | `aboutMe` |

A few conventions:

- In `profile.headline`, any words wrapped in `{curly braces}` get the
  yellow highlighter treatment. Keep it to one or two phrases.
- Each project has an `accent` (`blue`, `coral`, `butter`, `sage`, `lilac`)
  which tints its tape and tech chips, and a `tilt` in degrees. Keep tilt
  between about -2 and 2 — the cards straighten on hover, and anything
  steeper starts to look messy rather than deliberate.
- Delete the `Placeholder Project` entries as you replace them. Three strong
  projects beat five uneven ones.

## Two files to drop in

Both are referenced but not committed, so add them before you share the link:

- `public/resume.pdf` — the nav and footer "resume" links point here.
- `public/me.jpg` — then, in [`components/About.tsx`](components/About.tsx),
  replace the placeholder `<div>` inside the polaroid with:
  ```tsx
  <img src="/me.jpg" alt="" className="h-full w-full object-cover" />
  ```

## Design system

Colours, fonts and the paper texture are defined as Tailwind v4 theme tokens
at the top of [`app/globals.css`](app/globals.css). The font CSS variables are
set on `<html>` (not `<body>`) so that the `@theme` block, which resolves at
`:root`, can actually see them.

Doodles are inline SVG in [`components/Doodles.tsx`](components/Doodles.tsx)
and inherit `currentColor`, so you can tint any of them with a text colour
class. They're hidden below the `md` breakpoint to keep phones uncluttered.

All motion is wrapped in a `prefers-reduced-motion` guard.

## Deploy

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables or configuration needed.
