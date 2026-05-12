# LLM Learning Map

LLM（Large Language Model）をゼロから学び、最終的にコンピュータサイエンス系の小さな卒業論文・レポートテーマを作るための学習トラッカーです。

1日10分程度で進められるように、学習内容、クイズ、メモ、復習、ミニ実験、論文テーマ作成を1つの静的Webサイトにまとめています。

## 目的

このアプリの目的は次の3つです。

- LLMの基礎を毎日少しずつ学ぶ
- モデル・アルゴリズム寄りの論文テーマを見つける
- 学習メモから簡単な論文提案書を作る

対象は、LLMをこれから学び始めるコンピュータサイエンス学生です。

## 主な機能

### 42日間の学習ロードマップ

LLMの基礎から論文提案まで、42日分の学習内容があります。

学習範囲:

- LLMとは何か
- トークンと埋め込み
- TransformerとAttention
- プロンプト設計
- Fine-tuning / Instruction tuning / RLHF
- RAG
- 評価指標
- 研究質問の作り方
- 論文構成と提案書作成

### 毎日の学習ページ

各レッスンには以下があります。

- Study material
- Key terms
- CS angle
- 2分 / 5分 / 3分の学習タスク
- Mini CS lab
- Mini quiz
- Review queue
- Daily checklist
- Daily note

### Daily checklist

レッスンを完了するには、次の3つを満たす必要があります。

1. Study materialを読んだ
2. Mini quizに正解した
3. Daily noteを2文以上書いた

これにより、ただボタンを押すだけではなく、最低限の学習記録が残るようになっています。

### Mini CS lab

モデル・アルゴリズム寄りの小さな実験タスクです。

例:

- 入力と出力の流れを追跡する
- Attentionの関係を図で考える
- Zero-shotとFew-shotを比較する
- RAGの検索チャンクを考える
- 評価指標を決める

### Review queue

完了済みレッスンのクイズを復習できます。

目的:

- 忘却を防ぐ
- 重要概念を繰り返し確認する
- 論文を書くための基礎語彙を定着させる

### Thesis テーマ

初心者でも扱いやすいCS寄りの論文テーマを用意しています。

テーマ例:

- RAGのchunk size比較
- BM25とembedding retrievalの比較
- Zero-shotとFew-shot promptingの比較
- LoRA rankと性能の関係
- BERT分類器とLLM prompt分類器の比較
- LLMによるコード説明の誤り分析
- 日本語・英語プロンプトのtokenizer比較

### Thesis Builder

論文提案書を作るためのフォームです。

入力項目:

- Working title
- Research question
- Model / algorithm
- Dataset / material
- Evaluation metric
- Expected contribution
- Limitations / risks

入力内容はブラウザに自動保存されます。

Markdown形式で提案書をダウンロードできます。

```text
llm-thesis-proposal.md
```

### Readiness score

論文準備度を表示します。

スコアは以下から計算されます。

- 学習進捗
- Thesis Builderの入力状況

カテゴリ:

- LLM basics
- Transformers
- Prompting & alignment
- RAG & systems
- Research method
- Writing
- Proposal fields

### Notes export

Daily noteはブラウザに自動保存されます。

メモはテキストファイルとしてダウンロードできます。

```text
llm-thesis-notes.txt
```

## 使い方

### 1. ローカルサーバーを起動

プロジェクトフォルダで次を実行します。

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

### 2. ブラウザで開く

```text
http://127.0.0.1:5173/
```

## ファイル構成

```text
.
├── index.html
├── styles.css
├── data.js
├── app.js
├── AGENTS.md
├── README.md
└── assets/
    ├── llm-roadmap-ai.png
    ├── llm-learning-ai.png
    └── llm-learning-map.svg
```

### `index.html`

画面構造を定義しています。

主なタブ:

- Today
- Roadmap
- Thesis テーマ
- Library
- Builder
- Notes

### `styles.css`

UIデザインとレスポンシブ対応を管理しています。

### `data.js`

学習データを管理しています。

含まれるデータ:

- lessons
- studyMaterials
- quizzes
- themes
- library

### `app.js`

アプリの動作を管理しています。

主な処理:

- 進捗保存
- 今日のレッスン表示
- クイズ判定
- チェックリスト判定
- 復習キュー
- Thesis Builder
- Readiness score
- メモ・提案書のエクスポート

### `AGENTS.md`

将来このプロジェクトを編集する開発者・AIエージェント向けの詳細な引き継ぎメモです。

## データ保存について

このアプリはバックエンドを使いません。

進捗やメモはブラウザの`localStorage`に保存されます。

注意:

- 同じブラウザでは進捗が残ります
- ブラウザデータを削除すると進捗も消えます
- 別のPCやブラウザには自動同期されません

## 技術構成

使用技術:

- HTML
- CSS
- JavaScript
- localStorage

ビルドツールやフレームワークは使っていません。

理由:

- ローカルで簡単に動く
- 無料で使える
- セットアップが少ない
- 学習用プロジェクトとして理解しやすい

## 開発・確認コマンド

JavaScript構文チェック:

```powershell
node --check data.js
node --check app.js
```

ローカル起動:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Git状態確認:

```powershell
git status --short --branch
```

## 今後追加すると良い機能

優先度が高いもの:

- 進捗データのJSONエクスポート・インポート
- テーマのお気に入り保存
- 用語集タブ
- Token counter
- RAG実験ワークシート
- カレンダー形式の学習記録
- 印刷しやすい提案書テンプレート

特に、`localStorage`だけに依存しているため、進捗データのJSONエクスポート・インポートは早めに追加すると安全です。

## リポジトリ

GitHub:

```text
https://github.com/lianweiyue3-netizen/llm-learning-map
```

## 現在の状態

```text
ローカル静的Webサイトとして動作済み。
学習トラッカー、クイズ、ミニ実験、復習、メモ、論文ビルダーを実装済み。
GitHubにpush済み。
```

