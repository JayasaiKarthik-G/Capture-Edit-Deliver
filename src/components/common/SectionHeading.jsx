const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  const alignment = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <div className={`flex max-w-3xl flex-col ${alignment[align]}`}>
      {eyebrow && (
        <span className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c7a76c]">
          {eyebrow}
        </span>
      )}

      <h2 className="font-[Montserrat] text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading