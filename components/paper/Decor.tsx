/* Scrapbook decoration: washi tape and die-cut stickers. */

type TapeVariant = "plain" | "stripe" | "dot" | "check";

const patterns: Record<TapeVariant, (c: string) => string> = {
  plain: (c) => c,
  stripe: (c) =>
    `repeating-linear-gradient(115deg, ${c} 0 7px, rgba(255,255,255,0.42) 7px 13px)`,
  dot: (c) =>
    `radial-gradient(rgba(255,255,255,0.55) 1.6px, transparent 1.7px) 0 0/9px 9px, ${c}`,
  check: (c) =>
    `repeating-linear-gradient(0deg, rgba(255,255,255,0.34) 0 5px, transparent 5px 10px), repeating-linear-gradient(90deg, rgba(255,255,255,0.34) 0 5px, transparent 5px 10px), ${c}`,
};

/* Torn-ish ends: a shallow zigzag down each short edge. */
const torn =
  "polygon(0% 6%, 3% 0%, 0% 16%, 3% 26%, 0% 38%, 3% 50%, 0% 62%, 3% 74%, 0% 86%, 3% 96%, 0% 100%, 100% 96%, 97% 86%, 100% 74%, 97% 62%, 100% 50%, 97% 38%, 100% 26%, 97% 16%, 100% 6%, 97% 0%)";

export function Tape({
  variant = "plain",
  color = "rgba(240,205,99,0.5)",
  className = "",
  rotate = -3,
  style,
}: {
  variant?: TapeVariant;
  color?: string;
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute block ${className}`}
      style={{
        background: patterns[variant](color),
        clipPath: torn,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 1px 3px rgba(33,31,28,0.10)",
        ...style,
      }}
    />
  );
}

/** A die-cut sticker: white border, soft lift, slight tilt. */
export function Sticker({
  children,
  className = "",
  rotate = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none inline-flex items-center justify-center rounded-full bg-white ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow:
          "0 1px 2px rgba(33,31,28,0.10), 0 6px 14px -8px rgba(33,31,28,0.4)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
