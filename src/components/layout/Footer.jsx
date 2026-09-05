import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from 'lucide-react'
import { siteData } from '../../data/siteData'

const Footer = () => {
  const hasWhatsApp = Boolean(siteData.whatsapp.number)
  const hasEmail = Boolean(siteData.email)

  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/${siteData.whatsapp.number.replace(
        /\D/g,
        '',
      )}?text=${encodeURIComponent(siteData.whatsapp.message)}`
    : '#'

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      label: 'Home',
      href: '#home',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Our Work',
      href: '#work',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'Reviews',
      href: '#reviews',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030504]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#183b2a]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#c7a76c]/[0.05] blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main footer CTA */}
        <div className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-5xl">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c] sm:text-xs">
                Capture • Edit • Deliver
              </p>

              <h2 className="font-[Montserrat] text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                <span className="block text-white">
                  Make the
                </span>

                <span className="block text-white/35">
                  moment.
                </span>

                <span className="block text-[#c7a76c]">
                  Make the reel.
                </span>
              </h2>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_45px_rgba(199,167,108,0.2)] active:scale-[0.98] sm:w-auto"
            >
              Book Your Reel

              <ArrowUpRight
                size={17}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-16 lg:py-20">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7a76c]/50 bg-[#0a100d]">
                {/* <span className="font-[Montserrat] text-base font-black text-[#c7a76c]">
                  CED
                </span> */}
                {/* Logo */}
                <img
                  src="/images/ced-logo.png"
                  alt="CED — Capture Edit Deliver"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-11"
                />
              </div>

              <div>
                <p className="font-[Montserrat] text-2xl font-black tracking-[-0.05em]">
                  CED
                </p>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  Capture • Edit • Deliver
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/35">
              We turn real-life moments into cinematic,
              Instagram-ready stories worth watching again.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a76c]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
                Real moments. Cinematic stories.
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-white/40 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#c7a76c] transition-all duration-300 group-hover:w-4" />

                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-3">

              <a
                href={siteData.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-xs text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#c7a76c]">
                  <span className="text-sm font-black">
                    @
                  </span>
                </span>

                <span>
                  {siteData.instagram.handle}
                </span>

                <ArrowUpRight
                  size={13}
                  className="opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              {hasWhatsApp && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-xs text-white/40 transition-colors duration-300 hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#c7a76c]">
                    <MessageCircle size={15} />
                  </span>

                  <span>
                    WhatsApp
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              )}

              {hasEmail && (
                <a
                  href={`mailto:${siteData.email}`}
                  className="group flex items-center gap-3 text-xs text-white/40 transition-colors duration-300 hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#c7a76c]">
                    <Mail size={15} />
                  </span>

                  <span className="truncate">
                    {siteData.email}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              )}

            </div>
          </div>

          {/* Booking */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
              Ready?
            </p>

            <h3 className="mt-5 max-w-xs font-[Montserrat] text-2xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white">
              Your next memory could be our next reel.
            </h3>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              Start a conversation

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c7a76c] group-hover:bg-[#c7a76c] group-hover:text-[#050706]">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:py-8">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    © {currentYear} CED — Capture Edit Deliver
                </p>

                <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/20">
                    All moments reserved.
                </p>
                </div>

                <div className="text-left sm:text-right">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/20">
                    Website crafted by
                </p>

                <p className="mt-1 font-[Montserrat] text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
                    Gadekari Jayasai Karthik
                </p>
            </div>

            <a
                href="#home"
                className="group flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white"
            >
                Back to top

                <span className="flex h-8 w-8 rotate-[-45deg] items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#c7a76c]/50 group-hover:text-[#c7a76c]">
                <ArrowUpRight size={13} />
                </span>
            </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer