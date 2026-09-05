import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { siteData } from '../../data/siteData'

const WhatsAppButton = () => {
  const { whatsapp } = siteData

  const hasWhatsApp = Boolean(whatsapp.number)

  if (!hasWhatsApp) {
    return null
  }

  const whatsappUrl = `https://wa.me/${whatsapp.number.replace(
    /\D/g,
    '',
  )}?text=${encodeURIComponent(whatsapp.message)}`

  return (
    <>
      {/* Mobile Sticky Booking Button */}
      <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#d7bd88]/40 bg-[#c7a76c] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#050706] shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_35px_rgba(199,167,108,0.18)] backdrop-blur-xl transition-all duration-300 hover:bg-[#d7bd88] active:scale-[0.98]"
        >
          <MessageCircle
            size={18}
            strokeWidth={2.5}
          />

          <span> Book Your Reel</span>

          <ArrowUpRight
            size={17}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      {/* Desktop Floating Booking Button */}
      <div className="fixed bottom-7 right-7 z-40 hidden lg:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Book your reel on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#d7bd88]/40 bg-[#c7a76c] text-[#050706] shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_35px_rgba(199,167,108,0.18)] transition-all duration-300 hover:h-14 hover:w-48 hover:bg-[#d7bd88]"
        >
          <MessageCircle
            size={21}
            strokeWidth={2.5}
            className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          />

          <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-black uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100">
            Book Your Reel
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={2.5}
            className="ml-0 max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-[20px] group-hover:opacity-100"
          />
        </a>
      </div>
    </>
  )
}

export default WhatsAppButton