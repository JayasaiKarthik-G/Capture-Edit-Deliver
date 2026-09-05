import { 
  ArrowUpRight,
  ArrowDownRight,
  Play, 
} from 'lucide-react'
import Section from '../common/Section'
import ServiceCard from '../common/ServiceCard'
import { services } from '../../data/services'

const Services = () => {
  return (
    <Section
      id="services"
      className="relative border-t border-white/5 py-16 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#183b2a]/20 blur-[140px]" />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                What We Capture
              </span>
            </div>

            <h2 className="max-w-5xl font-[Montserrat] text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Whatever the
              <br />
              <span className="text-white/40">
                moment.
              </span>
              <br />
              We make it
              <br />
              <span className="text-[#c7a76c]">
                a reel.
              </span>
            </h2>
          </div>

          <div className="max-w-xs lg:pb-2">
            <p className="text-sm leading-7 text-white/45 sm:text-base">
              Weddings, celebrations, brands, cafés and everything in
              between. If it matters to you, it deserves to be remembered.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              <ArrowDownRight size={16} className="text-[#c7a76c]" />
              Explore our moments
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12">
          
          {/* Featured Wedding */}
          <ServiceCard
            service={services[0]}
            className="min-h-[480px] sm:min-h-[560px] lg:col-span-7 lg:min-h-[680px]"
          />

          {/* Right column */}
          <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2">
            <ServiceCard
              service={services[1]}
              className="min-h-[300px] sm:min-h-[350px]"
            />

            <ServiceCard
              service={services[2]}
              className="min-h-[300px] sm:min-h-[350px]"
            />
          </div>

          {/* Remaining cards */}
          {services.slice(3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              className={`min-h-[300px] sm:min-h-[360px] ${
                index === 0
                  ? 'lg:col-span-5'
                  : index === 1
                    ? 'lg:col-span-4'
                    : index === 2
                      ? 'lg:col-span-3'
                      : index === 3
                        ? 'lg:col-span-4'
                        : index === 4
                          ? 'lg:col-span-5'
                          : 'lg:col-span-3'
              }`}
            />
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 border-t border-white/10 pt-12 sm:mt-20 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                The CED approach
              </p>

              <h3 className="max-w-5xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                One event.
                <br />
                <span className="text-white/30">
                  Countless moments.
                </span>
                <br />
                <span className="text-[#c7a76c]">
                  One beautiful reel.
                </span>
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              Book Your Reel

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c7a76c]/60 group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
                <ArrowUpRight size={15} />
              </span>
            </a>

          </div>
        </div>

        {/* Section footer */}
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10">
              <Play
                size={10}
                fill="currentColor"
                className="text-[#c7a76c]"
              />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
              Your moment. Our lens. Your story.
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            04 / 08
          </span>
        </div>
      </div>
    </Section>
  )
}

export default Services