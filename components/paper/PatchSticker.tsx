import Image from "next/image";

/* Photographed embroidered patches, cut out of their white backgrounds.

   These are raster rather than drawn, because a cat and a rabbit carry far
   more detail than hand-authored SVG paths can hold. next/image resizes and
   serves webp, so the ~200KB sources never reach a visitor at full weight. */

const PATCHES = {
  kitten: { src: "/stickers/kitten.png", w: 360, h: 328 },
  bunny: { src: "/stickers/bunny.png", w: 193, h: 360 },
  starPink: { src: "/stickers/star-pink.png", w: 360, h: 347 },
  wings: { src: "/stickers/wings.png", w: 360, h: 210 },
  butterfly: { src: "/stickers/butterfly.png", w: 215, h: 360 },
  clover: { src: "/stickers/clover.png", w: 293, h: 360 },
  bearHead: { src: "/stickers/bear-head.png", w: 360, h: 277 },
  bearWhite: { src: "/stickers/bear-white.png", w: 310, h: 360 },
  sparkle: { src: "/stickers/sparkle.png", w: 269, h: 360 },
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
