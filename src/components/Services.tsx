import { FaHome, FaBuilding, FaStar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Residential Window Cleaning',
      description: 'Professional window cleaning for your home, apartments, and condos.',
      features: [
        'Interior & exterior cleaning',
        'Screen cleaning included',
        'Sill and frame cleaning',
        'Eco-friendly solutions'
      ]
    },
    {
      icon: <FaBuilding className="text-3xl" />,
      title: 'Commercial Window Cleaning',
      description: 'Keep your business looking professional with regular commercial cleaning.',
      features: [
        'Office buildings',
        'Retail storefronts',
        'Scheduled maintenance',
        'Fully insured service'
      ]
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: 'Post-Construction Cleanup',
      description: 'Remove construction residue and get your windows crystal clear.',
      features: [
        'Paint & adhesive removal',
        'Heavy-duty cleaning',
        'New construction prep',
        'Move-in ready service'
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
            Professional Window Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Since 2002, we've operated the first professional window cleaning services company in the New York City area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary-500 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">
                Why Choose Holter Cleaning?
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <FaShieldAlt className="text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-1">Fully Insured</h4>
                    <p className="text-gray-600 text-sm">Complete liability and worker's compensation coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaStar className="text-accent-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-1">Quality Guaranteed</h4>
                    <p className="text-gray-600 text-sm">100% satisfaction guarantee on all our work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-accent-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-1">Experienced Team</h4>
                    <p className="text-gray-600 text-sm">Over 20 years serving NYC area</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaHome className="text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-1">Local & Trusted</h4>
                    <p className="text-gray-600 text-sm">Trusted by hundreds of Manhattan residents</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-primary-50 rounded-2xl p-8">
                <div className="w-32 h-32 mx-auto bg-accent-500 rounded-full flex items-center justify-center mb-6">
                  <FaStar className="text-white text-4xl" />
                </div>
                <h4 className="text-xl font-bold text-primary-600 mb-2">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-6">Get your free estimate today!</p>
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
