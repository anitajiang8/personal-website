/* Desk hardware, drawn to sit on top of paper: solid pastel shapes rather
   than line art, so they read as objects holding the page down. All take
   colour from a `text-*` class via fill-current / stroke-current. */

type P = { className?: string; style?: React.CSSProperties };

/** Bulldog clip, head-on — clamps the top edge of a card. */
export function BulldogClip({ className, style }: P) {
  return (
    <svg viewBox="0 0 64 52" className={className} style={style} aria-hidden>
      {/* the raised head with its finger hole */}
      <path
        d="M24 30V16a8 8 0 0 1 16 0v14Z"
        className="fill-current"
        opacity="0.92"
      />
      <circle cx="32" cy="16" r="5.5" className="fill-paper" />
      {/* side pins */}
      <rect x="16" y="27" width="6" height="4" rx="2" className="fill-current" opacity="0.75" />
      <rect x="42" y="27" width="6" height="4" rx="2" className="fill-current" opacity="0.75" />
      {/* the jaw */}
      <path
        d="M6 30h52a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3Z"
        className="fill-current"
      />
      {/* a highlight so it doesn't read flat */}
      <path d="M8 34h48" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.28" />
    </svg>
  );
}

/** Wire paper clip. */
export function PaperClip({ className, style }: P) {
  return (
    <svg viewBox="0 0 22 54" className={className} style={style} aria-hidden>
      <path
        d="M16 9v34a6.5 6.5 0 0 1-13 0V11a4.5 4.5 0 0 1 9 0v30a2.5 2.5 0 0 1-5 0V15"
        className="stroke-current"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Push pin, front on. */
export function PushPin({ className, style }: P) {
  return (
    <svg viewBox="0 0 34 46" className={className} style={style} aria-hidden>
      <path d="M17 30v14" className="stroke-ink-faint" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="17" cy="26" rx="13" ry="5" className="fill-current" opacity="0.88" />
      <rect x="12" y="14" width="10" height="12" className="fill-current" />
      <ellipse cx="17" cy="12" rx="9.5" ry="8.5" className="fill-current" />
      <ellipse cx="13.5" cy="9" rx="3" ry="2.2" fill="white" opacity="0.42" />
    </svg>
  );
}
