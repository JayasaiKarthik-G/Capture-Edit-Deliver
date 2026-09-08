import {
  ArrowDown,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'
import { siteData } from '../../data/siteData'

const Hero = () => {
  const whatsapp = `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(
    siteData.contact.whatsappMessage
  )}`

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={siteData.hero.poster}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-[0.38]
        "
      >
        <source
          src={siteData.hero.video}
          type="video/mp4"
        />
      </video>

      {/* Dark cinematic treatment */}
      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
      />

      {/* Burgundy atmospheric glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_15%,rgba(100,0,20,.35),transparent_48%)]
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[32%]
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

      {/* Main hero */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          px-5
          pb-20
          pt-28
          text-center
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            flex
            max-w-[1100px]
            flex-col
            items-center
            animate-fade-up
          "
        >
          {/* Eyebrow */}
          <span
            className="
              ced-eyebrow
              mb-8
              text-white/55
              sm:mb-10
            "
          >
            {siteData.hero.eyebrow}
          </span>

          {/* Main heading */}
          <h1
            className="
              cinematic-text
              max-w-[1050px]
              text-[clamp(3rem,6vw,7rem)]
              text-white
            "
          >
            {siteData.hero.title.map((line, i) => (
              <span
                key={`${line}-${i}`}
                className={`
                  block
                  ${
                    i === 1
                      ? 'text-white/55'
                      : i === 2
                        ? 'text-[#e63946]'
                        : 'text-white'
                  }
                `}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[760px]
              text-[16px]
              font-normal
              leading-[1.6]
              text-white/70
              sm:mt-9
              sm:text-[18px]
              lg:text-[20px]
            "
          >
            {siteData.hero.description}
          </p>

          {/* CTA buttons */}
          <div
            className="
              mt-10
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-11
              sm:w-auto
              sm:flex-row
            "
          >
            {/* Primary */}
            <a
              href="#contact"
              className="
                ced-button
                ced-button-primary
                group
                w-full
                sm:w-auto
              "
            >
              Book a Reel

              <ArrowUpRight
                size={19}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* Secondary */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="
                ced-button
                ced-button-outline
                group
                w-full
                sm:w-auto
              "
            >
              <MessageCircle
                size={18}
                strokeWidth={2}
                className="text-[#25D366]"
              />

              WhatsApp CED
            </a>
          </div>

          {/* Social proof */}
          <div
            className="
              mt-9
              flex
              items-center
              justify-center
              gap-3
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/40
              sm:mt-10
              sm:text-[12px]
            "
          >
            <span className="tracking-[0.08em] text-[#e63946]">
              ★★★★★
            </span>

            <span>5.0</span>

            <span className="text-white/20">•</span>

            <span>10,000+ Reels Delivered</span>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <a
        href="#how-it-works"
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[9px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/35
          transition-colors
          duration-300
          hover:text-white
          sm:bottom-9
        "
      >
        <span>Scroll</span>

        <ArrowDown
          size={15}
          strokeWidth={1.5}
          className="animate-bounce"
        />
      </a>
    </section>
  )
}

export default Hero