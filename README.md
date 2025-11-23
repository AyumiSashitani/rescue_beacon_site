# SOS Beacon Website

[SOS Beacon](https://github.com/AyumiSashitani/rescue_beacon)アプリの公式紹介サイト

## 概要

このサイトは、災害時SOSアプリ「SOS Beacon」を一般ユーザー向けに紹介するWebサイトです。アプリの機能や使い方をわかりやすく説明しています。Next.js 15 + TypeScript + Tailwind CSSで構築されています。

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.17
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## セクション構成

- **Hero**: キャッチコピーと行動喚起（ダウンロード、使い方を見る）
- **About**: アプリの概要説明
- **Features**: 主な機能の紹介（6つの主要機能）
- **How To**: 使い方の4ステップ説明
- **Download**: Android/iOS版のダウンロード情報
- **FAQ**: よくある質問と回答

## ローカル開発

### 必要な環境

- Node.js 18以上
- npm、yarn、pnpm のいずれか

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/AyumiSashitani/rescue_beacon_site.git
cd rescue_beacon_site

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが起動したら <http://localhost:3000> にアクセス

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルドの確認
npm run start
```

## プロジェクト構造

```
rescue_beacon_site/
├── app/
│   ├── layout.tsx          # ルートレイアウト（メタデータ、Analytics）
│   ├── page.tsx            # トップページ
│   ├── globals.css         # グローバルスタイル
│   ├── icon.svg            # Favicon
│   ├── sitemap.ts          # サイトマップ生成
│   └── robots.ts           # robots.txt生成
├── components/
│   ├── Header.tsx          # ヘッダー・ナビゲーション
│   ├── Hero.tsx            # ヒーローセクション
│   ├── Features.tsx        # 機能紹介セクション
│   ├── HowTo.tsx           # 使い方セクション
│   ├── Download.tsx        # ダウンロードセクション
│   ├── Contact.tsx         # FAQセクション
│   ├── ScrollToTop.tsx     # トップへ戻るボタン
│   └── FadeInSection.tsx   # アニメーションラッパー
├── public/                 # 静的ファイル
└── README.md              # このファイル
```

## デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリとVercelを連携
2. プロジェクトをインポート
3. 自動デプロイが実行される

mainブランチへのプッシュで自動的に本番環境がデプロイされます。

### Analytics有効化

デプロイ後、Vercelダッシュボードで以下を有効化：

- Analytics タブ → Enable
- Speed Insights タブ → Enable

## カスタマイズ

### 機能情報の更新

`components/Features.tsx` の `features` 配列を編集

### 使い方の更新

`components/HowTo.tsx` の `steps` 配列を編集

### FAQの更新

`components/Contact.tsx` のFAQ内容を編集

### サイトURLの変更

`app/sitemap.ts` と `app/robots.ts` の `baseUrl` を変更

## ライセンス

このプロジェクトは、[SOS Beacon](https://github.com/AyumiSashitani/rescue_beacon)アプリの公式紹介サイトです。

## 連絡先

- **GitHub**: <https://github.com/AyumiSashitani>

## 関連リンク

- [SOS Beacon アプリリポジトリ](https://github.com/AyumiSashitani/rescue_beacon)
