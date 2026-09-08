import { siteData } from '../../data/siteData'

const WhatsAppIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L.07 24l6.34-1.66a11.85 11.85 0 0 0 5.64 1.43h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.23-6.15-3.41-8.41ZM12.06 21.72h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.83 9.83 0 0 1-1.51-5.18C2.17 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.42 9.81-9.86 9.81Zm5.39-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
)

const WhatsAppButton = () => {
  const url = `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(
    siteData.contact.whatsappMessage
  )}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with CED on WhatsApp"
      className="
        fixed
        right-5
        bottom-5
        z-30
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-transform
        duration-300
        hover:scale-105
        sm:right-6
        sm:bottom-6
        sm:h-12
        sm:w-12
      "
    >
      <WhatsAppIcon size={20} />
    </a>
  )
}

export default WhatsAppButton