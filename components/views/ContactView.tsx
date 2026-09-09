import { links, profile } from "@/content/site";
import { Squiggle } from "../Doodles";
import { PushPin } from "../paper/Hardware";
import { Circled } from "../paper/Annotation";
import { Tape, Sticker } from "../paper/Decor";
import { Sparkle, Star } from "../Doodles";

const socials = [
  { label: "github", href: links.github },
  { label: "linkedin", href: links.linkedin },
  { label: "resume", href: profile.resumeUrl },
];

export default function ContactView() {
  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col justify-center px-5 py-10 sm:px-6">
      <div className="sheet relative mx-auto w-full max-w-xl rounded-sm px-7 py-10 text-center sm:px-10">
        <PushPin className="absolute -top-4 left-1/2 h-9 w-7 -translate-x-1/2 text-coral" />
        <Tape variant="stripe" color="rgba(109,143,230,0.4)" rotate={-8} className="-left-5 top-14 h-7 w-20" />
        <Tape variant="dot" color="rgba(157,184,132,0.4)" rotate={7} className="-right-5 bottom-16 h-7 w-20" />
        <Sticker className="absolute -left-4 bottom-24 hidden h-10 w-10 md:inline-flex" rotate={-10}>
          <Star className="h-5 w-5 text-butter" />
        </Sticker>
        <Sticker className="absolute -right-4 top-24 hidden h-9 w-9 md:inline-flex" rotate={12}>
          <Sparkle className="h-4 w-4 text-lilac" />
        </Sticker>

        <p className="font-hand text-2xl text-ink-faint">say hello</p>

        <h2 className="mt-2 font-display text-[1.9rem] leading-tight text-ink sm:text-[2.6rem]">
          I&apos;d love to hear about
          <br />
          what you&apos;re <Circled className="text-butter">building</Circled>
        </h2>

        <a
          href={`mailto:${links.email}`}
          className="underline-sketch mt-8 inline-block font-display text-xl text-ink sm:text-2xl"
        >
          {links.email}
        </a>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
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

        <Squiggle className="mx-auto mt-9 h-5 w-20 text-ink-faint/50" />
        <p className="mt-5 text-xs text-ink-faint">
          Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
