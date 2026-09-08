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
    <div
      className={`
        flex
        w-full
        max-w-[920px]
        flex-col
        ${alignment[align]}
      `}
    >
      {eyebrow && (
        <span
          className="
            ced-eyebrow
            mb-6
            text-white/45
            sm:mb-7
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          ced-display-heading
          max-w-[900px]
          text-[clamp(3rem,6.5vw,6.5rem)]
          text-white
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            ced-body
            mt-7
            max-w-[620px]
            text-[15px]
            text-white/55
            sm:mt-8
            sm:text-[17px]
            lg:text-[18px]
          "
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading