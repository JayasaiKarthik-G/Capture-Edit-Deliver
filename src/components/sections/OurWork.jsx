import { useMemo, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react'
import Section from '../common/Section'
import { reels } from '../../data/reels'

const OurWork = () => {
  const [category, setCategory] = useState('All')
  const [playingId, setPlayingId] = useState(null)
  const [mutedReels, setMutedReels] = useState({})

  const videoRefs = useRef({})

  const categories = useMemo(
    () => ['All', ...new Set(reels.map((reel) => reel.category))],
    []
  )

  const filteredReels = useMemo(() => {
    const filtered =
      category === 'All'
        ? reels
        : reels.filter((reel) => reel.category === category)

    return filtered.slice(0, 8)
  }, [category])

  const playReel = async (id) => {
    const selectedVideo = videoRefs.current[id]

    if (!selectedVideo) return

    Object.entries(videoRefs.current).forEach(
      ([videoId, video]) => {
        if (
          videoId !== id &&
          video &&
          !video.paused
        ) {
          video.pause()
        }
      }
    )

    selectedVideo.muted = mutedReels[id] ?? true

    try {
      await selectedVideo.play()
      setPlayingId(id)
    } catch {
      setPlayingId(null)
    }
  }

  const pauseReel = (id) => {
    const video = videoRefs.current[id]

    if (!video) return

    video.pause()

    if (playingId === id) {
      setPlayingId(null)
    }
  }

  const togglePlay = (id) => {
    const video = videoRefs.current[id]

    if (!video) return

    if (video.paused) {
      playReel(id)
    } else {
      pauseReel(id)
    }
  }

  const toggleSound = (id) => {
    const video = videoRefs.current[id]

    if (!video) return

    const nextMuted = !video.muted

    video.muted = nextMuted

    setMutedReels((current) => ({
      ...current,
      [id]: nextMuted,
    }))

    if (!nextMuted && video.paused) {
      playReel(id)
    }
  }

  const handleEnded = (id) => {
    const video = videoRefs.current[id]

    if (!video) return

    video.currentTime = 0

    if (playingId === id) {
      setPlayingId(null)
    }
  }

  const handleCategory = (item) => {
    Object.values(videoRefs.current).forEach((video) => {
      if (!video) return

      video.pause()
      video.currentTime = 0
    })

    setPlayingId(null)
    setCategory(item)
  }

  return (
    <section
      id="our-work"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-12
        lg:py-20
      "
    >
      {/* Red atmospheric glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#ff0038]/[.035]
          blur-[170px]
        "
      />

      <div className="relative z-10">

        {/* Header */}
        <Section>
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-[850px]">
              <span className="ced-eyebrow text-white/40">
                Real shoots. Real moments.
              </span>

              <h2
                className="
                  cinematic-text
                  mt-7
                  text-[clamp(3.2rem,7vw,7rem)]
                  text-white
                "
              >
                Our work.
              </h2>

              <p className="ced-body mt-6 max-w-xl text-white/45">
                Real moments captured, edited and delivered
                ready for your feed.
              </p>
            </div>

            <a
              href="https://www.instagram.com/captureeditdeliver/"
              target="_blank"
              rel="noreferrer"
              className="
                ced-button
                ced-button-outline
                group
                w-fit
              "
            >
              View Instagram

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* Categories */}
          <div
            className="
              mt-10
              flex
              gap-2
              overflow-x-auto
              pb-2
              sm:mt-12
            "
          >
            {categories.map((item) => {
              const active = category === item

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleCategory(item)}
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-5
                    py-3
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[.12em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? 'border-[#ff0038] bg-[#ff0038] text-white'
                        : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white'
                    }
                  `}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </Section>

        {/* =====================================================
            REELS
        ===================================================== */}
        <div className="relative mt-12 sm:mt-14 lg:mt-16">

          {/* Left black edge fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-full
              w-16
              bg-gradient-to-r
              from-[#050505]
              via-[#050505]/80
              to-transparent
              sm:w-20
              lg:w-28
            "
          />

          {/* Reel scroller */}
          <div className="ced-reel-scroller px-10 sm:px-14">
            {filteredReels.map((reel, index) => {
              const id = reel.id
              const isPlaying = playingId === id
              const isMuted = mutedReels[id] ?? true

              return (
                <article
                  key={id}
                  className="
                    ced-reel-card
                    group
                    relative
                    h-[410px]
                    shrink-0
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/10
                    bg-[#101010]
                    sm:h-[470px]
                    sm:rounded-[22px]
                    lg:h-[530px]
                    lg:rounded-[24px]
                  "
                >
                  {/* Poster */}
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    loading="lazy"
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-[1.04]
                      ${
                        isPlaying
                          ? 'opacity-0'
                          : 'opacity-100'
                      }
                    `}
                  />

                  {/* Video */}
                  <video
                    ref={(element) => {
                      videoRefs.current[id] = element
                    }}
                    src={reel.src}
                    poster={reel.poster}
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onEnded={() => handleEnded(id)}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* Card overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-[2]
                      bg-gradient-to-b
                      from-black/20
                      via-transparent
                      to-black/85
                    "
                  />

                  {/* Top */}
                  <div
                    className="
                      absolute
                      left-4
                      right-4
                      top-4
                      z-10
                      flex
                      items-center
                      justify-between
                      sm:left-5
                      sm:right-5
                      sm:top-5
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/15
                        bg-black/30
                        px-3
                        py-2
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[.14em]
                        text-white/70
                        backdrop-blur-md
                      "
                    >
                      {reel.category}
                    </span>

                    <span className="font-mono text-[9px] text-white/35">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Play */}
                  <button
                    type="button"
                    onClick={() => togglePlay(id)}
                    aria-label={
                      isPlaying
                        ? `Pause ${reel.title}`
                        : `Play ${reel.title}`
                    }
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-20
                      flex
                      h-16
                      w-16
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-black/25
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-500
                      hover:scale-110
                      hover:border-[#ff0038]
                      hover:bg-[#ff0038]/80
                    "
                  >
                    {isPlaying ? (
                      <Pause
                        size={17}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Play
                        size={18}
                        fill="currentColor"
                        strokeWidth={1.5}
                        className="ml-0.5"
                      />
                    )}
                  </button>

                  {/* Bottom */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-4
                      right-4
                      z-10
                      sm:left-5
                      sm:right-5
                    "
                  >
                    <div className="flex items-end justify-between gap-3">
                      <h3
                        className="
                          max-w-[175px]
                          text-[17px]
                          font-medium
                          leading-tight
                          tracking-[-.02em]
                          text-white
                          sm:text-[19px]
                        "
                      >
                        {reel.title}
                      </h3>

                      <button
                        type="button"
                        onClick={() => toggleSound(id)}
                        aria-label={
                          isMuted
                            ? 'Turn sound on'
                            : 'Mute sound'
                        }
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-black/30
                          text-white
                          backdrop-blur-md
                          transition
                          hover:border-white/50
                        "
                      >
                        {isMuted ? (
                          <VolumeX size={14} />
                        ) : (
                          <Volume2 size={14} />
                        )}
                      </button>
                    </div>

                    {reel.instagramUrl && (
                      <a
                        href={reel.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        className="
                          mt-3
                          inline-flex
                          items-center
                          gap-1.5
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[.14em]
                          text-white/45
                          transition
                          hover:text-white
                        "
                      >
                        Watch reel
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          {/* Right black edge fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-30
              h-full
              w-16
              bg-gradient-to-l
              from-[#050505]
              via-[#050505]/80
              to-transparent
              sm:w-20
              lg:w-28
            "
          />
        </div>

        {/* Bottom label */}
        <Section>
          <div
            className="
              mt-14
              flex
              items-center
              justify-between
              border-t
              border-white/10
              pt-5
            "
          >
            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[.2em]
                text-white/25
              "
            >
              Real life → cinematic stories
            </span>

            <span className="font-mono text-[9px] text-white/20">
              {String(filteredReels.length).padStart(2, '0')} REELS
            </span>
          </div>
        </Section>
      </div>
    </section>
  )
}

export default OurWork