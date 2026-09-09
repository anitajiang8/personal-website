/* Static class lookups — Tailwind can only see class names it finds in the
   source, so these can't be built by string interpolation.

   The pastel token is the fill; its `-ink` twin carries the text, which would
   be unreadable at pastel weight. */
export const accentClasses = {
  blue: { chip: "bg-blue/35 text-blue-ink", rule: "bg-blue", tape: "bg-blue/25" },
  coral: { chip: "bg-coral/35 text-coral-ink", rule: "bg-coral", tape: "bg-coral/25" },
  butter: { chip: "bg-butter/45 text-butter-ink", rule: "bg-butter", tape: "bg-butter/40" },
  sage: { chip: "bg-sage/40 text-sage-ink", rule: "bg-sage", tape: "bg-sage/30" },
  lilac: { chip: "bg-lilac/40 text-lilac-ink", rule: "bg-lilac", tape: "bg-lilac/30" },
} as const;
