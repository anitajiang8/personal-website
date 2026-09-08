# Personal portfolio

A scrapbook-flavoured portfolio. Warm paper background, serif display type,
hand-drawn doodles — but a clean layout underneath so it still reads as a
serious engineering portfolio.

It is **not a long scrolling page**. The site is one screen at a time: four
tabs (`hello · work · about · contact`) swap the view, and the landing screen
is an illustration of me surrounded by the things I enjoy — each object is
clickable and opens a panel of real photos.

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
| Name, headline, the landing blurb, status pill | `profile` |
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
app/page.tsx              tab state + hash sync; the app shell
components/TabNav.tsx     the four tabs
components/views/         one file per screen
components/scene/         the illustration and its clickable hotspots
components/Modal.tsx      shared overlay chrome (backdrop, esc, tape)
components/PhotoPanel     opens from a scene object
components/ProjectPanel   opens from a project card
```

Two things worth knowing before you edit the illustration:

- Each object's `id` in `DeskScene.tsx` must match an `id` in `interests`.
- Every hotspot carries a `hit` rectangle. SVG only hit-tests *painted*
  pixels, so without it you'd have to click exactly on a 2px stroke. If you
  move an object, move its `hit` box too.

Colours, fonts and the paper texture are Tailwind v4 theme tokens at the top
of [`app/globals.css`](app/globals.css). The font CSS variables are set on
`<html>` (not `<body>`) so the `@theme` block, which resolves at `:root`, can
see them. All motion is wrapped in a `prefers-reduced-motion` guard.

## Deploy

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables or configuration needed.
