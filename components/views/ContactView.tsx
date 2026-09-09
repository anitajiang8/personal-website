import { links, profile } from "@/content/site";
import StampCard, { FillRow } from "../paper/StampCard";
import CutoutHeading from "../paper/CutoutHeading";
import { PushPin } from "../paper/Hardware";
import { Tape } from "../paper/Decor";
import { HandNote } from "../paper/Annotation";
import { Squiggle } from "../Doodles";
import { FoilStar, SunFace } from "../paper/Stickers";

/* Strip the scheme so the card reads like something written on a form rather
   than pasted from a browser bar. */
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function ContactView() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center px-4 py-8 sm:px-6">
      <div className="relative">
        <Tape
          variant="stripe"
          color="rgba(168,197,232,0.55)"
          rotate={-8}
          className="left-2 top-14 z-10 h-7 w-20"
        />
        <Tape
          variant="dot"
          color="rgba(195,217,176,0.55)"
          rotate={7}
          className="bottom-16 right-3 z-10 h-7 w-20"
        />
        <FoilStar className="pointer-events-none absolute bottom-14 left-5 z-10 hidden h-12 w-12 -rotate-12 md:block" />
        <SunFace className="pointer-events-none absolute right-6 top-20 z-10 hidden h-12 w-12 rotate-6 md:block" />
        <PushPin className="absolute -top-3 left-1/2 z-20 h-9 w-7 -translate-x-1/2 text-coral" />

        <StampCard title="CORRESPONDENCE · NO POSTAGE REQUIRED" rotate={-0.8}>
          <p className="text-center font-hand text-2xl text-ink-faint">say hello</p>

          <h2 className="mt-2 text-center text-[1.6rem] leading-tight sm:text-[2.1rem]">
            <CutoutHeading text="tell me what" variant="plain" />
            <br />
            <CutoutHeading text="you're building" variant="chips" />
          </h2>

          <div className="mx-auto mt-9 max-w-sm space-y-4">
            <FillRow label="EMAIL">
              <a href={`mailto:${links.email}`} className="underline-sketch">
                {links.email}
              </a>
            </FillRow>
            <FillRow label="GITHUB">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="underline-sketch"
              >
                {bare(links.github)}
              </a>
            </FillRow>
            <FillRow label="LINKEDIN">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline-sketch"
              >
                {bare(links.linkedin)}
              </a>
            </FillRow>
            <FillRow label="RESUME">
              <a href={profile.resumeUrl} className="underline-sketch">
                {profile.resumeUrl.replace(/^\//, "")}
              </a>
            </FillRow>
            <FillRow label="BASED IN">{profile.location}</FillRow>
          </div>

          <div className="mt-8 flex justify-center">
            <HandNote rotate={-2}>I reply to everything, promise</HandNote>
          </div>

          <Squiggle className="mx-auto mt-6 h-5 w-20 text-ink-faint/50" />
          <p className="mt-4 text-center font-mono text-[0.6rem] tracking-[0.12em] text-ink-faint">
            DESIGNED &amp; BUILT BY {profile.name.toUpperCase()} ·{" "}
            {new Date().getFullYear()}
          </p>
        </StampCard>
      </div>
    </div>
  );
}
