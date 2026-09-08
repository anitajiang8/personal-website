"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/site";
import ProjectPanel from "../ProjectPanel";
import { accentClasses } from "../accent";

export default function WorkView() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-5 py-8 sm:px-6 md:py-0">
      <div className="mb-6 flex flex-wrap items-end gap-3">
        <span className="rounded-full border border-ink/25 px-4 py-1.5 font-display text-lg leading-none text-ink">
          Selected work
        </span>
        <span className="font-hand text-lg text-ink-faint">
          click a card to read more
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const a = accentClasses[project.accent];
          return (
            <button
              key={project.title}
              onClick={() => setOpen(project)}
              style={{ transform: `rotate(${project.tilt}deg)` }}
              className="group relative rounded-lg border border-rule bg-paper p-5 pt-6 text-left shadow-[0_1px_2px_rgba(33,31,28,0.04),0_8px_24px_-16px_rgba(33,31,28,0.25)] transition-[transform,box-shadow] duration-300 hover:z-10 hover:!rotate-0 hover:shadow-[0_2px_4px_rgba(33,31,28,0.05),0_18px_40px_-20px_rgba(33,31,28,0.3)] focus-visible:z-10 focus-visible:!rotate-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-faint"
            >
              <span
                className={`tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px] ${a.tape}`}
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

      {open && <ProjectPanel project={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
