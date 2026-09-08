import { links, profile } from "@/content/site";
import { Squiggle, Star, Sparkle, Heart } from "./Doodles";

const socials = [
  { label: "github", href: links.github },
  { label: "linkedin", href: links.linkedin },
  { label: "resume", href: profile.resumeUrl },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-rule px-6 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <Star className="float-slow absolute left-[12%] top-[24%] h-6 w-6 text-butter" style={{ ["--r" as string]: "-10deg" }} />
        <Sparkle className="float-slow absolute right-[14%] top-[30%] h-7 w-7 text-blue" style={{ ["--r" as string]: "8deg", animationDelay: "1.3s" }} />
        <Heart className="float-slow absolute right-[22%] bottom-[22%] h-5 w-5 text-coral" style={{ ["--r" as string]: "-6deg", animationDelay: "2.1s" }} />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-hand text-2xl text-ink-faint">say hello</p>

        <h2 className="mt-3 font-display text-[2.4rem] leading-tight text-ink sm:text-5xl">
          I&apos;d love to hear about
          <br />
          what you&apos;re <em className="mark-hand italic">building</em>
        </h2>

        <a
          href={`mailto:${links.email}`}
          className="underline-sketch mt-8 inline-block font-display text-2xl text-ink sm:text-3xl"
        >
          {links.email}
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
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

        <Squiggle className="mx-auto mt-14 h-5 w-24 text-ink-faint/50" />

        <p className="mt-8 text-xs text-ink-faint">
          Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
