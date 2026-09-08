"use client";

import type { Project } from "@/content/site";
import Modal from "./Modal";
import { accentClasses } from "./accent";

export default function ProjectPanel({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const a = accentClasses[project.accent];

  return (
    <Modal label={project.title} onClose={onClose}>
      <p className="font-hand text-xl text-ink-faint">{project.year}</p>
      <h2 className="mt-1 font-display text-4xl text-ink">{project.title}</h2>
      <p className="mt-2 text-xs uppercase tracking-[0.11em] text-ink-faint">
        {project.role}
      </p>

      <span className={`mt-5 mb-5 block h-px w-12 ${a.rule} opacity-50`} />

      <p className="text-[1rem] leading-relaxed text-ink">{project.blurb}</p>
      <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">
        {project.detail}
      </p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-full px-2.5 py-1 text-[0.72rem] font-medium ${a.chip}`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {(project.href || project.repo) && (
        <div className="mt-7 flex items-center gap-5">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              live site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="underline-sketch text-sm font-medium text-ink-soft"
            >
              source
            </a>
          )}
        </div>
      )}
    </Modal>
  );
}
