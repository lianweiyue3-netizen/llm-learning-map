# CS Thesis Tracker

LLM、Data Ingestion、Data Lake、Blockchain Consensus を、卒業論文・小さな研究レポートのテーマ候補として学ぶための静的 Web アプリです。

アプリを開くと最初にカテゴリ選択ページが表示されます。学びたいカテゴリを選ぶと、Today、Roadmap、Study material、Mini quiz、Mini CS lab、Notes、進捗がそのカテゴリ用に切り替わります。難易度と範囲に合わせて、LLM は 42 日、Data Ingestion は 35 日、Data Lake は 28 日、Blockchain Consensus は 35 日にしています。

## 目的

- LLM の基礎をゼロから少しずつ学ぶ
- Data Ingestion、Data Lake、Blockchain Consensus も thesis テーマ候補として比較する
- モデル・アルゴリズム・システム寄りの簡単な CS テーマを見つける
- 毎日のメモから論文提案書の材料を作る

## 主な機能

- **Category selector**: LLM、Data Ingestion、Data Lake、Blockchain Consensus から学習カテゴリを選択
- **Today**: 選択中カテゴリの今日のレッスン、Study material、Key terms、CS angle、Mini quiz、Mini CS lab
- **Daily code task**: Data Ingestion では毎日 5 分で読める小さな Python コード練習を表示
- **Roadmap**: 選択中カテゴリの学習ロードマップ
- **Categories**: カテゴリ選択カードとカテゴリ別進捗
- **Thesis テーマ**: 初心者向けの CS 論文テーマ案
- **Library**: 選択中カテゴリに合わせた論文、コース、公式資料
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

### Data Ingestion

扱う内容:

- CSV / JSON ingestion
- schema validation
- idempotency
- incremental load
- CDC
- streaming offsets
- data profiling and discovery

テーマ例:

- CSV ingestion の schema drift detection
- full reload と incremental ingestion の correctness / runtime 比較
- ingestion-time profiling による related dataset discovery
- sampling-based re-profiling の cost / accuracy 比較

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

各カテゴリのレッスンは、次の3つを満たすと完了できます。

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
    ├── cs-thesis-roadmap-ai-v3.png
    ├── cs-thesis-roadmap-ai-v2.png
    ├── cs-thesis-roadmap-ai.png
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
