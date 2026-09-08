import { profile, links } from "@/content/site";
import { Sparkle, Star, Squiggle, Flower, Heart, Cloud } from "./Doodles";

/* Renders the headline, turning {braced words} into highlighted spans. */
function Headline({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <h1 className="font-display text-[2.6rem] leading-[1.12] tracking-tight text-ink sm:text-6xl md:text-[4.25rem]">
      {parts.map((part, i) =>
        part.startsWith("{") ? (
          <em key={i} className="mark-hand italic">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </h1>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* ── Scattered doodles. Hidden on phones to keep it clean. ── */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <Sparkle className="float-slow absolute left-[8%] top-[16%] h-9 w-9 text-blue" style={{ ["--r" as string]: "-8deg" }} />
        <Star className="float-slow absolute right-[11%] top-[13%] h-7 w-7 text-coral" style={{ ["--r" as string]: "12deg", animationDelay: "1.1s" }} />
        <Flower className="float-slow absolute left-[13%] bottom-[22%] h-8 w-8 text-sage" style={{ ["--r" as string]: "6deg", animationDelay: "2s" }} />
        <Heart className="float-slow absolute right-[9%] bottom-[28%] h-7 w-7 text-coral" style={{ ["--r" as string]: "-10deg", animationDelay: "0.6s" }} />
        <Cloud className="float-slow absolute right-[5%] top-[46%] h-9 w-14 text-ink-faint" style={{ ["--r" as string]: "4deg", animationDelay: "1.6s" }} />
        <Sparkle className="float-slow absolute left-[7%] top-[54%] h-5 w-5 text-butter" style={{ ["--r" as string]: "15deg", animationDelay: "2.6s" }} />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {profile.status && (
          <div className="rise mb-7 inline-flex items-center gap-2 rounded-full border border-rule bg-paper-deep/60 px-3.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
            <span className="text-xs text-ink-soft">{profile.status}</span>
          </div>
        )}

        <div className="rise" style={{ animationDelay: "0.08s" }}>
          <Headline text={profile.headline} />
        </div>

        {/* Quick about-me, right where you land */}
        <div
          className="rise mx-auto mt-7 max-w-xl space-y-2"
          style={{ animationDelay: "0.18s" }}
        >
          {profile.blurb.map((line, i) => (
            <p key={i} className="text-[0.98rem] leading-relaxed text-ink-soft">
              {line}
            </p>
          ))}
        </div>

        <div
          className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.28s" }}
        >
          <a
            href="#work"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            see my work
          </a>
          <a
            href={`mailto:${links.email}`}
            className="rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper-deep"
          >
            say hi
          </a>
        </div>

        <div
          className="rise relative mx-auto mt-14 w-fit"
          style={{ animationDelay: "0.4s" }}
        >
          <Squiggle className="h-5 w-28 text-ink-faint/60" />
        </div>
      </div>
    </section>
  );
}
