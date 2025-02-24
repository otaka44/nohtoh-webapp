# Noh-Toh Webapp

## Overview

本アプリは **React + TypeScript + Vite** を使用して開発されており、CSS ライブラリとして **shadcn/ui** を採用しています。

## Features

- **React + TypeScript** による型安全な開発
- **Vite** による高速ビルド
- **shadcn/ui** を活用したモダンな UI デザイン

## Setup

### Prerequisites

- **Node.js v19.1.0** 以上
- **tailwindcss v4.0.6** 以上

### Installation

```sh
# リポジトリをクローン
git clone https://github.com/your-repo/project-name.git
cd project-name

# 依存関係をインストール
yarn install  # または npm install
```

### Development

```sh
# 開発サーバーを起動
yarn dev  # または npm run dev
```

### Build

```sh
# 本番環境用のビルド
yarn build  # または npm run build
```

### Lint & Format

```sh
# コードのフォーマット適用
yarn format  # または npm run format

# Lintチェック
yarn lint  # または npm run lint
```

## Project Structure

```
nohtoh-webapp/
├── src/
│   ├── assets/  # コンテンツ（背景、ロゴ画像、フォント）
│   ├── components/  # UIコンポーネント
│   ├── pages/       # ページコンポーネント
│   ├── lib/       # カスタムライブラリ
│   ├── main.tsx     # エントリーポイント
│   └── App.tsx      # ルートコンポーネント
├── public/          # 静的ファイル
├── package.json     # 依存関係とスクリプト
└── README.md        # 本ファイル
```

## Dependencies

主要な依存パッケージ:

- **React**
- **TypeScript**
- **Vite**
- **@radix-ui**
- **tailwind**

## License

## Author

[otaka44](https://github.com/otaka44)
