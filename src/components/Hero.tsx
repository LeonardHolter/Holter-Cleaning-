import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <span>Number 1 Rated</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 leading-tight">
                <span className="text-accent-500">Number 1 Rated</span> Window<br />
                <span className="text-primary-600">Cleaning</span><br />
                <span className="text-primary-400">Company in New York City</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Providing honest & reliable window washing beyond your expectations since 2008
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="#contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide">
                Get Your Free Estimate
              </Link>
            </div>

            {/* Service Types */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-accent-500" />
                <span className="text-primary-600 font-medium">Residential</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-accent-500" />
                <span className="text-primary-600 font-medium">Commercial</span>
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <span className="text-primary-600 font-medium">5.0 Rating</span>
              </div>
              <div className="text-primary-500">
                <span className="font-semibold">575+</span> Google Reviews
              </div>
            </div>
          </div>

          {/* Right Column - Image/Professional */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200">
              {/* Placeholder for professional cleaner image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-primary-500 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary-500 text-4xl font-bold">HC</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs mx-auto">
                    <p className="text-primary-600 font-semibold">Professional Window Cleaner</p>
                    <p className="text-primary-400 text-sm">Manhattan & NYC Area</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-primary-500/20 rounded-full"></div>
              <div className="absolute top-1/2 left-4 w-12 h-12 bg-accent-500/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-100 rounded-full opacity-50 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-100 rounded-full opacity-50 -z-10"></div>
    </section>
  )
}

export default Hero
