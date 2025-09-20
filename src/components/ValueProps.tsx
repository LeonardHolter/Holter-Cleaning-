import { FaClock, FaHeart, FaThumbsUp, FaStar } from 'react-icons/fa'

const ValueProps = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
            We value your
          </h2>
          
          {/* Google Review */}
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg p-3 shadow-md mb-8">
            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <span className="text-primary-600 text-sm font-medium">5 Star Rating by Julia Kuan</span>
            <span className="text-gray-500 text-xs">09/13/25</span>
          </div>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Time */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Time</h3>
            <p className="text-gray-600 leading-relaxed">
              We are efficient and fast. We value your time by minimizing waiting and leaving no mess behind.
            </p>
          </div>

          {/* Peace of Mind */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Peace of mind</h3>
            <p className="text-gray-600 leading-relaxed">
              Our white-glove service delivers a top-notch experience at a reasonable price.
            </p>
          </div>

          {/* Satisfaction */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaThumbsUp className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Satisfaction</h3>
            <p className="text-gray-600 leading-relaxed">
              We deliver the best results, make it right, and ensure you are 100% happy!
            </p>
          </div>
        </div>

        {/* Bottom Review */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg p-3 shadow-md">
            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <span className="text-primary-600 text-sm font-medium">5 Star Rating by Damon Craig</span>
            <span className="text-gray-500 text-xs">09/05/25</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProps
