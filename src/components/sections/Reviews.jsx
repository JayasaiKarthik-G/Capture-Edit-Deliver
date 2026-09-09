import { ArrowUpRight, Star } from 'lucide-react'
import Section from '../common/Section'
import {
  reviews,
  reviewSummary,
} from '../../data/reviews'

const Reviews = () => {
  return (
    <Section
      id="reviews"
      className="relative overflow-hidden border-b border-white/5 py-12 lg:py-20"
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#ff0038]/[.035]
          blur-[150px]
        "
      />

      <div className="relative grid gap-12 lg:grid-cols-[.65fr_1fr] lg:gap-20">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="ced-eyebrow text-white/40">
            Reviews
          </span>

          <h2
            className="
              cinematic-text
              mt-7
              text-[clamp(3rem,6vw,6rem)]
              text-white
            "
          >
            <span className="block">
              People who
            </span>

            <span className="block text-white/40">
              lived it.
            </span>

            <span className="block text-[#ff0038]">
              Loved it.
            </span>
          </h2>

          {/* Rating */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill="currentColor"
                  strokeWidth={1.5}
                  className="text-[#ff0038]"
                />
              ))}
            </div>

            <span className="text-xl font-medium text-white">
              {reviewSummary.rating}.0
            </span>

            <span className="text-xs text-white/30">
              from {reviewSummary.totalReviews}+ reviews
            </span>
          </div>

          <a
            href={reviewSummary.googleUrl}
            target="_blank"
            rel="noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-medium
              uppercase
              tracking-[.18em]
              text-white/40
              transition
              hover:text-white
            "
          >
            View Google Reviews
            <ArrowUpRight
              size={14}
              className="text-[#ff0038]"
            />
          </a>
        </div>

        {/* Reviews */}
        <div className="grid items-stretch gap-3 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="
                group
                relative
                flex
                min-h-[245px]
                flex-col
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#0a0a0a]
                p-5
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#ff0038]/25
                sm:min-h-[260px]
                sm:p-6
              "
            >
              {/* Number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-5
                  text-[6rem]
                  font-light
                  leading-none
                  text-white/[.025]
                  transition
                  group-hover:text-[#ff0038]/[.035]
                "
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Top */}
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex gap-0.5">
                  {Array.from({
                    length: review.rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className="text-[#ff0038]"
                    />
                  ))}
                </div>

                <span className="text-[8px] font-medium uppercase tracking-[.16em] text-white/20">
                  {review.category}
                </span>
              </div>

              {/* Review text */}
              <p className="relative mt-6 text-sm leading-7 text-white/50 pb-6">
                “{review.text}”
              </p>

              {/* Bottom - always pushed down */}
              <div className="relative mt-auto border-t border-white/10 pt-4">
                <p className="text-xs font-medium text-white/75">
                  {review.name}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[.15em] text-white/20">
                  {review.date}
                </p>
              </div>

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
      </div>
    </Section>
  )
}

export default Reviews