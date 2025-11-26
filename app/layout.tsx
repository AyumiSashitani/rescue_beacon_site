import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL('https://sos-beacon.vercel.app'),
  title: 'SOS ビーコン - 災害時SOSアプリ',
  description: '通信が使えない災害時でも、自分の存在を周囲に知らせるSOSビーコンアプリ。完全オフラインで動作し、バッテリー消費を抑えながら継続的にSOS信号を発信できます。',
  keywords: ['SOS', '災害', '緊急', 'ビーコン', 'Flutter', 'アプリ', 'オフライン', '救助'],
  authors: [{ name: 'Ayumi Sashitani' }],
  creator: 'Ayumi Sashitani',
  openGraph: {
    title: 'SOS ビーコン - 災害時SOSアプリ',
    description: '通信が使えない災害時でも、自分の存在を周囲に知らせるSOSビーコンアプリ',
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'SOS ビーコン - ワンタップでSOSを送信',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sashiiii_dev',
    creator: '@sashiiii_dev',
    title: 'SOS ビーコン - 災害時SOSアプリ',
    description: '通信が使えない災害時でも、自分の存在を周囲に知らせるSOSビーコンアプリ',
    images: {
      url: 'https://sos-beacon.vercel.app/ogp.jpg',
      alt: 'SOS ビーコン - ワンタップでSOSを送信',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YC3WJMEYV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1YC3WJMEYV');
          `}
        </Script>
      </body>
    </html>
  )
}
