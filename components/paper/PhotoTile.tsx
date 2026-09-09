"use client";

import { useState } from "react";
import type { Photo } from "@/content/site";
import { Flower } from "../Doodles";

/* A polaroid-style print. A photo that hasn't been added to /public yet shows
   a sketch tile naming the file it expects, rather than a broken-image icon —
   so the layout is honest while the real photos are still missing.

   The sketch tile is what renders by default and the photo is revealed only
   once it has actually loaded. Waiting for `onError` instead would paint a
   broken-image glyph and the alt text for a beat first. */

const SIZES = {
  sm: { box: "h-28 w-28", cap: "w-28" },
  md: { box: "h-40 w-40 sm:h-44 sm:w-44", cap: "w-40 sm:w-44" },
  lg: { box: "h-48 w-40 sm:h-56 sm:w-48", cap: "w-40 sm:w-48" },
} as const;

export default function PhotoTile({
  photo,
  tilt = 0,
  size = "md",
  className = "",
  style,
}: {
  photo: Photo;
  tilt?: number;
  size?: keyof typeof SIZES;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(false);
  const s = SIZES[size];

  return (
    <figure
      className={`rounded-[3px] bg-white p-2.5 pb-3 shadow-[0_2px_4px_rgba(33,31,28,0.06),0_14px_30px_-20px_rgba(33,31,28,0.45)] ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, ...style }}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-paper-deep ${s.box}`}
      >
        {!loaded && (
          <div className="flex flex-col items-center gap-2 px-3 text-center">
            <Flower className="h-7 w-7 text-ink-faint/40" />
            <span className="text-[0.6rem] leading-tight text-ink-faint/70">
              add {photo.src}
            </span>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {photo.caption && (
        <figcaption
          className={`mt-2 text-center font-hand text-base leading-tight text-ink-soft ${s.cap}`}
        >
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}
