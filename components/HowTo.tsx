'use client'

import FadeInSection from './FadeInSection'
import { FaPlay, FaStop, FaMobileAlt, FaBatteryFull } from 'react-icons/fa'

const steps = [
  {
    icon: FaMobileAlt,
    title: '1. アプリを起動',
    description:
      'アプリを起動すると、シンプルな画面が表示されます。必要なパーミッションの許可を求められた場合は、許可してください。',
  },
  {
    icon: FaPlay,
    title: '2. SOSボタンを押す',
    description:
      '画面中央の赤い「SOSを開始」ボタンをタップするだけ。SOS信号の発信が始まります。',
  },
  {
    icon: FaBatteryFull,
    title: '3. バッテリーに注意',
    description:
      '画面輝度を下げ、音量を調整してバッテリーを節約できます。バッテリー残量は画面に表示されます。',
  },
  {
    icon: FaStop,
    title: '4. 停止方法',
    description:
      '救助されたら「SOSを停止」ボタンをタップ。または、通知エリアからも停止できます。',
  },
]

export default function HowTo() {
  return (
    <section id="howto" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              使い方
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              緊急時でも迷わず使える、シンプルな4ステップ
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                        <Icon className="text-4xl text-red-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                事前の準備が大切
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                災害はいつ起こるかわかりません。事前にアプリをダウンロードし、一度動作を確認しておくことをお勧めします。
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>音が正しく鳴るか確認</li>
                <li>フラッシュライトが点滅するか確認</li>
                <li>バッテリー最適化の除外設定を確認</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
