"use client";

import { useState } from "react";
import { interests, profile, type Interest } from "@/content/site";
import PhotoPanel from "../PhotoPanel";
import { BulldogClip, PushPin, PaperClip } from "../paper/Hardware";
import { Tape, Sticker } from "../paper/Decor";
import { Circled } from "../paper/Annotation";
import { doodleMap, type DoodleName, Sparkle, Star, Heart } from "../Doodles";

/* Which doodle and which piece of hardware each card gets. Kept here rather
   than in site.ts so adding an interest never means picking a pin. */
const dressing: Record<
  Interest["id"],
  { doodle: DoodleName; pin: "clip" | "pin" | "paperclip"; tilt: number; tint: string }
> = {
  cooking: { doodle: "bowl", pin: "clip", tilt: -2.6, tint: "text-coral" },
  fashion: { doodle: "hanger", pin: "pin", tilt: 2.2, tint: "text-butter" },
  crafts: { doodle: "flower", pin: "paperclip", tilt: -1.6, tint: "text-lilac" },
  sketching: { doodle: "pen", pin: "pin", tilt: 2.8, tint: "text-blue" },
  code: { doodle: "spark", pin: "clip", tilt: -2, tint: "text-sage" },
};

export default function HomeView() {
  const [open, setOpen] = useState<Interest | null>(null);

  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col px-5 py-6 sm:px-6">
      <div className="sheet relative mx-auto flex w-full flex-1 flex-col rounded-sm p-6 sm:p-8">
        {/* tape holding the sheet down */}
        <Tape
          variant="stripe"
          color="rgba(109,143,230,0.42)"
          rotate={-6}
          className="-left-5 top-8 h-7 w-24"
        />
        <Tape
          variant="dot"
          color="rgba(229,98,61,0.34)"
          rotate={5}
          className="-right-6 top-16 h-7 w-24"
        />

        {/* ── the greeting, written out on load ── */}
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="relative inline-block">
            <h1 className="write-in font-hand text-[3.2rem] leading-[1.05] text-ink sm:text-[5rem]">
              {profile.greeting}
            </h1>
            {/* the nib travelling along with the writing */}
            <span className="nib pointer-events-none absolute top-1/2 -translate-y-1/2">
              <Sparkle className="h-6 w-6 text-coral" />
            </span>
          </div>

          <p
            className="settle mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft"
            style={{ animationDelay: "2.0s" }}
          >
            {profile.blurb[0]}
          </p>

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

        {/* ── pinned cards ── */}
        <div className="settle" style={{ animationDelay: "2.3s" }}>
          <p className="mb-5 text-center font-hand text-lg text-ink-faint">
            and the things I make when I&apos;m not shipping —
          </p>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {interests.map((interest) => {
              const d = dressing[interest.id];
              const Doodle = doodleMap[d.doodle] ?? Sparkle;
              return (
                <li key={interest.id} className="relative">
                  <button
                    onClick={() => setOpen(interest)}
                    style={{ transform: `rotate(${d.tilt}deg)` }}
                    className="pinned group w-full rounded-[3px] border border-rule bg-paper px-3 pb-3.5 pt-7 text-left shadow-[0_1px_2px_rgba(33,31,28,0.05),0_10px_22px_-16px_rgba(33,31,28,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-faint"
                  >
                    {d.pin === "clip" && (
                      <BulldogClip className={`absolute -top-3 left-1/2 h-8 w-10 -translate-x-1/2 ${d.tint}`} />
                    )}
                    {d.pin === "pin" && (
                      <PushPin className={`absolute -top-3.5 left-1/2 h-8 w-6 -translate-x-1/2 ${d.tint}`} />
                    )}
                    {d.pin === "paperclip" && (
                      <PaperClip className={`absolute -top-3.5 right-2.5 h-9 w-4 ${d.tint}`} />
                    )}

                    <Sticker className="h-9 w-9" rotate={-6}>
                      <Doodle className={`h-5 w-5 ${d.tint}`} />
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

        {/* loose stickers, for the scrapbook feel */}
        <Star className="pointer-events-none absolute -left-3 bottom-24 hidden h-6 w-6 text-butter md:block" />
        <Heart className="pointer-events-none absolute -right-2 bottom-40 hidden h-5 w-5 text-coral md:block" />
      </div>

      {open && <PhotoPanel interest={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
