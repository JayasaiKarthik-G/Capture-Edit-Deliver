import { ArrowUpRight } from 'lucide-react'

const ServiceCard = ({
  service,
  className = '',
}) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] bg-[#0a100d] ${className}`}
    >
      {/* Image */}
      <img
        src={service.image}
        alt={`${service.title} reel production by CED`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/35" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

      {/* Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10 transition-colors duration-500 group-hover:border-[#c7a76c]/40" />

      {/* Number */}
      <div className="absolute right-5 top-5 font-mono text-[10px] font-medium tracking-[0.2em] text-white/50">
        {service.number}
      </div>

      {/* Arrow */}
      <div className="absolute right-5 top-12 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight size={15} />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#c7a76c]">
          CED REELS
        </p>

        <h3 className="font-[Montserrat] text-2xl font-black uppercase leading-none tracking-[-0.035em] text-white sm:text-3xl">
          {service.title}
        </h3>

        <p className="mt-3 max-w-sm text-xs leading-5 text-white/55 opacity-100 transition-all duration-500 sm:text-sm sm:leading-6 md:max-h-0 md:translate-y-3 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {service.description}
        </p>
      </div>
    </article>
  )
}

export default ServiceCard