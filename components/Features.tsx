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

const features = [
  {
    icon: FaVolumeUp,
    title: 'SOS音声信号の連続発信',
    description:
      'モールス信号音声をループ再生。音量は端末の最大音量を推奨。完全オフラインで動作（インターネット接続不要）',
  },
  {
    icon: FaBolt,
    title: 'フラッシュライトSOS',
    description:
      'モールス信号パターンでフラッシュライトを点滅。音声と同時使用可能。バッテリー消費警告ダイアログ付き',
  },
  {
    icon: FaMobileAlt,
    title: 'バックグラウンド動作',
    description:
      'フォアグラウンドサービスを使用し、アプリを閉じても動作継続。画面オフ時もWakelockにより動作継続',
  },
  {
    icon: FaBatteryFull,
    title: 'バッテリー管理機能',
    description:
      '画面輝度の最小化、音量の調整、バッテリー残量のリアルタイム表示、バッテリー節約のヒント表示',
  },
  {
    icon: FaGlobe,
    title: '完全な多言語対応',
    description:
      '日本語・英語に対応。デバイスの言語設定に自動対応。すべてのUI要素が翻訳済み',
  },
  {
    icon: FaWifi,
    title: '省電力設計',
    description:
      '最小限のリソース使用。バッテリー最適化の除外設定をサポート。長時間の使用に最適化',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              主な機能
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              災害時に必要な機能を厳選。シンプルで使いやすいインターフェース
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
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
