import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { siteData } from '../../data/siteData'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const ids = siteData.navigation.map((item) =>
      item.href.slice(1)
    )

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-88px 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href) => {
    setOpen(false)

    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled || open
            ? 'bg-[#080808]/95 backdrop-blur-xl'
            : 'bg-transparent'
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-[88px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        {/* LOGO */}

        <button
          type="button"
          onClick={() => go('#home')}
          className="
            group
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border-2
              border-[#e63946]
              bg-[#080808]
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:border-[#ff4d5a]
              sm:h-12
              sm:w-12
            "
          >
            <img
              src="/images/ced-logo.png"
              alt="CED"
              className="
                h-8
                w-auto
                sm:h-9
              "
            />
          </span>

          {/* Text to the RIGHT of logo */}
          <span className="hidden text-left sm:block">
            <span
              className="
                block
                text-[15px]
                font-extrabold
                leading-none
                tracking-[-0.02em]
                text-white
              "
            >
              CED
            </span>

            <span
              className="
                mt-1
                block
                text-[8px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white/45
              "
            >
              Capture • Edit • Deliver
            </span>
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}

        <nav
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
        >
          {siteData.navigation.map((item) => {
            const isActive =
              active === item.href.slice(1)

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => go(item.href)}
                className="
                  group
                  relative
                  py-3
                  font-[Inter]
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.04em]
                  text-white/70
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                {item.label}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    bg-[#e63946]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </button>
            )
          })}
        </nav>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              go('#contact')
            }}
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#e63946]
              px-6
              py-3.5
              font-[Inter]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.02em]
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#c92534]
              sm:inline-flex
            "
          >
            Book Now

            <ArrowUpRight size={15} strokeWidth={2.5} />
          </a>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label={
              open ? 'Close menu' : 'Open menu'
            }
            onClick={() =>
              setOpen((value) => !value)
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-white
              transition-transform
              duration-200
              hover:scale-105
              lg:hidden
            "
          >
            {open ? (
              <X
                size={20}
                strokeWidth={2.5}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2.5}
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          overflow-hidden
          bg-[#080808]
          transition-all
          duration-300
          lg:hidden
          ${
            open
              ? 'max-h-[calc(100vh-88px)] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            max-w-[1440px]
            gap-1
            flex-col
            px-5
            pb-7
            sm:px-8
          "
        >
          {siteData.navigation.map((item) => {
            const isActive =
              active === item.href.slice(1)

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => go(item.href)}
                className={`
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                  text-left
                  font-[Inter]
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.04em]
                  transition-colors
                  ${
                    isActive
                      ? 'text-[#e63946]'
                      : 'text-white/75 hover:text-white'
                  }
                `}
              >
                <span>{item.label}</span>

                <ArrowUpRight
                  size={17}
                  className={
                    isActive
                      ? 'text-[#e63946]'
                      : 'text-white/30'
                  }
                />
              </button>
            )
          })}

          <button
            type="button"
            onClick={() => go('#contact')}
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#e63946]
              py-4
              font-[Inter]
              text-[12px]
              font-bold
              uppercase
              tracking-[0.04em]
              text-white
              transition
              hover:bg-[#c92534]
            "
          >
            Book Your Reel

            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
            />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar