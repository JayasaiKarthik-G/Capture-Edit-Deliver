import { ArrowUpRight, Check, Quote, Star } from 'lucide-react'
import Section from '../common/Section'
import { reviews, reviewSummary } from '../../data/reviews'

const Reviews = () => {
  const hasReviews = reviews.length > 0

  return (
    <Section
      id="reviews"
      className="relative border-t border-white/5 py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#183b2a]/20 blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#c7a76c]/[0.035] blur-[150px]" />

      <div className="relative">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                Client Stories
              </span>
            </div>

            <h2 className="max-w-5xl font-[Montserrat] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Don't take
              <br />
              <span className="text-white/35">
                our word.
              </span>
              <br />
              <span className="text-[#c7a76c]">
                Hear theirs.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              The moments we capture belong to our
              clients. Their experience says more about
              CED than we ever could.
            </p>
          </div>
        </div>

        {/* Google rating */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] sm:mt-16">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c7a76c]/[0.05] blur-[100px]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#c7a76c]/30 bg-[#c7a76c]/[0.06]">
                  <span className="font-[Montserrat] text-2xl font-black text-[#c7a76c]">
                    G
                  </span>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c7a76c]">
                    Google Reviews
                  </p>

                  {hasReviews ? (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-[Montserrat] text-2xl font-black">
                        {reviewSummary.rating.toFixed(1)}
                      </span>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map(
                          (_, index) => (
                            <Star
                              key={index}
                              size={15}
                              fill="currentColor"
                              className="text-[#c7a76c]"
                            />
                          ),
                        )}
                      </div>

                      <span className="text-xs text-white/35">
                        {reviewSummary.totalReviews}{' '}
                        reviews
                      </span>
                    </div>
                  ) : (
                    <p className="mt-2 font-[Montserrat] text-xl font-bold uppercase tracking-[-0.02em] text-white/60">
                      What our clients say
                    </p>
                  )}
                </div>
              </div>

              {reviewSummary.googleUrl && (
                <a
                  href={reviewSummary.googleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#c7a76c]/50 hover:bg-[#c7a76c] hover:text-[#050706] md:w-auto"
                >
                  Read All Reviews

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Reviews */}
        {hasReviews ? (
          <div className="mt-5 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="group relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] p-6 transition-all duration-500 hover:border-[#c7a76c]/25 sm:p-8"
              >
                {/* Quote icon + Rating */}
                <div className="flex shrink-0 items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7a76c]/25 bg-[#c7a76c]/[0.05]">
                    <Quote
                      size={16}
                      className="text-[#c7a76c]"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={12}
                        fill="currentColor"
                        className="text-[#c7a76c]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <div className="mt-8 h-[160px] overflow-hidden">
                  <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                    “{review.text}”
                  </p>
                </div>

                {/* Reviewer */}
                <div className="mt-auto flex min-h-[58px] items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-bold text-white">
                      {review.name}
                    </p>

                    {review.category && (
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#c7a76c]">
                        {review.category}
                      </p>
                    )}
                  </div>

                  {review.date && (
                    <span className="text-[9px] text-white/25">
                      {review.date}
                    </span>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b border-r border-[#c7a76c]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[2rem] border border-white/10 bg-[#0a100d] p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c7a76c]/25 bg-[#c7a76c]/[0.05]">
                <Quote
                  size={20}
                  className="text-[#c7a76c]"
                />
              </div>

              <h3 className="mt-7 font-[Montserrat] text-2xl font-black uppercase leading-none tracking-[-0.04em] sm:text-3xl md:text-4xl">
                Your experience
                <br />
                <span className="text-white/35">
                  could be our next story.
                </span>
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
                We're building a collection of real client
                experiences. Every celebration we capture
                starts with a story and ends with a memory
                worth sharing.
              </p>
            </div>
          </div>
        )}

        {/* Trust points */}
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d] sm:grid-cols-3">
          <div className="border-b border-white/10 p-6 sm:p-8 sm:border-b-0 sm:border-r">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c7a76c] text-[#050706]">
                <Check size={14} strokeWidth={3} />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Real Moments
              </span>
            </div>

            <p className="mt-4 font-[Montserrat] text-lg font-bold uppercase leading-tight">
              No staged stories.
            </p>
          </div>

          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c7a76c] text-[#050706]">
                <Check size={14} strokeWidth={3} />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Your Story
              </span>
            </div>

            <p className="mt-4 font-[Montserrat] text-lg font-bold uppercase leading-tight">
              Your people. Your memories.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c7a76c] text-[#050706]">
                <Check size={14} strokeWidth={3} />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Ready to Share
              </span>
            </div>

            <p className="mt-4 font-[Montserrat] text-lg font-bold uppercase leading-tight">
              Made for your feed.
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                The real review
              </p>

              <h3 className="max-w-5xl font-[Montserrat] text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                We don't just
                <br />
                capture your event.
                <br />
                <span className="text-white/30">
                  We capture how it felt.
                </span>
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
            >
              Book your reel

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c7a76c] group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* Section footer */}
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
            Stories from the people we capture
          </span>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            05 / 07
          </span>
        </div>
      </div>
    </Section>
  )
}

export default Reviews