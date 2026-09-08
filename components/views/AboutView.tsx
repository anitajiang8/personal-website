import { aboutMe, profile } from "@/content/site";
import { Flower } from "../Doodles";

export default function AboutView() {
  return (
    <div className="mx-auto grid h-full max-w-4xl grid-cols-1 items-center gap-10 px-5 py-8 sm:px-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:py-0">
      <div className="space-y-4">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          The long way around
        </h2>
        {aboutMe.map((para, i) => (
          <p key={i} className="text-[0.98rem] leading-[1.75] text-ink-soft">
            {para}
          </p>
        ))}
        <p className="pt-1 font-hand text-2xl text-ink">
          — currently in {profile.location}
        </p>
      </div>

      {/* Swap the inner div for:
          <img src="/me.jpg" alt="" className="h-full w-full object-cover" />
          after dropping me.jpg into /public */}
      <figure className="mx-auto w-full max-w-[15rem] rotate-2">
        <div className="rounded-[3px] bg-white p-3 pb-5 shadow-[0_2px_4px_rgba(33,31,28,0.06),0_16px_36px_-22px_rgba(33,31,28,0.4)]">
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-paper-deep">
            <Flower className="h-14 w-14 text-ink-faint/40" />
            <span className="absolute bottom-3 px-4 text-center text-[0.62rem] leading-snug text-ink-faint/70">
              drop me.jpg in /public
            </span>
          </div>
          <figcaption className="mt-3 text-center font-hand text-lg text-ink-soft">
            a photo of me looking approachable
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
