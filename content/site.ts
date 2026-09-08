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
   OFF THE CLOCK — the character section.
   This is what makes the site yours. Keep the captions specific;
   "I dye fabric with avocado pits" lands, "I like crafts" doesn't.
   ───────────────────────────────────────────────────────────── */

export const offTheClock = [
  {
    label: "Cooking",
    caption: "Chasing the perfect chili oil. Currently on batch eleven.",
    doodle: "bowl",
    tilt: -3,
  },
  {
    label: "Fashion",
    caption: "Thrift, alter, repeat. Most of my closet has been re-hemmed.",
    doodle: "hanger",
    tilt: 2,
  },
  {
    label: "Crafts",
    caption: "Ceramics on weekends. Everything I make is slightly lopsided.",
    doodle: "spark",
    tilt: -2,
  },
  {
    label: "Design",
    caption: "I designed this site before I built it. Figma file on request.",
    doodle: "pen",
    tilt: 3,
  },
];

/* A short, honest paragraph. This is the one place to sound like a person. */
export const aboutMe = [
  "I got into software the long way around — through art classes, sewing patterns and a lot of recipes that didn't work the first time. All of those turned out to be the same skill: make a version, look at it honestly, change one thing, go again.",
  "These days I write mostly TypeScript and Python. I care about interfaces that don't make people feel stupid, code that the next person can read, and shipping the thing instead of polishing it forever.",
];
