# CS Thesis Tracker

LLM、Data Lake、Blockchain Consensus を、卒業論文・小さな研究レポートのテーマ候補として学ぶための静的 Web アプリです。

メインの学習トラックは LLM です。1日10分程度で進められる 42 日分のロードマップ、ミニクイズ、メモ、復習、ミニ実験、Thesis Builder を含みます。追加カテゴリとして Data Lake と Blockchain Consensus の基礎、学習順、初心者向けテーマ案、参考資料も確認できます。

## 目的

- LLM の基礎をゼロから少しずつ学ぶ
- Data Lake と Blockchain Consensus も thesis テーマ候補として比較する
- モデル・アルゴリズム・システム寄りの簡単な CS テーマを見つける
- 毎日のメモから論文提案書の材料を作る

## 主な機能

- **Today**: 今日の LLM レッスン、Study material、Key terms、CS angle、Mini quiz、Mini CS lab
- **Roadmap**: 42 日分の LLM 学習ロードマップ
- **Categories**: LLM、Data Lake、Blockchain Consensus の3カテゴリ
- **Thesis テーマ**: 初心者向けの CS 論文テーマ案
- **Library**: 参考になる論文、卒論、コース、公式資料
- **Builder**: 研究質問、手法、データ、評価指標、制限を書く提案書フォーム
- **Notes**: 毎日の学習メモの保存とエクスポート

## カテゴリ

### LLM

扱う内容:

- tokenization
- embeddings
- transformer
- prompting
- RAG
- evaluation

テーマ例:

- RAG の chunk size 比較
- BM25 と embedding retrieval の比較
- zero-shot と few-shot prompting の比較
- tokenizer による日本語・英語プロンプトの違い

### Data Lake

扱う内容:

- object storage
- Parquet
- partitioning
- schema evolution
- metadata catalog
- lakehouse table format

テーマ例:

- Parquet データの partition strategy 比較
- Delta Lake と Apache Iceberg の機能比較
- Data Lake ingestion pipeline のデータ品質チェック

### Blockchain Consensus

扱う内容:

- blocks
- forks
- finality
- Proof of Work
- Proof of Stake
- Byzantine Fault Tolerance
- safety and liveness

テーマ例:

- PoW difficulty と block confirmation time の簡易シミュレーション
- PBFT 風 voting の message count 分析
- PoW と BFT 系 consensus の finality 比較

## 使い方

プロジェクトフォルダでローカルサーバーを起動します。

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

ブラウザで開きます。

```text
http://127.0.0.1:5173/
```

## 完了ルール

LLM の各レッスンは、次の3つを満たすと完了できます。

1. Study material を読んだ
2. Mini quiz に正解した
3. Daily note を2文以上書いた

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
    ├── llm-roadmap-ai-labeled.png
    ├── llm-roadmap-ai.png
    ├── llm-learning-ai.png
    └── llm-learning-map.svg
```

## 技術構成

- HTML
- CSS
- JavaScript
- localStorage

バックエンド、ログイン、データベース、ビルドツールは使っていません。進捗とメモは同じブラウザの `localStorage` に保存されます。

## 開発・確認コマンド

JavaScript の構文チェック:

```powershell
node --check data.js
node --check app.js
```

Git の状態確認:

```powershell
git status --short --branch
```

## 注意

- ブラウザデータを削除すると進捗も消えます。
- 別の PC や別ブラウザには自動同期されません。
- 長く使う場合は Notes や proposal を定期的にエクスポートしてください。

## GitHub

```text
https://github.com/lianweiyue3-netizen/llm-learning-map
```
