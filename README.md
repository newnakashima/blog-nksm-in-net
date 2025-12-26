# blog-nksm-in-net

Astro をベースとした個人ブログのリポジトリです。AWS Amplify でホストされています。

## 特徴

- ✅ Astro による高速な静的サイト生成
- ✅ AWS Amplify による継続的デプロイ
- ✅ Markdown / MDX 対応
- ✅ SEO 最適化（Sitemap, RSS フィード対応）

## 🚀 プロジェクト構造

- `src/pages/`: 各ルーティングに対応する Astro コンポーネント
- `src/content/`: コンテンツ（Markdown）管理
  - `src/content/diary/`: [newnakashima/diary](https://github.com/newnakashima/diary) を Git Submodule として読み込んでいます。
- `public/`: 静的アセット（画像など）
- `amplify.yml`: AWS Amplify のビルド設定

## 🧞 主要コマンド

| コマンド | 内容 |
| :--- | :--- |
| `npm install` | 依存関係のインストール |
| `npm run dev` | ローカル開発サーバーの起動 (`localhost:4321`) |
| `npm run build` | 本番用ビルドの生成 (`./dist/`) |
| `npm run preview` | ビルド成果物のローカル確認 |

## 📦 デプロイ

GitHub の main ブランチへ push することで、AWS Amplify によって自動的にデプロイされます。

## ライセンス

[MIT License](LICENSE) (if applicable)
