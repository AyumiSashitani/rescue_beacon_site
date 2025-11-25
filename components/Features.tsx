'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'
import {
    FaBatteryFull,
    FaBolt,
    FaGlobe,
    FaMobileAlt,
    FaVolumeUp,
    FaWifi,
} from 'react-icons/fa'

const featureIcons = [FaVolumeUp, FaBolt, FaMobileAlt, FaBatteryFull, FaGlobe, FaWifi]

export default function Features() {
  const { locale } = useLocale()
  const t = translations[locale]
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.features.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.list.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary-100 dark:hover:border-primary-900">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-xl">
                    <Icon className="text-3xl text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )

          })}
        </div>
      </div>
    </section>
  )
}
