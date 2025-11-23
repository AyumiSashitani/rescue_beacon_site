'use client'

import FadeInSection from './FadeInSection'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

export default function Download() {
  return (
    <section id="download" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              ダウンロード
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              今すぐSOS Beaconをダウンロードして、緊急時に備えましょう
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <FadeInSection delay={0.2}>
              <button
                disabled
                className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                <FaGooglePlay className="text-3xl" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">近日リリース予定</span>
                </div>
              </button>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <button
                disabled
                className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                <FaApple className="text-4xl" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">近日リリース予定</span>
                </div>
              </button>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-semibold text-gray-900 dark:text-white">対応OS:</span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">Android 6.0以上 / iOS 12.0以上</span>
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                免責事項
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                このアプリは緊急時の補助ツールとして提供されており、救助を保証するものではありません。
                実際の緊急時には、可能な限り公式の救助要請手段を使用してください。
                使用に際しては自己責任でお願いします。
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
