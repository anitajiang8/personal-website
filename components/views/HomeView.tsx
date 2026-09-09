"use client";

import { useState } from "react";
import { interests, profile, type Interest } from "@/content/site";
import PhotoPanel from "../PhotoPanel";
import Spread, { CheckLine } from "../paper/Spread";
import Receipt from "../paper/Receipt";
import { BulldogClip, PushPin, PaperClip } from "../paper/Hardware";
import { Tape, Sticker } from "../paper/Decor";
import { Circled, HandNote } from "../paper/Annotation";
import { doodleMap, type DoodleName, Sparkle, Star, Heart } from "../Doodles";

/* Which doodle and which piece of hardware each card gets. Kept here rather
   than in site.ts so adding an interest never means picking a pin. */
const dressing: Record<
  Interest["id"],
  {
    doodle: DoodleName;
    pin: "clip" | "pin" | "paperclip";
    tilt: number;
    /* Pastel fill for the hardware; the deeper twin for the doodle, which is
       a thin stroke and would disappear at pastel weight. Both spelled out in
       full — Tailwind only sees class names it can find literally in source. */
    tint: string;
    inkTint: string;
    /* Nudges the card off the grid so the cluster reads as pinned by hand. */
    offset: string;
  }
> = {
  cooking: { doodle: "bowl", pin: "clip", tilt: -3, tint: "text-coral", inkTint: "text-coral-ink", offset: "0" },
  fashion: { doodle: "hanger", pin: "pin", tilt: 2.4, tint: "text-butter", inkTint: "text-butter-ink", offset: "0.9rem" },
  crafts: { doodle: "flower", pin: "paperclip", tilt: -1.8, tint: "text-lilac", inkTint: "text-lilac-ink", offset: "0.3rem" },
  sketching: { doodle: "pen", pin: "pin", tilt: 3, tint: "text-blue", inkTint: "text-blue-ink", offset: "1.1rem" },
  code: { doodle: "spark", pin: "clip", tilt: -2.3, tint: "text-sage", inkTint: "text-sage-ink", offset: "0.5rem" },
};

/* The right-now list on the sticky note. Short, present tense, three items. */
const nowList = [
  "applying for Winter 2027",
  "learning Rust, slowly",
  "throwing a bowl that stays round",
];

export default function HomeView() {
  const [open, setOpen] = useState<Interest | null>(null);

  return (
    <>
      <Spread
        topic="who I am, on one page"
        decor={
          <>
            <Tape
              variant="stripe"
              color="rgba(168,197,232,0.55)"
              rotate={-6}
              className="-left-4 -top-3 h-7 w-24"
            />
            <Tape
              variant="dot"
              color="rgba(244,184,196,0.5)"
              rotate={5}
              className="-right-5 -top-2 h-7 w-24"
            />
            <Star className="pointer-events-none absolute bottom-24 left-6 hidden h-6 w-6 text-butter-ink/70 md:block" />
            <Heart className="pointer-events-none absolute bottom-10 right-10 hidden h-5 w-5 text-coral-ink/70 md:block" />
          </>
        }
        left={
          <>
            {/* ── the greeting, written out on load ── */}
            <div className="pt-4">
              <div className="relative inline-block">
                <h1 className="write-in font-hand text-[3rem] leading-[1.05] text-ink sm:text-[4.2rem]">
                  {profile.greeting}
                </h1>
                <span className="nib pointer-events-none absolute top-1/2 -translate-y-1/2">
                  <Sparkle className="h-6 w-6 text-coral-ink" />
                </span>
              </div>

              <div
                className="settle mt-5 space-y-2.5"
                style={{ animationDelay: "2.0s" }}
              >
                {profile.blurb.map((line, i) => (
                  <CheckLine
                    key={i}
                    className="max-w-full text-[0.95rem] leading-relaxed text-ink-soft sm:max-w-md"
                  >
                    {line}
                  </CheckLine>
                ))}
              </div>

              {profile.status && (
                <div
                  className="settle sticky-note mt-7 inline-block rounded-[2px] px-4 py-2.5"
                  style={{ transform: "rotate(-1.6deg)", animationDelay: "2.15s" }}
                >
                  <p className="font-hand text-lg leading-snug text-ink">
                    {profile.status} — <Circled>say hi</Circled>
                  </p>
                </div>
              )}
            </div>

            {/* ── the pinned interest cluster ── */}
            <div className="settle mt-2" style={{ animationDelay: "2.3s" }}>
              <HandNote rotate={-2} arrow="right" className="mb-4">
                and the things I make when I&apos;m not shipping
              </HandNote>

              <ul className="flex flex-wrap gap-x-3 gap-y-7">
                {interests.map((interest) => {
                  const d = dressing[interest.id];
                  const Doodle = doodleMap[d.doodle] ?? Sparkle;
                  return (
                    <li
                      key={interest.id}
                      className="relative"
                      style={{ marginTop: d.offset }}
                    >
                      <button
                        onClick={() => setOpen(interest)}
                        style={{ transform: `rotate(${d.tilt}deg)` }}
                        className="pinned group w-[8.5rem] rounded-[3px] border border-rule bg-paper px-3 pb-3.5 pt-7 text-left shadow-[0_1px_2px_rgba(33,31,28,0.05),0_10px_22px_-16px_rgba(33,31,28,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-faint"
                      >
                        {d.pin === "clip" && (
                          <BulldogClip
                            className={`absolute -top-3 left-1/2 h-8 w-10 -translate-x-1/2 ${d.tint}`}
                          />
                        )}
                        {d.pin === "pin" && (
                          <PushPin
                            className={`absolute -top-3.5 left-1/2 h-8 w-6 -translate-x-1/2 ${d.tint}`}
                          />
                        )}
                        {d.pin === "paperclip" && (
                          <PaperClip
                            className={`absolute -top-3.5 right-2.5 h-9 w-4 ${d.tint}`}
                          />
                        )}

                        <Sticker className="h-9 w-9" rotate={-6}>
                          <Doodle className={`h-5 w-5 ${d.inkTint}`} />
                        </Sticker>

                        <p className="mt-2.5 font-display text-lg leading-none text-ink">
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
          </>
        }
        right={
          <div className="settle flex flex-col gap-6" style={{ animationDelay: "2.1s" }}>
            <HandNote rotate={1.5} className="self-end">
              the short version ↓
            </HandNote>

            <Receipt className="mx-auto w-full max-w-[20rem]" />

            {/* The to-do sticky keeps the right-hand page from bottoming out
                under the receipt, and says what I'm actually doing right now. */}
            <div
              className="sticky-note sticky-note-pink mx-auto w-full max-w-[15rem] rounded-[2px] px-5 py-4"
              style={{ transform: "rotate(1.8deg)" }}
            >
              <p className="font-mono text-[0.58rem] tracking-[0.16em] text-ink-soft">
                RIGHT NOW
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {nowList.map((item) => (
                  <li key={item}>
                    <CheckLine className="font-hand text-lg leading-tight text-ink">
                      {item}
                    </CheckLine>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />

      {open && <PhotoPanel interest={open} onClose={() => setOpen(null)} />}
    </>
  );
}
