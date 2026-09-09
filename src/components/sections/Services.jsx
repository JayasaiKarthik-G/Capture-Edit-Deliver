import { ArrowUpRight } from 'lucide-react'
import Section from '../common/Section'
import { services } from '../../data/services'

const Services = () => {
  const scrollingServices = [...services, ...services]

  return (
    <Section
      id="services"
      className="
        relative
        overflow-hidden
        border-b
        border-white/5
        py-12
        lg:py-20
      "
    >
      {/* Ambient red */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[450px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-[#ff0038]/[.035]
          blur-[160px]
        "
      />

      <div className="relative">
        {/* Header */}
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
          <div>
            <span className="ced-eyebrow text-white/40">
              What we capture
            </span>

            <h2
              className="
                cinematic-text
                mt-7
                text-[clamp(3rem,6vw,6.5rem)]
                text-white
              "
            >
              <span className="block">
                Your event.
              </span>

              <span className="block text-white/40">
                Our lens.
              </span>

              <span className="block text-[#ff0038]">
                Your story.
              </span>
            </h2>
          </div>

          <p className="ced-body max-w-md text-white/45">
            From intimate celebrations to businesses that need
            consistent social content, CED adapts the shoot to
            the moment.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-12 w-full overflow-hidden sm:mt-16 lg:mt-20">
          {/* Fade left */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-[#050505]
              to-transparent
              sm:w-24
              lg:w-36
            "
          />

          {/* Fade right */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-[#050505]
              to-transparent
              sm:w-24
              lg:w-36
            "
          />

          <div className="services-marquee flex w-max gap-3 sm:gap-4 lg:gap-5">
            {scrollingServices.map((service, index) => (
              <article
                key={`${service.id}-${index}`}
                className="
                  group
                  relative
                  h-[350px]
                  w-[220px]
                  shrink-0
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/10
                  bg-[#0a0a0a]
                  sm:h-[420px]
                  sm:w-[260px]
                  lg:h-[470px]
                  lg:w-[300px]
                "
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    opacity-55
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:opacity-75
                  "
                />

                {/* Cinematic overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#050505]
                    via-[#050505]/35
                    to-black/10
                  "
                />

                {/* Red glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    left-1/2
                    h-48
                    w-48
                    -translate-x-1/2
                    rounded-full
                    bg-[#ff0038]/[.08]
                    blur-[70px]
                    opacity-0
                    transition
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Number */}
                <div className="absolute left-5 top-5 z-10">
                  <span className="font-mono text-[8px] tracking-[.2em] text-[#ff0038]">
                    {service.number}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-5 z-10">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black/30
                      text-white/70
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:border-[#ff0038]
                      group-hover:bg-[#ff0038]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <h3
                    className="
                      cinematic-text
                      text-2xl
                      text-white
                      sm:text-3xl
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-[11px] leading-5 text-white/45 sm:text-xs sm:leading-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom line */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#ff0038]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <div
          className="
            mt-7
            flex
            items-center
            gap-3
            text-[9px]
            font-medium
            uppercase
            tracking-[.25em]
            text-white/20
          "
        >
          <span className="h-px w-8 bg-[#ff0038]/50" />

          <span>
            CED — Capture • Edit • Deliver
          </span>
        </div>
      </div>

      <style>{`
        .services-marquee {
          animation: services-scroll 34s linear infinite;
          will-change: transform;
        }

        .services-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes services-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (max-width: 640px) {
          .services-marquee {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-marquee {
            animation: none;
          }
        }
      `}</style>
    </Section>
  )
}

export default Services