import { ArrowDownRight } from 'lucide-react'
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
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-[Montserrat] text-xl font-bold uppercase leading-tight tracking-[-0.025em] text-white/70 sm:text-2xl">
              One event.
              <br />
              Countless moments.
              <br />
              <span className="text-[#c7a76c]">
                One beautiful reel.
              </span>
            </p>

            <div className="text-left sm:text-right">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                CED — Capture Edit Deliver
              </p>

              <p className="mt-2 text-xs text-white/35">
                Your moment. Our lens. Your story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services