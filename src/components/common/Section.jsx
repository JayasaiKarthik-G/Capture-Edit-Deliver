const Section = ({
  id,
  children,
  className = '',
  containerClassName = '',
}) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section