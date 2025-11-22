'use client'

import FadeInSection from './FadeInSection'
import { FaGithub, FaExclamationTriangle } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              よくある質問
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              SOS Beaconについてのよくある質問
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto space-y-6">
          <FadeInSection delay={0.1}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                インターネット接続は必要ですか？
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                いいえ、完全オフラインで動作します。通信インフラが使えない災害時でも問題なく使用できます。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                バッテリーはどのくらい持ちますか？
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                端末やバッテリー残量によって異なりますが、省電力設計により長時間の動作が可能です。画面輝度を最小にし、音量を調整することでさらにバッテリーを節約できます。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                アプリを閉じても動作し続けますか？
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                はい、バックグラウンドでも動作し続けます。ホームボタンを押してアプリを閉じても、画面をオフにしても、SOS信号の発信は継続されます。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                本当に救助されますか？
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                このアプリは緊急時の補助ツールです。実際の緊急時には、可能な限り公式の救助要請手段（119番、110番など）を使用してください。
                このアプリは、通信手段が全く使えない状況で、音声とフラッシュライトにより自分の位置を周囲に知らせることを目的としています。
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      免責事項
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      このアプリは救助を保証するものではありません。使用に際しては自己責任でお願いします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                バグを見つけた場合はどうすればいいですか？
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                バグレポートや改善提案は、GitHubのIssuesページでお知らせください。
              </p>
              <a
                href="https://github.com/AyumiSashitani/rescue_beacon/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                GitHub Issues
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
