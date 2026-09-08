"use client";

import type { Interest } from "@/content/site";

type Id = Interest["id"];

/* A hotspot wraps one clickable object: the art lifts on hover/focus and a
   hand-written label appears above it. Keyboard-operable via role/tabIndex. */
function Hotspot({
  id,
  label,
  tagline,
  labelX,
  labelY,
  hit,
  onSelect,
  children,
}: {
  id: Id;
  label: string;
  tagline: string;
  labelX: number;
  labelY: number;
  /** [x, y, width, height] — the clickable region. SVG only hit-tests
   *  painted pixels, so without this you'd have to hit a 2px stroke. */
  hit: [number, number, number, number];
  onSelect: (id: Id) => void;
  children: React.ReactNode;
}) {
  return (
    <g
      className="hotspot-wrap"
      role="button"
      tabIndex={0}
      aria-label={`${label} — ${tagline}. Show photos.`}
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <rect
        x={hit[0]}
        y={hit[1]}
        width={hit[2]}
        height={hit[3]}
        fill="transparent"
      />
      <g className="hotspot-art">{children}</g>
      <g className="hotspot-label" aria-hidden>
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          className="fill-ink font-hand"
          style={{ fontSize: 21 }}
        >
          {label}
        </text>
        <text
          x={labelX}
          y={labelY + 15}
          textAnchor="middle"
          className="fill-ink-faint font-hand"
          style={{ fontSize: 14 }}
        >
          {tagline}
        </text>
      </g>
    </g>
  );
}

