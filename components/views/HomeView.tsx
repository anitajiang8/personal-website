"use client";

import { useState } from "react";
import { interests, profile, type Interest } from "@/content/site";
import PhotoPanel from "../PhotoPanel";
import { BulldogClip, PushPin, PaperClip } from "../paper/Hardware";
import { Circled, CurvedArrow } from "../paper/Annotation";
import { doodleMap, type DoodleName, Sparkle } from "../Doodles";

/* Which doodle and which bit of hardware each card gets. Keeping this here
   rather than in site.ts means adding an interest never means picking a pin. */
const dressing: Record<
  Interest["id"],
  { doodle: DoodleName; pin: "clip" | "pin" | "paperclip"; tilt: number; tint: string }
> = {
  cooking: { doodle: "bowl", pin: "clip", tilt: -2.2, tint: "text-coral" },
  fashion: { doodle: "hanger", pin: "pin", tilt: 1.8, tint: "text-butter" },
  crafts: { doodle: "flower", pin: "paperclip", tilt: -1.4, tint: "text-lilac" },
  sketching: { doodle: "pen", pin: "pin", tilt: 2.4, tint: "text-blue" },
  code: { doodle: "spark", pin: "clip", tilt: -1.8, tint: "text-sage" },
};

function Headline({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <h1 className="font-display text-[2.1rem] leading-[1.14] tracking-tight text-ink sm:text-[2.9rem]">
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

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function HomeView() {
  const [open, setOpen] = useState<Interest | null>(null);

  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col px-5 py-6 sm:px-6">
      {/* flex-1 with the default min-height:auto lets the sheet fill a tall
          window but still grow to contain its content on a short one. */}
      <div className="sheet mx-auto flex w-full flex-1 flex-col rounded-sm p-6 sm:p-8">
        {/* ── journal meta strip ── */}
        <div className="meta-rule flex shrink-0 items-baseline justify-between gap-4 pb-2.5">
          <p className="font-hand text-lg text-ink-faint">
            portfolio <span className="text-ink-soft">· 2026</span>
          </p>
          <div className="flex items-center gap-1.5">
            {days.map((d, i) => (
              <span
                key={i}
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.62rem] ${
                  i === 2
                    ? "bg-coral/85 text-white"
                    : "text-ink-faint"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-3 shrink-0 font-hand text-lg text-ink-faint">
          topic — <span className="text-ink-soft">who I am, briefly</span>
        </p>

        {/* ── the spread ── */}
        <div className="mt-4 grid flex-1 grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] md:gap-10">
          {/* left: about me */}
          <div>
            <Headline text={profile.headline} />

            <div className="mt-5 max-w-md space-y-2.5">
              {profile.blurb.map((line, i) => (
                <p key={i} className="text-[0.93rem] leading-relaxed text-ink-soft">
                  {line}
                </p>
              ))}
            </div>

            {profile.status && (
              <div
                className="sticky-note mt-6 inline-block max-w-[15rem] rounded-[2px] px-4 py-3"
                style={{ transform: "rotate(-1.6deg)" }}
              >
                <p className="font-hand text-lg leading-snug text-ink">
                  {profile.status} — <Circled>say hi</Circled>
                </p>
              </div>
            )}

            <div className="mt-7 flex items-start gap-2">
              <p className="max-w-[13rem] font-hand text-lg leading-snug text-ink-faint">
                the things I make when I&apos;m not shipping —
              </p>
              <CurvedArrow className="mt-1 h-8 w-14 shrink-0 text-ink-faint/70" />
            </div>
          </div>

          {/* right: pinned interest cards */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 pt-3">
            {interests.map((interest) => {
              const d = dressing[interest.id];
              const Doodle = doodleMap[d.doodle] ?? Sparkle;
              return (
                <li key={interest.id} className="relative">
                  <button
                    onClick={() => setOpen(interest)}
                    style={{ transform: `rotate(${d.tilt}deg)` }}
                    className="pinned group w-full rounded-[3px] border border-rule bg-paper px-3.5 pb-3.5 pt-6 text-left shadow-[0_1px_2px_rgba(33,31,28,0.05),0_10px_22px_-16px_rgba(33,31,28,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-faint"
                  >
                    {/* hardware holding the card down */}
                    {d.pin === "clip" && (
                      <BulldogClip
                        className={`absolute -top-2.5 left-1/2 h-7 w-9 -translate-x-1/2 ${d.tint}`}
                      />
                    )}
                    {d.pin === "pin" && (
                      <PushPin
                        className={`absolute -top-3 left-1/2 h-7 w-6 -translate-x-1/2 ${d.tint}`}
                      />
                    )}
                    {d.pin === "paperclip" && (
                      <PaperClip
                        className={`absolute -top-3 right-3 h-8 w-4 ${d.tint}`}
                      />
                    )}

                    <Doodle className={`h-6 w-6 ${d.tint}`} />
                    <p className="mt-2.5 font-display text-xl leading-none text-ink">
                      {interest.label}
                    </p>
                    <p className="mt-1 font-hand text-base leading-tight text-ink-faint">
                      {interest.tagline}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {open && <PhotoPanel interest={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
