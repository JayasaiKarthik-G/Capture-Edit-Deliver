import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Play,
} from 'lucide-react'
import Section from '../common/Section'
import ReelCard from '../common/ReelCard'
import { reels } from '../../data/reels'
import { siteData } from '../../data/siteData'

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(reels.map((reel) => reel.category)),
    ]

    return ['All', ...uniqueCategories]
  }, [])

  const filteredReels = useMemo(() => {
    if (activeCategory === 'All') {
      return reels
    }

    return reels.filter(
      (reel) => reel.category === activeCategory,
    )
  }, [activeCategory])

  const visibleReels = showAll
    ? filteredReels
    : filteredReels.slice(0, 6)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setShowAll(false)
  }

  return (
    <Section
      id="work"
      className="relative border-t border-white/5 py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-[#183b2a]/20 blur-[160px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#c7a76c]/[0.035] blur-[150px]" />

      <div className="relative">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                Our Work
              </span>
            </div>

            <h2 className="max-w-5xl font-[Montserrat] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Moments
              <br />
              <span className="text-white/35">
                become
              </span>
              <br />
              <span className="text-[#c7a76c]">
                stories.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              A glimpse into the moments we've captured,
              edited and turned into reels made to be
              watched again.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/25">
                {String(reels.length).padStart(2, '0')}+
                REELS
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c7a76c]">
                And counting
              </span>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-12 sm:mt-16">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const active = category === activeCategory

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:px-5 sm:py-3 ${
                    active
                      ? 'border-[#c7a76c] bg-[#c7a76c] text-[#050706]'
                      : 'border-white/10 bg-white/[0.025] text-white/40 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Reel grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-12">
          {visibleReels.map((reel, index) => {
            const isFeatured =
              reel.featured || index === 0

            return (
              <ReelCard
                key={reel.id}
                reel={reel}
                featured={isFeatured}
                className={
                  isFeatured
                    ? 'min-h-[560px] sm:min-h-[620px] lg:col-span-7 lg:min-h-[760px]'
                    : index === 1
                      ? 'min-h-[400px] sm:min-h-[480px] lg:col-span-5 lg:min-h-[560px]'
                      : index === 2
                        ? 'min-h-[400px] sm:min-h-[480px] lg:col-span-5'
                        : index === 3
                          ? 'min-h-[400px] sm:min-h-[480px] lg:col-span-7'
                          : 'min-h-[400px] sm:min-h-[480px] lg:col-span-4'
                }
              />
            )
          })}
        </div>

        {/* Empty state */}
        {visibleReels.length === 0 && (
          <div className="mt-10 flex min-h-[300px] items-center justify-center rounded-[2rem] border border-white/10 bg-[#0a100d]">
            <div className="text-center">
              <p className="font-[Montserrat] text-2xl font-black uppercase">
                No reels yet
              </p>

              <p className="mt-2 text-sm text-white/35">
                More CED stories are coming soon.
              </p>
            </div>
          </div>
        )}

        {/* Show more / less */}
        {filteredReels.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-[#c7a76c]/50 hover:bg-[#c7a76c]/5 hover:text-white"
            >
              {showAll ? 'Show Less' : 'View More Reels'}

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] sm:mt-20">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#c7a76c]/10" />

            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#c7a76c]/[0.05] blur-[80px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c7a76c]/30 bg-[#c7a76c]/[0.06]">
                    <span className="text-sm font-black text-[#c7a76c]">
                      @
                    </span>
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c7a76c]">
                    Follow the journey
                  </span>
                </div>

                <h3 className="mt-5 font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  More moments.
                  <br />
                  <span className="text-white/35">
                    More stories.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                  Follow CED on Instagram to see our latest
                  work, behind-the-scenes moments and new
                  reels.
                </p>
              </div>

              <a
                href={siteData.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#c7a76c]/50 hover:bg-[#c7a76c] hover:text-[#050706] sm:w-auto"
              >
                {siteData.instagram.handle}

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                The point of it all
              </p>

              <h3 className="max-w-5xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                Don't just take photos.
                <br />
                <span className="text-white/30">
                  Create memories people
                </span>
                <br />
                can rewatch.
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
            >
              Create yours

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c7a76c] group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
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
              From real life → to reels
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            03 / 07
          </span>
        </div>
      </div>
    </Section>
  )
}

export default OurWork
