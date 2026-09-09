/* Margin annotations, the way you'd mark up your own notebook. */

/** A loose pen circle around a word — deliberately overshooting, not an ellipse. */
export function Circled({
  children,
  className = "text-coral",
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
