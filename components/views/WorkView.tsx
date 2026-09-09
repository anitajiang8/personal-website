"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/site";
import ProjectPanel from "../ProjectPanel";
import { accentClasses } from "../accent";
import { BulldogClip } from "../paper/Hardware";
import { Tape, Sticker } from "../paper/Decor";
import { Star } from "../Doodles";

const tint = {
  blue: "text-blue",
  coral: "text-coral",
  butter: "text-butter",
  sage: "text-sage",
  lilac: "text-lilac",
} as const;

export default function WorkView() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col px-5 py-6 sm:px-6">
      <div className="sheet relative mx-auto flex w-full flex-1 flex-col rounded-sm p-6 sm:p-8">
        <Tape variant="check" color="rgba(157,184,132,0.38)" rotate={-7} className="-left-5 top-10 h-7 w-24" />
        <Tape variant="stripe" color="rgba(240,205,99,0.45)" rotate={6} className="-right-5 top-24 h-7 w-20" />
        <Sticker className="absolute -right-3 bottom-10 hidden h-10 w-10 md:inline-flex" rotate={10}>
          <Star className="h-5 w-5 text-butter" />
        </Sticker>

        <div className="meta-rule flex shrink-0 items-baseline justify-between gap-4 pb-2.5">
          <p className="font-hand text-lg text-ink-faint">
            selected work{" "}
            <span className="text-ink-soft">
              · {projects.length} {projects.length === 1 ? "thing" : "things"}
            </span>
          </p>
          <p className="font-hand text-lg text-ink-faint">
            click a card to read more
          </p>
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2">
          {projects.map((project) => {
            const a = accentClasses[project.accent];
            return (
              <button
                key={project.title}
                onClick={() => setOpen(project)}
                style={{ transform: `rotate(${project.tilt}deg)` }}
                className="pinned group relative rounded-[3px] border border-rule bg-paper px-5 pb-5 pt-7 text-left shadow-[0_1px_2px_rgba(33,31,28,0.05),0_10px_24px_-18px_rgba(33,31,28,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-faint"
              >
                <BulldogClip
                  className={`absolute -top-3 left-1/2 h-8 w-11 -translate-x-1/2 ${tint[project.accent]}`}
                />

                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl leading-none text-ink">
                    {project.title}
                  </h3>
                  <span className="shrink-0 font-hand text-base text-ink-faint">
                    {project.year}
                  </span>
                </div>

                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.11em] text-ink-faint">
                  {project.role}
                </p>

                <span className={`mt-3 mb-3 block h-px w-8 ${a.rule} opacity-50`} />

                <p className="text-[0.88rem] leading-relaxed text-ink-soft">
                  {project.blurb}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li
                      key={tag}
                      className={`rounded-full px-2 py-0.5 text-[0.65rem] font-medium ${a.chip}`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>

      {open && <ProjectPanel project={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
