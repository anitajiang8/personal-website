/* A perforated stamp-edge card with dotted fill-in rows — the form card from
   the reference portfolio, where the details are written onto printed lines. */

import type { ReactNode } from "react";

export function FillRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="w-[4.5rem] shrink-0 font-mono text-[0.66rem] tracking-[0.1em] text-ink-faint">
        {label}
      </span>
      <span aria-hidden className="dot-leader" />
      <span className="shrink-0 font-hand text-lg leading-none text-ink">
        {children}
      </span>
    </div>
  );
}

export default function StampCard({
  title,
  children,
  className = "",
  rotate = 0,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`stamp-edge px-7 py-8 sm:px-9 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* An inner hairline, the way a stamp is printed inside its perforation. */}
      <div className="border border-dashed border-ink-faint/35 px-5 py-6 sm:px-6">
        {title && (
          <p className="mb-5 text-center font-mono text-[0.62rem] tracking-[0.22em] text-ink-faint">
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
