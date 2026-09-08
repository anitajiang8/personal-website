export default function SectionLabel({
  children,
  note,
}: {
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end gap-4">
      <span className="rounded-full border border-ink/25 px-5 py-2 font-display text-xl leading-none text-ink">
        {children}
      </span>
      {note && (
        <span className="font-hand text-lg text-ink-faint">{note}</span>
      )}
    </div>
  );
}
