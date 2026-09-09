import { aboutMe, profile } from "@/content/site";
import { Flower } from "../Doodles";
import { PaperClip } from "../paper/Hardware";
import { Circled } from "../paper/Annotation";

export default function AboutView() {
  return (
    <div className="mx-auto flex min-h-full max-w-4xl flex-col px-5 py-6 sm:px-6">
      <div className="sheet mx-auto flex w-full flex-1 flex-col rounded-sm p-6 sm:p-8">
        <div className="meta-rule flex shrink-0 items-baseline justify-between gap-4 pb-2.5">
          <p className="font-hand text-lg text-ink-faint">
            about <span className="text-ink-soft">· the long version</span>
          </p>
          <p className="font-hand text-lg text-ink-faint">{profile.location}</p>
        </div>

        <div className="mt-7 grid grid-cols-1 items-start gap-9 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-[2rem] leading-tight text-ink sm:text-4xl">
              The <Circled className="text-blue">long way</Circled> around
            </h2>

            <div className="mt-6 space-y-4">
              {aboutMe.map((para, i) => (
                <p key={i} className="text-[0.95rem] leading-[1.8] text-ink-soft">
                  {para}
                </p>
              ))}
            </div>

            <p className="mt-6 font-hand text-2xl text-ink">
              — currently in {profile.location}
            </p>
          </div>

          {/* Swap the inner div for:
              <img src="/me.jpg" alt="" className="h-full w-full object-cover" />
              after dropping me.jpg into /public */}
          <figure className="relative mx-auto w-full max-w-[14rem] rotate-2">
            <PaperClip className="absolute -top-4 right-5 z-10 h-10 w-5 text-coral" />
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
        </div>
      </div>
    </div>
  );
}
