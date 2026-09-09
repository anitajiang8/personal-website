"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/site";
import ProjectPanel from "../ProjectPanel";
import { accentClasses } from "../accent";
import Spread, { CheckLine } from "../paper/Spread";
import { BulldogClip } from "../paper/Hardware";
import { Tape, Sticker } from "../paper/Decor";
import { Highlighted, HandNote } from "../paper/Annotation";
import { Star } from "../Doodles";

const tint = {
  blue: "text-blue",
  coral: "text-coral",
  butter: "text-butter",
  sage: "text-sage",
  lilac: "text-lilac",
} as const;

const highlight = {
  blue: "var(--color-blue)",
  coral: "var(--color-coral)",
  butter: "var(--color-butter)",
  sage: "var(--color-sage)",
  lilac: "var(--color-lilac)",
} as const;

function ProjectEntry({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const a = accentClasses[project.accent];

  return (
    <button
      onClick={onOpen}
      style={{ transform: `rotate(${project.tilt}deg)` }}
      className="pinned group relative w-full rounded-[3px] border border-rule bg-paper px-5 pb-5 pt-8 text-left shadow-[0_1px_2px_rgba(33,31,28,0.05),0_10px_24px_-18px_rgba(33,31,28,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-faint"
    >
      <BulldogClip
        className={`absolute -top-3 left-1/2 h-8 w-11 -translate-x-1/2 ${tint[project.accent]}`}
      />

      <CheckLine>
        <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="font-display text-xl leading-none text-ink">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.1em] text-ink-faint">
            {project.year}
          </span>
        </span>
      </CheckLine>

      <p className="mt-2.5 pl-[1.3rem] font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-faint">
        {project.role}
      </p>

      <span
        className={`mb-3 mt-3 ml-[1.3rem] block h-px w-8 ${a.rule} opacity-60`}
      />

      <p className="pl-[1.3rem] text-[0.88rem] leading-relaxed text-ink-soft">
        {project.blurb}
      </p>

      <ul className="mt-4 flex flex-wrap gap-x-2.5 gap-y-2 pl-[1.3rem]">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag} className="text-[0.72rem] text-ink-soft">
            <Highlighted color={highlight[project.accent]}>{tag}</Highlighted>
          </li>
        ))}
      </ul>
    </button>
  );
}

export default function WorkView() {
  const [open, setOpen] = useState<Project | null>(null);

  /* Split the entries down the middle so both pages of the spread fill. */
  const half = Math.ceil(projects.length / 2);
  const pages = [projects.slice(0, half), projects.slice(half)];

  return (
    <>
      <Spread
        topic={`selected work · ${projects.length} ${projects.length === 1 ? "thing" : "things"}`}
        decor={
          <>
            <Tape
              variant="check"
              color="rgba(195,217,176,0.55)"
              rotate={-7}
              className="-left-4 -top-3 h-7 w-24"
            />
            <Tape
              variant="stripe"
              color="rgba(245,228,168,0.6)"
              rotate={6}
              className="-right-4 -top-2 h-7 w-20"
            />
            <Sticker
              className="absolute bottom-8 right-8 hidden h-10 w-10 md:inline-flex"
              rotate={10}
            >
              <Star className="h-5 w-5 text-butter-ink" />
            </Sticker>
          </>
        }
        left={
          <div className="flex flex-col gap-8">
            <HandNote rotate={-1.5} arrow="right">
              click a card to read the whole story
            </HandNote>
            {pages[0].map((p) => (
              <ProjectEntry key={p.title} project={p} onOpen={() => setOpen(p)} />
            ))}
          </div>
        }
        right={
          <div className="flex flex-col gap-8 md:pt-16">
            {pages[1].map((p) => (
              <ProjectEntry key={p.title} project={p} onOpen={() => setOpen(p)} />
            ))}
          </div>
        }
      />

      {open && <ProjectPanel project={open} onClose={() => setOpen(null)} />}
    </>
  );
}
