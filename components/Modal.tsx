"use client";

import { useEffect, useRef } from "react";

/* Shared overlay chrome: backdrop, escape-to-close, taped paper card. */
export default function Modal({
  label,
  onClose,
  children,
}: {
  label: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Stop the page behind the overlay from scrolling on touch devices.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-ink/25 p-4 backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="panel-in relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-rule bg-paper p-6 shadow-[0_30px_60px_-25px_rgba(33,31,28,0.5)] sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-1 rounded-[2px] bg-butter/40" />
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-rule px-2.5 py-1 text-xs text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
        >
          esc
        </button>
        {children}
      </div>
    </div>
  );
}
