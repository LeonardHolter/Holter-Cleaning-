import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaStar, FaCheckCircle, FaCalculator } from 'react-icons/fa'

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    phoneNumber: '',
    serviceType: '',
    squareFootage: '',
    frequency: 'weekly',
    additionalServices: [] as string[],
    message: ''
  })

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)
  const [showQuote, setShowQuote] = useState(false)

  const services = [
    { value: 'restaurant', label: 'Restaurant Cleaning', baseRate: 0.15 },
    { value: 'kitchen', label: 'Kitchen Cleaning', baseRate: 0.20 },
    { value: 'bar', label: 'Bar Cleaning', baseRate: 0.12 },
    { value: 'restroom', label: 'Restroom Cleaning', baseRate: 0.18 },
    { value: 'post-event', label: 'Post Event Cleaning', baseRate: 0.25 },
    { value: 'post-construction', label: 'Post Construction Cleaning', baseRate: 0.30 },
    { value: 'theater', label: 'Theater Cleaning', baseRate: 0.14 },
    { value: 'hotel-fb', label: 'Hotel Food & Beverage Outlet', baseRate: 0.16 },
    { value: 'opening', label: 'Restaurant Opening Cleaning', baseRate: 0.35 },
    { value: 'exterior', label: 'Exterior Cleaning', baseRate: 0.22 }
  ]

  const frequencies = [
    { value: 'one-time', label: 'One-Time Service', discount: 0 },
    { value: 'weekly', label: 'Weekly', discount: 0.15 },
    { value: 'bi-weekly', label: 'Bi-Weekly', discount: 0.10 },
    { value: 'monthly', label: 'Monthly', discount: 0.05 }
  ]

  const additionalOptions = [
    { value: 'deep-clean', label: 'Deep Clean', price: 150 },
    { value: 'sanitization', label: 'Sanitization Service', price: 100 },
    { value: 'window-cleaning', label: 'Window Cleaning', price: 200 },
    { value: 'floor-waxing', label: 'Floor Waxing', price: 250 },
    { value: 'carpet-cleaning', label: 'Carpet Cleaning', price: 180 }
  ]

  // Calculate price whenever relevant fields change
  useEffect(() => {
    if (formData.serviceType && formData.squareFootage) {
      calculatePrice()
    }
  }, [formData.serviceType, formData.squareFootage, formData.frequency, formData.additionalServices])

  const calculatePrice = () => {
    const service = services.find(s => s.value === formData.serviceType)
    const frequency = frequencies.find(f => f.value === formData.frequency)
    const sqft = parseInt(formData.squareFootage) || 0

    if (!service || sqft === 0) {
      setCalculatedPrice(null)
      return
    }

    // Base calculation: square footage * base rate per sqft
    let basePrice = sqft * service.baseRate

    // Add minimum charge for small jobs
    if (basePrice < 200) {
      basePrice = 200
    }

    // Apply frequency discount
    if (frequency) {
      basePrice = basePrice * (1 - frequency.discount)
    }

    // Add additional services
    let additionalCost = 0
    formData.additionalServices.forEach(addon => {
      const option = additionalOptions.find(opt => opt.value === addon)
      if (option) {
        additionalCost += option.price
      }
    })

    const totalPrice = basePrice + additionalCost
    setCalculatedPrice(Math.round(totalPrice))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAdditionalServices = (value: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(value)
        ? prev.additionalServices.filter(s => s !== value)
        : [...prev.additionalServices, value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowQuote(true)
    
    // Scroll to show the quote
    setTimeout(() => {
      document.getElementById('calculated-quote')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
    
    console.log('Quote requested:', { ...formData, calculatedPrice })
    
    // Here you would typically send the data to your backend/email service
    // Example: send to email service, save to database, etc.
  }

  return (
    <section className="relative bg-gradient-to-br from-cream-100 to-cream-50 pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline - Centered at Top */}
        <div className="text-center mb-12">
          <h1 className="retro-headline text-4xl md:text-5xl lg:text-6xl text-primary-500 leading-tight mb-6">
            Clean it Like You Mean It
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            World class cleaning service at a fair price. Get your free quote today!
          </p>
        </div>

        {/* Two Column Layout - Image + Form */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image and Info */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700">
              <Image
                src="/main header.png"
                alt="Holter Cleaning Professional Services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Value Props */}
            <div className="bg-white rounded-lg p-6 border-2 border-slate-200 shadow-md">
              <h3 className="retro-subheading text-xl text-slate-700 mb-4">Why Choose Holter Cleaning?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-slate-600">World class service at fair prices</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-slate-600">Respect for your property and time</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-slate-600">Job done right, every time</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-slate-600">Commercial & residential services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Request Form */}
          <div id="quote-form" className="bg-white rounded-2xl shadow-2xl border-4 border-slate-700 p-6 md:p-8 lg:sticky lg:top-24">
            <div className="mb-6">
              <h2 className="retro-headline text-2xl md:text-3xl text-primary-500 mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-slate-600">Fill out the form and we'll get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-1">
                  Service Type<span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                >
                  <option value="">Select a service...</option>
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Square Footage */}
              <div>
                <label htmlFor="squareFootage" className="block text-sm font-semibold text-slate-700 mb-1">
                  Approximate Square Footage<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="squareFootage"
                  name="squareFootage"
                  value={formData.squareFootage}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="e.g., 2000"
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                />
              </div>

              {/* Frequency */}
              <div>
                <label htmlFor="frequency" className="block text-sm font-semibold text-slate-700 mb-1">
                  Service Frequency
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                >
                  {frequencies.map(freq => (
                    <option key={freq.value} value={freq.value}>
                      {freq.label} {freq.discount > 0 && `(${freq.discount * 100}% off)`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Services */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Services (Optional)
                </label>
                <div className="space-y-2">
                  {additionalOptions.map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(option.value)}
                        onChange={() => handleAdditionalServices(option.value)}
                        className="w-4 h-4 text-primary-500 border-slate-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-slate-700">
                        {option.label} (+${option.price})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Live Price Calculator Display */}
              {calculatedPrice !== null && (
                <div className="bg-primary-500 border-2 border-slate-700 rounded-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <FaCalculator className="text-slate-800" />
                    <span className="text-sm font-semibold text-slate-800">Estimated Price</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-800">
                    ${calculatedPrice.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    *Final price may vary based on specific requirements
                  </p>
                </div>
              )}

              <div className="border-t-2 border-slate-200 pt-4">
                <p className="text-xs text-slate-600 mb-3 text-center">
                  Complete your details to request this quote
                </p>
              </div>

              {/* First & Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-1">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-1">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-slate-700 mb-1">
                  Business Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-700 mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors bg-cream-50 hover:bg-white resize-vertical text-sm"
                  placeholder="Any special requirements or questions?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-retro text-center py-3 text-sm"
              >
                REQUEST THIS QUOTE
              </button>

              {/* Success Message */}
              {showQuote && (
                <div id="calculated-quote" className="bg-green-100 border-2 border-green-500 rounded-lg p-4 animate-fade-in">
                  <h3 className="font-bold text-green-800 mb-2">Quote Request Sent! ✓</h3>
                  <p className="text-sm text-green-700">
                    Thank you! We've received your quote request for <strong>${calculatedPrice?.toLocaleString()}</strong>. 
                    Our team will contact you shortly at {formData.email} or {formData.phoneNumber} to confirm details.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-24 right-10 w-16 h-16 bg-primary-200 rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-40 -z-10"></div>
    </section>
  )
}

export default Hero
