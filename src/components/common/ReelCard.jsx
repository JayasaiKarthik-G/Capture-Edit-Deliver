import { useRef, useState } from 'react'
import {
  ArrowUpRight,
  ExternalLink,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react'

const ReelCard = ({
  reel,
  featured = false,
  className = '',
}) => {
  const videoRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const handleMouseEnter = () => {
    if (!videoRef.current) return

    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {})
  }

  const handleMouseLeave = () => {
    if (!videoRef.current) return

    videoRef.current.pause()
    videoRef.current.currentTime = 0
    setIsPlaying(false)
  }

  const togglePlay = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {})
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted

    setIsMuted(videoRef.current.muted)
  }

  const openInstagram = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!reel.instagramUrl) return

    window.open(
      reel.instagramUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] bg-[#0a100d] ${
        featured
          ? 'aspect-[4/5] md:aspect-[3/4]'
          : 'aspect-[4/5]'
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10 transition-all duration-500 group-hover:border-[#c7a76c]/40" />

      {/* TOP INFORMATION */}
      <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
        <span className="inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
          {reel.category}
        </span>

        <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
          {reel.number}
        </span>
      </div>

      {/* CENTER PLAY BUTTON */}
      <button
        type="button"
        aria-label={
          isPlaying ? 'Pause reel' : 'Play reel'
        }
        onClick={togglePlay}
        className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-500 sm:h-16 sm:w-16 ${
          isPlaying
            ? 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'
            : 'scale-100 opacity-100'
        }`}
      >
        {isPlaying ? (
          <Pause
            size={18}
            fill="currentColor"
          />
        ) : (
          <Play
            size={18}
            fill="currentColor"
            className="ml-0.5"
          />
        )}
      </button>

      {/* BOTTOM CONTENT */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#c7a76c]">
              CED REEL
            </p>

            <h3 className="max-w-xs font-[Montserrat] text-xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-2xl">
              {reel.title}
            </h3>
          </div>

          {/* Instagram / external link */}
          <button
            type="button"
            aria-label={
              reel.instagramUrl
                ? 'Open reel on Instagram'
                : 'Instagram link unavailable'
            }
            onClick={openInstagram}
            disabled={!reel.instagramUrl}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
              reel.instagramUrl
                ? 'border-white/20 bg-black/20 text-white hover:border-[#c7a76c] hover:bg-[#c7a76c] hover:text-[#050706]'
                : 'cursor-default border-white/10 bg-black/20 text-white/30'
            }`}
          >
            {reel.instagramUrl ? (
              <ArrowUpRight size={16} />
            ) : (
              <ExternalLink size={15} />
            )}
          </button>
        </div>

        {/* CONTROLS */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Capture • Edit • Deliver
          </span>

          <button
            type="button"
            aria-label={
              isMuted
                ? 'Unmute reel'
                : 'Mute reel'
            }
            onClick={toggleMute}
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/45 transition-colors hover:text-white"
          >
            {isMuted ? (
              <VolumeX size={13} />
            ) : (
              <Volume2 size={13} />
            )}
          </button>
        </div>
      </div>

      {/* HOVER CORNER DETAIL */}
      <div className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#c7a76c]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-[#c7a76c]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  )
}

export default ReelCard
