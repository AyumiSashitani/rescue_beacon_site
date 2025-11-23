'use client'

import FadeInSection from './FadeInSection'
import {
  FaVolumeUp,
  FaBolt,
  FaMobileAlt,
  FaBatteryFull,
  FaGlobe,
  FaWifi,
} from 'react-icons/fa'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

const featureIcons = [FaVolumeUp, FaBolt, FaMobileAlt, FaBatteryFull, FaGlobe, FaWifi]

export default function Features() {
  const { locale } = useLocale()
  const t = translations[locale]
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.features.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.features.description}
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.list.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                      <Icon className="text-3xl text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
