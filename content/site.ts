/* ─────────────────────────────────────────────────────────────
   ✏️  EDIT THIS FILE — it's the only one you need to touch.
   Everything on the site reads from here.
   ───────────────────────────────────────────────────────────── */

export const profile = {
  name: "Anita Jiang",
  // Shown in the browser tab + used for SEO
  title: "Anita Jiang — Software Engineer",
  // The big landing statement. Words wrapped in {curly braces} get the
  // handwritten highlight treatment. Keep it to ~12 words.
  headline: "Hi, I'm Anita — I build {thoughtful} software and make things {by hand}.",
  // The quick about-me under the headline. 2 short lines works best.
  blurb: [
    "Computer science student who codes like she sketches — iteratively, and with a lot of erasing.",
    "Currently looking for Summer 2027 software engineering internships.",
  ],
  // Little status pill in the nav. Set to null to hide it.
  status: "Open to SWE internships",
  location: "Toronto, ON",
  resumeUrl: "/resume.pdf", // drop resume.pdf into /public
};

export const links = {
  email: "anitaa.jiang@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

/* ─────────────────────────────────────────────────────────────
   PROJECTS
   accent: "blue" | "coral" | "butter" | "sage" | "lilac"
   tilt:   small rotation in degrees, keeps the scrapbook feel (-2 to 2)
   ───────────────────────────────────────────────────────────── */

export type Project = {
  title: string;
  year: string;
  role: string;
  blurb: string;
  detail: string;
  tags: string[];
  accent: "blue" | "coral" | "butter" | "sage" | "lilac";
  tilt: number;
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "nutri.ai",
    year: "2026",
    role: "Full-stack · Hack the Valley",
    blurb:
      "Scan a barcode, get an allergy-aware read on whether a food is safe for your family.",
    detail:
      "Built a live barcode scanner with an on-device decode loop, then layered an LLM assistant on top that knows each family member's allergies, age and dietary flags.",
    tags: ["Next.js", "TypeScript", "Claude API", "OpenFoodFacts"],
    accent: "sage",
    tilt: -1.5,
    repo: "https://github.com/yourusername/nutri-ai",
    featured: true,
  },
  {
    title: "Placeholder Project Two",
    year: "2025",
    role: "Backend · Personal",
    blurb:
      "One sentence on what it does and who it's for. Lead with the outcome, not the stack.",
    detail:
      "Two sentences on the interesting engineering problem. What was hard, what you chose, and what it cost you. Recruiters skim the blurb and read this one if they're curious.",
    tags: ["Python", "FastAPI", "Postgres", "Redis"],
    accent: "coral",
    tilt: 1.2,
    repo: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    title: "Placeholder Project Three",
    year: "2025",
    role: "Frontend · Course project",
    blurb:
      "Another one-liner. Vary the verbs — built, shipped, designed, reverse-engineered.",
    detail:
      "Mention scale or numbers if you have them: 'handled 40k requests in the demo window' beats 'was performant'.",
    tags: ["React", "D3", "Node"],
    accent: "blue",
    tilt: -0.8,
    href: "https://example.com",
  },
  {
    title: "Placeholder Project Four",
    year: "2024",
    role: "Systems · Class of 2024",
    blurb: "Smaller projects still earn a card. Keep the blurb to one line.",
    detail:
      "If a project is old or small, it's fine to leave detail short. Delete this project entirely if you'd rather show three strong ones than four uneven ones.",
    tags: ["C", "Rust"],
    accent: "butter",
    tilt: 1.8,
    repo: "https://github.com/yourusername/project-four",
  },
];

/* ─────────────────────────────────────────────────────────────
   THINGS I ENJOY
   Each one is a clickable object in the desk illustration on the
   landing page. Clicking it opens a photo panel.

   `id` must match a hotspot id in components/scene/DeskScene.tsx.

   PHOTOS: drop files into public/photos/<id>/ and list them here.
   A listed file that doesn't exist degrades to a sketch tile rather
   than a broken image, so it's safe to add these before the photos.
   ───────────────────────────────────────────────────────────── */

export type Photo = { src: string; caption?: string };

export type Interest = {
  id: "cooking" | "fashion" | "crafts" | "sketching" | "code";
  label: string;
  tagline: string;
  blurb: string;
  photos: Photo[];
};

export const interests: Interest[] = [
  {
    id: "cooking",
    label: "Cooking",
    tagline: "batch eleven",
    blurb:
      "Chasing the perfect chili oil. I keep notes on every batch like it's a lab notebook, which tells you most of what you need to know about me.",
    photos: [
      { src: "/photos/cooking/1.jpg", caption: "batch eleven, finally right" },
      { src: "/photos/cooking/2.jpg", caption: "dumplings, group effort" },
      { src: "/photos/cooking/3.jpg", caption: "the notebook" },
    ],
  },
  {
    id: "fashion",
    label: "Fashion",
    tagline: "thrift, alter, repeat",
    blurb:
      "Most of my closet has been re-hemmed at least once. I like clothes for the same reason I like interfaces — the construction is invisible when it's done well.",
    photos: [
      { src: "/photos/fashion/1.jpg", caption: "before and after" },
      { src: "/photos/fashion/2.jpg", caption: "thrifted, taken in" },
    ],
  },
  {
    id: "crafts",
    label: "Ceramics",
    tagline: "charmingly lopsided",
    blurb:
      "Weekends at the wheel. Everything I make is slightly off-centre and I've made peace with it — you can't refactor a bowl once it's fired.",
    photos: [
      { src: "/photos/crafts/1.jpg", caption: "first mug that survived" },
      { src: "/photos/crafts/2.jpg", caption: "glaze tests" },
      { src: "/photos/crafts/3.jpg", caption: "the lopsided one" },
    ],
  },
  {
    id: "sketching",
    label: "Drawing",
    tagline: "always a notebook",
    blurb:
      "I sketch interfaces before I build them, and I sketch things that aren't interfaces too. Every doodle on this site is one of mine.",
    photos: [
      { src: "/photos/sketching/1.jpg", caption: "wireframes for this site" },
      { src: "/photos/sketching/2.jpg", caption: "life drawing" },
    ],
  },
  {
    id: "code",
    label: "Building",
    tagline: "what I do most",
    blurb:
      "Mostly TypeScript and Python. I like the part where a messy idea turns into something someone else can actually use.",
    photos: [],
  },
];

/* A short, honest paragraph. This is the one place to sound like a person. */
export const aboutMe = [
  "I got into software the long way around — through art classes, sewing patterns and a lot of recipes that didn't work the first time. All of those turned out to be the same skill: make a version, look at it honestly, change one thing, go again.",
  "These days I write mostly TypeScript and Python. I care about interfaces that don't make people feel stupid, code that the next person can read, and shipping the thing instead of polishing it forever.",
];
