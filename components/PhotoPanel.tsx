"use client";

import type { Interest } from "@/content/site";
import Modal from "./Modal";
import { Sparkle } from "./Doodles";
import Collage from "./paper/Collage";

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
        <Sparkle className="h-4 w-4 text-butter-ink" />
        <p className="font-hand text-xl text-ink-faint">{interest.tagline}</p>
      </div>

      <h2 className="mt-1 font-display text-4xl text-ink">{interest.label}</h2>

      <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">
        {interest.blurb}
      </p>

      {interest.photos.length > 0 ? (
        <Collage photos={interest.photos} className="mt-7 gap-y-6" />
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
