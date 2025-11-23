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
import Image from 'next/image'

function HomeContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <main>
      <Header />
      <Hero />

      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              {t.about.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.about.description}
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/disaster-flood.jpg"
                    alt={
                      locale === 'ja'
                        ? '災害時の住家被害'
                        : 'Disaster housing damage'
                    }
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
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
          <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-800">
            {locale === 'ja'
              ? '災害写真出典：（一財）消防防災科学センター『災害写真データベース』'
              : 'Disaster images source: Fire and Disaster Management Center Disaster Photo Database'}
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
