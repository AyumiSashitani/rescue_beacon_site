'use client'

import FadeInSection from './FadeInSection'
import { FaAndroid, FaApple } from 'react-icons/fa'

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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeInSection delay={0.2}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaAndroid className="text-7xl text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Android版
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  対応OS: Android 6.0以上
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    近日リリース予定
                  </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Google Play Storeで配信予定
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaApple className="text-7xl text-gray-700 dark:text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  iOS版
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  対応OS: iOS 12.0以上
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    近日リリース予定
                  </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  App Storeで配信予定
                </p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded">
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
