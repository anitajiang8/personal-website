"use client";

import { useId } from "react";

/* Embroidered patches and foil stickers — original drawings in the spirit of
   a patch sheet: satin-stitch edges, flat felt colour, a little puff.

   Same rule as Hardware.tsx: no <defs> ids anywhere. These get repeated all
   over a page, and duplicate gradient/filter ids collide. Depth is built from
   stacked opaque shapes instead, which also keeps them server-safe. */

type P = { className?: string; style?: React.CSSProperties };

const HI = "white";
const LO = "#000";

/* The stitched rim every patch shares: a solid band of thread, then a dashed
   lighter pass on top to read as individual stitches. */
function Stitch({
  d,
  color,
  light,
  width = 5,
}: {
  d: string;
  color: string;
  light: string;
  width?: number;
}) {
  return (
    <>
      <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" />
      <path
        d={d}
        fill="none"
        stroke={light}
        strokeWidth={width * 0.4}
        strokeDasharray="3 3.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </>
  );
}

/** Gold foil star — the crinkled, slightly-too-shiny kind off a sticker sheet.
    The facets are flat polygons rather than a gradient, so the foil catches
    the light in bands the way real foil does. */
export function FoilStar({ className, style }: P) {
  /* A five-point star, deliberately a little lopsided — cut by hand. */
  const star = "M32 4 40 23 61 25 45 39 50 60 32 49 14 60 19 39 3 25 24 23Z";
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
      <ellipse cx="32" cy="58" rx="20" ry="2.4" fill={LO} opacity="0.13" />
      {/* base foil */}
      <path d={star} fill="#d8a63a" />
      {/* the lit facets — upper-left catches the most */}
      <path d="M32 4 40 23 32 27 24 23Z" fill="#f6dd97" />
      <path d="M3 25 24 23 32 27 19 39Z" fill="#eecb6f" />
      <path d="M45 39 61 25 40 23 32 27Z" fill="#c08f2c" />
      <path d="M32 49 50 60 45 39 32 27Z" fill="#b8862a" />
      {/* specular streak */}
      <path d="M28 12 33 24 29 26 25 17Z" fill={HI} opacity="0.55" />
      <path d="M22 31 30 29 26 34 18 35Z" fill={HI} opacity="0.3" />
    </svg>
  );
}

