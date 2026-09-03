import { ArrowUpRight, Play } from 'lucide-react'
import Section from '../common/Section'

const AboutCED = () => {
  return (
    <Section
      id="about"
      className="relative border-t border-white/5 py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#183b2a]/20 blur-[120px]" />

      <div className="relative">
        {/* Top label */}
        <div className="mb-12 flex items-center justify-between sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c7a76c]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
              About CED
            </span>
          </div>

          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-white/20 sm:block">
            01 / 07
          </span>
        </div>

        {/* Main grid */}
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          
          {/* Left content */}
          <div>
            <h2 className="font-[Montserrat] text-[clamp(3.2rem,9vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              <span className="block">Capture.</span>

              <span className="block text-white/40">Edit.</span>

              <span className="block text-[#c7a76c]">Deliver.</span>
            </h2>

            <div className="mt-10 max-w-xl border-l border-[#c7a76c]/40 pl-5 sm:mt-12 sm:pl-7">
              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                CED is a creative content team that turns real-life moments
                into reels people want to watch again.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
                From weddings and birthdays to baby showers, cafés, brands,
                car deliveries, celebrations and special events — we capture
                the moments that matter and transform them into cinematic,
                social-media-ready stories.
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#0c120f]">
              
              {/* Video */}
              <video
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/videos/ced-story.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              {/* Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />

              {/* Play / branding badge */}
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-3 py-2 backdrop-blur-md">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                  <Play size={11} fill="currentColor" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                  CED Stories
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c7a76c]">
                    Real moments
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Made to be remembered.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>

            {/* Decorative number */}
            <div className="absolute -bottom-6 -right-3 hidden font-[Montserrat] text-[7rem] font-black leading-none text-white/[0.025] sm:block">
              CED
            </div>
          </div>
        </div>

        {/* Brand statement */}
        <div className="mt-20 border-t border-white/10 pt-10 sm:mt-28 sm:pt-12">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                Our philosophy
              </p>

              <h3 className="mt-4 max-w-4xl font-[Montserrat] text-3xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                You live the moment.
                <br />
                <span className="text-white/40">
                  We create the reel.
                </span>
              </h3>
            </div>

            <a
              href="#services"
              className="group inline-flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              Explore what we capture

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c7a76c]/60 group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutCED