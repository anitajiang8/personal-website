/* Ransom-note headings: every letter cut from a different scrap of paper.

   All variation is derived from the character index, never Math.random() —
   a random draw would differ between the server and client render and trip a
   hydration mismatch. */

const FACES = ["font-display", "font-hand", "font-mono", "font-display"] as const;
const CHIPS = [
  "bg-coral text-coral-ink",
  "bg-blue text-blue-ink",
  "bg-butter text-butter-ink",
  "bg-sage text-sage-ink",
  "bg-lilac text-lilac-ink",
] as const;

/* Small fixed rotation cycle. Coprime-ish lengths against the palettes above
   so the pattern doesn't visibly repeat on short words. */
const TILTS = [-4, 2.5, -1.5, 3.5, -2.5, 1.5, -3] as const;

export default function CutoutHeading({
  text,
  className = "",
  /* Letters are chips by default. `plain` keeps the mixed faces and tilts but
     drops the coloured backgrounds — better for long headings. */
  variant = "chips",
}: {
  text: string;
  className?: string;
  variant?: "chips" | "plain";
}) {
  return (
    <span className={`inline-flex flex-wrap items-baseline ${className}`}>
      {/* The whole word for a screen reader; the per-letter chips are decorative
          fragments and would otherwise be read out one character at a time. */}
      <span className="sr-only">{text}</span>

      <span aria-hidden className="inline-flex flex-wrap items-baseline">
        {[...text].map((char, i) => {
          if (char === " ") return <span key={i} className="w-[0.32em]" />;

          const face = FACES[i % FACES.length];
          const tilt = TILTS[i % TILTS.length];
          const chip = CHIPS[i % CHIPS.length];

          return (
            <span
              key={i}
              className={`inline-block ${face} ${
                variant === "chips"
                  ? `${chip} mx-[0.035em] rounded-[3px] px-[0.14em] py-[0.02em] shadow-[0_1px_2px_rgba(33,31,28,0.12)]`
                  : "mx-[0.01em] text-ink"
              }`}
              style={{
                transform: `rotate(${tilt}deg)`,
                /* Nudge every other letter off the baseline, the way cut paper
                   never quite lines up. */
                translate: `0 ${i % 2 ? "0.045em" : "-0.045em"}`,
              }}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
