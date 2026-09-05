import { ArrowUpRight, Check, Play } from 'lucide-react'
import Section from '../common/Section'

const clients = [
  {
    id: '01',
    name: 'FNF',
    category: 'Brand & Content Partner',
  },
  {
    id: '02',
    name: 'Srestha Digital Media',
    category: 'Digital Media Partner',
  },
  {
    id: '03',
    name: 'See You Cafe',
    category: 'Café Content & Social Media',
  },
  {
    id: '04',
    name: 'Oasis The Cafe',
    category: 'Café Content & Social Media',
  },
  {
    id: '05',
    name: 'Studios Samkshika',
    category: 'Boutique Content & Visuals',
  },
  {
    id: '06',
    name: 'Label Srianvi',
    category: 'Boutique Content & Visuals',
  },
  {
    id: '07',
    name: 'Elegance by Sravanthi',
    category: 'Boutique Content & Visuals',
  },
  {
    id: '08',
    name: 'Madhuram Etc.',
    category: 'Brand & Social Media Content',
  },
  {
    id: '09',
    name: 'Saisho Cafe',
    category: 'Café Content & Social Media',
  },
]

const Clients = () => {
  return (
    <Section
      id="clients"
      className="relative border-t border-white/5 py-16 sm:py-24 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#183b2a]/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-48 bottom-20 h-[450px] w-[450px] rounded-full bg-[#c7a76c]/[0.035] blur-[150px]" />

      <div className="relative">
        {/* ================= HEADER ================= */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                Our Clients
              </span>
            </div>

            <h2 className="max-w-5xl font-[Montserrat] text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Brands That
              <br />
              <span className="text-white/35">Trust</span>
              <br />
              <span className="text-[#c7a76c]">CED.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              Every brand has a story worth telling. We work with businesses,
              cafés, boutiques and digital media partners to create content
              that gets attention and builds a stronger digital presence.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              <ArrowUpRight size={15} className="text-[#c7a76c]" />
              Clients & Partners
            </div>
          </div>
        </div>

        {/* ================= INTRO CARD ================= */}
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] sm:mt-12">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#c7a76c]/[0.05] blur-[110px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                  Built through collaboration
                </p>

                <h3 className="mt-4 max-w-4xl font-[Montserrat] text-2xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-3xl md:text-4xl lg:text-5xl">
                  From concept to capture.
                  <br />
                  From editing to
                  <span className="text-white/35"> delivery.</span>
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  We help brands turn everyday moments into engaging content
                  people want to stop, watch and remember.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c7a76c]/30 bg-[#c7a76c]/[0.06]">
                  <span className="font-[Montserrat] text-sm font-black text-[#c7a76c]">
                    {String(clients.length).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <p className="font-[Montserrat] text-xl font-black">
                    {clients.length}+
                  </p>

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    Brands & Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CLIENT GRID ================= */}
        <div className="mt-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#c7a76c]/60" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/30">
                Our Clients & Partners
              </span>
            </div>

            <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
              {String(clients.length).padStart(2, '0')} CLIENTS
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {clients.map((client) => (
              <article
                key={client.id}
                className="group relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a100d] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c7a76c]/30 hover:bg-[#0c130f] sm:min-h-[210px] sm:p-7 lg:min-h-[230px] lg:p-8"
              >
                {/* Background number */}
                <span className="pointer-events-none absolute -right-3 -top-8 select-none font-[Montserrat] text-[8rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] transition-all duration-700 group-hover:text-[#c7a76c]/[0.045]">
                  {client.id}
                </span>

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#c7a76c]/70">
                    {client.id}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/30 transition-all duration-500 group-hover:border-[#c7a76c]/40 group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                {/* Client */}
                <div className="relative mt-10">
                  <h3 className="max-w-[90%] font-[Montserrat] text-xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-2xl">
                    {client.name}
                  </h3>

                  <p className="mt-3 max-w-[85%] text-[9px] font-bold uppercase leading-5 tracking-[0.16em] text-[#c7a76c]/70">
                    {client.category}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#c7a76c]/60 transition-transform duration-700 group-hover:scale-x-100 sm:left-7 sm:right-7 lg:left-8 lg:right-8" />
              </article>
            ))}
          </div>
        </div>

        {/* ================= BRAND MESSAGE ================= */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#c7a76c]/20 bg-[#c7a76c]/[0.035] sm:mt-16">
          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#183b2a]/20 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c7a76c]/30 bg-[#c7a76c]/[0.05]">
                  <Check size={14} className="text-[#c7a76c]" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                  More Than Just Reels
                </span>
              </div>

              <h3 className="mt-6 max-w-5xl font-[Montserrat] text-3xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                We don't simply
                <br />
                create videos.
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                We create content that makes your brand look better, feel
                premium and stay memorable.
              </p>

              {/* Process */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Capture
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="rotate-45 text-[#c7a76c]"
                  />
                </div>

                <span className="hidden h-px w-8 bg-white/10 sm:block" />

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Edit
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="rotate-45 text-[#c7a76c]"
                  />
                </div>

                <span className="hidden h-px w-8 bg-white/10 sm:block" />

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Deliver
                  </span>
                </div>
              </div>

              {/* Final statement */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="max-w-3xl font-[Montserrat] text-xl font-bold uppercase leading-[1.05] tracking-[-0.025em] text-white/75 sm:text-2xl md:text-3xl">
                  Your brand has the story.
                  <br />
                  <span className="text-[#c7a76c]">
                    CED makes people stop and watch.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d]">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c7a76c]/[0.04] blur-[100px]" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                  Ready to work together?
                </p>

                <h3 className="mt-4 max-w-3xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  Your brand could be
                  <br />
                  <span className="text-white/35">our next story.</span>
                </h3>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_45px_rgba(199,167,108,0.22)] active:scale-[0.98] sm:w-auto"
              >
                Work With CED

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ================= FOOTER LINE ================= */}
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
              Brands → Stories → Impact
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            05 / 08
          </span>
        </div>
      </div>
    </Section>
  )
}

export default Clients