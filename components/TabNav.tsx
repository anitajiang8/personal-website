"use client";

import { profile } from "@/content/site";
import { Sparkle } from "./Doodles";

export const views = ["hello", "work", "about", "contact"] as const;
export type View = (typeof views)[number];

/* One divider colour per section, the way tabbed sketchbook dividers come in
   a pack. Spelled out in full so Tailwind can see each class. */
const tabTint: Record<View, { on: string; off: string }> = {
  hello: { on: "bg-coral text-ink", off: "bg-coral/25 text-ink-faint hover:bg-coral/45" },
  work: { on: "bg-blue text-ink", off: "bg-blue/25 text-ink-faint hover:bg-blue/45" },
  about: { on: "bg-sage text-ink", off: "bg-sage/25 text-ink-faint hover:bg-sage/45" },
  contact: { on: "bg-lilac text-ink", off: "bg-lilac/25 text-ink-faint hover:bg-lilac/45" },
};

export default function TabNav({
  active,
  onChange,
}: {
  active: View;
  onChange: (v: View) => void;
}) {
  return (
    <header className="shrink-0 border-b border-rule bg-paper/70 backdrop-blur-[2px]">
      <nav className="mx-auto flex max-w-6xl items-end justify-between gap-3 px-4 pt-3 sm:px-6">
        <button
          onClick={() => onChange("hello")}
          className="group mb-2.5 flex shrink-0 items-center gap-2"
          aria-label="Back to the start"
        >
          <Sparkle className="h-4 w-4 text-coral-ink transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-hand text-xl leading-none text-ink">
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
        </button>

        {/* Sketchbook divider tabs — the active one sits lower, as though
            that section has been pulled forward in the binder. */}
        <div className="flex items-end gap-1 self-end sm:gap-1.5" role="tablist">
          {views.map((v) => {
            const isActive = v === active;
            const t = tabTint[v];
            return (
              <button
                key={v}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(v)}
                className={`relative rounded-t-[7px] px-3 pb-2 font-display text-base leading-none transition-all sm:px-4 sm:text-lg ${
                  isActive ? `${t.on} pt-3` : `${t.off} pt-2`
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-faint`}
              >
                {v}
              </button>
            );
          })}
        </div>

        <a
          href={profile.resumeUrl}
          className="mb-2 shrink-0 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          resume
        </a>
      </nav>
    </header>
  );
}
