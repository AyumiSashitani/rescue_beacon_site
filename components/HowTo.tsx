'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'
import { FaBatteryFull, FaMobileAlt, FaPlay, FaStop } from 'react-icons/fa'

const stepIcons = [FaMobileAlt, FaPlay, FaBatteryFull, FaStop]

export default function HowTo() {
  const { locale } = useLocale()
  const t = translations[locale]
  return (
    <section id="howto" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.howto.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.howto.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.howto.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary-100 dark:hover:border-primary-900">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-xl">
                      <Icon className="text-4xl text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              {t.howto.tip.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t.howto.tip.description}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {t.howto.tip.checklist.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
