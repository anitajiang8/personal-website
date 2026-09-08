/* Hand-drawn SVG accents. All inherit `currentColor` so they can be
   tinted with a text color class wherever they're dropped in. */

type D = { className?: string; style?: React.CSSProperties };

const base = "stroke-current fill-none";
const cap = { strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function Sparkle({ className, style }: D) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
      <path
        d="M20 3c1.4 8.6 7.9 15.1 16.5 16.5C27.9 21 21.4 27.4 20 36c-1.4-8.6-7.9-15-16.5-16.5C12.1 18.1 18.6 11.6 20 3Z"
        className={base}
        strokeWidth="1.8"
        {...cap}
      />
    </svg>
  );
}

export function Star({ className, style }: D) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
      <path
        d="M20 4.5 24.3 15l11.2.7-8.6 7.2 2.8 10.9L20 27.9l-9.7 5.9 2.8-10.9-8.6-7.2 11.2-.7L20 4.5Z"
        className={base}
        strokeWidth="1.8"
        {...cap}
      />
    </svg>
  );
}

export function Squiggle({ className, style }: D) {
  return (
    <svg viewBox="0 0 120 24" className={className} style={style} aria-hidden>
      <path
        d="M3 15c8-11 16 8 24-1s16 9 24-1 16 8 24-1 16 7 22 3"
        className={base}
        strokeWidth="2"
        {...cap}
      />
    </svg>
  );
}

export function Arrow({ className, style }: D) {
  return (
    <svg viewBox="0 0 90 60" className={className} style={style} aria-hidden>
      <path
        d="M6 8c22 3 40 14 52 32"
        className={base}
        strokeWidth="1.9"
        {...cap}
      />
      <path
        d="M46 41.5 58.6 41l-1.9-12.4"
        className={base}
        strokeWidth="1.9"
        {...cap}
      />
    </svg>
  );
}

export function Flower({ className, style }: D) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
      <g className={base} strokeWidth="1.7" {...cap}>
        <circle cx="20" cy="20" r="4" />
        <path d="M20 16c-1-6 1-10 0-12M20 24c1 6-1 10 0 12M16 20c-6 1-10-1-12 0M24 20c6-1 10 1 12 0" />
        <path d="M17 17c-4-4-7-5-8-7M23 23c4 4 7 5 8 7M23 17c4-4 7-5 8-7M17 23c-4 4-7 5-8 7" />
      </g>
    </svg>
  );
}

export function Heart({ className, style }: D) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
      <path
        d="M20 33S5.5 24.4 5.5 15.2C5.5 10 9.4 6.5 13.6 6.5c2.9 0 5.2 1.6 6.4 3.8 1.2-2.2 3.5-3.8 6.4-3.8 4.2 0 8.1 3.5 8.1 8.7C34.5 24.4 20 33 20 33Z"
        className={base}
        strokeWidth="1.8"
        {...cap}
      />
    </svg>
  );
}

export function Cloud({ className, style }: D) {
  return (
    <svg viewBox="0 0 60 34" className={className} style={style} aria-hidden>
      <path
        d="M14 27c-5.5 0-9.5-3.6-9.5-8S8 11 13 11.4C14.7 6.2 19.6 2.8 25 3.4c5.9.6 10.2 5.2 10.6 10.8 4.9-.9 9.4 2.4 9.9 6.9.5 4.4-2.8 5.9-7 5.9H14Z"
        className={base}
        strokeWidth="1.8"
        {...cap}
      />
    </svg>
  );
}

export function Bowl({ className, style }: D) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden>
      <g className={base} strokeWidth="1.8" {...cap}>
        <path d="M6 24h36c0 9.4-8 17-18 17S6 33.4 6 24Z" />
        <path d="M3 24h42" />
        <path d="M18 14c2-2.5 2-4.5 0-7M24 12c2-2.5 2-4.5 0-7M30 14c2-2.5 2-4.5 0-7" />
      </g>
    </svg>
  );
}

export function Hanger({ className, style }: D) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden>
      <g className={base} strokeWidth="1.8" {...cap}>
        <path d="M24 21v-3.5c0-2.4-1.9-4.5-4.3-4.5A4.4 4.4 0 0 0 15.4 17" />
        <path d="M24 21 6 33.5c-1.6 1.1-.8 3.5 1.1 3.5h33.8c1.9 0 2.7-2.4 1.1-3.5L24 21Z" />
      </g>
    </svg>
  );
}

export function Pen({ className, style }: D) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden>
      <g className={base} strokeWidth="1.8" {...cap}>
        <path d="M33 6.5 41.5 15 17 39.5 6.5 42l2.5-10.5L33 6.5Z" />
        <path d="M29 10.5 37.5 19M9 31.5 16.5 39" />
      </g>
    </svg>
  );
}

export const doodleMap = {
  bowl: Bowl,
  hanger: Hanger,
  spark: Sparkle,
  pen: Pen,
  star: Star,
  flower: Flower,
  heart: Heart,
  cloud: Cloud,
} as const;

export type DoodleName = keyof typeof doodleMap;
