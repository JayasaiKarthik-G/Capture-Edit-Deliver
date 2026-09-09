import {
  ArrowRight,
  Camera,
  Check,
  Clapperboard,
  MessageCircle,
} from 'lucide-react'
import Section from '../common/Section'

const steps = [
  [
    '01',
    'Tell us',
    MessageCircle,
    'Send your date, event, location and what you want captured.',
  ],
  [
    '02',
    'We capture',
    Camera,
    'Our creator focuses on people, details, energy and the moments worth replaying.',
  ],
  [
    '03',
    'We edit',
    Clapperboard,
    'We turn the footage into a polished vertical reel with music, pacing and style.',
  ],
  [
    '04',
    'You post',
    Check,
    'Your reel is delivered ready for Instagram, WhatsApp and wherever you share.',
  ],
]

const HowItWorks = () => {
  return (
    <Section
      id="how-it-works"
      className="relative overflow-hidden border-b border-white/5 py-12 lg:py-20"
    >
      {/* Ambient red glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#ff0038]/[0.045]
          blur-[140px]
        "
      />

      <div className="relative">
        {/* Header */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_.55fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <span className="ced-eyebrow text-white/40">
              How it works
            </span>

            <h2
              className="
                cinematic-text
                mt-7
                max-w-[850px]
                text-[clamp(3.1rem,6vw,6.5rem)]
                text-white
              "
            >
              <span className="block">
                Four steps.
              </span>

              <span className="block text-white/45">
                Zero
              </span>

              <span className="block text-[#ff0038]">
                stress.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="ced-body max-w-md text-white/50">
              A simple booking flow inspired by on-demand content:
              quick enquiry, clear confirmation, focused capture and
              fast delivery.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-3 sm:mt-16 md:grid-cols-2 lg:mt-20">
          {steps.map(([number, title, Icon, text], index) => (
            <article
              key={number}
              className="
                group
                relative
                min-h-[270px]
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#0a0a0a]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#ff0038]/30
                hover:bg-[#0d0a0b]
                sm:min-h-[280px]
                sm:rounded-[1.75rem]
                sm:p-8
                lg:min-h-[280px]
                lg:p-10
              "
            >
              {/* Background number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-5
                  -top-10
                  select-none
                  text-[8rem]
                  font-light
                  leading-none
                  tracking-[-.08em]
                  text-white/[.025]
                  transition-all
                  duration-700
                  group-hover:text-[#ff0038]/[.055]
                  sm:text-[10rem]
                "
              >
                {number}
              </span>

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-[9px] tracking-[.2em] text-[#ff0038]">
                  STEP / {number}
                </span>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[.02]
                    text-white/60
                    transition-all
                    duration-500
                    group-hover:border-[#ff0038]/40
                    group-hover:bg-[#ff0038]
                    group-hover:text-white
                  "
                >
                  <Icon size={17} strokeWidth={1.7} />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-10 sm:mt-8">
                <h3
                  className="
                    cinematic-text
                    text-3xl
                    text-white
                    sm:text-4xl
                  "
                >
                  {title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  {text}
                </p>
              </div>

              {/* Next */}
              {index < 3 && (
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[.2em]
                    text-white/20
                    sm:bottom-8
                    sm:left-8
                  "
                >
                  Next
                  <ArrowRight
                    size={13}
                    className="
                      text-[#ff0038]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              )}

              {/* Bottom accent */}
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

        {/* Bottom statement */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-medium uppercase tracking-[.2em] text-white/25">
              From real life → to reels
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[.2em] text-white/20">
              Capture / Edit / Deliver
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HowItWorks