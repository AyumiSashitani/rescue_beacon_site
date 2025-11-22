'use client'

import { useState, useEffect } from 'react'
import { FaBell } from 'react-icons/fa'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <div className="flex items-center space-x-2">
            <FaBell className="text-red-600 text-2xl" />
            <span className="text-xl font-bold">SOS Beacon</span>
          </div>

          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#about"
                className="hover:text-red-600 transition-colors duration-200"
              >
                このアプリについて
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-red-600 transition-colors duration-200"
              >
                機能紹介
              </a>
            </li>
            <li>
              <a
                href="#howto"
                className="hover:text-red-600 transition-colors duration-200"
              >
                使い方
              </a>
            </li>
            <li>
              <a
                href="#download"
                className="hover:text-red-600 transition-colors duration-200"
              >
                ダウンロード
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
