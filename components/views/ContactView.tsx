import { links, profile } from "@/content/site";
import { Squiggle } from "../Doodles";
import { PushPin } from "../paper/Hardware";
import { Circled } from "../paper/Annotation";

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
