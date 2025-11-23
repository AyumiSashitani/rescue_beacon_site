'use client'

import { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale } = useLocale()
  const t = translations[locale]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#about', label: t.nav.about },
    { href: '#features', label: t.nav.features },
    { href: '#howto', label: t.nav.howto },
    { href: '#download', label: t.nav.download },
  ]

  const handleMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/app-icon.png"
                alt="SOS Beacon Logo"
                fill
                className="object-cover scale-[1.15]"
              />
            </div>
            <span className="text-xl font-bold">SOS Beacon</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-red-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language switcher button */}
            <button
              onClick={() => setLocale(locale === 'ja' ? 'en' : 'ja')}
              className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm font-medium border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-md flex items-center gap-1.5"
              aria-label="Switch language"
            >
              <span className="text-base">{locale === 'ja' ? '🇯🇵' : '🇺🇸'}</span>
              {locale === 'ja' ? 'JA' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleMenuClick}
                    className="block py-2 px-4 rounded-lg hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile language switcher */}
            <div className="mt-4 px-4">
              <button
                onClick={() => setLocale(locale === 'ja' ? 'en' : 'ja')}
                className="w-full text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm font-medium border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md flex items-center justify-center gap-1.5"
                aria-label="Switch language"
              >
                <span className="text-base">{locale === 'ja' ? '🇯🇵' : '🇺🇸'}</span>
                {locale === 'ja' ? '日本語' : 'English'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
