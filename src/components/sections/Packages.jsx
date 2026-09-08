import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import Section from '../common/Section'
import { siteData } from '../../data/siteData'

const packages = [
  {
    name: 'Quick Reel',
    eyebrow: 'For one standout moment',
    price: 'Custom quote',
    description:
      'Focused coverage for a single polished reel with fast on-site delivery.',
    items: [
      'Focused event coverage',
      '1 edited reel',
      'iPhone capture',
      'Fast delivery',
      'Creative edit matched to your vibe',
    ],
  },
  {
    name: 'Half Day',
    eyebrow: 'Most popular',
    price: 'Custom quote',
    description:
      'More time, more moments and multiple reels for celebrations that need room to breathe.',
    items: [
      'Extended coverage',
      '2+ edited reels',
      'Candid + detail shots',
      'Fast delivery',
      'Priority editing workflow',
    ],
    featured: true,
  },
  {
    name: 'Event Story',
    eyebrow: 'For weddings & bigger events',
    price: 'Tailored plan',
    description:
      'A complete social-first content experience built around your event schedule and goals.',
    items: [
      'Custom coverage hours',
      'Multiple reels',
      'Story-focused capture',
      'Raw/content options',
      'Dedicated planning',
    ],
  },
]

const Packages = () => {
  const whatsapp = `https://wa.me/${
    siteData.contact.whatsappNumber
  }?text=${encodeURIComponent(
    siteData.contact.whatsappMessage
  )}`

  return (
    <Section
      id="packages"
      className="relative overflow-hidden border-t border-white/5 py-20 sm:py-16 lg:py-20"
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-15rem]
          top-20
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#ff0038]/[.04]
          blur-[160px]
        "
      />

      <div className="relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end lg:gap-16">
          <div>
            <span className="ced-eyebrow text-white/40">
              Simple packages
            </span>

            <h2
              className="
                cinematic-text
                mt-7
                max-w-[900px]
                text-[clamp(3rem,6vw,6.5rem)]
                text-white
              "
            >
              <span className="block">
                Choose the
              </span>

              <span className="block text-white/40">
                coverage.
              </span>

              <span className="block">
                We create the
              </span>

              <span className="block text-[#ff0038]">
                story.
              </span>
            </h2>
          </div>

          <p className="ced-body max-w-md text-white/45">
            No complicated plans. Tell us your event, timing and
            goals. We recommend the right CED setup and confirm the
            quote with you.
          </p>
        </div>

        {/* Package cards */}
        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                p-6
                transition-all
                duration-500
                sm:p-8
                ${
                  item.featured
                    ? 'border-[#ff0038]/45 bg-[#10090b] shadow-[0_0_80px_rgba(255,0,56,.06)]'
                    : 'border-white/10 bg-[#0a0a0a] hover:-translate-y-1 hover:border-[#ff0038]/25'
                }
              `}
            >
              {/* Featured */}
              {item.featured && (
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-[#ff0038]
                    px-3
                    py-1.5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[.18em]
                    text-white
                  "
                >
                  Most Popular
                </div>
              )}

              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#ff0038]/[.045]
                  blur-[70px]
                "
              />

              <div className="relative">
                <Sparkles
                  size={18}
                  strokeWidth={1.6}
                  className="text-[#ff0038]"
                />

                <p className="mt-7 mb-4 text-[9px] font-medium uppercase tracking-[.25em] text-white/30">
                  {item.eyebrow}
                </p>

                <h3
                  className="
                    cinematic-text
                    text-3xl
                    text-white
                    sm:text-4xl
                  "
                >
                  {item.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {item.description}
                </p>

                <div className="my-7 border-t border-white/10" />

                <p className="text-xl font-medium tracking-[-.02em] text-[#ff0038]">
                  {item.price}
                </p>

                <ul className="mt-7 space-y-3">
                  {item.items.map((feature) => (
                    <li
                      key={feature}
                      className="
                        flex
                        gap-3
                        text-xs
                        leading-6
                        text-white/50
                      "
                    >
                      <Check
                        size={15}
                        className="mt-1 shrink-0 text-[#ff0038]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    px-5
                    py-3.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[.14em]
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#ff0038]
                    hover:bg-[#ff0038]
                  "
                >
                  Ask for this package
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Custom package */}
        <div
          className="
            mt-5
            flex
            flex-col
            gap-5
            rounded-[1.5rem]
            border
            border-white/10
            bg-white/[.02]
            p-5
            sm:p-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[.25em] text-[#ff0038]">
              Need something custom?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
              Weddings, brands, recurring content and multi-day events
              can be planned around your exact schedule.
            </p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="
              ced-button
              ced-button-primary
              shrink-0
              px-6
            "
          >
            <MessageCircle size={15} />
            Talk to CED
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Packages