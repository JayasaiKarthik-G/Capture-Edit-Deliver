import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Check,
  Clapperboard,
  MessageCircle,
  Play,
} from 'lucide-react'
import Section from '../common/Section'

const steps = [
  {
    number: '01',
    title: 'Book',
    label: 'Tell us about your event.',
    description:
      'Share your event details with us on WhatsApp. We will understand what you are celebrating and help you choose the right reel experience.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Capture',
    label: 'We capture the moments that matter.',
    description:
      'Our team focuses on the real emotions, people, details and energy that make your event uniquely yours.',
    icon: Camera,
  },
  {
    number: '03',
    title: 'Edit',
    label: 'We turn moments into stories.',
    description:
      'Your footage is transformed with cinematic cuts, music, transitions and creative editing designed for social media.',
    icon: Clapperboard,
  },
  {
    number: '04',
    title: 'Deliver',
    label: 'Ready to post. Ready to share.',
    description:
      'Your finished reel is delivered ready for Instagram, WhatsApp and wherever you want to share your moment.',
    icon: Check,
  },
]

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const stepElements = section.querySelectorAll('[data-step]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )

        if (visible.length > 0) {
          const index = Number(
            visible[0].target.dataset.step,
          )

          setActiveStep(index)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-15% 0px -35% 0px',
      },
    )

    stepElements.forEach((element) =>
      observer.observe(element),
    )

    return () => observer.disconnect()
  }, [])

  return (
    <Section
      id="how-it-works"
      className="relative border-t border-white/5 py-24 sm:py-32 lg:py-40"
    >
      <div ref={sectionRef} className="relative">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-48 top-40 h-96 w-96 rounded-full bg-[#183b2a]/20 blur-[140px]" />

        <div className="pointer-events-none absolute -right-48 bottom-20 h-96 w-96 rounded-full bg-[#c7a76c]/[0.04] blur-[140px]" />

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                How It Works
              </span>
            </div>

            <h2 className="max-w-5xl font-[Montserrat] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Your perfect
              <br />
              event.
              <br />
              <span className="text-white/35">
                Your perfect
              </span>
              <br />
              <span className="text-[#c7a76c]">
                reel.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              From the first message to the final reel,
              we keep the process simple so you can stay
              present in the moment.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              <ArrowDown
                size={15}
                className="text-[#c7a76c]"
              />
              Four simple steps
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop progress line */}
          <div className="absolute bottom-0 left-[31px] top-0 hidden w-px bg-white/10 md:block">
            <div
              className="absolute left-0 top-0 w-px bg-[#c7a76c] transition-all duration-700"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Mobile progress line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 md:hidden">
            <div
              className="absolute left-0 top-0 w-px bg-[#c7a76c] transition-all duration-700"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-4 md:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index

              return (
                <article
                  key={step.number}
                  data-step={index}
                  className={`relative pl-12 transition-all duration-700 md:pl-20 ${
                    isActive
                      ? 'opacity-100'
                      : 'opacity-55'
                  }`}
                >
                  {/* Timeline point */}
                  <div
                    className={`absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 md:h-[62px] md:w-[62px] ${
                      isActive
                        ? 'border-[#c7a76c] bg-[#c7a76c] text-[#050706] shadow-[0_0_35px_rgba(199,167,108,0.18)]'
                        : 'border-white/15 bg-[#050706] text-white/35'
                    }`}
                  >
                    <span className="font-mono text-[9px] font-bold md:hidden">
                      {step.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="hidden md:block"
                    />
                  </div>

                  <div
                    className={`group relative overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-700 sm:p-8 md:p-10 lg:p-12 ${
                      isActive
                        ? 'border-[#c7a76c]/25 bg-[#0c130f]'
                        : 'border-white/8 bg-white/[0.015] hover:border-white/15'
                    }`}
                  >
                    {/* Step background number */}
                    <div className="pointer-events-none absolute -right-4 -top-10 select-none font-[Montserrat] text-[10rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] transition-colors duration-700 group-hover:text-[#c7a76c]/[0.04] sm:text-[13rem]">
                      {step.number}
                    </div>

                    {/* Top row */}
                    <div className="relative flex items-start justify-between gap-5">
                      <div>
                        <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-[#c7a76c]">
                          STEP {step.number}
                        </span>

                        <h3 className="mt-3 font-[Montserrat] text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
                          {step.title}
                        </h3>
                      </div>

                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${
                          isActive
                            ? 'border-[#c7a76c]/50 bg-[#c7a76c]/10 text-[#c7a76c]'
                            : 'border-white/10 bg-white/5 text-white/30'
                        }`}
                      >
                        <Icon size={19} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative mt-8 grid gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-end">
                      <p className="max-w-md font-[Montserrat] text-lg font-semibold uppercase leading-tight tracking-[-0.02em] text-white/75 sm:text-xl">
                        {step.label}
                      </p>

                      <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8 lg:justify-self-end">
                        {step.description}
                      </p>
                    </div>

                    {/* Active indicator */}
                    <div
                      className={`mt-8 h-px origin-left bg-[#c7a76c] transition-transform duration-700 ${
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0'
                      }`}
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] sm:mt-20">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c7a76c]/[0.05] blur-[100px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                  Ready when you are
                </p>

                <h3 className="mt-4 max-w-3xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  Ready to capture
                  <br />
                  your moment?
                </h3>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_40px_rgba(199,167,108,0.2)] active:scale-[0.98] sm:w-auto"
              >
                Book Your Reel
                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c7a76c]/40">
              <Play
                size={11}
                fill="currentColor"
                className="text-[#c7a76c]"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              From real life → to reels
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            02 / 07
          </span>
        </div>
      </div>
    </Section>
  )
}

export default HowItWorks