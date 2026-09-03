import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'
import Section from '../common/Section'
import { siteData } from '../../data/siteData'

const Contact = () => {
  const hasWhatsApp = Boolean(siteData.whatsapp.number)
  const hasEmail = Boolean(siteData.email)

  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/${siteData.whatsapp.number.replace(
        /\D/g,
        '',
      )}?text=${encodeURIComponent(
        siteData.whatsapp.message,
      )}`
    : '#'

  return (
    <Section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32 lg:py-40"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#183b2a]/25 blur-[160px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#c7a76c]/[0.05] blur-[160px]" />

      <div className="relative">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                Contact CED
              </span>
            </div>

            <h2 className="max-w-6xl font-[Montserrat] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              Your next
              <br />
              <span className="text-white/35">
                memory.
              </span>
              <br />
              <span className="text-[#c7a76c]">
                Our next reel.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              Tell us what you're celebrating, and
              we'll take care of the story.
            </p>
          </div>
        </div>

        {/* Main booking card */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#c7a76c]/25 bg-[#0a100d] sm:mt-16">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#c7a76c]/[0.06] blur-[100px]" />

          <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-[#c7a76c]/10 sm:right-14 sm:top-14 sm:h-44 sm:w-44" />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Booking side */}
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c7a76c] text-[#050706] shadow-[0_0_40px_rgba(199,167,108,0.15)]">
                <MessageCircle
                  size={23}
                  strokeWidth={2}
                />
              </div>

              <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                Fastest way to book
              </p>

              <h3 className="mt-4 max-w-2xl font-[Montserrat] text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                Let's make
                <br />
                your moment
                <br />
                <span className="text-white/30">
                  unforgettable.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                Send us a message with your event details.
                We'll understand what you need, share the
                package options and help you get booked.
              </p>

              <div className="mt-9">
                {hasWhatsApp ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_45px_rgba(199,167,108,0.25)] active:scale-[0.98] sm:w-auto"
                  >
                    <MessageCircle
                      size={17}
                      strokeWidth={2.5}
                    />

                    Book Your Reel on WhatsApp

                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <div className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#c7a76c]/25 bg-[#c7a76c]/[0.05] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#c7a76c] sm:w-auto">
                    <MessageCircle size={17} />

                    WhatsApp booking coming soon
                  </div>
                )}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-8 bg-white/15" />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Simple • Fast • Personal
                </span>
              </div>
            </div>

            {/* Contact details */}
            <div className="border-t border-white/10 bg-black/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Other ways to connect
              </p>

              <div className="mt-7 space-y-3">
                {/* WhatsApp */}
                {hasWhatsApp && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#c7a76c]/30 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c7a76c]">
                      <Phone size={17} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                        WhatsApp
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-white/70">
                        {siteData.whatsapp.number}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c7a76c]"
                    />
                  </a>
                )}

                {/* Email */}
                {hasEmail && (
                  <a
                    href={`mailto:${siteData.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#c7a76c]/30 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c7a76c]">
                      <Mail size={17} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                        Email
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-white/70">
                        {siteData.email}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c7a76c]"
                    />
                  </a>
                )}

                {/* Instagram */}
                <a
                  href={siteData.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#c7a76c]/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c7a76c]">
                    <span className="text-base font-black">@</span>
                  </span>

                  <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Instagram
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-white/70">
                      {siteData.instagram.handle}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c7a76c]"
                  />
                </a>
              </div>

              {/* Booking note */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#c7a76c]">
                  What to send us
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    'Event type',
                    'Event date',
                    'Location',
                    'What you want captured',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs text-white/40"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#c7a76c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a100d]">
          <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7a76c]/[0.05] blur-[100px]" />

            <div className="relative">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
                One last thing
              </p>

              <h3 className="mx-auto mt-5 max-w-5xl font-[Montserrat] text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Some moments deserve
                <br />
                more than a photo.
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/35">
                They deserve a reel you'll want to watch
                again and again.
              </p>

              <div className="mt-8">
                {hasWhatsApp ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_45px_rgba(199,167,108,0.25)] active:scale-[0.98]"
                  >
                    Make The Moment. We'll Make The Reel.

                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <a
                    href="#home"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88]"
                  >
                    Explore CED

                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section footer */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
            Capture • Edit • Deliver
          </span>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            07 / 07
          </span>
        </div>
      </div>
    </Section>
  )
}

export default Contact