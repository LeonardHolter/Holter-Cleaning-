import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Brianna G',
    date: 'September 13, 2025',
    rating: 5,
    text: 'Amazing job. Super fast and amazing service!',
    avatar: 'BG'
  },
  {
    id: 2,
    name: 'Julia Kuan',
    date: 'September 13, 2025', 
    rating: 5,
    text: 'The guys were terrific. Efficient, informative and the windows look great.',
    avatar: 'JK'
  },
  {
    id: 3,
    name: 'Damon Craig',
    date: 'September 5, 2025',
    rating: 5,
    text: 'True pros! What a difference!',
    avatar: 'DC'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    date: 'August 28, 2025',
    rating: 5,
    text: 'Professional service from start to finish. My windows have never looked better!',
    avatar: 'SJ'
  },
  {
    id: 5,
    name: 'Michael Chen',
    date: 'August 15, 2025',
    rating: 5,
    text: 'Reliable, punctual, and thorough. Highly recommend Holter Cleaning!',
    avatar: 'MC'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            Best Window Cleaning<br />
            Company in New York<br />
            City
          </h2>

          {/* Overall Rating */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-6xl font-bold text-primary-600">5.0</div>
              <div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-2xl" />
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Out of</span><br />
                  <span className="font-semibold">5 Stars</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">Overall rating of 726 3rd-party reviews</p>
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Leave Us Feedback
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-12">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Rating text */}
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {testimonial.rating} out of {testimonial.rating} stars
                </p>

                {/* Google logo */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-accent-500 font-bold text-xl">G</div>
                  <span className="text-accent-500 font-semibold">oogle</span>
                </div>

                {/* Author info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-600">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 italic">{testimonial.date}</p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>

                {/* External link icon */}
                <div className="mt-4 flex justify-end">
                  <div className="w-6 h-6 bg-accent-100 rounded flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-accent-500 rounded-sm transform rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Providing you with an amazing customer experience and spotless clean windows is our passion. The
            benefit of hiring us is we come to you trusted by hundreds of your neighbors.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            In fact we have <span className="font-semibold">575+ 5-star Google reviews</span>... and counting!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
