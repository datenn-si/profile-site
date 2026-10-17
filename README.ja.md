# profile-site

[![CI/CD](https://github.com/datenn-si/profile-site/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/datenn-si/profile-site/actions/workflows/ci-cd.yml)

[ [English](README.md) | 日本語 ]

「だてんし」（@datenn-si）のプロフィールサイトです。

## 利用しているフレームワーク/技術 (抜粋)

- Astro.js
- Tailwind CSS
- Iconify
- Cloudflare Adapter
- Cloudflare Workers
- Oxfmt
- Oxlint
- GitHub Actions

## ファイル構成

```text
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # CI・ビルド・デプロイ
├── public/                      # favicon、OG 画像、manifest などの公開ファイル
├── src/
│   ├── assets/                  # 画像やスクリプトなどのアセット
│   ├── components/              # 再利用可能な UI コンポーネント
│   │   ├── ContentBox.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   ├── Layout.astro         # 共通レイアウト
│   │   └── LegalPage.astro      # 法的文章 Markdown 用レイアウト
│   ├── pages/                   # ページ定義
│   ├── styles/                  # グローバルスタイル
│   ├── constants.ts             # サイト設定・共通データ
│   └── env.d.ts                 # Cloudflare runtime の型定義
├── .env.example                 # ローカル環境変数の例
├── astro.config.mjs             # Astro・Cloudflare・Tailwind の設定
├── package.json                 # 依存関係と npm scripts
├── pnpm-lock.yaml               # 依存関係のロックファイル
├── pnpm-workspace.yaml          # pnpm workspace 設定
├── tsconfig.json                # TypeScript 設定
├── worker-configuration.d.ts    # Cloudflare Worker の型定義
└── wrangler.jsonc               # Cloudflare Workers の設定
```

## 開発ルール

- コミット前に lint と format 、ビルド を行う
  - 今のところは Husky + lint-staged を導入していません
- CI によっても同様にチェックを行う

## ライセンス

本リポジトリ内のソースコードは、GNU Affero General Public License v3.0 only（AGPL-3.0-only）の下で提供されています。詳細は、リポジトリルートの `LICENSE` ファイルを参照してください。

ただし、以下のコンテンツは AGPL-3.0-only の適用対象に含まれず、別途権利が留保されています。

- 「だてんし」のアイコン、背景画像、OG 画像、その他の画像・非コードの視覚アセット
- `resource/` ディレクトリ内のすべてのファイル
- 「だてんし」個人に関する紹介文、プロフィール情報、SNS リンク、その他の個人的なコンテンツ

これらのコンテンツについては、AGPL-3.0-only に基づく利用許諾は付与されません。利用・複製・改変・再配布などを行う場合は、各権利者から別途許諾を得る必要があります。

本リポジトリをフォークして利用する場合は、上記の対象外コンテンツをそのまま流用せず、ご自身のアイコン、背景画像、プロフィール情報、SNS リンクなどに置き換えてください。

なお、本節は対象外コンテンツに関する権利を明確にするものであり、AGPL-3.0-only の適用対象となるソースコードについて、同ライセンスが定める権利や条件を変更するものではありません。
