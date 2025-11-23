'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import HowTo from '@/components/HowTo'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'
import Link from 'next/link'
import { LocaleProvider, useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

function HomeContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <main>
      <Header />
      <Hero />

      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {t.about.title}
            </h2>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t.about.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Screenshots />
      <Features />
      <HowTo />
      <Download />
      <Contact />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">{t.footer.copyright}</p>

            <div className="flex gap-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.terms}
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}

export default function Home() {
  return (
    <LocaleProvider>
      <HomeContent />
    </LocaleProvider>
  )
}
