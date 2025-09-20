import { useState } from 'react'
import Link from 'next/link'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">HC</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-700">Holter Cleaning</h1>
                <p className="text-sm text-gray-600 hidden md:block">Professional Window Cleaning</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary-500">
              <FaPhone className="text-sm" />
              <span className="font-semibold">(212) 555-CLEAN</span>
            </div>
            <Link href="#contact" className="btn-primary">
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary-500 hover:text-accent-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-primary-500 hover:text-accent-500 block px-3 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-primary-500 hover:text-accent-500 block px-3 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-primary-500 hover:text-accent-500 block px-3 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-primary-500 hover:text-accent-500 block px-3 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="#contact"
                className="text-primary-500 hover:text-accent-500 block px-3 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 text-primary-500 mb-3">
                  <FaPhone className="text-sm" />
                  <span className="font-semibold">(212) 555-CLEAN</span>
                </div>
                <Link href="#contact" className="btn-primary block text-center">
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
