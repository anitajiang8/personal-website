/* Desk hardware with dimension: a base fill in `currentColor`, then stacked
   white/black overlays for the specular highlight and the shaded underside.
   Overlays rather than gradients means no <defs> ids, so these stay usable
   from server components and never collide when repeated on a page. */

type P = { className?: string; style?: React.CSSProperties };

const HI = "white";
const LO = "#000";

/** Bulldog clip, head-on — clamps the top edge of a card.

    Matches the reference stationery: a scalloped lower jaw, an engraved
    script wordmark, and a round finger hole in the raised head. */
export function BulldogClip({
  className,
  style,
  /* The jaw's bottom edge. The reference sheet has both kinds. */
  edge = "scallop",
  label = "Archive",
}: P & { edge?: "scallop" | "straight"; label?: string | null }) {
  /* A run of shallow bumps along the bottom of the jaw. Built once here so
     the two edge styles share the rest of the shape. */
  /* The bottom edge is walked right-to-left, so each bump steps in -x. */
  const scallop = Array.from({ length: 8 }, () => "q-4 5 -8 0").join(" ");

  const jaw =
    edge === "scallop"
      ? `M8 36h64a5 5 0 0 1 5 5v13 ${scallop} a5 5 0 0 1-5-4V41a5 5 0 0 1 5-5Z`
      : "M8 36h64a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V41a5 5 0 0 1 5-5Z";

  return (
    <svg viewBox="0 0 80 66" className={className} style={style} aria-hidden>
      {/* cast shadow on the paper below */}
      <ellipse cx="40" cy="63" rx="30" ry="3" fill={LO} opacity="0.13" />

      {/* the raised head */}
      <path
        d="M40 4c8.5 0 15 6.5 15 15v18H25V19C25 10.5 31.5 4 40 4Z"
        className="fill-current"
      />
      <path d="M40 4c8.5 0 15 6.5 15 15v18h-5V19c0-7-4.5-13-10-15Z" fill={LO} opacity="0.13" />
      <path
        d="M31 15c1.5-5 4.5-8 8-9"
        stroke={HI}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      {/* the finger hole, with a lip so it reads as a hole not a dot */}
      <circle cx="40" cy="19" r="7.5" className="fill-paper" />
      <path d="M33 22a7.5 7.5 0 0 1 14-6" stroke={LO} strokeWidth="1.6" fill="none" opacity="0.16" />

      {/* pivot pins */}
      <rect x="13" y="32" width="10" height="7" rx="3.5" className="fill-current" />
      <rect x="57" y="32" width="10" height="7" rx="3.5" className="fill-current" />
      <rect x="13" y="32" width="10" height="3" rx="1.5" fill={HI} opacity="0.45" />
      <rect x="57" y="32" width="10" height="3" rx="1.5" fill={HI} opacity="0.45" />

      {/* the jaw */}
      <path d={jaw} className="fill-current" />
      {/* top highlight and shaded lower edge */}
      <path d="M9 39h62a3 3 0 0 1 3 3v3H6v-3a3 3 0 0 1 3-3Z" fill={HI} opacity="0.45" />
      <path d="M4 50h72v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4Z" fill={LO} opacity="0.10" />

      {/* engraved wordmark, pressed into the jaw: a dark cut with a lit edge
          just beneath it */}
      {label && (
        <g style={{ fontFamily: "var(--font-hand), cursive" }}>
          <text
            x="40"
            y="50.5"
            textAnchor="middle"
            fontSize="13"
            fontStyle="italic"
            fill={LO}
            opacity="0.26"
          >
            {label}
          </text>
          <text
            x="40"
            y="51.4"
            textAnchor="middle"
            fontSize="13"
            fontStyle="italic"
            fill={HI}
            opacity="0.4"
          >
            {label}
          </text>
        </g>
      )}
    </svg>
  );
}

/** Binder clip — the folded steel body tapers toward the top, with two
    sprung wire handles standing up out of it. */
export function BinderClip({ className, style }: P) {
  return (
    <svg viewBox="0 0 64 54" className={className} style={style} aria-hidden>
      <ellipse cx="32" cy="50" rx="23" ry="2.6" fill={LO} opacity="0.12" />

      {/* both handles, behind the body */}
      <g fill="none" stroke="#b5b2ad" strokeWidth="2.4" strokeLinecap="round">
        <path d="M26 30C20 24 19 12 26 6c4-3 9-3 13 0 7 6 6 18 0 24" />
        <path d="M30 30C26 25 25 15 30 11" opacity="0.7" />
      </g>
      <path
        d="M27 28C22 24 21 14 27 7"
        fill="none"
        stroke={HI}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* the folded body: narrower at the top where the steel wraps over */}
      <path d="M12 24h40l4 22a3 3 0 0 1-3 3.5H11A3 3 0 0 1 8 46l4-22Z" className="fill-current" />
      {/* lit top face and shaded foot */}
      <path d="M12 24h40l0.9 5H11.1L12 24Z" fill={HI} opacity="0.45" />
      <path d="M9 43h46l0.6 3.4a3 3 0 0 1-3 3.1H11.4a3 3 0 0 1-3-3.1L9 43Z" fill={LO} opacity="0.13" />
      {/* the creases where the metal folds over the paper */}
      <path d="M17 24 14.5 49M47 24l2.5 25" stroke={LO} strokeWidth="1" opacity="0.11" />
    </svg>
  );
}

/** Wire paper clip — two passes so the wire has a lit and a shaded side. */
export function PaperClip({ className, style }: P) {
  const d = "M16 9v34a6.5 6.5 0 0 1-13 0V11a4.5 4.5 0 0 1 9 0v30a2.5 2.5 0 0 1-5 0V15";
  return (
    <svg viewBox="0 0 22 54" className={className} style={style} aria-hidden>
      <path d={d} className="stroke-current" fill="none" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d={d}
        stroke={HI}
        fill="none"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
        transform="translate(-0.7,-0.7)"
      />
    </svg>
  );
}

/** Push pin — glossy dome, collar, base disc, needle. */
export function PushPin({ className, style }: P) {
  return (
    <svg viewBox="0 0 36 50" className={className} style={style} aria-hidden>
      <path d="M18 32v16" stroke="#9a938a" strokeWidth="1.8" strokeLinecap="round" />
      {/* base disc */}
      <ellipse cx="18" cy="28" rx="14" ry="5.5" className="fill-current" />
      <path d="M4 28a14 5.5 0 0 0 28 0Z" fill={LO} opacity="0.16" />
      {/* collar */}
      <path d="M12 15h12v13H12z" className="fill-current" />
      <path d="M20 15h4v13h-4z" fill={LO} opacity="0.12" />
      {/* dome */}
      <ellipse cx="18" cy="13" rx="10.5" ry="9.5" className="fill-current" />
      <path d="M18 3.5a10.5 9.5 0 0 1 10.5 9.5c0 2-1 4-2.5 5.5.5-8-3.5-13-8-15Z" fill={LO} opacity="0.14" />
      <ellipse cx="14" cy="9" rx="3.6" ry="2.6" fill={HI} opacity="0.62" transform="rotate(-22 14 9)" />
      <ellipse cx="21.5" cy="17.5" rx="2" ry="1.1" fill={HI} opacity="0.3" />
    </svg>
  );
}
