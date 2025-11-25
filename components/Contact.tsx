'use client'

import { FaExclamationTriangle } from 'react-icons/fa'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

export default function Contact() {
  const { locale } = useLocale()
  const t = translations[locale]
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.faq.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {t.faq.questions.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {item.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.answer}</p>
              {item.disclaimerTitle && item.disclaimerContent && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <FaExclamationTriangle className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.disclaimerTitle}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.disclaimerContent}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
