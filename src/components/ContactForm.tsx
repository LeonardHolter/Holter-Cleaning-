import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    phoneNumber: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  return (
    <section className="bg-cream-100 py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="retro-headline text-3xl md:text-4xl lg:text-5xl text-primary-500 mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Fill out the form below for a free quote or more information about our cleaning services.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-base font-semibold text-gray-800 mb-2">
                First name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-base font-semibold text-gray-800 mb-2">
                Last name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-gray-50"
            />
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-base font-semibold text-gray-800 mb-2">
              Business Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-gray-50"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-base font-semibold text-gray-800 mb-2">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-gray-50"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-base font-semibold text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white resize-vertical"
              placeholder="Tell us about your cleaning needs..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center md:text-left">
            <button
              type="submit"
              className="btn-retro bg-primary-500 hover:bg-primary-600 text-slate-800 border-2 border-primary-700 font-black py-4 px-8 rounded-lg shadow-lg retro-subheading text-sm uppercase tracking-wider transform hover:scale-105 transition-all duration-200"
            >
              GET A FREE QUOTE!
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
