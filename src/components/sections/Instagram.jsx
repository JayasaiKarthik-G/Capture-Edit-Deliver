import {
  ArrowUpRight,
  ExternalLink,
  Play,
} from 'lucide-react'
import Section from '../common/Section'
import { reels } from '../../data/reels'
import { siteData } from '../../data/siteData'

const Instagram = () => {
  const instagramReels = reels.slice(0, 6)

  return (
    <Section
      id="instagram"
      className="relative border-t border-white/5 py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-[#183b2a]/20 blur-[160px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#c7a76c]/[0.035] blur-[150px]" />

      <div className="relative">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                Follow CED
              </span>
            </div>

            <h2 className="max-w-5xl font-[Montserrat] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Life happens.
              <br />
              <span className="text-white/35">
                We make it
              </span>
              <br />
              <span className="text-[#c7a76c]">
                scroll-stopping.
              </span>
            </h2>
          </div>

          <a
            href={siteData.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#c7a76c]/50 hover:bg-[#c7a76c] hover:text-[#050706] sm:w-auto"
          >
            <span className="text-base leading-none">
              @
            </span>

            {siteData.instagram.handle}

            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Instagram identity card */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] sm:mt-16">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#c7a76c]/[0.05] blur-[110px]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#c7a76c]/40 bg-[#c7a76c]/[0.06]">
                  <span className="font-[Montserrat] text-2xl font-black text-[#c7a76c]">
                    @
                  </span>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c7a76c]">
                    Instagram
                  </p>

                  <h3 className="mt-2 font-[Montserrat] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                    {siteData.instagram.handle}
                  </h3>

                  <p className="mt-1 text-xs text-white/35">
                    Capture • Edit • Deliver
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 md:gap-8">
                <div>
                  <p className="font-[Montserrat] text-xl font-black sm:text-2xl">
                    REELS
                  </p>

                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    Made to rewatch
                  </p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <p className="font-[Montserrat] text-xl font-black sm:text-2xl">
                    CED
                  </p>

                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    Real stories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual feed */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {instagramReels.map((reel, index) => (
            <a
              key={reel.id}
              href={
                reel.instagramUrl ||
                siteData.instagram.url
              }
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a100d] ${
                index === 0
                  ? 'col-span-2 aspect-[16/10] sm:col-span-2 sm:aspect-[16/11]'
                  : 'aspect-square'
              }`}
            >
              <img
                src={reel.poster}
                alt={`${reel.title} — CED`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

              {/* Reel indicator */}
              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md">
                <Play
                  size={11}
                  fill="currentColor"
                  className="ml-0.5 text-white"
                />
              </div>

              {/* Number */}
              <span className="absolute right-4 top-4 font-mono text-[8px] tracking-[0.2em] text-white/50">
                {reel.number}
              </span>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#c7a76c]">
                      {reel.category}
                    </p>

                    <h4 className="mt-1 truncate font-[Montserrat] text-sm font-black uppercase tracking-[-0.025em] sm:text-base">
                      {reel.title}
                    </h4>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white opacity-70 backdrop-blur-md transition-all duration-300 group-hover:border-[#c7a76c] group-hover:bg-[#c7a76c] group-hover:text-[#050706] group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Corner detail */}
              <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#c7a76c]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-[#c7a76c]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-5 overflow-hidden rounded-[2rem] border border-[#c7a76c]/20 bg-[#c7a76c]/[0.04]">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#c7a76c]/[0.04] to-transparent" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c7a76c]/30">
                    <ExternalLink
                      size={14}
                      className="text-[#c7a76c]"
                    />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c7a76c]">
                    See the latest
                  </span>
                </div>

                <h3 className="mt-5 max-w-3xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  The next story
                  <br />
                  <span className="text-white/35">
                    might be yours.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                  Follow CED for fresh reels, behind-the-scenes
                  moments and the stories we're creating every day.
                </p>
              </div>

              <a
                href={siteData.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_45px_rgba(199,167,108,0.22)] active:scale-[0.98] sm:w-auto"
              >
                Visit Instagram

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                Stay connected
              </p>

              <h3 className="max-w-5xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                Your feed is full
                <br />
                of moments.
                <br />
                <span className="text-white/30">
                  Let ours tell the story.
                </span>
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
            >
              Book your reel

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c7a76c] group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
            @captureeditdeliver
          </span>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            06 / 07
          </span>
        </div>
      </div>
    </Section>
  )
}

export default Instagram