'use client'

import Image from 'next/image'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

export default function Screenshots() {
  const { locale } = useLocale()
  const t = translations[locale]

  const screenshots = [
    {
      src: locale === 'ja' ? '/sos_beacon_ja_1.jpg' : '/sos_beacon_en_1.jpg',
      alt: locale === 'ja' ? 'SOS Beacon メイン画面' : 'SOS Beacon Main Screen',
    },
    {
      src: locale === 'ja' ? '/sos_beacon_ja_2.jpg' : '/sos_beacon_en_2.jpg',
      alt: locale === 'ja' ? 'SOS Beacon 設定画面' : 'SOS Beacon Settings Screen',
    },
  ]

  return (
    <section id="screenshots" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
