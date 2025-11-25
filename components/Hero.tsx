'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBookOpen } from 'react-icons/fa'

export default function Hero() {
  const { locale } = useLocale()
  const t = translations[locale]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-20" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary-200/30 dark:bg-primary-900/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-100/40 dark:bg-orange-900/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-10 text-gray-900 dark:text-white leading-tight tracking-tight font-heading">
            <span className="block mb-2 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              {t.hero.tagline1}
            </span>
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-600 dark:from-primary-400 dark:to-orange-400">
              {t.hero.tagline2}
            </span>
          </h1>

          <div className="flex justify-center mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative w-[180px] h-[180px] shadow-2xl rounded-full overflow-hidden">
                <Image
                  src="/app-icon.png"
                  alt="SOS Beacon App Icon"
                  width={180}
                  height={180}
                  className="object-contain w-full h-full scale-[1.15]"
                  priority
                />
              </div>
            </motion.div>
          </div>



          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-6 tracking-wide">
            {t.hero.appName}
          </p>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="#download"
              className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-1 flex items-center gap-2"
            >
              {t.hero.downloadNow}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#howto"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              <FaBookOpen className="text-lg" />
              {t.hero.howToUse}
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              {t.hero.features}
            </p>
            {/* Add feature icons or text here if needed, or keep as simple text */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
