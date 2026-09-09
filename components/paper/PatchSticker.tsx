import Image from "next/image";

/* Photographed embroidered patches, cut out of their white backgrounds.

   These are raster rather than drawn, because a cat and a rabbit carry far
   more detail than hand-authored SVG paths can hold. next/image resizes and
   serves webp, so the ~200KB sources never reach a visitor at full weight. */

const PATCHES = {
  kitten: { src: "/stickers/kitten.png", w: 400, h: 365 },
  bunny: { src: "/stickers/bunny.png", w: 215, h: 400 },
} as const;

export default function PatchSticker({
  patch,
  className = "",
  rotate = 0,
  width = 96,
}: {
  patch: keyof typeof PATCHES;
  className?: string;
  rotate?: number;
  /* Rendered width in px; the height follows the patch's own ratio. */
  width?: number;
}) {
  const p = PATCHES[patch];
  return (
    <Image
      src={p.src}
      alt=""
      width={p.w}
      height={p.h}
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{
        width,
        height: "auto",
        transform: `rotate(${rotate}deg)`,
        /* the slight lift of a patch sitting proud of the page */
        filter: "drop-shadow(0 3px 5px rgba(74,62,42,0.28))",
      }}
    />
  );
}
