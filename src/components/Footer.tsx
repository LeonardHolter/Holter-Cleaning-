import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaStar } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <span className="text-white font-bold text-lg">HC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Holter Cleaning</h3>
                <p className="text-gray-400 text-sm">Professional Window Cleaning</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              NYC's #1 rated window cleaning company. Providing honest & reliable service since 2008.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">575+ Google Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Residential Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Commercial Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Post-Construction Cleanup
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Screen Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Pressure Washing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Get Free Estimate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-500" />
                <div>
                  <p className="font-semibold">(212) 555-CLEAN</p>
                  <p className="text-gray-400 text-sm">Call for free estimate</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500" />
                <div>
                  <p>info@holtercleaning.com</p>
                  <p className="text-gray-400 text-sm">24/7 email support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1" />
                <div>
                  <p>Manhattan & NYC Area</p>
                  <p className="text-gray-400 text-sm">All 5 boroughs</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Holter Cleaning. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Licensed & Insured
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              🌟 Manhattan's Most Trusted Window Cleaning Service | Serving NYC Since 2008 🌟
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
