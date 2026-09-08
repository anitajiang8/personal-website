import { links, profile } from "@/content/site";
import { Squiggle, Star, Sparkle, Heart } from "../Doodles";

const socials = [
  { label: "github", href: links.github },
  { label: "linkedin", href: links.linkedin },
  { label: "resume", href: profile.resumeUrl },
];

export default function ContactView() {
  return (
    <div className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-5 py-8 text-center sm:px-6 md:py-0">
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <Star className="float-slow absolute left-[6%] top-[26%] h-6 w-6 text-butter" style={{ ["--r" as string]: "-10deg" }} />
        <Sparkle className="float-slow absolute right-[8%] top-[32%] h-7 w-7 text-blue" style={{ ["--r" as string]: "8deg", animationDelay: "1.3s" }} />
        <Heart className="float-slow absolute right-[18%] bottom-[24%] h-5 w-5 text-coral" style={{ ["--r" as string]: "-6deg", animationDelay: "2.1s" }} />
      </div>

      <p className="font-hand text-2xl text-ink-faint">say hello</p>

      <h2 className="mt-2 font-display text-[2.2rem] leading-tight text-ink sm:text-5xl">
        I&apos;d love to hear about
        <br />
        what you&apos;re <em className="mark-hand italic">building</em>
      </h2>

      <a
        href={`mailto:${links.email}`}
        className="underline-sketch mt-7 inline-block font-display text-2xl text-ink sm:text-3xl"
      >
        {links.email}
      </a>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="underline-sketch text-sm text-ink-soft transition-colors hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </div>

      <Squiggle className="mt-12 h-5 w-24 text-ink-faint/50" />
      <p className="mt-6 text-xs text-ink-faint">
        Designed &amp; built by {profile.name} · {new Date().getFullYear()}
      </p>
    </div>
  );
}
