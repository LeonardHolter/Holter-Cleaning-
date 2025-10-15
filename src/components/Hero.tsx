import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-cream-100 to-cream-50 pt-32 md:pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Column - Main Header Image */}
          <div className="relative">
            <div className="relative w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
              <Image
                src="/main header.png"
                alt="Holter Cleaning Professional Window Cleaning Services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Retro Main Headline */}
            <div className="space-y-6">
              <h1 className="retro-headline text-4xl md:text-5xl lg:text-6xl text-primary-500 leading-tight">
                Clean it Like<br />
                You Mean It
              </h1>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  Holter's is founded on the idea of world class service at a fair price. 
                  We aim to make our customers proud and hopefully yours too along the way.
                </p>
                
                <p className="text-base">
                  We take pride in our work, no matter the project. Whether we're 
                  cleaning your windows, power washing your walkways, or giving your 
                  home a chemical-free soft wash, we always make a point of treating 
                  your property – and your time – with the utmost respect. And we 
                  won't quit until we get the job done right.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="#contact" className="btn-retro inline-block">
                Get Quote Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-32 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-20 left-16 w-16 h-16 bg-primary-100 rounded-full opacity-40 -z-10"></div>
    </section>
  )
}

export default Hero
