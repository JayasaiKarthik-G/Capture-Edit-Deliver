import { useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import Section from '../common/Section'
import { siteData } from '../../data/siteData'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  date: '',
  time: '',
  location: '',
  packageType: '',
  details: '',
}

const eventOptions = [
  'Wedding',
  'Engagement',
  'Birthday',
  'Family / Baby',
  'Brand / Business',
  'Café / Restaurant',
  'Corporate / Event',
  'Product',
  'Other',
]

const packageOptions = [
  'Quick Reel',
  'Half Day',
  'Event Story',
  'Not sure — recommend one',
]

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required'
    if (!form.eventType) nextErrors.eventType = 'Select an event type'
    if (!form.date) nextErrors.date = 'Select your event date'
    if (!form.location.trim()) nextErrors.location = 'Location is required'

    setErrors(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) return

    const message = `
Hi CED! I'd like to enquire about event coverage.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || 'Not provided'}

Event: ${form.eventType}
Date: ${form.date}
Time: ${form.time || 'Not specified'}
Location: ${form.location}

Package: ${form.packageType || 'Not selected'}

Details:
${form.details || 'No additional details provided.'}
    `.trim()

    const whatsappUrl = `https://wa.me/${
      siteData.contact.whatsappNumber
    }?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-12 lg:py-20"
    >
      <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#ff0038]/10 blur-[160px]" />

      <div className="relative">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="ced-eyebrow text-[#ff0038]">
            Let&apos;s create something
          </span>

          <h2 className="cinematic-text mt-6 text-[clamp(3.2rem,7vw,7rem)]">
            <span className="block">Your moment.</span>
            <span className="block text-white/40">Our camera.</span>
            <span className="block text-[#ff0038]">Let&apos;s talk.</span>
          </h2>

          <p className="ced-body mt-8 max-w-2xl text-white/50">
            Tell us about your event. We&apos;ll understand what you need and
            help you choose the right coverage.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/10 bg-[#090909] p-5 sm:p-8 lg:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Your name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-[#ff0038]">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Phone *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />

                {errors.phone && (
                  <p className="mt-2 text-xs text-[#ff0038]">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />
              </div>

              {/* Event */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Event type *
                </label>

                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#090909] px-4 text-sm text-white/70 outline-none transition focus:border-[#ff0038]/50"
                >
                  <option value="">Select event type</option>

                  {eventOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {errors.eventType && (
                  <p className="mt-2 text-xs text-[#ff0038]">
                    {errors.eventType}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Event date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />

                {errors.date && (
                  <p className="mt-2 text-xs text-[#ff0038]">
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Event time
                </label>

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />
              </div>

              {/* Location */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Location *
                </label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Event venue / location"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />

                {errors.location && (
                  <p className="mt-2 text-xs text-[#ff0038]">
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Package */}
              <div className="sm:col-span-2">
                <label className="mb-3 block text-xs font-medium text-white/45">
                  Preferred package
                </label>

                <div className="grid gap-2 sm:grid-cols-2">
                  {packageOptions.map((option) => {
                    const selected = form.packageType === option

                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() =>
                          setForm((current) => ({
                            ...current,
                            packageType: option,
                          }))
                        }
                        className={`rounded-2xl border px-4 py-4 text-left text-sm transition-all ${
                          selected
                            ? 'border-[#ff0038]/60 bg-[#ff0038]/10 text-white'
                            : 'border-white/10 bg-white/[0.02] text-white/45 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Details */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-white/45">
                  Tell us more
                </label>

                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="What would you like us to capture?"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-sm text-white outline-none transition focus:border-[#ff0038]/50"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-white/30">
                By submitting, you&apos;ll be connected with CED through
                WhatsApp to continue the conversation.
              </p>

              <button
                type="submit"
                className="ced-button ced-button-primary"
              >
                Send Enquiry
                <Send size={16} />
              </button>
            </div>

            {submitted && (
              <div className="mt-5 rounded-2xl border border-[#ff0038]/20 bg-[#ff0038]/[0.06] px-4 py-3 text-sm text-white/70">
                Your enquiry is ready. We&apos;ve opened WhatsApp so you can
                continue with CED.
              </div>
            )}
          </form>

          {/* Contact information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            <a
              href={`https://wa.me/${siteData.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[24px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-[#ff0038]/40"
            >
              <MessageCircle
                size={22}
                className="text-[#ff0038]"
                strokeWidth={1.7}
              />

              <p className="mt-10 text-xs uppercase tracking-[0.16em] text-white/30">
                WhatsApp
              </p>

              <p className="mt-2 text-lg font-medium text-white">
                Start a conversation
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-white/35">
                Chat with CED
                <ArrowUpRight size={14} />
              </div>
            </a>

            <a
              href={`tel:${siteData.contact.phone}`}
              className="group rounded-[24px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-[#ff0038]/40"
            >
              <Phone
                size={21}
                className="text-[#ff0038]"
                strokeWidth={1.7}
              />

              <p className="mt-10 text-xs uppercase tracking-[0.16em] text-white/30">
                Call
              </p>

              <p className="mt-2 break-all text-lg font-medium text-white">
                {siteData.contact.phone}
              </p>
            </a>

            <a
              href={`mailto:${siteData.contact.email}`}
              className="group rounded-[24px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-[#ff0038]/40"
            >
              <Mail
                size={21}
                className="text-[#ff0038]"
                strokeWidth={1.7}
              />

              <p className="mt-10 text-xs uppercase tracking-[0.16em] text-white/30">
                Email
              </p>

              <p className="mt-2 break-all text-lg font-medium text-white">
                {siteData.contact.email}
              </p>
            </a>

            <div className="rounded-[24px] border border-white/10 bg-[#090909] p-8">
              <MapPin
                size={21}
                className="text-[#ff0038]"
                strokeWidth={1.7}
              />

              <p className="mt-10 text-xs uppercase tracking-[0.16em] text-white/30">
                Coverage
              </p>

              <p className="mt-2 text-lg font-medium text-white">
                Events • Brands • Cafés • Celebrations
              </p>

              <p className="mt-2 text-sm leading-6 text-white/35">
                Tell us where your moment is happening and we&apos;ll take it
                from there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact