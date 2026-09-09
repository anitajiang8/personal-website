/* An open notebook: two pages with a binding seam down the middle.

   Every view is built on this. Below `md` the two pages stack into one
   continuous sheet and the seam is dropped — the collage inside each page is
   unchanged, it just runs in a single column. */

import type { ReactNode } from "react";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"] as const;

/* Mon=0 … Sun=6, matching the strip above. JS getDay() is Sun=0. */
function mondayIndex(d: Date) {
  return (d.getDay() + 6) % 7;
}

/** The meta strip at the top of a journal page: `date · 26 . 09 . 08` on the
    left, the day letters on the right with today's circled. */
export function SpreadHeader({
  topic,
  date = new Date(),
}: {
  topic: string;
  date?: Date;
}) {
  const yy = String(date.getFullYear()).slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const today = mondayIndex(date);

  return (
    <div className="shrink-0">
      <div className="meta-rule flex items-baseline justify-between gap-4 pb-2">
        <p className="font-mono text-[0.7rem] tracking-[0.12em] text-ink-faint">
          date <span className="text-ink-soft">{`${yy} . ${mm} . ${dd}`}</span>
        </p>

        <div className="flex items-center gap-1.5" aria-hidden>
          {DAYS.map((letter, i) => (
            <span
              key={i}
              className={`relative grid h-[1.15rem] w-[1.15rem] place-items-center font-mono text-[0.7rem] ${
                i === today ? "text-paper" : "text-ink-faint/70"
              }`}
            >
              {i === today && (
                <span className="absolute inset-0 rounded-full bg-coral-ink" />
              )}
              <span className="relative">{letter}</span>
            </span>
          ))}
        </div>
      </div>

      <p className="mt-2 font-mono text-[0.7rem] tracking-[0.12em] text-ink-faint">
        topic <span className="ml-1 font-hand text-lg text-ink-soft">{topic}</span>
      </p>
    </div>
  );
}

/** A `○` bullet line, the way a real bullet journal marks an entry. */
export function CheckLine({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`flex items-baseline gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="mt-[0.35em] h-[0.55rem] w-[0.55rem] shrink-0 rounded-full border-[1.5px] border-ink-faint/60"
      />
      <span className="min-w-0">{children}</span>
    </span>
  );
}

export default function Spread({
  topic,
  left,
  right,
  decor,
  className = "",
}: {
  topic: string;
  left: ReactNode;
  right: ReactNode;
  /* Tape, clips and stickers that belong to the whole spread. Positioned
     absolutely against the spread box by the caller. */
  decor?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-7 ${className}`}>
      <div className="sheet paper-grid relative rounded-sm">
        {decor}

        {/* The seam. Hidden while the pages are stacked. */}
        <div
          aria-hidden
          className="gutter pointer-events-none absolute inset-y-6 left-1/2 hidden w-10 -translate-x-1/2 md:block"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2">
          <section className="flex flex-col gap-5 px-5 py-6 sm:px-7 sm:py-8 md:pr-10">
            <SpreadHeader topic={topic} />
            {left}
          </section>

          <section className="flex flex-col gap-5 border-t border-rule px-5 py-6 sm:px-7 sm:py-8 md:border-l-0 md:border-t-0 md:pl-10">
            {right}
          </section>
        </div>
      </div>
    </div>
  );
}
