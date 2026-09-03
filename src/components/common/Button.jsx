import { ArrowUpRight } from 'lucide-react'

const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 active:scale-95'

  const variants = {
    primary:
      'bg-white text-[#050706] hover:bg-[#d7bd88] hover:shadow-[0_0_35px_rgba(215,189,136,0.18)]',

    gold:
      'bg-[#c7a76c] text-[#050706] hover:bg-[#d7bd88] hover:shadow-[0_0_35px_rgba(199,167,108,0.25)]',

    outline:
      'border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-[#c7a76c]/60 hover:bg-white/10',

    dark:
      'bg-[#0d1712] text-white border border-white/10 hover:border-[#c7a76c]/50 hover:bg-[#122019]',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} {...props} className={classes}>
        {children}

        <ArrowUpRight
          size={17}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    )
  }

  return (
    <button {...props} className={classes}>
      {children}

      <ArrowUpRight
        size={17}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
  )
}

export default Button