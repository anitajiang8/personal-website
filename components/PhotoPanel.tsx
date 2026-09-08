"use client";

import { useState } from "react";
import type { Interest, Photo } from "@/content/site";
import Modal from "./Modal";
import { Sparkle, Flower } from "./Doodles";

/* A photo that hasn't been added yet shows a sketch tile naming the file it
   expects, rather than a broken-image icon. */
function PhotoTile({ photo, tilt }: { photo: Photo; tilt: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className="shrink-0 rounded-[3px] bg-white p-2.5 pb-3 shadow-[0_2px_4px_rgba(33,31,28,0.06),0_14px_30px_-20px_rgba(33,31,28,0.45)]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden bg-paper-deep sm:h-44 sm:w-44">
        {failed ? (
          <div className="flex flex-col items-center gap-2 px-3 text-center">
            <Flower className="h-7 w-7 text-ink-faint/40" />
            <span className="text-[0.6rem] leading-tight text-ink-faint/70">
              add {photo.src}
            </span>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={photo.src}
            alt={photo.caption ?? ""}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {photo.caption && (
        <figcaption className="mt-2 w-40 text-center font-hand text-base leading-tight text-ink-soft sm:w-44">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function PhotoPanel({
  interest,
  onClose,
}: {
  interest: Interest;
  onClose: () => void;
}) {
  return (
    <Modal label={interest.label} onClose={onClose}>
      <div className="flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-butter" />
        <p className="font-hand text-xl text-ink-faint">{interest.tagline}</p>
      </div>

      <h2 className="mt-1 font-display text-4xl text-ink">{interest.label}</h2>

      <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">
        {interest.blurb}
      </p>

      {interest.photos.length > 0 ? (
        <div className="mt-7 flex flex-wrap gap-5">
          {interest.photos.map((photo, i) => (
            <PhotoTile
              key={photo.src}
              photo={photo}
              tilt={i % 2 === 0 ? -1.8 : 1.6}
            />
          ))}
        </div>
      ) : (
        <p className="mt-7 rounded-md border border-dashed border-rule bg-paper-deep/40 px-4 py-6 text-center text-sm text-ink-faint">
          No photos here yet — add some to{" "}
          <code className="text-ink-soft">public/photos/{interest.id}/</code>{" "}
          and list them in <code className="text-ink-soft">content/site.ts</code>.
        </p>
      )}
    </Modal>
  );
}
