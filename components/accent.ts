/* Static class lookups — Tailwind can only see class names it finds in the
   source, so these can't be built by string interpolation. */
export const accentClasses = {
  blue: { chip: "bg-blue/10 text-blue", rule: "bg-blue", tape: "bg-blue/25" },
  coral: { chip: "bg-coral/10 text-coral", rule: "bg-coral", tape: "bg-coral/25" },
  butter: { chip: "bg-butter/20 text-[#9a7b12]", rule: "bg-butter", tape: "bg-butter/40" },
  sage: { chip: "bg-sage/15 text-[#5d7345]", rule: "bg-sage", tape: "bg-sage/30" },
  lilac: { chip: "bg-lilac/15 text-[#6b5aa0]", rule: "bg-lilac", tape: "bg-lilac/30" },
} as const;
