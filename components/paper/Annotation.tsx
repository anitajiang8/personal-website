/* Margin annotations, the way you'd mark up your own notebook. */

/** A loose pen circle around a word — deliberately overshooting, not an ellipse. */
export function Circled({
  children,
  className = "text-coral-ink",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[118%] -translate-x-1/2 -translate-y-1/2 ${className}`}
        viewBox="0 0 120 44"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M10 24C9 12 35 5 63 6c30 1 51 8 50 18-1 11-27 17-55 16C28 39 8 33 9 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

/** A curved arrow, for pointing a handwritten note at something. */
export function CurvedArrow({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 80 44"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10c26-6 48 2 66 24" />
        <path d="M58 36l13-2-4-12" />
      </g>
    </svg>
  );
}

/** A highlighter sweep behind a phrase. Unlike `.mark-hand` in globals.css
    this takes a colour, so a page can highlight in more than one pen. */
export function Highlighted({
  children,
  color = "var(--color-butter)",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span className={`relative inline-block isolate ${className}`}>
      <span
        aria-hidden
        className="absolute -z-10"
        style={{
          inset: "0.14em -0.26em 0.04em -0.26em",
          background: color,
          opacity: 0.62,
          borderRadius: "0.6em 0.35em 0.5em 0.4em",
          transform: "rotate(-0.7deg)",
        }}
      />
      {children}
    </span>
  );
}

/** A handwritten margin note, optionally with an arrow pointing at whatever
    it's talking about. Decorative by default — pass `aria-hidden={false}` if
    the note carries meaning that isn't written elsewhere. */
export function HandNote({
  children,
  className = "",
  rotate = -3,
  arrow,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  arrow?: "left" | "right" | "none";
}) {
  return (
    <span
      className={`inline-flex items-start gap-1.5 font-hand text-lg leading-tight text-ink-faint ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {arrow === "left" && (
        <CurvedArrow className="mt-1 h-6 w-10 shrink-0 text-ink-faint/60" flip />
      )}
      <span>{children}</span>
      {arrow === "right" && (
        <CurvedArrow className="mt-1 h-6 w-10 shrink-0 text-ink-faint/60" />
      )}
    </span>
  );
}
