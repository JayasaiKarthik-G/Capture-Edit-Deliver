const Section = ({
  id,
  children,
  className = '',
  containerClassName = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
    >
      <div
        className={`
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
          ${containerClassName}
        `}
      >
        {children}
      </div>
    </section>
  )
}

export default Section