/** Sunburst with a face — embroidered rays around a stitched felt centre. */
export function SunFace({ className, style }: P) {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI * 2) / 16;
    const inner = 19;
    const outer = i % 2 === 0 ? 31 : 26;
    const spread = 0.11;
    const x1 = 32 + Math.cos(a - spread) * inner;
    const y1 = 32 + Math.sin(a - spread) * inner;
    const x2 = 32 + Math.cos(a) * outer;
    const y2 = 32 + Math.sin(a) * outer;
    const x3 = 32 + Math.cos(a + spread) * inner;
    const y3 = 32 + Math.sin(a + spread) * inner;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}L${x3.toFixed(1)} ${y3.toFixed(1)}Z`;
  }).join(" ");

  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
      {/* white die-cut margin behind everything */}
      <circle cx="32" cy="32" r="31" fill={HI} opacity="0.95" />
      <path d={rays} fill="#f2c33f" />
      <path d={rays} fill={HI} opacity="0.22" transform="translate(-0.6,-0.6)" />
      {/* the felt centre */}
      <circle cx="32" cy="32" r="19" fill="#f7d873" />
      <circle
        cx="32"
        cy="32"
        r="17"
        fill="none"
        stroke="#e0b23c"
        strokeWidth="1.4"
        strokeDasharray="2.5 3"
        opacity="0.8"
      />
      {/* face — big flat eyes, a dot of blush, a small stitched smile */}
      <ellipse cx="25.5" cy="30" rx="3.4" ry="4.2" fill="#2e2a24" />
      <ellipse cx="38.5" cy="30" rx="3.4" ry="4.2" fill="#2e2a24" />
      <ellipse cx="24.4" cy="28.4" rx="1.1" ry="1.3" fill={HI} opacity="0.9" />
      <ellipse cx="37.4" cy="28.4" rx="1.1" ry="1.3" fill={HI} opacity="0.9" />
      <ellipse cx="21" cy="36" rx="2.6" ry="1.7" fill="#ef9aa8" opacity="0.75" />
      <ellipse cx="43" cy="36" rx="2.6" ry="1.7" fill="#ef9aa8" opacity="0.75" />
      <path
        d="M29 38q3 2.6 6 0"
        fill="none"
        stroke="#2e2a24"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Gingham heart patch — woven check clipped to the heart itself, so it can
    sit on any surface without carrying a background patch around with it. */
export function GinghamHeart({ className, style }: P) {
  /* A clip needs an id, and these repeat on a page — useId keeps each
     instance's id unique. */
  const clip = `heart-${useId().replace(/:/g, "")}`;
  const heart =
    "M32 56C14 43 6 34 6 24 6 15 13 9 21 9c5 0 9 2 11 6 2-4 6-6 11-6 8 0 15 6 15 15 0 10-8 19-26 32Z";
  const bands = Array.from({ length: 8 }, (_, i) => i * 8);

  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
      <defs>
        <clipPath id={clip}>
          <path d={heart} />
        </clipPath>
      </defs>

      <ellipse cx="32" cy="58" rx="19" ry="2.2" fill={LO} opacity="0.12" />

      <g clipPath={`url(#${clip})`}>
        {/* the base cloth, then crossed bands — where they overlap reads
            darker on its own, which is what makes a check look woven */}
        <path d={heart} fill="#f8ecee" />
        {bands.map((y) => (
          <rect key={`h${y}`} x="0" y={y} width="64" height="4" fill="#e0687f" opacity="0.38" />
        ))}
        {bands.map((x) => (
          <rect key={`v${x}`} x={x} y="0" width="4" height="64" fill="#e0687f" opacity="0.38" />
        ))}
      </g>

      <Stitch d={heart} color="#d4536c" light="#ffd7de" width={4.5} />
      {/* a lit edge along the top lobes */}
      <path
        d="M14 18c2-4 6-6 10-5"
        fill="none"
        stroke={HI}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/** Cloud patch — pale felt with a satin-stitch rim. */
export function CloudPatch({ className, style }: P) {
  const cloud =
    "M16 44c-7 0-12-5-12-11 0-6 4-10 10-11 1-8 8-14 16-14 7 0 13 4 15 11 1 0 2-1 3-1 7 0 12 5 12 12s-5 14-12 14Z";
  return (
    <svg viewBox="0 0 64 56" className={className} style={style} aria-hidden>
      <ellipse cx="32" cy="50" rx="21" ry="2.2" fill={LO} opacity="0.11" />
      <path d={cloud} fill="#dce9f5" />
      {/* the puff of the stuffing, brighter along the top */}
      <path
        d="M20 22c2-6 8-10 14-9"
        fill="none"
        stroke={HI}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path d="M12 40h40" stroke="#a9c3da" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      <Stitch d={cloud} color="#9dbdd8" light="#f2f8ff" width={4} />
    </svg>
  );
}

/** "777 / Luck" diamond patch. */
export function LuckyDiamond({ className, style }: P) {
  const diamond = "M32 3 58 32 32 61 6 32Z";
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
      <ellipse cx="32" cy="59" rx="17" ry="2.2" fill={LO} opacity="0.12" />
      <path d={diamond} fill="#d9e88f" />
      {/* felt shading: the lower-right half sits away from the light */}
      <path d="M32 3 58 32 32 61Z" fill="#c2d472" opacity="0.55" />
      <Stitch d={diamond} color="#7fa832" light="#eef7c2" width={5} />
      <g fill="#5f7d24" style={{ fontFamily: "var(--font-mono), monospace" }}>
        <text x="32" y="31" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="1">
          777
        </text>
      </g>
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontSize="10"
        fontStyle="italic"
        fill="#5f7d24"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        Luck
      </text>
    </svg>
  );
}

/** A small woven checked flower, for filling a corner. */
export function FlowerPatch({ className, style }: P) {
  const petals = Array.from({ length: 5 }, (_, i) => {
    const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const cx = 32 + Math.cos(a) * 15;
    const cy = 32 + Math.sin(a) * 15;
    return <ellipse key={i} cx={cx} cy={cy} rx="11" ry="11" fill="#f0b9cd" />;
  });
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
      <ellipse cx="32" cy="58" rx="18" ry="2.2" fill={LO} opacity="0.11" />
      {petals}
      {Array.from({ length: 5 }, (_, i) => {
        const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
        const cx = 32 + Math.cos(a) * 15;
        const cy = 32 + Math.sin(a) * 15;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="8.5"
            fill="none"
            stroke="#fff0f5"
            strokeWidth="1.3"
            strokeDasharray="2.5 3"
            opacity="0.85"
          />
        );
      })}
      <circle cx="32" cy="32" r="8.5" fill="#f4e07a" />
      <circle
        cx="32"
        cy="32"
        r="6.5"
        fill="none"
        stroke="#d9bd3f"
        strokeWidth="1.3"
        strokeDasharray="2.5 3"
      />
    </svg>
  );
}
