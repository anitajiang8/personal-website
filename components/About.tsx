import { aboutMe, offTheClock, profile } from "@/content/site";
import SectionLabel from "./SectionLabel";
import { doodleMap, DoodleName, Flower, Sparkle } from "./Doodles";

export default function About() {
  return (
    <section id="about" className="border-t border-rule px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel note="the part that isn't on my resume">
          About me
        </SectionLabel>

        <div className="grid gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-14">
          <div className="space-y-5">
            {aboutMe.map((para, i) => (
              <p key={i} className="text-[1.02rem] leading-[1.75] text-ink-soft">
                {para}
              </p>
            ))}
            <p className="pt-1 font-hand text-2xl text-ink">
              — currently in {profile.location}
            </p>
          </div>

          {/* Polaroid. Swap the inner div for:
              <img src="/me.jpg" alt="" className="h-full w-full object-cover" />
              after dropping me.jpg into /public */}
          <figure className="mx-auto w-full max-w-[19rem] rotate-2 self-start">
            <div className="rounded-[3px] bg-white p-3 pb-5 shadow-[0_2px_4px_rgba(33,31,28,0.06),0_16px_36px_-22px_rgba(33,31,28,0.4)]">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-paper-deep">
                <Flower className="h-16 w-16 text-ink-faint/40" />
                <span className="absolute bottom-3 px-4 text-center text-[0.65rem] leading-snug text-ink-faint/70">
                  drop me.jpg in /public
                </span>
              </div>
              <figcaption className="mt-4 text-center font-hand text-xl text-ink-soft">
                a photo of me looking approachable
              </figcaption>
            </div>
          </figure>
        </div>

        {/* ── Off the clock ── */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Sparkle className="h-5 w-5 text-butter" />
            <h3 className="font-display text-2xl text-ink">Off the clock</h3>
            <span className="h-px flex-1 bg-rule" />
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offTheClock.map((item) => {
              const Doodle = doodleMap[item.doodle as DoodleName] ?? Sparkle;
              return (
                <li
                  key={item.label}
                  className="rounded-lg border border-rule bg-paper-deep/40 p-5 transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1"
                  style={{ transform: `rotate(${item.tilt}deg)` }}
                >
                  <Doodle className="h-8 w-8 text-ink-soft" />
                  <p className="mt-4 font-display text-xl text-ink">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.caption}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
