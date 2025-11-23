import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowTo from '@/components/HowTo'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              このアプリについて
            </h2>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Rescue Beaconは、災害時に通信インフラが使用できない状況でも、音声信号によって自分の存在を周囲に知らせるための緊急SOSアプリケーションです。
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                完全オフラインで動作し、バッテリー消費を抑えながら継続的にSOS信号を発信できます。
                モールス信号音声とフラッシュライトを使用して、救助隊や周囲の人々に自分の位置を知らせることができます。
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  緊急時に備えて
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  災害はいつ起こるかわかりません。事前にアプリをダウンロードし、動作を確認しておくことをお勧めします。
                  また、実際の緊急時には、可能な限り公式の救助要請手段を使用してください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <HowTo />
      <Download />
      <Contact />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SOS Beacon. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                利用規約
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center mt-4">
            緊急時に備えて、事前にアプリの動作を確認しておきましょう
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}
