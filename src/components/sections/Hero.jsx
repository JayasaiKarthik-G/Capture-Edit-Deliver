import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import { siteData } from '../../data/siteData'

const Hero = () => {
  const { hero } = siteData

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#050706]"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.poster}
          preload="metadata"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-[#050706]/40 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.65)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
        
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c7a76c]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 sm:text-xs">
              {hero.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-[Montserrat] text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
            <span className="block text-white">
              {hero.title[0]}
            </span>

            <span className="block text-white/85">
              {hero.title[1]}
            </span>
          </h1>

          {/* Bottom Content */}
          <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            
            <div className="max-w-xl">
              <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                {hero.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c7a76c] px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_40px_rgba(199,167,108,0.25)] active:scale-[0.98]"
                >
                  🎥 Book Your Reel Now

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                {/* Secondary CTA */}
                <a
                  href="#work"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]"
                >
                  <Play
                    size={14}
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  Watch Our Work
                </a>
              </div>
            </div>

            {/* Hero Side Message */}
            <div className="hidden max-w-[190px] lg:block">
              <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-white/35">
                Real moments.
                <br />
                Cinematic stories.
                <br />
                Ready to share.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-7 right-5 hidden items-center gap-3 text-white/40 transition-colors hover:text-white sm:right-8 md:flex lg:right-10"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
            Scroll to explore
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
            <ArrowDown size={15} className="animate-bounce" />
          </span>
        </a>
      </div>

      {/* Bottom Film Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.8%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.8%22/%3E%3C/svg%3E')]" />
    </section>
  )
}

export default Hero