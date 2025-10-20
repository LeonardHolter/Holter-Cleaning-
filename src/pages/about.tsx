import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import { FaCheckCircle, FaAward, FaClock, FaUsers, FaShieldAlt, FaLeaf, FaStar, FaHandshake, FaPhone } from 'react-icons/fa'

export default function About() {
  const values = [
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Reliability",
      description: "We show up on time, every time, and deliver consistent, high-quality results you can count on."
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Excellence",
      description: "We don't cut corners. Every project gets our full attention and expertise, no matter the size."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Integrity",
      description: "Fair pricing, honest communication, and respect for your property and time are our foundation."
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Sustainability",
      description: "We use eco-friendly products and methods that are safe for your space and the environment."
    }
  ]

  const stats = [
    { number: "1000+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Repeat Clients" }
  ]

  const certifications = [
    "OSHA Safety Certified",
    "EPA Lead-Safe Certified",
    "BBB Accredited Business",
    "Fully Insured & Bonded",
    "Green Cleaning Certified",
    "Commercial Cleaning Association Member"
  ]

  return (
    <>
      <Head>
        <title>About Us - Holter Cleaning | Professional Cleaning Services NYC</title>
        <meta name="description" content="Learn about Holter Cleaning's commitment to excellence, our experienced team, and why NYC businesses trust us for their commercial cleaning needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cream-100 to-cream-50 pt-32 md:pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="retro-headline text-4xl md:text-5xl lg:text-6xl text-primary-500 leading-tight mb-6">
                About Holter Cleaning
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Building trust through world-class service, one clean space at a time
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              {/* Image */}
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700">
                <Image
                  src="/main header.png"
                  alt="Holter Cleaning Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>

              {/* Story */}
              <div className="space-y-6">
                <h2 className="retro-headline text-3xl md:text-4xl text-primary-500">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p className="text-lg">
                    Holter Cleaning was founded on a simple but powerful belief: world-class 
                    service shouldn't come with an inflated price tag. We saw too many businesses 
                    settling for mediocre cleaning or paying premium prices for inconsistent results.
                  </p>
                  <p>
                    Starting with window cleaning services in Manhattan, we've grown into a 
                    comprehensive commercial cleaning company serving restaurants, hotels, theaters, 
                    and businesses across New York City. Our growth hasn't been through marketing 
                    gimmicks—it's been through word-of-mouth recommendations from satisfied clients 
                    who trust us with their spaces.
                  </p>
                  <p>
                    Today, we're proud to be the cleaning partner of choice for some of NYC's 
                    most respected establishments. But we've never lost sight of what got us here: 
                    treating every property with respect, completing every job right, and building 
                    relationships that last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="retro-headline text-4xl md:text-5xl text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-700 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="retro-headline text-4xl md:text-5xl text-primary-500 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                These principles guide every decision we make and every service we deliver
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-cream-50 rounded-lg p-6 border-2 border-slate-200 hover:border-primary-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-primary-500 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="retro-subheading text-xl text-slate-700 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <h2 className="retro-headline text-4xl md:text-5xl text-primary-500 mb-8">
                  Why Businesses Choose Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Experienced Professionals</h3>
                      <p className="text-slate-600">
                        Our team members are thoroughly trained, background-checked, and experts in their craft. 
                        We don't send rookies to your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Custom Solutions</h3>
                      <p className="text-slate-600">
                        Every space is different. We create tailored cleaning plans that address your 
                        specific needs, schedule, and budget.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Commercial-Grade Equipment</h3>
                      <p className="text-slate-600">
                        We invest in the best tools and cleaning products to deliver superior results 
                        efficiently and safely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Flexible Scheduling</h3>
                      <p className="text-slate-600">
                        We work around your business hours. Early morning, late night, or weekends—
                        we adapt to your schedule, not the other way around.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Transparent Pricing</h3>
                      <p className="text-slate-600">
                        No hidden fees, no surprise charges. You get a detailed quote upfront, 
                        and that's what you pay.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Satisfaction Guaranteed</h3>
                      <p className="text-slate-600">
                        If you're not completely satisfied with our work, we'll come back and 
                        make it right—no questions asked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Certifications */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 border-2 border-slate-200 shadow-lg">
                  <h3 className="retro-headline text-2xl text-primary-500 mb-6">
                    Certifications & Credentials
                  </h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FaAward className="text-primary-500 text-xl flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-500 rounded-lg p-8 border-2 border-slate-700 shadow-lg">
                  <h3 className="retro-headline text-2xl text-slate-800 mb-4">
                    Our Commitment to Safety
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Safety is non-negotiable. All team members are OSHA-trained, and we maintain 
                    comprehensive liability insurance to protect your business. We follow strict 
                    safety protocols and use only approved cleaning products.
                  </p>
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <FaShieldAlt className="text-xl" />
                    <span>Fully Insured & Bonded</span>
                  </div>
                </div>

                <div className="bg-cream-100 rounded-lg p-8 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className="text-primary-500 text-2xl" />
                    <h3 className="retro-headline text-xl text-slate-800">
                      Client Testimonials
                    </h3>
                  </div>
                  <blockquote className="text-slate-600 italic mb-4">
                    "Holter Cleaning has been our partner for 3 years. Their attention to detail 
                    and professionalism is unmatched. Our restaurant has never looked better."
                  </blockquote>
                  <p className="text-slate-700 font-semibold">— Restaurant Owner, Manhattan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cream-100 to-cream-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="retro-headline text-4xl md:text-5xl text-primary-500 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
              Join the hundreds of NYC businesses that trust Holter Cleaning for their 
              commercial cleaning needs.
            </p>
            
            {/* Phone Number CTA */}
            <div className="mb-8">
              <p className="text-lg text-slate-600 mb-3">Call us now for immediate assistance</p>
              <a 
                href="tel:9296261703" 
                className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-primary-500 hover:text-primary-600 transition-colors"
              >
                <FaPhone className="text-2xl" />
                (929) 626-1703
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#quote-form" className="btn-retro inline-block">
                Get Your Free Quote
              </Link>
              <Link 
                href="/#services" 
                className="inline-block px-8 py-3 border-2 border-slate-700 rounded-lg font-bold text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

