import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { siteData } from '../../data/siteData'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = siteData.navigation
      .map((item) => item.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? 'hidden'
      : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavigation = (href) => {
    closeMenu()

    const target = document.querySelector(href)

    if (!target) return

    setTimeout(() => {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 50)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'border-b border-white/10 bg-[#050706]/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:h-[84px] sm:px-8 lg:px-10">
          {/* Brand */}
          <button
            type="button"
            onClick={() => handleNavigation('#home')}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to CED home"
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

            {/* Desktop Brand Text */}
            <span className="hidden sm:block">
              <span className="block font-[Montserrat] text-sm font-black uppercase tracking-[0.12em] text-white">
                CED
              </span>

              <span className="mt-0.5 block text-[7px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Capture • Edit • Deliver
              </span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {siteData.navigation.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.href)
                  }
                  className={`relative py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/45 hover:text-white'
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-[#c7a76c] transition-all duration-300 ${
                      isActive
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => handleNavigation('#contact')}
            className="group hidden items-center gap-2 rounded-full bg-[#c7a76c] px-5 py-3 text-[9px] font-black uppercase tracking-[0.14em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] hover:shadow-[0_0_35px_rgba(199,167,108,0.2)] active:scale-95 lg:inline-flex"
          >
            Book Your Reel

            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#c7a76c]/50 hover:bg-white/[0.08] lg:hidden"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#050706] transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(199,167,108,0.08),transparent_30%)]" />

        <div className="relative flex h-full flex-col px-6 pb-8 pt-28 sm:px-8">
          <div className="mb-8">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c7a76c]">
              CED — Capture Edit Deliver
            </span>
          </div>

          <nav className="flex flex-col">
            {siteData.navigation.map((item, index) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.href)
                  }
                  className="group flex items-center justify-between border-b border-white/10 py-5 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/20">
                      0{index + 1}
                    </span>

                    <span
                      className={`font-[Montserrat] text-3xl font-black uppercase tracking-[-0.04em] transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-white/45 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-[#c7a76c]'
                        : 'text-white/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white'
                    }`}
                  />
                </button>
              )
            })}
          </nav>

          <div className="mt-auto">
            {/* <button
              type="button"
              onClick={() =>
                handleNavigation('#contact')
              }
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#c7a76c] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#050706] transition-all duration-300 hover:bg-[#d7bd88] active:scale-[0.98]"
            >
              Book Your Reel

              <ArrowUpRight
                size={17}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button> */}

            <div className="mt-6 flex items-center justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/25">
                Capture
              </span>

              <span className="h-px flex-1 bg-white/10 mx-4" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/25">
                Edit
              </span>

              <span className="h-px flex-1 bg-white/10 mx-4" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/25">
                Deliver
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar