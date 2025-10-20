import { useState } from 'react'
import Link from 'next/link'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-cream-200 fixed w-full top-0 z-50 border-b-2 border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 justify-start">
            <Link href="/" className="retro-subheading text-slate-700 hover:text-primary-500 text-sm transition-colors">
              HOME
            </Link>
            <Link href="/#services" className="retro-subheading text-slate-700 hover:text-primary-500 text-sm transition-colors">
              SERVICES
            </Link>
            <Link href="/about" className="retro-subheading text-slate-700 hover:text-primary-500 text-sm transition-colors">
              ABOUT US
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <div className="text-center">
                <h1 className="retro-headline text-2xl md:text-3xl text-primary-500">
                  HOLTER CLEANING
                </h1>
              </div>
            </Link>
          </div>

          {/* Right Navigation with Phone */}
          <div className="hidden lg:flex items-center space-x-6 justify-end">
            <a 
              href="tel:9296261703" 
              className="flex items-center gap-2 text-slate-700 hover:text-primary-500 transition-colors font-bold"
            >
              <FaPhone className="text-primary-500" />
              <span className="text-sm">(929) 626-1703</span>
            </a>
            <Link href="#quote-form" className="retro-subheading text-slate-700 hover:text-primary-500 text-sm transition-colors">
              GET QUOTE
            </Link>
          </div>

          {/* Mobile: Show logo on left, menu button on right */}
          <div className="lg:hidden flex justify-between items-center col-span-3">
            <Link href="/" className="flex items-center">
              <h1 className="retro-headline text-lg text-primary-500">
                HOLTER CLEANING
              </h1>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-primary-500 hover:text-primary-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream-200 border-t-2 border-slate-700">
            {/* Phone Number - Mobile */}
            <a
              href="tel:9296261703"
              className="flex items-center gap-2 px-3 py-3 bg-primary-500 rounded-lg font-bold text-slate-800 hover:bg-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPhone />
              <span>(929) 626-1703</span>
            </a>
            
            <Link
              href="/"
              className="retro-subheading text-primary-500 hover:text-primary-700 block px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/#services"
              className="retro-subheading text-primary-500 hover:text-primary-700 block px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="retro-subheading text-primary-500 hover:text-primary-700 block px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className="retro-subheading text-primary-500 hover:text-primary-700 block px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="#quote-form"
              className="retro-subheading text-primary-500 hover:text-primary-700 block px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              GET QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
