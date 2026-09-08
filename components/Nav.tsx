import { profile } from "@/content/site";
import { Sparkle } from "./Doodles";

const items = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="group flex items-center gap-2">
          <Sparkle className="h-4 w-4 text-coral transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-hand text-xl leading-none text-ink">
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="underline-sketch font-display text-lg text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            resume
          </a>
        </div>
      </nav>
    </header>
  );
}
