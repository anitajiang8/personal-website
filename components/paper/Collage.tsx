"use client";

import type { Photo } from "@/content/site";
import PhotoTile from "./PhotoTile";
import { Tape } from "./Decor";
import { PaperClip } from "./Hardware";

/* An overlapping cluster of prints, the way photos actually land on a page —
   angled, touching, a couple taped down.

   Fixed per-index dressing rather than random, so the arrangement is stable
   across renders and identical on the server and the client. */

/* Tilt and tape vary per position; the overlap stays gentle so no print ever
   covers the caption of the one before it. Later prints stack ON TOP of
   earlier ones (z ascends with index) — the reverse buries captions. */
const DRESS = [
  { tilt: -3.2, tape: true },
  { tilt: 2.4, tape: false },
  { tilt: -1.6, tape: false },
  { tilt: 3.1, tape: true },
  { tilt: -2.2, tape: false },
] as const;

/* How far each print laps over the previous one. Small tiles get a smaller
   bite, or the caption underneath disappears. */
const PULL = { sm: "-0.4rem", md: "-0.9rem", lg: "-1rem" } as const;

const TAPE_COLORS = [
  "rgba(168,197,232,0.55)",
  "rgba(244,184,196,0.55)",
  "rgba(245,228,168,0.6)",
] as const;

export default function Collage({
  photos,
  size = "md",
  className = "",
}: {
  photos: Photo[];
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  if (photos.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-start ${className}`}>
      {photos.map((photo, i) => {
        const d = DRESS[i % DRESS.length];
        return (
          <div
            key={photo.src}
            className="relative"
            style={{
              /* Overlap the previous print, but only once there is one to
                 overlap. */
              marginLeft: i === 0 ? "0" : PULL[size],
              zIndex: i + 1,
            }}
          >
            {d.tape && (
              <Tape
                variant="stripe"
                color={TAPE_COLORS[i % TAPE_COLORS.length]}
                rotate={i % 2 ? 8 : -9}
                className="-top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2"
              />
            )}
            {i === 1 && (
              <PaperClip className="absolute -top-3.5 right-3 z-10 h-9 w-4 text-lilac-ink" />
            )}
            <PhotoTile photo={photo} tilt={d.tilt} size={size} />
          </div>
        );
      })}
    </div>
  );
}
