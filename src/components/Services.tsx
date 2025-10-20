import { FaUtensils, FaFire, FaGlassMartini, FaRestroom, FaCalendarCheck, FaHardHat, FaTheaterMasks, FaHotel, FaRibbon, FaBuilding } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaUtensils className="text-4xl" />,
      title: "Restaurant Cleaning",
      description: "Comprehensive cleaning solutions for dining establishments"
    },
    {
      icon: <FaFire className="text-4xl" />,
      title: "Kitchen Cleaning",
      description: "Professional deep cleaning for commercial kitchens"
    },
    {
      icon: <FaGlassMartini className="text-4xl" />,
      title: "Bar Cleaning",
      description: "Thorough cleaning services for bars and lounges"
    },
    {
      icon: <FaRestroom className="text-4xl" />,
      title: "Restroom Cleaning",
      description: "Sanitization and maintenance of restroom facilities"
    },
    {
      icon: <FaCalendarCheck className="text-4xl" />,
      title: "Post Event Cleaning",
      description: "Quick and efficient cleanup after events"
    },
    {
      icon: <FaHardHat className="text-4xl" />,
      title: "Post Construction Cleaning",
      description: "Complete cleaning after construction or renovation"
    },
    {
      icon: <FaTheaterMasks className="text-4xl" />,
      title: "Theater Cleaning",
      description: "Specialized cleaning for theaters and entertainment venues"
    },
    {
      icon: <FaHotel className="text-4xl" />,
      title: "Hotel Food & Beverage Outlet Cleaning",
      description: "Professional cleaning for hotel dining facilities"
    },
    {
      icon: <FaRibbon className="text-4xl" />,
      title: "Restaurant Opening Cleaning",
      description: "Pre-opening deep clean to get your restaurant ready"
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Restaurant & Hotel Exterior Cleaning",
      description: "Exterior cleaning and maintenance services"
    }
  ]

  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="retro-headline text-4xl md:text-5xl text-primary-500 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to meet your commercial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border-2 border-slate-200 hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="text-primary-500 bg-cream-100 p-4 rounded-full">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="retro-subheading text-xl text-slate-700">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Need a custom cleaning solution? We&apos;re here to help!
          </p>
          <a href="#quote-form" className="btn-retro inline-block">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

