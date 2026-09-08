import type { Project } from "@/content/site";
import { Arrow } from "./Doodles";

const accent = {
  blue: { chip: "bg-blue/10 text-blue", rule: "bg-blue", tape: "bg-blue/25" },
  coral: { chip: "bg-coral/10 text-coral", rule: "bg-coral", tape: "bg-coral/25" },
  butter: { chip: "bg-butter/20 text-[#9a7b12]", rule: "bg-butter", tape: "bg-butter/40" },
  sage: { chip: "bg-sage/15 text-[#5d7345]", rule: "bg-sage", tape: "bg-sage/30" },
  lilac: { chip: "bg-lilac/15 text-[#6b5aa0]", rule: "bg-lilac", tape: "bg-lilac/30" },
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const a = accent[project.accent];

  return (
    <article
      className="group relative rounded-lg border border-rule bg-paper p-6 pt-8 shadow-[0_1px_2px_rgba(33,31,28,0.04),0_8px_24px_-16px_rgba(33,31,28,0.25)] transition-[transform,box-shadow] duration-300 hover:z-10 hover:!rotate-0 hover:shadow-[0_2px_4px_rgba(33,31,28,0.05),0_18px_40px_-20px_rgba(33,31,28,0.3)] sm:p-7 sm:pt-9"
      style={{ transform: `rotate(${project.tilt}deg)` }}
    >
      {/* washi tape */}
      <span
        className={`tape ${a.tape} left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]`}
      />

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-3xl leading-none text-ink">
          {project.title}
        </h3>
        <span className="shrink-0 font-hand text-lg text-ink-faint">
          {project.year}
        </span>
      </div>

      <p className="mt-2 text-xs uppercase tracking-[0.11em] text-ink-faint">
        {project.role}
      </p>

      <span className={`mt-4 mb-4 block h-px w-10 ${a.rule} opacity-50`} />

      <p className="text-[0.95rem] leading-relaxed text-ink">{project.blurb}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {project.detail}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-full px-2.5 py-1 text-[0.7rem] font-medium ${a.chip}`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {(project.href || project.repo) && (
        <div className="mt-6 flex items-center gap-5">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="underline-sketch text-sm font-medium text-ink"
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
          <Arrow className="ml-auto h-6 w-9 text-ink-faint/0 transition-colors duration-300 group-hover:text-ink-faint/70" />
        </div>
      )}
    </article>
  );
}
