import { ArrowUpRight } from 'lucide-react'
import Section from '../common/Section'

const clients = [
  {
    number: '01',
    name: 'FNF',
    type: 'Brand & Content Partner',
  },
  {
    number: '02',
    name: 'Srestha Digital Media',
    type: 'Digital Media Partner',
  },
  {
    number: '03',
    name: 'See You Cafe',
    type: 'Café Content & Social Media',
  },
  {
    number: '04',
    name: 'Oasis The Cafe',
    type: 'Café Content & Social Media',
  },
  {
    number: '05',
    name: 'Studios Samkshika',
    type: 'Boutique Content & Visuals',
  },
  {
    number: '06',
    name: 'Label Srianvi',
    type: 'Boutique Content & Visuals',
  },
  {
    number: '07',
    name: 'Play ON by Hasten',
    type: 'Sport & Recreation',
  },
  {
    number: '08',
    name: 'Madhuram Cafe',
    type: 'Brand & Social Media Content',
  },
  {
    number: '09',
    name: 'Saisho Cafe',
    type: 'Café Content & Social Media',
  },
  {
    number: '10',
    name: 'Tavaro Resorts',
    type: 'Hotel & Resort',
  },
  {
    number: '11',
    name: 'Prathammalik Auto Matrix',
    type: 'Tata Motors Dealer & Service Partner',
  },
  {
    number: '12',
    name: 'Datailing Daddy',
    type: 'Vehicle Detailing Service',
  },
]

const Clients = () => {
  return (
    <Section
      id="clients"
      className="relative overflow-hidden bg-[#050505] py-20 lg:py-20"
    >
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[450px] w-[450px] rounded-full bg-[#ff0038]/10 blur-[150px]" />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="ced-eyebrow text-[#ff0038]">
              Trusted by brands
            </span>

            <h2 className="cinematic-text mt-6 text-[clamp(3rem,7vw,7rem)]">
              <span className="block text-white">
                People trust
              </span>

              <span className="block text-white/40">
                us with
              </span>

              <span className="block text-white">
                their moments.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40 lg:pb-3">
            From cafés and creators to resorts, brands and events —
            CED creates content that feels real and performs naturally.
          </p>
        </div>

        {/* Client Cards */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.number}
              className="
                group
                relative
                flex
                min-h-[190px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[22px]
                border
                border-white/10
                bg-[#090909]
                p-5
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#ff0038]/30
                hover:bg-[#0c0c0c]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                sm:min-h-[205px]
                sm:p-6
              "
            >
              {/* Red glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-[#ff0038]/0
                  blur-[50px]
                  transition-all
                  duration-500
                  group-hover:bg-[#ff0038]/15
                "
              />

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <span className="text-[10px] font-medium tracking-[0.18em] text-white/20">
                  {client.number}
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/25
                    transition-all
                    duration-300
                    group-hover:border-[#ff0038]/40
                    group-hover:bg-[#ff0038]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-8">
                <h3
                  className="
                    text-lg
                    font-medium
                    leading-snug
                    tracking-[-0.035em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#ff0038]
                    sm:text-xl
                  "
                >
                  {client.name}
                </h3>

                <p className="mt-2 max-w-[230px] text-xs leading-5 text-white/35">
                  {client.type}
                </p>
              </div>

              {/* Bottom line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-5
                  right-5
                  h-px
                  bg-white/[0.06]
                  transition-all
                  duration-500
                  group-hover:bg-[#ff0038]/30
                  sm:left-6
                  sm:right-6
                "
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-[24px]
            border
            border-[#ff0038]/15
            bg-[#ff0038]/[0.04]
            p-6
            sm:mt-10
            sm:p-7
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <p className="text-lg font-medium tracking-[-0.03em] text-white">
              Your brand could be next.
            </p>

            <p className="mt-1 text-sm text-white/40">
              Let&apos;s create something people remember.
            </p>
          </div>

          <a
            href="#contact"
            className="ced-button ced-button-outline w-fit"
          >
            Work with CED
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Clients