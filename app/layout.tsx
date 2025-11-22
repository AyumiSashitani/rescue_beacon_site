import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOS Beacon - 災害時SOSアプリ',
  description: '通信が使えない災害時でも、自分の存在を周囲に知らせるSOSビーコンアプリ。完全オフラインで動作し、バッテリー消費を抑えながら継続的にSOS信号を発信できます。',
  keywords: ['SOS', '災害', '緊急', 'ビーコン', 'Flutter', 'アプリ', 'オフライン', '救助'],
  authors: [{ name: 'Ayumi Sashitani' }],
  creator: 'Ayumi Sashitani',
  openGraph: {
    title: 'SOS Beacon - 災害時SOSアプリ',
    description: '通信が使えない災害時でも、自分の存在を周囲に知らせるSOSビーコンアプリ',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'SOS Beacon App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOS Beacon - 災害時SOSアプリ',
    description: '通信が使えない災害時でも、自分の存在を周囲に知らせるSOSビーコンアプリ',
    creator: '@sashiiii_dev',
    images: ['/og-image.png'],
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
    <html lang="ja">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
