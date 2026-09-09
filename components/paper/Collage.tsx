"use client";

import type { Photo } from "@/content/site";
import PhotoTile from "./PhotoTile";
import { Tape } from "./Decor";
import { PaperClip } from "./Hardware";

/* An overlapping cluster of prints, the way photos actually land on a page —
   angled, touching, a couple taped down.

   Fixed per-index dressing rather than random, so the arrangement is stable
   across renders and identical on the server and the client. */

const DRESS = [
  { tilt: -3.2, pull: "0", z: 3, tape: true },
  { tilt: 2.4, pull: "-1.25rem", z: 2, tape: false },
  { tilt: -1.6, pull: "-0.75rem", z: 4, tape: false },
  { tilt: 3.1, pull: "-1.5rem", z: 1, tape: true },
  { tilt: -2.2, pull: "-0.5rem", z: 5, tape: false },
] as const;

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
                 overlap — and never on the first item of a wrapped row. */
              marginLeft: i === 0 ? "0" : d.pull,
              zIndex: d.z,
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
