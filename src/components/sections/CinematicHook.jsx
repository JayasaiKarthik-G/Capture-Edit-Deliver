import { ArrowUpRight, Play } from 'lucide-react'

const CinematicHook = () => {
  return (
    <section
      id="cinematic-hook"
      className="relative min-h-[80svh] overflow-hidden bg-[#050706] sm:min-h-[85svh]"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/ced-hero-poster.jpg"
        >
          <source
            src="/videos/ced-story.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050706]/70 via-black/20 to-[#050706]" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/50" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.75)]" />

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7a76c]/[0.06] blur-[130px] sm:h-[600px] sm:w-[600px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[80svh] items-center justify-center px-5 py-24 sm:min-h-[85svh] sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl text-center">
          
          {/* Eyebrow */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
            <span className="h-px w-8 bg-[#c7a76c]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
              The CED Perspective
            </span>

            <span className="h-px w-8 bg-[#c7a76c]" />
          </div>

          {/* Main statement */}
          <h2 className="mx-auto max-w-6xl font-[Montserrat] text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
            <span className="block text-white">
              Your phone has
            </span>

            <span className="block text-white/35">
              memories.
            </span>

            <span className="mt-2 block text-[#c7a76c] sm:mt-4">
              Let us turn
            </span>

            <span className="block text-white">
              them into stories.
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/55 sm:mt-10 sm:text-base sm:leading-8">
            The best moments deserve more than sitting
            inside a camera roll. We turn them into
            cinematic reels you can relive, share and
            remember.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_45px_rgba(199,167,108,0.25)] active:scale-[0.98] sm:w-auto"
            >
              Make Your Moment a Reel

              <ArrowUpRight
                size={17}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Small cinematic label */}
          <div className="mt-12 flex items-center justify-center gap-3 sm:mt-14">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-md">
              <Play
                size={10}
                fill="currentColor"
                className="ml-0.5 text-[#c7a76c]"
              />
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/35">
              Real life → cinematic stories
            </span>
          </div>
        </div>
      </div>

      {/* Top/bottom cinematic borders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  )
}

export default CinematicHook
