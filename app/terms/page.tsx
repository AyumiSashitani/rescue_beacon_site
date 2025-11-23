import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
  title: '利用規約 - SOS Beacon',
  description: 'SOS Beacon アプリの利用規約',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8"
        >
          <FaArrowLeft />
          トップページに戻る
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          利用規約
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              この利用規約（以下、「本規約」といいます）は、SOS Beacon（以下、「本アプリ」といいます）の利用条件を定めるものです。
              本アプリをご利用される方（以下、「ユーザー」といいます）は、本規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第1条（適用）
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              本規約は、本アプリの利用に関する全ての関係に適用されます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第2条（本アプリの目的）
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                本アプリは、災害時等の緊急事態において通信インフラが使用できない状況下で、
                音声信号やフラッシュライトにより自身の存在を周囲に知らせることを補助するツールです。
              </p>
              <p>
                本アプリは救助を保証するものではなく、あくまで補助的なツールとして提供されています。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第3条（利用環境）
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                ユーザーは、本アプリを利用するために必要な機器、ソフトウェア、通信手段等を、
                自己の責任と費用において適切に準備、操作するものとします。
              </p>
              <p>
                本アプリは完全オフラインで動作しますが、初回ダウンロード時にはインターネット接続が必要です。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第4条（禁止事項）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>緊急性のない場面での使用（いたずら等）</li>
              <li>公共の場所での無断使用による迷惑行為</li>
              <li>本アプリを改変、リバースエンジニアリングする行為</li>
              <li>本アプリを第三者に再配布する行為</li>
              <li>その他、法令に違反する行為または違反するおそれのある行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第5条（免責事項）
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                開発者は、本アプリの利用により発生したいかなる損害についても、
                一切の責任を負わないものとします。
              </p>
              <p>
                本アプリは「現状有姿」で提供されるものであり、
                動作の保証、特定目的への適合性、エラーやバグがないことなどについて、
                いかなる保証も行いません。
              </p>
              <p>
                実際の緊急時には、可能な限り公式の救助要請手段（119番、110番等）を使用してください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第6条（利用規約の変更）
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              開発者は、必要に応じて本規約を変更することができます。
              本規約を変更した場合、変更後の利用規約は本アプリ内またはウェブサイトに掲示した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              第7条（準拠法および管轄裁判所）
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>
              <p>
                本アプリに関して紛争が生じた場合には、開発者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。
              </p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              制定日：2025年1月23日
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
