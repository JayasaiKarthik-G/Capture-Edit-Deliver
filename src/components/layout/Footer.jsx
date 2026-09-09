import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { siteData } from '../../data/siteData'

const InstagramIcon = ({ size = 14, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303]">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[220px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff0038]/[0.035] blur-[120px]" />
      
      <div className="ced-container relative py-20 lg:py-20">

        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.6fr] lg:gap-14">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-5 mb-3"
              aria-label="CED home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] transition-all duration-300 group-hover:border-[#ff0038]/50 group-hover:bg-[#ff0038]/5">
                <img
                  src="/images/ced-logo.png"
                  alt="CED"
                  className="h-9 w-auto"
                />
              </span>

              <div>
                <p className="text-sm font-bold tracking-[0.12em] text-white">
                  CED
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.22em] text-white/30">
                  Capture • Edit • Deliver
                </p>
              </div>
            </a>

            <h2 className="cinematic-text mt-10 max-w-xl text-[clamp(2.8rem,5vw,5.5rem)]">
              <span className="block text-white">
                Moments happen.
              </span>

              <span className="block text-white/35">
                Stories remain.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/35">
              Real moments, beautifully captured, creatively edited and
              delivered ready to share.
            </p>

            {/* Instagram */}
            <a
              href={siteData.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-xs font-medium text-white/50 transition-all duration-300 hover:border-[#ff0038]/40 hover:bg-[#ff0038]/[0.06] hover:text-white"
            >
              <InstagramIcon
                size={15}
                className="text-[#ff0038]"
              />

              Follow CED on Instagram

              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="ced-eyebrow text-white/25">
              Navigate
            </p>

            <div className="mt-6 grid gap-3">
              {siteData.navigation.slice(0, 6).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={13}
                    className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="ced-eyebrow text-white/25">
              Connect
            </p>

            <div className="mt-6 grid gap-4">

              <a
                href={`https://wa.me/${siteData.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#ff0038]/40 group-hover:bg-[#ff0038]/10">
                  <MessageCircle
                    size={14}
                    className="text-[#ff0038]"
                  />
                </span>

                WhatsApp
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="group flex items-center gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#ff0038]/40 group-hover:bg-[#ff0038]/10">
                  <Phone
                    size={14}
                    className="text-[#ff0038]"
                  />
                </span>

                Call
              </a>

              <a
                href={`mailto:${siteData.contact.email}`}
                className="group flex items-center gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#ff0038]/40 group-hover:bg-[#ff0038]/10">
                  <Mail
                    size={14}
                    className="text-[#ff0038]"
                  />
                </span>

                Email
              </a>

              <a
                href={siteData.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#ff0038]/40 group-hover:bg-[#ff0038]/10">
                  <InstagramIcon
                    size={14}
                    className="text-[#ff0038]"
                  />
                </span>

                Instagram
              </a>

            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 overflow-hidden rounded-[26px] border border-[#ff0038]/20 bg-[#ff0038]/[0.045]">
          <div className="flex flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-lg font-medium tracking-[-0.03em] text-white">
                Have a moment worth capturing?
              </p>

              <p className="mt-1 text-sm text-white/35">
                Let&apos;s turn it into something worth watching again.
              </p>
            </div>

            <a
              href="#contact"
              className="ced-button ced-button-primary w-fit"
            >
              Start an enquiry
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} CED — Capture Edit Deliver
          </span>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              Website by{' '}
              <span className="font-semibold text-[#ff0038]/70">
                Jayasai Karthik
              </span>
            </span>

            <a
              href="#contact"
              className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              Start an enquiry

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer