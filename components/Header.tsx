
'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 font-heading"
          >
            <span className="text-primary-600">SOS</span> {locale === 'ja' ? 'ビーコン' : 'Flare'}
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
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
        </nav>

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
      </div>
    </header>
  )
}
