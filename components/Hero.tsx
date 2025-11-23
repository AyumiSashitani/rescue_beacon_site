'use client'

import { motion } from 'framer-motion'
import { FaBookOpen } from 'react-icons/fa'
import Image from 'next/image'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

export default function Hero() {
  const { locale } = useLocale()
  const t = translations[locale]
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-full overflow-hidden w-[200px] h-[200px]">
                <Image
                  src="/app-icon.png"
                  alt="SOS Beacon App Icon"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full scale-[1.15]"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {t.hero.tagline1}
            <br className="hidden md:block" />
            {t.hero.tagline2}
          </h1>

          <p className="text-2xl md:text-3xl text-red-600 font-semibold mb-4">
            {t.hero.appName}
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.hero.downloadNow}
            </a>
            <a
              href="#howto"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <FaBookOpen className="text-xl" />
              {t.hero.howToUse}
            </a>
          </div>

          <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            {t.hero.features}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
