/* The receipt stub: monospace, dot leaders, torn bottom edge.

   This is the recruiter fast path. Everything factual — school, program,
   stack — lives here in plain scannable rows, inside something that still
   looks like it came off a till roll. */

import { education, links, profile, skills } from "@/content/site";
import { PaperClip } from "./Hardware";

/* A shallow zigzag along the bottom edge only, so the stub reads as torn off
   a roll rather than die-cut. Matches the tape treatment in Decor.tsx. */
const tornBottom =
  "polygon(0% 0%, 100% 0%, 100% 97%, 96% 100%, 92% 97%, 88% 100%, 84% 97%, 80% 100%, 76% 97%, 72% 100%, 68% 97%, 64% 100%, 60% 97%, 56% 100%, 52% 97%, 48% 100%, 44% 97%, 40% 100%, 36% 97%, 32% 100%, 28% 97%, 24% 100%, 20% 97%, 16% 100%, 12% 97%, 8% 100%, 4% 97%, 0% 100%)";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="shrink-0 text-ink-faint">{label}</span>
      <span aria-hidden className="dot-leader" />
      <span className="shrink-0 text-right text-ink-soft">{value}</span>
    </div>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[0.62rem] tracking-[0.18em] text-ink-faint">{label}</p>
      <p className="mt-1 leading-[1.7] text-ink-soft">{items.join(" · ")}</p>
    </div>
  );
}

export default function Receipt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <PaperClip className="absolute -top-4 right-6 z-10 h-10 w-5 text-blue-ink" />

      <div
        className="bg-white px-5 pb-7 pt-6 font-mono text-[0.72rem] shadow-[0_2px_5px_rgba(33,31,28,0.07),0_18px_38px_-24px_rgba(33,31,28,0.45)]"
        style={{ clipPath: tornBottom }}
      >
        <p className="text-center text-[0.95rem] font-bold tracking-[0.2em] text-ink">
          {profile.name.toUpperCase()}
        </p>
        <p className="mt-1 text-center text-[0.62rem] tracking-[0.16em] text-ink-faint">
          SOFTWARE ENGINEERING INTERN
        </p>

        <div aria-hidden className="my-4 border-t border-dashed border-ink-faint/40" />

        <div className="space-y-1.5">
          <Row label="SCHOOL" value={education.school} />
          <Row label="PROGRAM" value={education.program} />
          <Row label="STATUS" value={education.detail} />
          <Row label="BASED" value={profile.location} />
        </div>

        <div aria-hidden className="my-4 border-t border-dashed border-ink-faint/40" />

        <div className="space-y-3">
          <Block label="LANGUAGES" items={skills.languages} />
          <Block label="FRAMEWORKS" items={skills.frameworks} />
          <Block label="TOOLS" items={skills.tools} />
        </div>

        <div aria-hidden className="my-4 border-t border-dashed border-ink-faint/40" />

        <div className="flex items-center justify-between gap-3">
          <a
            href={profile.resumeUrl}
            className="underline-sketch text-[0.7rem] font-bold tracking-[0.1em] text-ink"
          >
            FULL RESUME →
          </a>
          <a
            href={`mailto:${links.email}`}
            className="underline-sketch text-[0.7rem] text-ink-soft"
          >
            {links.email}
          </a>
        </div>

        {/* The barcode strip a real receipt ends on. */}
        <div aria-hidden className="mt-5 flex h-8 items-end gap-[2px]">
          {/* Fixed pattern, not random — a random one would differ between the
              server and client render and trip a hydration mismatch. */}
          {[3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 2, 1, 3, 1, 2, 1, 1, 2, 3, 1, 2,
            1, 3, 2, 1, 1, 2].map((w, i) => (
            <span
              key={i}
              className="h-full bg-ink"
              style={{ width: `${w}px`, opacity: i % 3 === 0 ? 0.85 : 0.7 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
