'use client'

import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { LocaleProvider, useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/locales'

function PrivacyContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8"
        >
          <FaArrowLeft />
          {locale === 'ja' ? 'トップページに戻る' : 'Back to Home'}
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          {t.footer.privacy}
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              SOS Beacon（以下、「本アプリ」といいます）は、ユーザーのプライバシーを尊重し、
              個人情報の保護に努めています。本プライバシーポリシーは、
              本アプリにおける個人情報の取り扱いについて説明するものです。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              1. 収集する情報
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                1.1 アプリ内での情報収集
              </h3>
              <p>
                本アプリは、完全オフラインで動作し、以下の情報を収集・送信することは一切ありません：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>位置情報</li>
                <li>連絡先情報</li>
                <li>個人を特定できる情報</li>
                <li>端末の識別情報</li>
                <li>使用状況データ</li>
              </ul>
              <p className="mt-3">
                本アプリは、音声信号の再生とフラッシュライトの制御のみを行い、
                いかなるデータもサーバーに送信しません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              2. ウェブサイトでの情報収集
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                2.1 Google Analytics
              </h3>
              <p>
                本ウェブサイトでは、サービス改善のためにGoogle Analyticsを使用しています。
                Google Analyticsは、Cookieを使用して以下の情報を収集します：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ページビュー数</li>
                <li>訪問者数</li>
                <li>サイト滞在時間</li>
                <li>参照元情報</li>
                <li>デバイス情報（種類、OS、ブラウザ等）</li>
              </ul>
              <p className="mt-3">
                これらの情報は匿名で収集され、個人を特定することはできません。
                Google Analyticsの詳細については、
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  Googleのプライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              3. 必要な権限
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>本アプリは、以下の権限を使用します：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>フラッシュライト／カメラ</strong>: フラッシュライトによるSOS信号の発信
                </li>
                <li>
                  <strong>音声再生</strong>: モールス信号音声の再生
                </li>
                <li>
                  <strong>画面のスリープ防止</strong>: バックグラウンドでの継続動作
                </li>
                <li>
                  <strong>バッテリー最適化の除外</strong>: 長時間の安定動作の確保
                </li>
              </ul>
              <p className="mt-3">
                これらの権限は、本アプリの機能提供のためにのみ使用され、
                データの収集や送信には一切使用されません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              4. 第三者への情報提供
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              本アプリは、ユーザーの個人情報を第三者に提供、開示することは一切ありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              5. セキュリティ
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              本アプリは、オフラインで動作するため、ネットワーク経由での情報漏洩のリスクはありません。
              全ての処理は端末内で完結します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              6. 子供のプライバシー
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              本アプリは、13歳未満の子供を含む全ての年齢層を対象としていますが、
              個人情報を収集することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              7. プライバシーポリシーの変更
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              本プライバシーポリシーは、必要に応じて変更されることがあります。
              変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              8. お問い合わせ
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              本プライバシーポリシーに関するご質問やご意見は、
              <a
                href="mailto:sashiiii.dev@gmail.com"
                className="text-red-600 hover:text-red-700 underline"
              >
                sashiiii.dev@gmail.com
              </a>
              までお問い合わせください。
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              制定日：2025年11月23日
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default function PrivacyPage() {
  return (
    <LocaleProvider>
      <PrivacyContent />
    </LocaleProvider>
  )
}