const line = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export default function DeskScene({
  onSelect,
}: {
  onSelect: (id: Id) => void;
}) {
  return (
    <svg
      viewBox="0 0 560 400"
      className="h-full w-full"
      role="group"
      aria-label="An illustration of me surrounded by the things I enjoy. Each object is clickable."
    >
      {/* ground */}
      <path
        d="M30 336h500"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-rule"
        {...line}
      />

      {/* ── COOKING — a pot with steam ───────────────────── */}
      <Hotspot
        id="cooking"
        label="Cooking"
        tagline="batch eleven"
        labelX={92}
        labelY={248}
        hit={[44, 252, 100, 86]}
        onSelect={onSelect}
      >
        <g stroke="currentColor" strokeWidth="2.2" className="text-coral" {...line}>
          <path d="M62 292h60v26a14 14 0 0 1-14 14H76a14 14 0 0 1-14-14v-26Z" />
          <path d="M54 292h76" />
          <path d="M62 300H52a6 6 0 0 0 0 12h10M122 300h10a6 6 0 0 1 0 12h-10" />
          <path d="M80 280c-5-7 5-11 0-18M92 276c-5-7 5-12 0-19M104 280c-5-7 5-11 0-18" />
        </g>
      </Hotspot>

      {/* ── DRAWING — an open sketchbook and a pencil ────── */}
      <Hotspot
        id="sketching"
        label="Drawing"
        tagline="always a notebook"
        labelX={186}
        labelY={268}
        hit={[146, 272, 96, 68]}
        onSelect={onSelect}
      >
        <g stroke="currentColor" strokeWidth="2.2" className="text-blue" {...line}>
          <path d="M152 336c12-9 24-9 33-3 9-6 21-6 33 3" />
          <path d="M152 336v-26c12-9 24-9 33-3v26M218 336v-26c-12-9-24-9-33-3" />
          <path d="M163 318h12M163 325h9M196 318h12M196 325h9" />
          {/* pencil */}
          <path d="m206 300 22-20 7 7-22 20-9 2Z" />
          <path d="m206 300 7 7M228 280l7 7" />
        </g>
      </Hotspot>

      {/* ── THE FIGURE ───────────────────────────────────
           Draw order matters: strands sit behind the face, the face
           covers where they overlap it, and the crown caps the top so
           the head never reads as a hood. */}
      <g stroke="currentColor" strokeWidth="2.4" className="text-ink" {...line}>
        {/* hair falling either side */}
        <path
          d="M262 176c-12 14-14 44-10 74h12c-4-30-6-56 2-68Z"
          fill="var(--color-paper)"
        />
        <path
          d="M298 176c12 14 14 44 10 74h-12c4-30 6-56-2-68Z"
          fill="var(--color-paper)"
        />
        {/* face */}
        <ellipse cx="280" cy="186" rx="19" ry="22" fill="var(--color-paper)" />
        {/* hair on top, with the hairline as its inner edge */}
        <path
          d="M261 186c-3-30 5-42 19-42s22 12 19 42c-5-14-11-20-19-20s-14 6-19 20Z"
          fill="var(--color-paper)"
        />
        {/* eyes + smile */}
        <path d="M272 188v3.5M288 188v3.5" strokeWidth="3" />
        <path d="M274 198c4 4 8 4 12 0" />
        {/* neck */}
        <path d="M274 207v7M286 207v7" />
        {/* torso */}
        <path d="M270 215c-18 6-26 24-26 44v20M290 215c18 6 26 24 26 44v20" />
        {/* crossed legs */}
        <path
          d="M244 279c-10 18-8 38 6 44h60c14-6 16-26 6-44"
          fill="var(--color-paper)"
        />
        <path d="M252 313c16-9 40-9 56 0" />
        {/* arms reaching forward */}
        <path d="M248 245c-8 12-8 24 2 30M312 245c8 12 8 24-2 30" />
      </g>

      {/* ── BUILDING — the laptop, in front of the lap ───── */}
      <Hotspot
        id="code"
        label="Building"
        tagline="what I do most"
        labelX={280}
        labelY={132}
        hit={[236, 246, 88, 50]}
        onSelect={onSelect}
      >
        <g stroke="currentColor" strokeWidth="2.2" className="text-sage" {...line}>
          <path d="M252 252h56v28h-56z" fill="var(--color-paper)" />
          <path d="M246 280h68l8 12h-84l8-12Z" fill="var(--color-paper)" />
          <path d="M259 262h20M259 270h30" strokeWidth="1.8" />
        </g>
      </Hotspot>

      {/* ── CERAMICS — a vase and a small bowl ───────────── */}
      <Hotspot
        id="crafts"
        label="Ceramics"
        tagline="charmingly lopsided"
        labelX={382}
        labelY={244}
        hit={[332, 268, 108, 72]}
        onSelect={onSelect}
      >
        <g stroke="currentColor" strokeWidth="2.2" className="text-lilac" {...line}>
          {/* vase */}
          <path d="M348 288c-10 8-14 20-10 32 3 10 12 16 22 16s19-6 22-16c4-12 0-24-10-32" />
          <path d="M348 288c-3-6-2-11 2-14h20c4 3 5 8 2 14" />
          <path d="M350 278h20" />
          {/* small bowl */}
          <path d="M396 316c0 10 8 20 18 20s18-10 18-20" />
          <path d="M392 316h44" />
        </g>
      </Hotspot>

      {/* ── FASHION — a rack with a shirt on a hanger ────── */}
      <Hotspot
        id="fashion"
        label="Fashion"
        tagline="thrift, alter, repeat"
        labelX={486}
        labelY={188}
        hit={[446, 220, 80, 120]}
        onSelect={onSelect}
      >
        <g stroke="currentColor" strokeWidth="2.2" className="text-butter" {...line}>
          {/* rack */}
          <path d="M452 228h68M486 228v108M470 336h32" />
          {/* hanger */}
          <path d="M486 236a5 5 0 1 1 0-8" />
          <path d="m486 236-16 12h32l-16-12Z" />
          {/* shirt */}
          <path d="M470 250l-10 8 6 10 6-4v40h28v-40l6 4 6-10-10-8" />
        </g>
      </Hotspot>

    </svg>
  );
}
