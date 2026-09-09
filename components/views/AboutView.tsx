import { aboutMe, interests, profile } from "@/content/site";
import Spread from "../paper/Spread";
import Collage from "../paper/Collage";
import CutoutHeading from "../paper/CutoutHeading";
import { PaperClip } from "../paper/Hardware";
import { Tape, Sticker } from "../paper/Decor";
import { HandNote } from "../paper/Annotation";
import { Flower, Heart } from "../Doodles";

/* A few prints pulled from across the interests, so the right-hand page reads
   as a page of photos rather than a single portrait. */
const scraps = interests
  .flatMap((i) => i.photos)
  .slice(0, 4);

export default function AboutView() {
  return (
    <Spread
      topic="the long version"
      decor={
        <>
          <Tape
            variant="dot"
            color="rgba(207,194,232,0.55)"
            rotate={-5}
            className="-left-4 bottom-10 h-7 w-24"
          />
          <Sticker
            className="absolute right-7 top-40 hidden h-10 w-10 md:inline-flex"
            rotate={-12}
          >
            <Heart className="h-5 w-5 text-coral-ink" />
          </Sticker>
        </>
      }
      left={
        <div>
          <h2 className="text-[1.75rem] leading-tight sm:text-[2.1rem]">
            <CutoutHeading text="the long way around" variant="plain" />
          </h2>

          {/* leading-[28px] matches the .ruled rhythm exactly — anything else and the
              lines drift through the text after a few rows. */}
          <div className="ruled mt-6 space-y-7">
            {aboutMe.map((para, i) => (
              <p key={i} className="text-[0.95rem] leading-[28px] text-ink-soft">
                {para}
              </p>
            ))}
          </div>

          <p className="mt-7 font-hand text-2xl text-ink">
            — currently in {profile.location}
          </p>
        </div>
      }
      right={
        <div className="flex flex-col gap-7">
          {/* The portrait. Swap the inner div for:
              <img src="/me.jpg" alt="" className="h-full w-full object-cover" />
              after dropping me.jpg into /public */}
          <figure className="relative mx-auto w-full max-w-[13rem] rotate-2">
            <PaperClip className="absolute -top-4 right-5 z-10 h-10 w-5 text-coral-ink" />
            <Tape
              variant="plain"
              color="rgba(245,228,168,0.6)"
              rotate={-8}
              className="-left-4 top-6 h-6 w-16"
            />
            <div className="rounded-[3px] bg-white p-3 pb-4 shadow-[0_2px_4px_rgba(33,31,28,0.06),0_16px_36px_-22px_rgba(33,31,28,0.4)]">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-paper-deep">
                <Flower className="h-12 w-12 text-ink-faint/40" />
                <span className="absolute bottom-3 px-4 text-center text-[0.6rem] leading-snug text-ink-faint/70">
                  drop me.jpg in /public
                </span>
              </div>
              <figcaption className="mt-3 text-center font-hand text-lg text-ink-soft">
                a photo of me looking approachable
              </figcaption>
            </div>
          </figure>

          {scraps.length > 0 && (
            <div>
              <HandNote rotate={-2} arrow="left" className="mb-3">
                bits of the rest of it
              </HandNote>
              <Collage photos={scraps} size="sm" className="gap-y-6" />
            </div>
          )}
        </div>
      }
    />
  );
}
