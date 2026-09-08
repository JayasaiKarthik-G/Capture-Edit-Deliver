import { ArrowUpRight, Play } from 'lucide-react'
import { siteData } from '../../data/siteData'

const CinematicHook = () => {
  return (
    <section
      id="story"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
      "
    >
      <div className="relative min-h-[760px] w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/ced-story.mp4"
          poster="/images/ced-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,0,56,0.18),transparent_42%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[760px] items-end">
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 md:pb-28 lg:px-10 xl:px-12 2xl:px-16">
            <div className="max-w-5xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff0038]">
                  <Play size={11} fill="white" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
                  Real life → cinematic stories
                </span>
              </div>

              <h2 className="cinematic-text text-[clamp(3.2rem,8vw,8rem)]">
                <span className="block text-white">
                  Your phone has
                </span>

                <span className="block text-white/40">
                  memories.
                </span>

                <span className="block text-white">
                  Let us turn
                </span>

                <span className="block text-[#ff0038]">
                  them into stories.
                </span>
              </h2>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a
                  href={`https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteData.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ced-button ced-button-primary"
                >
                  Make Your Moment a Reel
                  <ArrowUpRight size={17} />
                </a>

                <span className="text-xs leading-5 text-white/35">
                  Captured naturally.
                  <br />
                  Edited beautifully.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CinematicHook