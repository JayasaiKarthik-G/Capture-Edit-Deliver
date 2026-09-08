import {
  Camera,
  Clapperboard,
  Clock3,
  ArrowUpRight,
} from 'lucide-react'
import Section from '../common/Section'

const highlights = [
  {
    number: '01',
    icon: Camera,
    title: 'We Capture',
    text: 'Real moments, natural emotions and the details that make your event worth remembering.',
  },
  {
    number: '02',
    icon: Clapperboard,
    title: 'We Edit',
    text: 'Trending music, cinematic pacing and engaging edits designed for vertical social content.',
  },
  {
    number: '03',
    icon: Clock3,
    title: 'We Deliver',
    text: 'Your finished reel delivered fast, while the moment is still fresh enough to share.',
  },
]

const stats = [
  ['10K+', 'Reels Delivered'],
  ['100+', 'Clients'],
  ['5+', 'Cities'],
  ['5.0', 'Average Rating'],
]

const AboutCED = () => {
  return (
    <Section id="about" className="relative overflow-hidden bg-[#050505] py-12 lg:pb-16 lg:py-20">
      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#ff0038]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#ff0038]/[0.07] blur-[140px]" />

      <div className="relative">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="ced-eyebrow text-[#ff0038]">
            Capture. Edit. Deliver.
          </span>

          <h2 className="cinematic-text mt-6 text-[clamp(3rem,7vw,7rem)]">
            <span className="block">Not just a reel.</span>
            <span className="block text-white/45">A moment,</span>
            <span className="block text-[#ff0038]">ready to relive.</span>
          </h2>

          <p className="ced-body mt-8 max-w-2xl text-white/60">
            CED turns real-life moments into social-ready stories. From the
            first shot to the final delivery, we focus on capturing the energy
            of your event and transforming it into content people want to watch.
          </p>
        </div>

        {/* Capture / Edit / Deliver */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.number}
                className="group relative min-h-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff0038]/40 hover:bg-[#0c0c0c]"
              >
                <div className="absolute right-5 top-3 text-[90px] font-light leading-none tracking-[-0.08em] text-white/[0.025]">
                  {item.number}
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff0038]/30 bg-[#ff0038]/10">
                      <Icon
                        size={20}
                        strokeWidth={1.6}
                        className="text-[#ff0038]"
                      />
                    </div>

                    <span className="text-[11px] font-medium tracking-[0.18em] text-white/25">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                      {item.text}
                    </p>

                    <div className="mt-7 h-px w-10 bg-[#ff0038] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#080808]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className={`relative px-6 py-9 md:px-8 md:py-10 ${
                  index !== 0 ? 'border-l border-white/10' : ''
                } ${
                  index === 2
                    ? 'border-t border-white/10 md:border-t-0'
                    : ''
                } ${
                  index === 3
                    ? 'border-t border-white/10 md:border-t-0'
                    : ''
                }`}
              >
                <div className="text-[clamp(2rem,4vw,4rem)] font-light tracking-[-0.07em] text-white">
                  {value}
                </div>

                <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-white/35">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-white/40">
            Your event happens once. Your reel should make people feel like
            they were there.
          </p>

          <a
            href="#our-work"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white"
          >
            See our work
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#ff0038]/50 group-hover:bg-[#ff0038]">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default AboutCED