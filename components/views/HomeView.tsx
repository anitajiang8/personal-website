"use client";

import { useState } from "react";
import { interests, profile, type Interest } from "@/content/site";
import DeskScene from "../scene/DeskScene";
import PhotoPanel from "../PhotoPanel";
import { Squiggle } from "../Doodles";

function Headline({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <h1 className="font-display text-[2.1rem] leading-[1.12] tracking-tight text-ink sm:text-5xl">
      {parts.map((part, i) =>
        part.startsWith("{") ? (
          <em key={i} className="mark-hand italic">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </h1>
  );
}

export default function HomeView() {
  const [open, setOpen] = useState<Interest | null>(null);

  return (
    <div className="mx-auto grid h-full max-w-5xl grid-cols-1 items-center gap-8 px-5 py-8 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-10 md:py-0">
      {/* Quick about-me, right where you land */}
      <div>
        {profile.status && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rule bg-paper-deep/60 px-3.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
            <span className="text-xs text-ink-soft">{profile.status}</span>
          </div>
        )}

        <Headline text={profile.headline} />

        <div className="mt-5 max-w-md space-y-2">
          {profile.blurb.map((line, i) => (
            <p key={i} className="text-[0.95rem] leading-relaxed text-ink-soft">
              {line}
            </p>
          ))}
        </div>

        <Squiggle className="mt-6 h-4 w-24 text-ink-faint/50" />

        <p className="mt-5 font-hand text-xl text-ink-soft">
          psst — click the things around me →
        </p>
      </div>

      {/* The illustration */}
      <div className="relative w-full">
        <DeskScene
          onSelect={(id) => {
            const found = interests.find((i) => i.id === id);
            if (found) setOpen(found);
          }}
        />
      </div>

      {open && <PhotoPanel interest={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
