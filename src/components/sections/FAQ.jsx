import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Section from '../common/Section'

const faqs = [
  {
    question: 'What exactly does CED deliver?',
    answer:
      'We capture real moments at your event and transform them into polished, vertical, Instagram-ready reels. Depending on your package, you can receive one or multiple edited reels.',
  },
  {
    question: 'How fast can I receive my reel?',
    answer:
      'Our workflow is built around fast delivery. Delivery time depends on the package, event requirements and editing complexity, but we always aim to get your content to you while the moment is still fresh.',
  },
  {
    question: 'What events do you cover?',
    answer:
      'We cover weddings, engagements, birthdays, family events, cafés, restaurants, brand activations, corporate events, products, launches and other special occasions.',
  },
  {
    question: 'Can I choose the song or editing style?',
    answer:
      'Absolutely. You can share a preferred song, reference reel, mood or editing style. Our team then combines your preference with our creative direction to produce the final reel.',
  },
  {
    question: 'How do I book?',
    answer:
      'Simply contact us through WhatsApp or the booking form. Share your event date, location, event type and what you want captured. We will guide you through the next steps.',
  },
  {
    question: 'Do you provide custom packages?',
    answer:
      'Yes. If your event does not fit one of our standard packages, tell us what you need and we can build a custom coverage and delivery plan around your event.',
  },
]

const FAQ = () => {
  const [active, setActive] = useState(0)

  return (
    <Section id="faq" className="relative overflow-hidden py-12 bg-[#050505] lg:py-20">
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#ff0038]/[0.07] blur-[140px]" />

      <div className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="ced-eyebrow text-[#ff0038]">
              Need to know
            </span>

            <h2 className="cinematic-text mt-6 text-[clamp(3rem,6vw,6rem)]">
              <span className="block">Questions?</span>
              <span className="block text-white/40">We have</span>
              <span className="block text-white">answers.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
              Everything you need to know before turning your next event into
              a story.
            </p>
          </div>

          {/* FAQ list */}
          <div className="border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = active === index

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-[10px] font-medium tracking-[0.15em] text-[#ff0038]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="text-lg font-medium tracking-[-0.025em] text-white sm:text-xl">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'border-[#ff0038]/40 bg-[#ff0038] text-white'
                          : 'border-white/10 text-white/40'
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-10 text-sm leading-7 text-white/45 sm:pl-[45px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FAQ