"use client";

import { profile } from "@/content/site";
import { Sparkle } from "./Doodles";

export const views = ["hello", "work", "about", "contact"] as const;
export type View = (typeof views)[number];

export default function TabNav({
  active,
  onChange,
}: {
  active: View;
  onChange: (v: View) => void;
}) {
  return (
    <header className="shrink-0 border-b border-rule">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <button
          onClick={() => onChange("hello")}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Back to the start"
        >
          <Sparkle className="h-4 w-4 text-coral transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-hand text-xl leading-none text-ink">
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
        </button>

        {/* Sketchbook divider tabs */}
        <div className="flex items-center gap-1 sm:gap-2" role="tablist">
          {views.map((v) => {
            const isActive = v === active;
            return (
              <button
                key={v}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(v)}
                className={`relative rounded-t-md px-3 py-1.5 font-display text-lg transition-colors sm:px-4 ${
                  isActive
                    ? "text-ink"
                    : "text-ink-faint hover:text-ink-soft"
                }`}
              >
                {v}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-ink" />
                )}
              </button>
            );
          })}
        </div>

        <a
          href={profile.resumeUrl}
          className="hidden shrink-0 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper transition-transform hover:-translate-y-0.5 sm:block"
        >
          resume
        </a>
      </nav>
    </header>
  );
}
