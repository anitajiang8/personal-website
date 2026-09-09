# Personal portfolio

A scrapbook-flavoured portfolio. Warm paper background, serif display type,
hand-drawn doodles — but a clean layout underneath so it still reads as a
serious engineering portfolio.

It is **not a long scrolling page**. The site is one screen at a time: four
tabs (`hello · work · about · contact`) swap the view. Each view is a sheet of
paper laid on a grid notebook background, held down with pastel bulldog clips,
push pins and paper clips.

The landing writes out "hi! I'm Anita" by hand on load, then settles in a
one-line intro, a sticky note and a row of pinned cards for the things I
enjoy — click one to open a panel of real photos.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind v4.

## Run it

```bash
npm run dev
```

Then open **http://localhost:3111**.

The dev script pins port 3111 on purpose: your nutri.ai app also runs on
Next's default port 3000, and if both are up, 3000 serves nutri.ai — not this
site. If a page loads but looks like the wrong project, check the port.

## Editing your content

**Almost everything lives in [`content/site.ts`](content/site.ts).**

| What you want to change | Where |
| --- | --- |
| The handwritten landing greeting | `profile.greeting` |
| Headline, the landing blurb, status pill | `profile` |
| Email, GitHub, LinkedIn | `links` |
| Projects (add / remove / reorder) | `projects` |
| The clickable objects and their photos | `interests` |
| The two About paragraphs | `aboutMe` |

Conventions:

- In `profile.headline`, words wrapped in `{curly braces}` get the yellow
  highlighter treatment. Keep it to one or two phrases.
- Each project has an `accent` (`blue`, `coral`, `butter`, `sage`, `lilac`)
  tinting its tape and tech chips, and a `tilt` in degrees — keep it between
  about -2 and 2. Cards straighten on hover; steeper just looks messy.
- Project cards show a short blurb. The longer `detail` appears in the panel
  that opens when the card is clicked, so it's fine to write a real paragraph.

## Adding your photos

This is the part that makes the landing screen yours.

1. Drop images into `public/photos/<id>/`, where `<id>` is one of
   `cooking`, `fashion`, `crafts`, `sketching`, `code`.
2. List them under that interest's `photos` in `content/site.ts`:
   ```ts
   photos: [{ src: "/photos/cooking/1.jpg", caption: "batch eleven" }],
   ```

A photo you've listed but not added yet shows a sketch tile naming the file it
expects, rather than a broken image — so it's safe to write the list first.
An interest with no photos at all shows a short "add some here" note.

Two other files are referenced but not committed:

- `public/resume.pdf` — the nav and contact "resume" links point here.
- `public/me.jpg` — then, in
  [`components/views/AboutView.tsx`](components/views/AboutView.tsx), replace
  the placeholder `<div>` inside the polaroid with:
  ```tsx
  <img src="/me.jpg" alt="" className="h-full w-full object-cover" />
  ```

## How it's put together

```
app/page.tsx               tab state + hash sync; the app shell
components/TabNav.tsx      the four tabs
components/views/          one file per screen
components/paper/Hardware  bulldog clips, paper clips, push pins
components/paper/Annotation the pen circle and the curved arrow
components/Doodles.tsx     the small hand-drawn icons
components/Modal.tsx       shared overlay chrome (backdrop, esc, tape)
components/PhotoPanel      opens from a pinned interest card
components/ProjectPanel    opens from a project card
```

The paper vocabulary lives in `app/globals.css`:

| Class | What it does |
| --- | --- |
| `.sheet` | a page sitting above the grid background |
| `.ruled` | writing lines, for journal-style blocks |
| `.sticky-note` | a note, weighted shadow at the bottom edge |
| `.meta-rule` | the date/topic strip at the top of a page |
| `.pinned` | straightens and lifts a tilted card on hover |

Which doodle and which piece of hardware each interest card gets is decided by
the `dressing` map at the top of
[`components/views/HomeView.tsx`](components/views/HomeView.tsx) — so adding an
interest to `site.ts` means adding one line there too.

Note the landing illustration was removed on purpose; there's room for a
hand-drawn one in the right-hand column of `HomeView` when you draw it.

Colours, fonts, the grid and the paper texture are Tailwind v4 theme tokens at
the top of [`app/globals.css`](app/globals.css). Two gotchas worth keeping:

- The font CSS variables are set on `<html>`, not `<body>`, so the `@theme`
  block — which resolves at `:root` — can see them.
- `.mark-hand` (the highlighter) sets `isolation: isolate`. Its highlight is a
  `z-index: -1` pseudo-element, which would otherwise paint *behind* an opaque
  parent like `.sheet` and disappear.

All motion is wrapped in a `prefers-reduced-motion` guard.

## Deploy

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables or configuration needed.


## The handwriting animation

`profile.greeting` is set in the Caveat face and revealed left to right by an
animated `clip-path` (`.write-in` in `globals.css`), with a small sparkle
"nib" travelling along the leading edge. Everything below it fades in
afterwards via `.settle` with staggered delays.

It stays real, selectable text — screen readers get the whole string
immediately, and the `prefers-reduced-motion` guard collapses it to an
instant reveal.

This is a *reveal* of handwriting-style type, not a true stroke-by-stroke
trace. If you want the pen to genuinely follow your own handwriting, letter
by letter, that needs single-stroke SVG path data: write the phrase, trace it
as paths, and animate `stroke-dashoffset` instead. Worth doing once you have
your own lettering — it would look better than a font.

## About the clips

The bulldog clips, paper clips and push pins are **drawn**, in
[`components/paper/Hardware.tsx`](components/paper/Hardware.tsx) — a base fill
in `currentColor` plus stacked white/black overlays for the highlight and the
shaded underside. That avoids `<defs>` gradient ids, so they never collide when
repeated and work from server components.

They are deliberately *not* the product photos from the moodboard — those are
branded ("Archive", "Penco") commercial photography and can't ship on a public
site. If you want photographic ones, get images you have the rights to, drop
them in `public/hardware/`, and replace a component's body with an `<img>`;
every call site passes sizing through `className`, so nothing else changes.

Decoration lives in [`components/paper/Decor.tsx`](components/paper/Decor.tsx):
`<Tape>` (variants `plain` / `stripe` / `dot` / `check`, with torn ends via
`clip-path`) and `<Sticker>` (a die-cut white disc for any doodle).
